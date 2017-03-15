const webpackConfig = require('../webpack.config.js')

module.exports = {
  browserSync: {
    server: {
      baseDir: './app',
      directory: true
    },
    files: [
      './app/**/*.html',
      './app/**/*.js',
      './app/**/*.css'
    ],
    open: false,
    notify: false
  },
  sass: {
    src: './src/scss/**/*.scss',
    dest: './app/css',
    settings: {
      outputStyle: 'compact',
      sourceComments: false,
      // includePaths: importPath
    }
  },
  javascript: {
    conf: webpackConfig,
  }
}