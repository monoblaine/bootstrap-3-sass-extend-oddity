'use strict';

var gulp = require('gulp'),
    fs = require('fs'),
    del = require('del'),
    rename = require('gulp-rename'),
    less = require('gulp-less'),
    sass = require('gulp-sass'),
    csscomb = require('gulp-csscomb');

gulp.task('bs.clean.sass', function () {
    return del('./dist/sass.css');
});

gulp.task('bs.clean.less', function () {
    return del('./dist/less.css');
});

gulp.task('bs.sass', ['bs.clean.sass'], function () {
    return gulp.src('./src/sass/test.scss')
        .pipe(sass.sync({ precision: 8, outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(csscomb())
        .pipe(rename('sass.css'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('bs.less', ['bs.clean.less'], function () {
    return gulp.src('./src/less/test.less')
        .pipe(less())
        .pipe(csscomb())
        .pipe(rename('less.css'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['bs.sass', 'bs.less']);
