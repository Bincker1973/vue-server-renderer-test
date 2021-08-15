module.exports = {
    configureWebpack: require(`./webpack.${process.env.WEBPACK_TARGET}.config.js`)
}
