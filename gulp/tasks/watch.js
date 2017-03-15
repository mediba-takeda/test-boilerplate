const gulp         = require('gulp');
const config       = require('../config');

gulp.task('watch', ['browserSync'], function() {
  gulp.watch(config.sass.src, ['sass']);
});
