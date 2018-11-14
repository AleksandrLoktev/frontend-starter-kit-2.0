import gulp from 'gulp';
import rimraf from 'rimraf';
import config from './config';

gulp.task('clear', (cb) => {
    rimraf(config.tpl.build, cb);
});