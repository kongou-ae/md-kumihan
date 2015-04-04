var gulp        = require('gulp');
var markdown    = require('gulp-markdown');
var markdownpdf = require('gulp-markdown-pdf');
var rimraf      = require('rimraf');
var path        = require("path");
var exec        = require('child_process').exec;

// filename which is converted pdf
var target = "src/test.md"

// default task do clean, html and pdf task
gulp.task('default', ['clean','toc','html','pdf']);

// add toc to markdown

gulp.task('toc', function() {
  exec('doctoc ' + target + ' --title " "')
});

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
        html    :  true,
        plugins :  [ require('remarkable-classy') ]
      }
    }))
    .pipe(gulp.dest('pdf'));
});


// cleanup dist dir
gulp.task('clean', function (cb) {
  rimraf('pdf', cb);
  rimraf('html', cb);
});
