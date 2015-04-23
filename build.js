//UTF-8になーれ
var path  = require("path");
var childProcess = require("child_process");
var sleep = require('sleep');
var fs = require('fs');


childProcess.exec('cat src/test.md | ./vendor/bundle/ruby/2.1.0/bin/kramdown --template style/template.html --toc-levels 2..3 > html/test.md.html' ,function (er, stdout, stderr){
  if (stdout){ console.log(stdout); }
  if (stderr){ console.error(stderr); }
});
sleep.sleep(5);

/*
  childProcess.exec('nkf -w --overwrite html/test.md.html' ,function (er, stdout, stderr){
    if (stdout){ console.log(stdout); }
    if (stderr){ console.error(stderr); }
  });

  sleep.sleep(5);
*/

var phantomPath = path.resolve('phantomjs/bin/phantomjs');
var css = fs.readFileSync('style/pdf.css', 'utf-8');
var opts = [];
opts[0] = path.resolve('render-pdf.js');
opts[1] = path.resolve('html/test.md.html');
opts[2] = path.resolve('pdf/test.md.pdf');
opts[3] = css

childProcess.execFile( phantomPath, opts , function (er, stdout, stderr) {
  if (stdout){ console.log(stdout);}
  if (stderr){  console.error(stderr); }
});
