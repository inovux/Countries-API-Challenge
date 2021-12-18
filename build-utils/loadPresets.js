// eslint-disable-next-line import/no-extraneous-dependencies
const { merge } = require('webpack-merge')

module.exports = (env) => {
    const { preset } = env
    let presetConfig = {}

    if (preset) {
        // eslint-disable-next-line global-require,import/no-dynamic-require
        presetConfig = require(`./presets/webpack.${preset}`)(env)
    }

    // eslint-disable-next-line consistent-return
    return merge({}, presetConfig)
}
