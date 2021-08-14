module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  devServer: {
    https: false,
    hotOnly: true,
    disableHostCheck: true,
    host: 'localhost',
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
