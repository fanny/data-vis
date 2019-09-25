const path = require('path');
const TSLintPlugin = require('tslint-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, '/components/App.tsx'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    plugins: [
        new TSLintPlugin({
            files: ['./components/**/*.ts']
        })
    ]
};