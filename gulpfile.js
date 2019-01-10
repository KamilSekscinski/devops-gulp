function task(cb) {
    console.log('hello gulp');
    cb();
}

exports.task = task;
exports.default = task;