function defaultTask(cb) {
    // place code for your default task here
    console.log('gulp run');
    cb();
}

exports.default = defaultTask

//convert scss to css;
//gather libs => bootstarp , angular, angualr modules