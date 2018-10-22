'use strict';

global.globalConst = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),

    path: {
        tasks: require('./gulp/config/tasks.js')
    }
};

globalConst.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
});


globalConst.gulp.task('default', globalConst.gulp.series(
    globalConst.gulp.parallel('pug', 'stylus', 'scripts:lib', 'scripts'),
    globalConst.gulp.parallel('watch', 'server')
));
