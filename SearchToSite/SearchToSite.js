javascript:(function(){

    var inputStr = window.prompt(decodeURIComponent('サイト内検索'), decodeURIComponent('検索したい文字列を入力して下さい'));
    if(inputStr == decodeURIComponent('検索したい文字列を入力して下さい') || inputStr == '' || inputStr == null) return false;

    var encodeStr    = encodeURIComponent(inputStr)
      , pageLocation = location.host;

    window.open('https://www.google.co.jp/search?q=site:'+pageLocation+' '+encodeStr);
    
})();