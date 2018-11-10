var gulp = require('gulp'),
    config = require('./config'),
    git = require('gulp-git');

gulp.task('add', function(){
    return gulp.src(config.fonts.git)
        .pipe(git.add());
});