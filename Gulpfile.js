var gulp   = require('gulp');
var stylus = require('gulp-stylus');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rimraf = require('gulp-rimraf');
var clean  = require('gulp-clean');
var browserify = require('gulp-browserify');
var refresh    = require('gulp-livereload');
var livereload = require('tiny-lr');
var imagemin   = require('gulp-imagemin');
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
    .pipe(stylus({ conpress: true }))
    .pipe(concat(config.build.styles))
    .pipe(gulp.dest(config.build.path))
    .pipe(refresh(server));
});

gulp.task('images', function(cb) {
  return gulp.src(config.paths.images)
    .pipe(imagemin({ optimizationLevel: 5 }))
    .pipe(gulp.dest(config.build.images))
    .pipe(refresh(server));
});

gulp.task('uglify', function(cb) {
  return gulp.src(config.paths.scripts)
    .pipe(uglify())
    .pipe(gulp.dest(config.build.path));
});

gulp.task('clean', function(cb) {
  return gulp.src('build', {read: false})
    .pipe(clean({force: true}));
});

gulp.task('copy', function(cb) {
  return gulp.src(config.paths.public)
    .pipe(gulp.dest(config.build.path))
    .pipe(refresh(server));
});

gulp.task('lr-server', function(cb) {
  server.listen(config.livereload.port, function(err) {
    if (err) return console.log(err);
  });
});

gulp.task('build', function(cb) {
  gulp.run('copy', 'lr-server', 'scripts', 'styles', 'images');

  gulp.watch(config.paths.scripts, function(event) {
    gulp.run('scripts');
  });

  gulp.watch(config.paths.styles, function(event) {
    gulp.run('styles');
  });

});


gulp.task('default', function(cb) {
  gulp.run('build');
});

