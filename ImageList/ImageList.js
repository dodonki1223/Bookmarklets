javascript: (function() {
    var tags = document.getElementsByTagName('*'),
        screenWidth = window.parent.screen.width - 15,
        screenHeight = window.parent.screen.height - 95,
        windowURL = '',
        windowName = 'ImageList',
        windowOption = 'width=' + screenWidth + ',height=' +
        screenHeight + ',scrollbars=yes,resizeable=yes,menubar',
        openWindow = open(windowURL, windowName, windowOption).document,
        htmlSentence = '',
        fileNama = '';
    htmlSentence += '<table class="table_design">\ <tbody>\ <tr>\ <th>Image</th>\ <th>URL</th>\ <th>AlternateText</th>\ </tr>';

    for (i = 0; i < tags.length; i++) {

        switch(tags[i].tagName){
            case 'INPUT':
                if(tags[i].type == 'image'){
                    htmlSentence += CreateImageInfo(tags[i]);
                }
                break;
            case 'IMG':
                htmlSentence += CreateImageInfo(tags[i]);
                break;
            default:
                break;
        }
    }

    htmlSentence +=
        '   </tbody>\                  </table>\  <div id="largeImg">\  <img id="largeDispImg" src="http://k.yimg.jp/images/top/sp2/cmn/logo-ns-131205.png"></img>\  </div>  <div id="back-curtain"></div>\                  <script type="text/javascript" src="http://code.jquery.com/jquery-1.9.0.js"></script>\  <script type="text/javascript">\ $(".td_normal img").click(function(e) {\ $("#largeDispImg").attr("src",this.src);\ $("#back-curtain")\ .css({\ ' +
        "'" + 'width' + "'" + ': $(window).width(),\ ' + "'" + 'height' +
        "'" +
        ': $(window).height()\ })\  .show();\ $("#largeImg")\ .css({\ ' +
        "'" + 'position' + "'" + ':' + "'" + 'fixed' + "'" + ',\ ' +
        "'" + 'width' + "'" + ':' + "'" + '100%' + "'" + ',\ ' + "'" +
        'top' + "'" + ':' + "'" + '10' + "'" + ',\ ' + "'" +
        'text-align' + "'" + ':' + "'" + 'center' + "'" + ',\ ' + "'" +
        'z-index' + "'" +
        ':999\ })\  .show();\ });\ $("#back-curtain, #largeImg").click(function() {\ $("#largeImg").fadeOut("slow",function() {$("#back-curtain").hide();});\ });\  </script>\  <style type="text/css">\ .table_design {\ width:auto;\ border-spacing:0;\ font-size:14px;\ margin-left:auto;\ margin-right:auto;\ }\    tr {\ padding: 8px 15px;\ border-bottom: 1px solid #84b2e0;\ border-left: 1px solid #84b2e0;\ text-align: center;\ background: #fff;\ }\    th {\ width=' +
        window.parent.screen.width / 3 +
        ';\ color: #fff;\ padding: 8px 15px;\ background: #258;\ background:-moz-linear-gradient(rgba(34,85,136,0.7), rgba(34,85,136,0.9) 50%);\ background:-webkit-gradient(linear, 100% 0%, 100% 50%, from(rgba(34,85,136,0.7)), to(rgba(34,85,136,0.9)));\ font-weight: bold;\ border-left:1px solid #258;\ border-top:1px solid #258;\ border-bottom:1px solid #258;\ line-height: 120%;\ text-align: center;\ text-shadow:0 -1px 0 rgba(34,85,136,0.9);\ box-shadow: 0px 1px 1px rgba(255,255,255,0.3) inset;\ }\     .td_normal {\ width=' +
        window.parent.screen.width / 3 +
        ';\ padding: 8px 15px;\ border-bottom: 1px solid #84b2e0;\ border-left: 1px solid #84b2e0;\ text-align: center;\ word-break: break-all;\ }\     .td_last {\ width=' +
        window.parent.screen.width / 3 +
        ';\ padding: 8px 15px;\ border-bottom: 1px solid #84b2e0;\ border-left: 1px solid #84b2e0;\ border-right: 1px solid #84b2e0;\ text-align: center; }\                 .table_design img:hover{\  -webkit-transform:scale(1.2);transform: scale(1.2);\  }\ #largeImg{\ display:none;\ }\  #back-curtain{\ background: rgba(0, 0, 0, 0.5);\ display: none;\ position: absolute;\         left: 0;\         top: 0;\ }\   </style>';
    openWindow.write(htmlSentence);

    function CreateImageInfo(tag){

        var fileNama = tag.src.match(".+/(.+?)([\#;].*)?$")[1]
          , imgWidth = 0
          , resultImageInfo = '';

       	imgWidth = tag.width > screenWidth/3 ? Math.floor(screenWidth/3) : tag.width;

        resultImageInfo = '<tr>\
                            <td class="td_normal">\
                              <img src=' + GetAtrribute(tag, 'src') + ' width="' + imgWidth + '" />\
                            </td>\
                            <td class="td_normal">\
                              <a href="' + tag.src + '" download="' + fileNama + '">' + tag.src + '</a>\
                            </td>\
                            <td class="td_last">\
                              <p>' + GetAtrribute(tag, 'alt') + '</p>\
                            </td>\
                           </tr>';
       	return resultImageInfo;
    }

    function GetAtrribute(o, a) {
        return o.getAttribute(a);
    }
})();