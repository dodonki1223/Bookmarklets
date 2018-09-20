javascript:(function() {

    var url          = 'http://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=' + location.href
      , screenWidth  = window.parent.screen.width / 2
      , screenHeight = window.parent.screen.height / 2
      , winName      = '_blank'
      , option       = 'width=' + screenWidth + ',height=' + screenHeight + ',scrollbars=yes,resizeable=yes,menubar=no,location=no';

    window.open(url, winName, option);

})();