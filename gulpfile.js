var gulp  = require('gulp');
var gutil = require('gulp-util');
var path  = require("path");
var childProcess = require("child_process");
var sleep = require('sleep');

//gulp.task('default', ['build-html','change-charset','render-pdf']);
//gulp.task('default', ['build-html','render-pdf']);
gulp.task('default', ['render-pdf']);
// debug
//gulp.task('default', ['build-html']);
//gulp.task('default', ['change-charset']);
//gulp.task('default', ['render-pdf']);

gulp.task('build-html', function(){
  childProcess.exec('cat src/test.md | ./vendor/bundle/ruby/2.1.0/bin/kramdown --toc-levels 2..3 > html/test.md.html' ,function (er, stdout, stderr){
    if (stdout){ console.log(stdout); }
    if (stderr){ console.error(stderr); }
  });
});

gulp.task('change-charset', function(){
  childProcess.exec('nkf -w --overwrite html/test.md.html' ,function (er, stdout, stderr){
    if (stdout){ console.log(stdout); }
    if (stderr){ console.error(stderr); }
  });
});

gulp.task('render-pdf', function(){
  var phantomPath = path.resolve('phantomjs/bin/phantomjs');
  var opts = [];
  opts[0] = path.resolve('render-pdf.js');
  opts[1] = path.resolve('html/test.md.html');
  opts[2] = path.resolve('pdf/test.md.pdf');
  opts[3] = path.resolve('css/pdf.css');
  console.log(opts);

  childProcess.execFile(phantomPath, opts , function (er, stdout, stderr) {
    if (stdout){ console.log(stdout);}
    if (stderr){  console.error(stderr); }
  });

}); 
