const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')

// eslint-disable-next-line global-require,import/no-dynamic-require
const modeConfig = (mode) => require(`./build-utils/webpack.${mode}`)(mode)

module.exports = (env, { mode }) => {
    return merge(
        {
            mode,
            resolve: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
            entry: './src/index.tsx',
            output: {
                filename: 'bundle.js',
                path: path.resolve(__dirname, 'dist'),
                clean: true,
            },
            module: {
                rules: [
                    {
                        test: /\.tsx?$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader',
                        },
                    },
                ],
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: './src/public/index.html',
                }),
            ],
        },
        modeConfig(mode)
    )
}
