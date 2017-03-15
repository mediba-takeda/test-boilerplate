const gulp        = require('gulp')
const runSequence = require('run-sequence')

gulp.task('build', (callback)=> {
  runSequence('clean', 'sass', 'webpack', callback);
})
