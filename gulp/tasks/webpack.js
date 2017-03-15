const gulp      = require('gulp')
const gutil     = require("gulp-util")
const webpack   = require('webpack')
const config    = require('../config').javascript

gulp.task('webpack', (callback)=> {
  webpack(config.conf, (err, stats)=> {
    if(err) throw new gutil.PluginError("webpack", err)
    gutil.log("[webpack]", stats.toString({
      colors: true
    }))
    callback()
  })
});