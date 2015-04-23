var webPage = require('webpage');
var page = webPage.create();
var system = require('system');
var args = system.args;

var htmlPath      = args[1];
var pdfPath       = args[2];
var cssElement    = args[3];

// variable of footer and header
var fontSize    = "10.5pt";
var fontColor   = "#808080";
var fontFamily  = "IPAexGothic";
var copyRight   = "Copyright 2016 hogehoge CO., LTD. All rights reserved.";
var marginTop   = "0mm";
var hrStyle     = "border:0 none; height:1px; color:#808080; background-color:#808080; clear:both;"; 
var headImage   = "http://aimless.jp/images/header-img-10mm.png";

page.open( htmlPath , function start(status) {
  // get H1 from markdown
  var docTitle = page.evaluate( function () {
    var docTitle = document.getElementsByTagName('h1')[0].innerHTML;
    return docTitle;
  });
  page.paperSize = {
    format: 'A4',
    orientation: 'portrait',
    margin: {
      top: '25mm',
      left: '25mm',
      right: '25mm',
    },
    header: {
      height: "15mm",
      contents: phantom.callback(function(pageNum, numPages) {
        if (pageNum == 1) {
          return "";
        } else {
          return "<div style='float:left;margin-top:" + marginTop + ";font-size:" + fontSize + ";color:" +fontColor + ";font-family:" + fontFamily + ";line-height:1.5;'>" + docTitle + "</div><div style='float:right;'><img src='" + headImage + "' /></div><hr style='" + hrStyle + "'>";
        }
     })
    },
    footer: {
      height   : "30mm",
      contents : phantom.callback(function(pageNum, numPages) {
        defaultFooter = "<hr style='" + hrStyle + "'><div style='text-align:center;font-size:" + fontSize + ";color:" + fontColor + ";font-family:" + fontFamily + ";line-height:1.5;'>" + copyRight + "<br>";
        switch(pageNum){
          case 1:
            footer = "</div>";
            break;
          case 2:
            footer = defaultFooter + "ⅰ</div>";
            break;
          case 3:
            footer = defaultFooter + "ⅱ" + "</div>";
            break;
          default:
            pageNum = pageNum - 3;
            numPages = numPages - 3;
            footer = defaultFooter + pageNum + " / " + numPages + "</div>";
            break;
        }
        return footer;
      })
    }
  };
  page.evaluate(function (cssElement) {
    var head = document.querySelector("head");
    
    var style = document.createElement("style");
    style.innerHTML = cssElement;
    head.appendChild(style);
    /*
    var meta = document.createElement("meta");
    meta.setAttribute('charset', 'utf-8');
    head.appendChild(meta);
    */
  }, cssElement);
  page.render( pdfPath , {format: 'pdf', quality: '100'});
  //console.log(page.content);
  phantom.exit();
});
