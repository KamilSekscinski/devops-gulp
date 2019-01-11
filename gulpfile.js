var gulp = require('gulp');
var sass = require('gulp-sass');

function styles() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build'))
};

function stylesWatch() {
    gulp.watch('src/scss/**/*.scss', styles);
}

function task(cb) {
    console.log('hello gulp');
    cb();
}

exports.task = task;
exports.styles = styles;
exports.styleswatch = stylesWatch;
exports.default = task;