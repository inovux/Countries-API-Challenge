const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const loadPresets = require('./build-utils/loadPresets')

// eslint-disable-next-line global-require,import/no-dynamic-require
const modeConfig = (mode) => require(`./build-utils/webpack.${mode}`)(mode)

module.exports = ({ preset = '' }, { mode }) => {
    return merge(
        {
            mode,
            devServer: {
                historyApiFallback: true,
            },
            resolve: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
            entry: './src/index.tsx',
            output: {
                publicPath: '/',
                filename: 'bundle.js',
                path: path.resolve(__dirname, 'dist'),
                clean: true,
            },
            module: {
                rules: [
                    {
                        test: /\.module\.css$/,
                        use: [
                            MiniCssExtractPlugin.loader,
                            {
                                loader: 'css-loader',
                                options: {
                                    importLoaders: 1,
                                    modules: true,
                                },
                            },
                            'postcss-loader',
                        ],
                    },
                    {
                        test: /\.tsx?$/,
                        exclude: /node_modules/,
                        use: 'babel-loader',
                    },
                    {
                        test: /\.(png|jpg|gif)$/i,
                        use: [
                            {
                                loader: 'url-loader',
                                options: {
                                    limit: false,
                                },
                            },
                        ],
                    },
                ],
            },
            plugins: [
                new MiniCssExtractPlugin(),
                new HtmlWebpackPlugin({
                    template: './src/public/index.html',
                }),
            ],
        },
        modeConfig(mode),
        loadPresets({ mode, preset })
    )
}
