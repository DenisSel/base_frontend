module.exports = function () {
    globalConst.gulp.task('watch', function () {
        globalConst.gulp.watch('src/pug/**/*.pug', globalConst.gulp.series('pug'));
        globalConst.gulp.watch('src/static/stylus/**/*.styl', globalConst.gulp.series('stylus'));
        globalConst.gulp.watch('src/static/js/main.js', globalConst.gulp.series('scripts'));
    });
}