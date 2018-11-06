var sourcemaps = require('gulp-sourcemaps');
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-minify-css'),
    prefixer = require('gulp-autoprefixer'),
    color = require('gulp-color'),
    concat = require('gulp-concat'),
    config = require('./config'),
    notify = require('gulp-notify'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;


gulp.task('scss', function scss() {
     config.style.src.map((entry) => {
        gulp.src(entry)
        .pipe(sourcemaps.init())
            .pipe(sass().on('error', function(error) {
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
});


// gulp.task('style', gulp.series('scss', 'watch'));
gulp.task('style', ['scss', 'watch']);
