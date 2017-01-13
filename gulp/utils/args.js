var argv   = require('yargs').argv;
var config = require('./../config');
var gutil  = require('gulp-util');
var _      = require('lodash');

module.exports = function () {
  if (argv.env !== undefined) {
    if(!setEnvironment(argv.env)) {
      gutil.log(
          gutil.colors.red("Environment ") +
          gutil.colors.yellow(argv.env) +
          gutil.colors.red(" does not exist."));
      config.env.current = config.env.defaultEnv;
    }
  }
  else  {
    _.each(_.keys(argv), function(item) {
      return !setEnvironment(item);
    });
  }

  config.args = argv;
  delete config.args.env;
  delete config.args[config.env.current];
};

function setEnvironment(environment) {
  if (!config.env[environment]) {
    return false;
  }
  else {
    config.env.current = environment;
    return true;
  }
}