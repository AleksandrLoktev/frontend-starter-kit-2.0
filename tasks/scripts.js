var gulp = require('gulp'),
    config = require('./config'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require("browser-sync"),
    tsify = require("tsify"),
    browserify = require("browserify"),
    babelify = require('babelify'),
    reload = browserSync.reload,
    babel = require("gulp-babel"),
    rename = require("gulp-rename"),
    uglify = require("gulp-uglify"),
    notify = require('gulp-notify'),
    color = require('gulp-color'),
    source = require("vinyl-source-stream"),
    buffer = require("vinyl-buffer");

gulp.task('scripts', function () {
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
            .bundle().on('error', function(error) {
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
