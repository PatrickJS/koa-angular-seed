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
  return gulp.src(config.paths.scripts.src)
    .pipe(browserify())
    .pipe(concat(config.build.scripts))
    .pipe(gulp.dest(config.paths.scripts.dest))
    .pipe(refresh(server));
});

gulp.task('uglify', function(cb) {
  return gulp.src(['client/**/*.js'])
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('styles', function(cb) {
  return gulp.src(config.paths.stylus.src)
    .pipe(stylus({
      conpress: true
    }))
    .pipe(gulp.dest(config.build.styles))
    .pipe(gulp.dest(config.paths.stylus.dest));
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

gulp.task('clean', function(cb) {
  gulp.src('build', {read: false})
    .pipe(clean({force: true}));
});


gulp.task('default', function(cb) {
  gulp.run('clean', 'copy', 'lr-server', 'scripts', 'styles');

  gulp.watch('client/**.js', function(event) {
    gulp.run('scripts');
  });

  gulp.watch('client/styles/**.styl', function(event) {
    gulp.run('styles');
  });

});

