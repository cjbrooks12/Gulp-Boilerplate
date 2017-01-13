var gulp        = require('gulp');
var config      = require('./../config');
var runSequence = require('run-sequence');

gulp.task('dev', function(done) {
  runSequence('set_env:dev', 'sass:watch', done);
});

gulp.task('set_env:dev', function() {
  if(!config.env.current) {
    config.env.current = 'dev';
  }
});

config.env.dev = function() {
  if(!config.env.current) {
    config.env.current = config.env.defaultEnv;
  }

  return config.env.current === 'dev';
};