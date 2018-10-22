module.exports = function () {
    globalConst.gulp.task('pug', function () {
        return globalConst.gulp.src('src/pug/pages/*.pug')
            .pipe(globalConst.gp.pug({
                pretty: true
            }))
            .pipe(globalConst.gulp.dest('build'))
            .on('end', globalConst.bs.reload);
    });
}