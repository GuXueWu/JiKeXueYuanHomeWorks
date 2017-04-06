/**
 * Created by ROG STRIX S5 on 2017/3/24.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var compass = require('gulp-compass');
var mincss = require('gulp-minify-css');

//sass转css
gulp.task('css', function () {
    //编译css
    //压缩css
    gulp.src('./sass/main.scss')
        .pipe(compass({
            config_file: './config.rb',
            css: 'stylesheets',
            sass: 'sass'
        }))
        .pipe(mincss())
        .pipe(gulp.dest('./stylesheets'));
});

//监听sass文件改变
gulp.task('watch', function () {
    gulp.watch('./sass/*.scss', ['css', 'contact']);
});

//合并css
gulp.task('contact', function () {
    gulp.src('./stylesheets/*.css')
        .pipe(concat('main.min.css'))
        .pipe(mincss())
        .pipe(gulp.dest('./stylesheets'));
});

gulp.task('default', ['css', 'contact','watch'], function () {
    console.log('default');
});