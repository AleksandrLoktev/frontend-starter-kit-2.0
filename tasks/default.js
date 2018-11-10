var gulp = require('gulp'),
    config = require('./config');

gulp.task('default', [
        'clear',
        'scripts',
        'tpl',
        'font',
        'font-css',
        'style',
        'server',
        'add'
    ]);