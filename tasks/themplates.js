import gulp from 'gulp';
import config from './config';
import notify from 'gulp-notify';
import nunjucksRender from 'gulp-nunjucks-render';
import browserSync from "browser-sync";
import through from "through2";
let reload = browserSync.reload;

var manageEnvironment = (environment) => {
    environment.addGlobal('mergeOptions', (obj1, obj2) => {
        if (obj1 && obj2) {
            for (var p in obj2) {
                try {
                    // Property in destination object set; update its value.
                    if ( obj2[p].constructor == Object ) {
                        obj1[p] = MergeRecursive(obj1[p], obj2[p]);

                    } else {
                        obj1[p] = obj2[p];

                    }

                } catch(e) {
                    // Property in destination object not set; create it and set its value.
                    obj1[p] = obj2[p];

                }
            }

            return obj1;
        }
    });

};

gulp.task('tpl', () => {
    config.tpl.src.map((entry) => {
        return gulp.src(entry)
        .pipe(nunjucksRender({
                manageEnv: manageEnvironment
        }).on('error', function(error) {
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