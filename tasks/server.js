import gulp from 'gulp';
import browserSync from "browser-sync";

var serverConfig = {
    server: {
        baseDir: "./build"
    },
    startPath: "/html/home.html",
    host: 'localhost',
    port: 3000
};

gulp.task('server', () => {
    browserSync(serverConfig);
});
