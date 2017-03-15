const gulp         = require('gulp')
const sass         = require('gulp-sass')
const handleErrors = require('../util/handleErrors')
const config       = require('../config').sass
const browserSync  = require('browser-sync')
const sourcemaps   = require('gulp-sourcemaps')
const gutil        = require('gulp-util')

const __DEV__ = process.env.NODE_ENV != 'production'

gulp.task('sass', ()=> {
  return gulp.src(config.src)
    .pipe(__DEV__ ? sourcemaps.init() : gutil.noop())
    .pipe(sass(config.settings))
    .on('error', handleErrors)
    .pipe(__DEV__ ? sourcemaps.write('./map') : gutil.noop())
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}))
})
