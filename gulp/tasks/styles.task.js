var gulp         = require('gulp');

var autoprefixer = require('gulp-autoprefixer');
var cleanCSS     = require('gulp-clean-css');
var gulpif       = require('gulp-if');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');

var config       = require('./../config');

gulp.task('sass:watch', ['sass'], function() {
  gulp.watch(config.css.srcSet, ['sass']);
});

gulp.task('sass', function() {
  return gulp.src(config.css.srcSet)
      .pipe(gulpif(config.env.dev(), sourcemaps.init()))
      .pipe(sass().on('error', sass.logError))
      .pipe(gulpif(config.env.dev(), sourcemaps.write()))
      .pipe(autoprefixer(config.css.autoprefixerConfig))
      .pipe(gulpif(config.env.prod(), cleanCSS(config.css.minifyConfig)))
      .pipe(gulp.dest(config.css.dest));
});