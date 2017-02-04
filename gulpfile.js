// 共通定義
const gulp = require('gulp');
const plumber = require('gulp-plumber');

// pug関連
const pug = require('gulp-pug');

// js関連
const babelify = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');

// css関連
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');

// browser-sync
const browserSync = require('browser-sync').create();

// パスの整理
const pugPath = 'assets/views';
const jsPath = 'assets/javascript';
const cssPath = 'assets/stylesheets';

// pugコンパイル
gulp.task('pug', () => {
  gulp.src([`src/${pugPath}/**/*.pug`, `!src/${pugPath}/**/_*.pug`])
    .pipe(plumber())
    .pipe(pug({
      pretty: true,
    }))
    .pipe(gulp.dest('./'));
});

// babelify
gulp.task('babelify', () => {
  process.env.NODE_ENV = 'production';
  browserify({
    entries: `src/${jsPath}/application.js`,
    extensions: ['.js'],
  })
  .transform(babelify, { presets: ['es2015'] })
  .bundle()
  .on('error', (err) => {
    console.log(`Erro: ${err.message}`);
  })
  .pipe(source('application.js'))
  .pipe(gulp.dest(`app/${jsPath}`));
  browserSync.reload();
});

// sassコンパイル
gulp.task('sass', () => {
  gulp.src(`src/${cssPath}/**/*.scss`)
    .pipe(plumber())
    .pipe(sassGlob())
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(gulp.dest(`app/${cssPath}`));
});

// ブラウザリロード
gulp.task('bs-reload', () => {
  browserSync.reload();
});

// サーバー起動
gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: './', // 対象ディレクトリ
      index: 'index.html', // インデックスファイル
    },
    open: false,
  });
});

gulp.task('init', ['pug', 'sass', 'babelify']);

// 初期起動はこっち
gulp.task('default', ['init', 'serve'], () => {
  // ソースのwatch
  gulp.watch(`src/${pugPath}/**/*.pug`, ['pug']);
  gulp.watch(`src/${cssPath}/**/*.scss`, ['sass']);
  gulp.watch(`src/${jsPath}/**/*.js`, ['babelify']);

  // ファイルの更新をwatch
  gulp.watch('*.html', ['bs-reload']);
  gulp.watch(`app/${cssPath}/*.css`, ['bs-reload']);
  gulp.watch(`app/${jsPath}/*.js`, ['bs-reload']);
});
