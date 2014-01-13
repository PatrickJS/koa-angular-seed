var gulp   = require('gulp');
var stylus = require('gulp-stylus');
var browserify = require('gulp-browserify');

var paths  = require('./config/path.json');
gulp.task('browserify', function(cb) {
  return gulp.task(['client/**/*.js'])
    .pipe(browserify());
});

gulp.task('stylus', function(cb) {
  gulp.src(paths.stylus.src)
  .pipe(stylus())
  .pide(gulp.dest(paths.stylus.dest));
});

gulp.task('default', function(cb) {
  gulp.run('stylus');
});

