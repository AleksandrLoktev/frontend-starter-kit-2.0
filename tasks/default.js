var gulp = require('gulp'),
    config = require('./config');

gulp.task('default', function() {
    gulp.parallel(
        'clear',
        'tpl',
        'style',
        'server'
    )()
});