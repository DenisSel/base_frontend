module.exports = function () {
    globalConst.gulp.task('server', function () {
        globalConst.bs.init({
            server: {
                baseDir: "./build"
            }
        });
    });
}