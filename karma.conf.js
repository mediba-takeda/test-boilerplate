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
    logLevel: config.LOG_INFO,
    singleRun: false,
    autoWatch: true,
    concurrency: Infinity,
    coverageReporter: {
      type: 'lcov',
      dir: './app/coverage',
      subdir: 'report',
      file : './app/coverage/report/lcov.info'
    },
    /**
     * @desc Travis で Yarn + Karma + Chrome
     * @see http://malloc.hatenablog.jp/entry/2017/01/23/132638
     */
    browsers: ['Chrome'],
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    }
  })
  if(process.env.TRAVIS){
    config.browsers = ['Chrome_travis_ci']
  }
}
