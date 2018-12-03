import gulp from 'gulp';
import iconfont from 'gulp-iconfont';
import config from './config';

let runTimestamp = Math.round(Date.now()/1000);


gulp.task('iconFont', () => {
    return gulp.src(config.icons.src)
        .pipe(iconfont({
            fontName: 'avisfont',
            prependUnicode: true,
            formats: ['ttf', 'eot', 'woff'],
            timestamp: runTimestamp,
        }))
        .on('glyphs', function(glyphs, options) {
            console.log(glyphs, options);
        })
        .pipe(gulp.dest(config.icons.build));
});