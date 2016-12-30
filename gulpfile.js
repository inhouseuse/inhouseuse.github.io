const gulp = require('gulp');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');

// js関連
// const babel = require('gulp-babel');
const babelify = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');


// css関連
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const csscomb = require('gulp-csscomb');

// browser-sync
const browserSync = require('browser-sync').create();

const pugPath = 'assets/views';
const babelPath = 'assets/javascript';
const sassPath = 'assets/stylesheets';


gulp.task('pug', () => {
  gulp.src([`lib/${pugPath}/**/*.pug`, `!lib/${pugPath}/**/_*.pug`])
    .pipe(plumber())
    .pipe(pug({
      pretty: true,
    }))
    .pipe(gulp.dest('./'));
  browserSync.reload();
});

// gulp.task('babel', () => {
//   gulp.src(`lib/${babelPath}/**/*.js`)
//     .pipe(babel({
//       presets: ['es2015'],
//     }))
//     .pipe(gulp.dest(`app/${babelPath}`));
//   browserSync.reload();
// });

gulp.task('babelify', () => {
  browserify({
    entries: `lib/${babelPath}/application.js`,
    extensions: ['.js'],
  })
  .transform(babelify, { presets: ['es2015'] })
  .bundle()
  .on('error', (err) => {
    console.log(`Erro: ${err.message}`);
  })
  .pipe(source('application.js'))
  .pipe(gulp.dest(`app/${babelPath}`));
  browserSync.reload();
});

gulp.task('sass', () => {
  gulp.src(`lib/${sassPath}/**/*.scss`)
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(csscomb())
    .pipe(gulp.dest(`app/${sassPath}`));
  browserSync.reload();
});

gulp.task('serve', ['base'], () => {
  // ブラウザを起動
  browserSync.init({
    server: {
      baseDir: './',
    },
  });

  gulp.watch(`lib/${pugPath}/**/*.pug`, ['pug']);
  gulp.watch(`lib/${babelPath}/**/*.js`, ['babelify']);
  gulp.watch(`lib/${sassPath}/**/*.scss`, ['sass']);


  gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('base', ['pug', 'sass', 'babelify']);

gulp.task('default', ['serve']);
