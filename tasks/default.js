import gulp from 'gulp';
import config from './config';

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