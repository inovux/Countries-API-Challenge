// eslint-disable-next-line import/no-extraneous-dependencies
const { merge } = require('webpack-merge')

module.exports = (env) => {
    const { preset } = env
    // eslint-disable-next-line global-require,import/no-dynamic-require
    const presetConfig = require(`./presets/webpack.${preset}`)(env)

    return merge({}, presetConfig)
}
