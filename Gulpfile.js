var gulp   = require('gulp');
var stylus = require('gulp-stylus');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var clean  = require('gulp-clean');
var browserify = require('gulp-browserify');
var refresh    = require('gulp-livereload');
var livereload = require('tiny-lr');

var server = livereload();
var paths  = require('./config/path.json');

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
  return gulp.src(paths.stylus.src)
    .pipe(stylus())
    .pide(gulp.dest(paths.stylus.dest));
});

gulp.task('lr-server', function() {
  server.listen(35729, function(err) {
    if (err) return console.log(err);
  });
});

gulp.task('clean', function(cb) {
  gulp.src('build', {read: false})
    .pipe(clean({force: true}));
});


gulp.task('default', function(cb) {
  gulp.run('clean', 'lr-server', 'scripts', 'styles');

  gulp.watch('dist/js/**', function(event) {
    gulp.run('scripts');
  });

  gulp.watch('dist/css**', function(event) {
    gulp.run('styles');
  });
});

