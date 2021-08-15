const {merge} = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

module.exports = merge(baseConfig, {
    entry: './src/entry-client.ts',
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: 'common'
        }
    },
    plugins: [
        // 此插件在输出目录中
        // 生成 `vue-ssr-client-manifest.json`。
        new VueSSRClientPlugin()
    ]
})
