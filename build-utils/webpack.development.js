module.exports = () => {
    return {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                    exclude: /\.module.css$/,
                },
            ],
        },
        devtool: 'inline-source-map',
        devServer: {
            static: '../dist',
            port: 1337,
            hot: true,
        },
    }
}
