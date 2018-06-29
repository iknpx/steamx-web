const gulp = require('gulp');
const sftp = require('gulp-sftp');

gulp.task('deploy:production', function () {
    return gulp.src('dist/*')
        .pipe(sftp({
            host: process.env.SSH_HOST,
            keyContents: process.env.SSH_KEY,
            remotePath: '/var/www/html',
            user: 'root',
            remotePlatform: 'unix',
        }));
});
