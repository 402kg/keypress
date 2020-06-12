const gulp = require('gulp');
const sftp = require('gulp-sftp-up4');

gulp.task('deploy', function () {
    return gulp.src('dist/**/*')
        .pipe(sftp({
            host: 'keypress.tk',
            keyContents: process.env.ROOT_KEY,
            remotePath: '/var/www/keypress',
            user: 'root',
            remotePlatform: 'unix',
        }));
});
