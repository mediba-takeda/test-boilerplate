const browserSync          = require('browser-sync')
const webpack              = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const gulp          = require('gulp')
const config        = require('../config').browserSync
const webpackConfig = require('../config').javascript.conf
const bundler       = webpack(webpackConfig)

bundler.plugin('done', (stats)=> {
  if (stats.hasErrors() || stats.hasWarnings()) {
    // console.log(stats)
  }
  browserSync.reload()
});
gulp.task('browserSync', function() {
  var bsConfig = Object.assign({},config,{
    middleware: [
      webpackDevMiddleware(bundler, {
        publicPath: webpackConfig.output.publicPath,
        stats: {colors: true}
      })
    ]
  })
  browserSync(bsConfig);
})
