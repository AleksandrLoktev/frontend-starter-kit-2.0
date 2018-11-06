var gulp = require('gulp'),
    browserSync = require("browser-sync");

var serverConfig = {
    server: {
        baseDir: "./build"
    },
    startPath: "/html/home.html",
    host: 'localhost',
    port: 3000
};

gulp.task('server', function () {
    browserSync(serverConfig);
});
