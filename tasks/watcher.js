var gulp = require('gulp'),
    watch = require('gulp-watch'),
    fonts = ['clean-font-css', 'font', 'font-css', 'add'];

gulp.task('watch', function () {
    watch(config.tpl.watch, function(event, cb) {
        gulp.run('tpl');
    });

    watch(config.style.src, function(event, cb) {
        gulp.run('scss');
    });

    watch(config.js.watch, function(event, cb) {
        gulp.run('scripts');
    });

    watch(config.fonts.src, function(event, cb) {
            gulp.run('fonts');
    });
    // watch([path.watch.img], function(event, cb) {
    //     gulp.run('image:build');
    // });
    // watch([path.watch.fonts], function(event, cb) {
    //     gulp.run('fonts:build');
    // });
});