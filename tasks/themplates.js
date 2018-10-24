var gulp = require('gulp'),
    config = require('./config'),
    notify = require('gulp-notify'),
    nunjucksRender = require('gulp-nunjucks-render'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;

gulp.task('tpl', () => {
    return gulp.src(config.tpl.src)
        .pipe(nunjucksRender({
            path: ['src/templates/'] // String or Array
        }).on('error', function(error) {
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
            })
        )
        .pipe(gulp.dest(config.tpl.build))
        .pipe(reload({stream: true}));
});