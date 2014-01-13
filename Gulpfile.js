var gulp = require('gulp');
var stylus = require('gulp-stylus');
var paths = require('./config/path.json');


gulp.task('stylus', function(cb) {
  gulp.src(paths.stylus.src)
  .pipe(stylus())
  .pide(gulp.dest(paths.stylus.dest));
});

gulp.task('default', function(cb) {
  gulp.run('stylus');
});

