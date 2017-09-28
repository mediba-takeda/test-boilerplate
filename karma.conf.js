const webpackConfig = require('./webpack.config')
delete webpackConfig.entry
delete webpackConfig.output

const __WATCH__ = process.env.KARMA_WATCH
if (process.env.TRAVIS) {
  process.env.CHROME_BIN = require('puppeteer').executablePath()
}

module.exports = (config)=> {
  config.set({
    files: [
      {
        pattern: 'test/**/*.spec.js', watched: false
      },
      'test/**/*.html'
    ],
    exclude: [
    ],
    preprocessors: {
      'test/**/*.js': ['webpack'],
      'test/**/*.html': ['html2js']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    frameworks: ['mocha', 'fixture', 'sinon', 'power-assert'],
    reporters: ['mocha', 'coverage'],
    coverageReporter: {
      type: 'lcov',
      dir: './.tmp/coverage',
      subdir: 'report',
      file : './.tmp/coverage/report/lcov.info'
    },
    browsers: ['ChromeHeadless'],
    captureTimeout: 60000
  })
  if(__WATCH__) {
    config.coverageReporter = {
      type: 'text-summary'
    }
  }
}
