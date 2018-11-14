var gulp = require('gulp'),
    config = require('./config');

gulp.task('default', [
        'clear',
        'scripts',
        'tpl',
        'watch',
        'font',
        'font-css',
        'style',
        'server',
        'add'
    ]);