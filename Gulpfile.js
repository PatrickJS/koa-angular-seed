var gulp   = require('gulp');
var stylus = require('gulp-stylus');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var clean  = require('gulp-clean');
var browserify = require('gulp-browserify');
var refresh    = require('gulp-livereload');
var livereload = require('tiny-lr');

var server = livereload();
var config  = require('./config/config.json');

gulp.task('scripts', function(cb) {
  return gulp.src(config.paths.scripts)
    .pipe(browserify())
    .pipe(concat(config.build.scripts))
    .pipe(gulp.dest(config.build.path))
    .pipe(refresh(server));
});

gulp.task('styles', function(cb) {
  return gulp.src(config.paths.styles)
    .pipe(stylus({
      conpress: true
    }))
    .pipe(concat(config.build.styles))
    .pipe(gulp.dest(config.build.path))
    .pipe(refresh(server));
});

gulp.task('copy', function(cb) {
  gulp.src(config.paths.public)
    .pipe(gulp.dest(config.build.path))
    .pipe(refresh(server));
});

gulp.task('lr-server', function(cb) {
  server.listen(config.livereload.port, function(err) {
    if (err) return console.log(err);
  });
});

gulp.task('uglify', function(cb) {
  return gulp.src(config.paths.scripts)
    .pipe(uglify())
    .pipe(gulp.dest(config.build.path));
});

gulp.task('clean', function(cb) {
  // gulp.src(config.build.path, {read: false})
  //   .pipe(clean({force: true}))
  //   .pipe(gulp.dest(config.build.path));
});


gulp.task('default', function(cb) {
  gulp.run('clean', 'copy', 'lr-server', 'scripts', 'styles');

  gulp.watch(config.paths.scripts, function(event) {
    gulp.run('scripts');
  });

  gulp.watch(config.paths.styles, function(event) {
    gulp.run('styles');
  });

  // gulp.watch(config.paths.public, function(event) {
  //   gulp.run('copy');
  // });

});

