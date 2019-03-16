module.exports = {
    style : {
        src: ['./src/scss/main.scss'],
        watch: ['./src/**/*.scss', './core/**/*.scss', './src/**/_*.scss', './core/**/_*.scss'],
        build: 'build/css/'
    },
    tpl : {
        src: ['./src/pages/**/*.njk', './core/pages/**/*.njk'],
        watch: ['./src/**/*.njk', './core/**/*.njk'],
        build: 'build/html/'
    },
    js: {
        src: ['./src/js/main.js'],
        watch:['./core/**/*.js', './src/ts/main.js', './src/**/*.js'],
        build: 'build/js/'
    },
    fonts: {
        srcStyle: ['./src/assets/fonts'],
        src: ['./src/assets/fonts/**/*', '!./src/assets/fonts/**/**.html', '!./src/assets/fonts/**/**.css'],
        buildStyle: './src/scss',
        build: 'build/fonts/',
        git: './src/scss/**'
    },
    icons: {
        src: ['./src/assets/icons/*.svg'],
        build: 'build/icons/'
    }
};
