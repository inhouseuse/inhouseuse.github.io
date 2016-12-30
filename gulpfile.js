const gulp = require('gulp');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const pug = require('gulp-pug');
// const browserify = require('browserify');
// const source = require('vinyl-source-stream');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const csscomb = require('gulp-csscomb');
// const browserSync = require('browser-sync').create();
// const reload = browserSync.reload;

gulp.task('pug', () => {
  gulp.src(['./src/**/*.pug', '!./src/**/_*.pug'])
        .pipe(plumber())
        .pipe(pug({
          pretty: true,
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('babel', () => {
  gulp.src('./src/javascripts/**/*.js')
    .pipe(babel({
      presets: ['es2015'],
    }))
    .pipe(gulp.dest('dest/javascripts'));
});

gulp.task('sass', () => {
  gulp.src('./src/stylesheets/**/*.scss')
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(csscomb())
    .pipe(gulp.dest('./dest/stylesheets'));
});
