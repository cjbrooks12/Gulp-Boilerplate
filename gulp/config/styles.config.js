var config = require('./../config');

config.css = {
  src: config.src + '/sass',
  srcSet: config.src + '/sass/**/*.scss',
  dest: config.dest + '/css',
  autoprefixerConfig: {
    browsers: [
      '> 1%',
      'last 2 versions',
      'ie >= 8'
    ],
    cascade: false
  },
  minifyConfig: {
    compatibility: 'ie8'
  }
};
