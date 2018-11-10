var gulp = require('gulp'),
    watch = require('gulp-watch'),
    fonts = ['clean-font-css', 'font', 'font-css', 'add'];

gulp.task('watch', function () {
    watch(config.tpl.watch, function(event, cb) {
        gulp.start('tpl');
    });

    watch(config.style.src, function(event, cb) {
        gulp.start('scss');
    });

    watch(config.js.watch, function(event, cb) {
        gulp.start('scripts');
    });

    watch(config.fonts.src, function(event, cb) {
            gulp.start('fonts');
    });
    // watch([path.watch.img], function(event, cb) {
    //     gulp.start('image:build');
    // });
    // watch([path.watch.fonts], function(event, cb) {
    //     gulp.start('fonts:build');
    // });
});