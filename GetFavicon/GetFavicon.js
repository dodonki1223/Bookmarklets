javascript:(function(){

    var url     = 'https://www.google.com/s2/favicons?domain=' + location.hostname
      , screenWidth  = window.parent.screen.width / 2
      , screenHeight = window.parent.screen.height / 2
      , winName      = '_blank'
      , option       = 'width=' + screenWidth + ',height=' + screenHeight + ',scrollbars=yes,resizeable=yes,menubar=no,location=no';

    window.open(url, winName, option);
    
})();