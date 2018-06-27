const gulp = require('gulp');
const sftp = require('gulp-sftp');

gulp.task('deploy:production', function () {
    return gulp.src('dist/*')
        .pipe(sftp({
            host: '159.65.105.48',
            keyContents: process.env.ROOT_KEY,
            remotePath: '/var/www/html',
            user: 'root',
            remotePlatform: 'unix',
        }));
});
