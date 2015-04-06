exports.header = {
  height   : "2cm",
  contents : function(pageNum, numPages){
    // variable
    docTitle = "ほげほげサービス　サービス仕様"
    margin = "0px 45px 0px 45px;"
    fontSize = "0.75em;"
    fontColor = "#808080;"
    fontFamily = "IPAexGothic;"
    // main
    switch(pageNum){
      case 1:
        return Null;
        break;
      default:
        return "<div style='margin:" + margin + "font-size:" + fontSize + "color:" + fontColor + "font-family:" + fontFamily + "line-height:1.5;'><br>" + docTitle + "<hr></div>"
        break;
    }
  }

}
exports.footer = {
  height   : "2cm",
  contents : function(pageNum, numPages) {
    // variable
    copyRight = "Copyright 2016 hogehoge CO., LTD. All rights reserved."
    margin = "0px 45px 0px 45px;"
    fontSize = "0.75em;"
    fontColor = "#808080;"
    fontFamily = "IPAexGothic;"
    // main
    defaultFooter = "<hr style='margin:" + margin + "'><div style='text-align:center;font-size:" + fontSize + "color:" + fontColor + "font-family:" + fontFamily + "line-height:1.5;'>" + copyRight + "<br>"
    switch(pageNum){
      case 1:
        return Null;
        break;
      case 2:
        return defaultFooter + "ⅰ</div>"
        break;
      case 3:
        return defaultFooter + "ⅱ" + "</div>"
        break;
      default:
        pageNum = pageNum - 3
        numPages = numPages - 3
        return defaultFooter + pageNum + " / " + numPages + "</div>"
        break;
    }
  }
} 
