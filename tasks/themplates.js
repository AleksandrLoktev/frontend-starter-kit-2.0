var gulp = require('gulp'),
    config = require('./config'),
    notify = require('gulp-notify'),
    nunjucksRender = require('gulp-nunjucks-render'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;

gulp.task('tpl', () => {
    config.tpl.src.map((entry) => {
        return gulp.src(entry)
        .pipe(nunjucksRender().on('error', function(error) {
            console.log(error);
                notify.onError({
                    title:    "Gulp",
                    message:  "<%= error.name %><br>" +
                              "Error: <%= error.message %>" +
                              "Path: <%= error.fileName %>",
                    sound:    "Beep"
                })(error);
            })
        )
            .pipe(gulp.dest(config.tpl.build))
            .pipe(reload({stream: true}));
    });

});