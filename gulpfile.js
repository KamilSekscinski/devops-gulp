var {
    dest,
    src
} = require('gulp');
var sass = require('gulp-sass');

function styles() {
    return src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('build'))
};

function task(cb) {
    console.log('hello gulp');
    cb();
}

exports.task = task;
exports.styles = styles;
exports.default = task;