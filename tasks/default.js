var gulp = require('gulp'),
    config = require('./config');

gulp.task('default', [
        'clear',
        'scripts',
        'tpl',
        'style',
        'server'
    ]);