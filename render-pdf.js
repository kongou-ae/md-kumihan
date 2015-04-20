var webPage = require('webpage');
var page = webPage.create();

// filename which is converted pdf
var target      = "test.md";
var file        = "./css/pdf.css";

// variable of footer and header
var docTitle    = "ほげほげサービス　サービス仕様";
var fontSize    = "10.5pt";
var fontColor   = "#808080";
var fontFamily  = "IPAexGothic";
var copyRight   = "Copyright 2016 hogehoge CO., LTD. All rights reserved.";
var marginTop   = "0mm";
var hrStyle     = "border:0 none; height:1px; color:#808080; background-color:#808080;" 

page.open("./html/" + target + ".html", function start(status) {
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
          return "<div style='margin-top:" + marginTop + ";font-size:" + fontSize + ";color:" +fontColor + ";font-family:" + fontFamily + ";line-height:1.5;'>" + docTitle + "</div><hr style='" + hrStyle + "'>";
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
  page.render('./pdf/' + target + '.pdf', {format: 'pdf', quality: '100'});
  phantom.exit();
});
