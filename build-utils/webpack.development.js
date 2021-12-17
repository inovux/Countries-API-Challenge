module.exports = () => {
    return {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },
        devtool: 'inline-source-map',
        devServer: {
            static: '../dist',
            port: 1337,
        },
    }
}
