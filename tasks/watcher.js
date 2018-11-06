var gulp = require('gulp'),
    watch = require('gulp-watch');

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

    // watch([config.icons.src], function(event, cb) {
    //     gulp.start('iconFont');
    // });
    // watch([path.watch.img], function(event, cb) {
    //     gulp.start('image:build');
    // });
    // watch([path.watch.fonts], function(event, cb) {
    //     gulp.start('fonts:build');
    // });
});