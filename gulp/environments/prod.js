var gulp        = require('gulp');
var config      = require('./../config');
var runSequence = require('run-sequence');

gulp.task('prod', function(done) {
  runSequence('set_env:prod', 'sass', done);
});

gulp.task('set_env:prod', function() {
  if(!config.env.current) {
    config.env.current = 'prod';
  }
});

config.env.prod = function() {
  if(!config.env.current) {
    config.env.current = config.env.defaultEnv;
  }

  return config.env.current === 'prod';
};