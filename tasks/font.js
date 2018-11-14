import gulp from 'gulp';
import concat from 'gulp-concat-util';
import config from './config';
import replace from 'gulp-replace';

gulp.task ('font', () => {
    return gulp.src(config.fonts.src) //Gather up all the 'stylesheet.css' files
        .pipe(gulp.dest(config.fonts.build)); // Put them in the assets/styles/components folder

});

// ### Custom tasks
// Take all the fontcss stylesheets and concat them into a single SCSS file
gulp.task ('font-css', () => {
    return gulp.src([config.fonts.srcStyle + '/**/stylesheet.css']) //Gather up all the 'stylesheet.css' files
        .pipe(concat('_fonts.scss')) //Concat them all into a single file
        .pipe(concat.header('/* !!! WARNING !!! \nThis file is auto-generated. \nDo not edit it or else you will lose changes next time you compile! */\n\n'))
        .pipe(replace("url('", "url('../fonts/"))
        .pipe(gulp.dest(config.fonts.buildStyle)); // Put them in the assets/styles/components folder
});

