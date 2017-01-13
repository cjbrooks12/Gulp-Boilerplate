var gulp   = require('gulp');
var config = require('./../config');
var del    = require('del');

gulp.task('clean', function(done) {
  var finishedCount = 0;

  var bundles = [
    del(config.dest + "/**/*", {force:true}, delFinished)
  ];

  function delFinished() {
    finishedCount += 1;

    if(finishedCount === bundles.length) {
      done();
    }
  }
});