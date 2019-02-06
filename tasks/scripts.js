import gulp from 'gulp';
import webpackStream from 'webpack-stream';
import webpack from 'webpack';
import webpack_config from './webpack.config.js';
import browserSync from "browser-sync";
let reload = browserSync.reload;
import config from './config';

gulp.task('scripts', () => {
        gulp.src(config.js.src)
        .pipe(webpackStream(webpack_config), webpack)
        .pipe(reload({stream: true}))
        .pipe(gulp.dest(config.js.build));
});