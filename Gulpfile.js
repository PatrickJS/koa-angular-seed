var gulp = require('gulp');
var stylus = require('gulp-stylus');


gulp.task('stylus', function(cb) {
  gulp.src(paths.stylus.src)
  .pipe(stylus())
  .pide(gulp.dest(paths.stylus.dest));
});
