const webpackConfig = require('./webpack.config')
delete webpackConfig.entry
delete webpackConfig.output

module.exports = function(config) {
  config.set({
    files: [
      {
        pattern: 'test/**/*.spec.js'
      }
    ],
    exclude: [
    ],
    preprocessors: {
      'test/**/*': ['webpack']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    frameworks: ['mocha', 'sinon'],
    reporters: ['mocha', 'coverage'],
    mochaReporter: {
      colors: {
        success: 'blue',
        info: 'bgGreen',
        warning: 'cyan',
        error: 'bgRed'
      },
      symbols: {
        success: '+',
        info: '#',
        warning: '!',
        error: 'x'
      }
    },
    coverageReporter: {
      type: 'lcov',
      dir: './app/coverage',
      subdir: 'report',
      file : './app/coverage/report/lcov.info'
    },
    browsers: ['PhantomJS']
  })
}
