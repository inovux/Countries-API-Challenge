// eslint-disable-next-line import/no-extraneous-dependencies
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = () => {
    return {
        plugins: [new BundleAnalyzerPlugin()],
    }
}
