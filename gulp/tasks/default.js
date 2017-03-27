const gulp        = require('gulp')
const runSequence = require('run-sequence')

gulp.task('default', function(callback) {
  runSequence('sass', 'watch', callback)
})
