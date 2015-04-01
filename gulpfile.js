var gulp        = require('gulp');
var markdown    = require('gulp-markdown');
var markdownpdf = require('gulp-markdown-pdf');
var rimraf      = require('rimraf');
var path        = require("path");

// filename which is converted pdf
var target = "src/test.md"

// default task do clean, html and pdf task
gulp.task('default', ['clean','html','pdf']);

// markdown to html
gulp.task('html', function () {
  return gulp.src(target)
    .pipe(markdown())
    .pipe(gulp.dest('html'));
});

// markdown to pdf
gulp.task('pdf', function () {
  return gulp.src(target)
    .pipe(markdownpdf({
      cssPath : path.resolve('css/pdf.css'),
      runningsPath : path.resolve('js/runnings.js'),
      remarkable: {
        plugins :  [ require('remarkable-classy') ]
      }
    }))
    .pipe(gulp.dest('pdf'));
});


// cleanup dist dir
gulp.task('clean', function (cb) {
  rimraf('dist', cb);
});
