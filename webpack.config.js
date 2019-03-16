const path = require('path');
const outputDir = path.resolve(__dirname, 'build');

module.exports = {
    entry: path.resolve(__dirname, 'src/js/main.js'),
    output: {
        path: outputDir,
        filename: 'bundle.js'
    }
};
