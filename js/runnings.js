exports.header = {
  height   : "2cm",
  contents : function(pageNum, numPages){
    switch(pageNum){
      case 1:
        return Null;
        break;
      default:
        return "<div style='margin:0px 45px 0px 45px;font-size:0.75em;color:#808080;font-family:IPAexGothic;line-height: 1.5;'><br>ほげほげサービス　サービス仕様書<hr></div>"
        break;
    }
  }

}
exports.footer = {
  height   : "2cm",
  contents : function(pageNum, numPages) {
    defFooter = "<hr style='margin:0px 45px 0px 45px'><div style='text-align:center;font-size:0.75em;color:#808080;font-family:IPAexGothic;line-height:1.5;'>Copyright 2015 hogehoge CO., LTD. All rights reserved.<br>"
    switch(pageNum){
      case 1:
        return Null;
        break;
      case 2:
        return defFooter + "ⅰ</div>"
        break;
      case 3:
        return defFooter + "ⅱ" + "</div>"
        break;
      default:
        pageNum = pageNum - 3
        numPages = numPages - 3
        return defFooter + pageNum + " / " + numPages + "</div>"
        break;
    }
  }
} 
