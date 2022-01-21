module.exports = {
    presets: [
        [
            '@babel/preset-env',
            { targets: 'defaults', modules: false, useBuiltIns: 'usage' },
        ],
        ['@babel/preset-react', { runtime: 'automatic' }],
        ['@babel/preset-typescript'],
    ],
}
