var gulp       = require('gulp');
var requireDir = require('require-dir');

var tasks        = requireDir('./gulp/tasks');
var environments = requireDir('./gulp/environments');
var taskConfig   = requireDir('./gulp/config');

gulp.task('default', ['dev']);

// parse env.json file and command-line args
require('./gulp/utils/args')();
require('./gulp/utils/envVar')();

// display dashboard after short timeout so environment tasks have time to set their own current environment
setTimeout(function() {
  require('./gulp/utils/dashboard')();
}, 100);