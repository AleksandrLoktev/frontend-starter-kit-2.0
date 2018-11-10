module.exports = {
    style : {
        src: ['./src/scss/main.scss', './src/**/*.scss', './core/**/*.scss', '!./src/scss/**/_*.scss'],
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
    fonts: {
        srcStyle: ['./src/assets/fonts'],
        src: ['./src/assets/fonts/**/*', '!./src/assets/fonts/**/**.html', '!./src/assets/fonts/**/**.css'],
        buildStyle: './src/scss',
        build: 'build/fonts/',
        git: './src/scss/**'
    }
    // icons: {
    //     src: ['./src/assets/icons/*.svg'],
    //     build: 'build/fonts/'
    // }
};