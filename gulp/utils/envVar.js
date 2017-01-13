var config = require('./../config');

module.exports = function () {
  if(config.env.current) {
    try {
      config.envVar = require('./../../env.' + config.env.current + '.json');
    }
    catch(e) {
      config.envVar = require('./../../env.json');
    }
  }
  else {
    try {
      config.envVar = require('./../../env.json');
    } catch(e) {}
  }
};