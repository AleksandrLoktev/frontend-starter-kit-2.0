module.exports = {
    style : {
        src: './src/**/*.scss',
        build: 'build/css/'
    },
    tpl : {
        src: './src/pages/**/*.njk',
        watch: './src/**/*.njk',
        build: 'build/html/'
    }
};