module.exports = function () {
    globalConst.gulp.task('scripts:lib', function () {
        return globalConst.gulp.src(['node_modules/jquery/dist/jquery.min.js',
            'node_modules/slick-carousel/slick/slick.min.js'])
            .pipe(globalConst.gp.concat('libs.min.js'))
            .pipe(globalConst.gulp.dest('build/static/js/'))
            .pipe(globalConst.bs.reload({
                stream: true
            }));
    });

    globalConst.gulp.task('scripts', function () {
        return globalConst.gulp.src('src/static/js/main.js')
            .pipe(globalConst.gulp.dest('build/static/js/'))
            .pipe(globalConst.bs.reload({
                stream: true
            }));
    });
}