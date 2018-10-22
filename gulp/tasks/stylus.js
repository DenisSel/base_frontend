module.exports = function () {
    globalConst.gulp.task('stylus', function () {
        return globalConst.gulp.src('src/static/stylus/main.styl')
            .pipe(globalConst.gp.sourcemaps.init())
            .pipe(globalConst.gp.stylus({
                'include css': true
            }))
            .pipe(globalConst.gp.autoprefixer({
                browsers: ['last 3 versions'],
                cascade: false
            }))
            .on("error", globalConst.gp.notify.onError({
                title: "Error running style"
            }))
            .pipe(globalConst.gp.csso())
            .pipe(globalConst.gp.sourcemaps.write())
            .pipe(globalConst.gulp.dest('build/static/css/'))
            .pipe(globalConst.bs.reload({
                stream: true
            }));
    });
}