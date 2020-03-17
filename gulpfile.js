const gulp = require('gulp');
const sftp = require('gulp-sftp-up4');

gulp.task('deploy:production', function () {
    return gulp.src('dist/*')
        .pipe(sftp({
            host: process.env.SSH_HOST,
            keyContents: process.env.SSH_KEY,
            remotePath: process.env.SSH_PATH,
            user: 'root',
            remotePlatform: 'unix',
        }));
});
