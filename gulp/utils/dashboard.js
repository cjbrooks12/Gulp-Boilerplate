var gutil  = require('gulp-util');
var _      = require('lodash');
var config = require('./../config');

module.exports = function () {
  gutil.log('======================= Gulp Boilerplate =======================');

  gutil.log('Current environment: ' + gutil.colors.yellow(config.env.current));
  gutil.log('- Change environment via --env <environment> or --<environment>');

  if (_.toArray(config.envVar).length > 0) {
    gutil.log('- env.json is detected: ' +
        _.toArray(config.envVar).length +
        ' values loaded into ' +
        gutil.colors.magenta('config.envVar') + '.');
  } else {
    gutil.log('- env.json is not detected. You can create one on project root');
  }

  if (_.toArray(config.args).length > 2) {
    gutil.log('- command line arguments detected: ' +
        (_.toArray(config.args).length - 2) +
        ' values loaded into ' +
        gutil.colors.magenta('config.args') + '.');
  } else {
    gutil.log('- no command line arguments detected.');
  }

  gutil.log('================================================================');
};