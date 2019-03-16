import gulp from 'gulp';
import config from './config';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from "browser-sync";
import browserify from "browserify";
import babelify from 'babelify';
let reload = browserSync.reload;
import babel from "gulp-babel";
import rename from "gulp-rename";
import uglify from "gulp-uglify";
import notify from 'gulp-notify';
import color from 'gulp-color';
import source from "vinyl-source-stream";
import webpack from 'webpack-stream';


gulp.task('scripts', () => {
    return gulp.src(config.js.src)
        .pipe(webpack(require('../webpack.config.js')))
        .pipe(gulp.dest(config.js.build))
        .pipe(reload({stream: true}));
});
