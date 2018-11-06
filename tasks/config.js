module.exports = {
    style : {
        src: ['./src/**/*.scss', './core/**/*.scss'],
        build: 'build/css/'
    },
    tpl : {
        src: ['./src/pages/**/*.njk', './core/themplates/**/*.njk'],
        watch: ['./src/**/*.njk', './core/**/*.njk'],
        build: 'build/html/'
    },
    js: {
        src: ['./src/ts/core.ts'],
        watch:['./src/**/*.ts', './core/**/*.ts'],
        build: 'build/js/'
    },
    icons: {
        src: ['./src/assets/icons/*.svg'],
        build: 'build/fonts/'
    }
};