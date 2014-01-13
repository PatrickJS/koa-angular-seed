var gulp   = require('gulp');
var stylus = require('gulp-stylus');
var uglify = require('gulp-uglify');
var browserify = require('gulp-browserify');

var paths  = require('./config/path.json');

gulp.task('browserify', function(cb) {
  return gulp.task(['client/**/*.js'])
    .pipe(browserify());
});

gulp.task('uglify', function(cb) {
  return gulp.src(['client/**/*.js'])
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('stylus', function(cb) {
  return gulp.src(paths.stylus.src)
  .pipe(stylus())
  .pide(gulp.dest(paths.stylus.dest));
});

gulp.task('default', function(cb) {
  gulp.run('stylus');
});

