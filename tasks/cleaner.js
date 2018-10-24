var gulp = require('gulp'),
    rimraf = require('rimraf'),
    config = require('./config');

gulp.task('clear', function (cb) {
    rimraf(config.tpl.build, cb);
});