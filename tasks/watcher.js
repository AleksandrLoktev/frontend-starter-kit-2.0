import gulp from 'gulp';
import config from './config';
import watch from 'gulp-watch';
let fonts = ['clean-font-css', 'font', 'font-css', 'add'];

gulp.task('watch', () => {
    watch(config.tpl.watch, () => {
        gulp.run('tpl');
    });

    watch(config.style.src, () => {
        gulp.run('scss');
    });

    watch(config.js.watch, () => {
        gulp.run('scripts');
    });

    watch(config.fonts.src, () => {
            gulp.run('fonts');
    });
    // watch([path.watch.img], function(event, cb) {
    //     gulp.run('image:build');
    // });
    // watch([path.watch.fonts], function(event, cb) {
    //     gulp.run('fonts:build');
    // });
});