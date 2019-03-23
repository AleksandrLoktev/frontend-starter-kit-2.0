import gulp from 'gulp';
import config from './config';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from "browser-sync";
let reload = browserSync.reload;
import webpack from 'webpack-stream';


gulp.task('scripts', () => {
    return gulp.src(config.js.src)
        .pipe(webpack(require('../webpack.config.js')))
        .pipe(gulp.dest(config.js.build))
        .pipe(reload({stream: true}));
});
