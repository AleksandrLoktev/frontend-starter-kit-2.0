import gulp from 'gulp';
import config from './config';
import plumber from 'gulp-plumber';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from "browser-sync";
import tsify from "tsify";
import browserify from "browserify";
import babelify from 'babelify';
let reload = browserSync.reload;
import babel from "gulp-babel";
import rename from "gulp-rename";
import uglify from "gulp-uglify";
import notify from 'gulp-notify';
import color from 'gulp-color';
import source from "vinyl-source-stream";
import buffer from "vinyl-buffer";

gulp.task('scripts', () => {
    config.js.src.map((entry) => {
        return browserify({
            debug: true,
            entries: [entry],
            cache: {},
            packageCache: {}
        })
            .plugin(tsify)
            .transform('babelify', {
                presets: ['es2015', {
                    "targets": {
                        "browsers": [
                            "ie 11"
                        ]
                    }
                }]
            })
            .bundle().on('error', (error) => {
                notify.onError({
                    title:    "Gulp",
                    message:  "<%= error.name %><br>" +
                              "Error: <%= error.message %><br>" +
                              "Line: <%= error.line %>",
                    sound:    "Beep"
                })(error);

                console.error(color('Name: ' + error.name, 'RED'));
                console.error(color('Line: ' + error.line, 'RED'));
                console.error(color('Error: ' + error.message, 'RED'));
            })
            .pipe(plumber())
            .pipe(source('bundle.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(config.js.build))
            .pipe(reload({stream: true}));
    });
});
