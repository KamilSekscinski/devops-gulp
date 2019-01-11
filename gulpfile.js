var gulp = require('gulp');
var sass = require('gulp-sass');
const babel = require('gulp-babel');

function styles() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build'))
};

function stylesWatch() {
    gulp.watch('src/scss/**/*.scss', styles);
}

function scripts() {
    return gulp.src('src/js/index.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('build'))
}

function scriptsWatch() {
    gulp.watch('src/js/**/*.js', scripts);
}

function task(cb) {
    console.log('hello gulp');
    cb();
}

exports.task = task;
exports.styles = styles;
exports.styleswatch = stylesWatch;
exports.scripts = scripts;
exports.scriptswatch = scriptsWatch;
exports.default = task;