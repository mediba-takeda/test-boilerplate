const gulp    = require('gulp')
const del  = require('del')

gulp.task('clean', ()=> {
  del([
    'app/**/*.css',
    'app/**/*.map',
    'app/**/*.js',
    'app/**/bg_sprite.png'
  ])
})
