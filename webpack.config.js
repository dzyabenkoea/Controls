const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports={
    entry: './src/index.js',
    mode: "development",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    plugins: [new HtmlWebpackPlugin({template: "./src/index.html"})],
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
}
