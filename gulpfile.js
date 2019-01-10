var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build'))
});

function task(cb) {
    console.log('hello gulp');
    cb();
}

exports.task = task;
exports.default = task;