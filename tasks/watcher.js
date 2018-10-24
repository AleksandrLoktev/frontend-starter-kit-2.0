var gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('watch', function () {
    watch([config.tpl.watch], gulp.series('tpl'));
    watch([config.style.src], gulp.series('scss'));
    // watch([path.watcher.js], function(event, cb) {
    //     gulp.start('js:build');
    // });
    // watch([path.watch.img], function(event, cb) {
    //     gulp.start('image:build');
    // });
    // watch([path.watch.fonts], function(event, cb) {
    //     gulp.start('fonts:build');
    // });
});