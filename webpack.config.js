const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: 'defaults' }],
                            ['@babel/preset-react'],
                        ],
                    },
                },
            },
        ],
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        port: 1337,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/public/index.html',
        }),
    ],
}
