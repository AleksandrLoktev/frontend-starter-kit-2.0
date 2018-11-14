import sourcemaps from 'gulp-sourcemaps';
import gulp from 'gulp';
import sass from 'gulp-sass';
import cssmin from 'gulp-minify-css';
import prefixer from 'gulp-autoprefixer';
import color from 'gulp-color';
import concat from 'gulp-concat';
import config from './config';
import notify from 'gulp-notify';
import browserSync from "browser-sync";
let reload = browserSync.reload;


gulp.task('scss', function scss () {
        gulp.src(config.style.src)
        .pipe(sourcemaps.init())
            .pipe(sass().on('error', (error) =>  {
                notify.onError({
                    title:    "Gulp",
                    message:  "Error: <%= error.messageOriginal %>" +
                    "Line: <%= error.line %>",
                    sound:    "Beep"
                })(error);

                console.error('File: ' + error.relativePath);
                console.error('Line: ' + error.line);
                console.error('Error: ' + error.messageOriginal);
            }))
            .pipe(concat('style.min.css'))
            .pipe(prefixer({ browsers: ['last 10 versions']}))
            .pipe(cssmin())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(config.style.build))
            .pipe(reload({stream: true}));
});


// gulp.task('style', gulp.series('scss', 'watch'));
gulp.task('style', ['scss']);
