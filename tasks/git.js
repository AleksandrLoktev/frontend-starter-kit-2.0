import gulp from 'gulp';
import config from './config';
import git from 'gulp-git';

gulp.task('add', () => {
    return gulp.src(config.fonts.git)
        .pipe(git.add());
});