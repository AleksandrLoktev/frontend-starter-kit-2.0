var sourcemaps = require('gulp-sourcemaps');
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-minify-css'),
    prefixer = require('gulp-autoprefixer'),
    color = require('gulp-color'),
    concat = require('gulp-concat'),
    config = require('./config'),
    notify = require('gulp-notify'),
    emoji = require('node-emoji'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;


gulp.task('scss', function scss() {
    gulp.src(config.style.src)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', function(error) {
            notify.onError({
                title:    "Gulp",
                message:  "Error: <%= error.messageOriginal %>" +
                          "Line: <%= error.line %>",
                sound:    "Beep"
            })(error);

            console.log(color(emoji.get('coffee'), 'RED'), 'font-size:100px;');
            console.error(color('File: ' + error.relativePath, 'RED'));
            console.error(color('Line: ' + error.line, 'RED'));
            console.error(color('Error: ' + error.messageOriginal, 'RED'));
        }))
        .pipe(concat('style.css'))
        .pipe(prefixer({ browsers: ['last 10 versions']}))
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.style.build))
        .pipe(reload({stream: true}));
});


// gulp.task('style', gulp.series('scss', 'watch'));
gulp.task('style', function() {
    gulp.parallel(
        'scss',
        'watch'
    )()
});
