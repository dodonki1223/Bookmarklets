javascript:(function() {

    let title      = '日本語のページ以外検索'
      , defaultStr = '検索したい文字列を入力してください'
      , inputStr   = window.prompt(decodeURIComponent(title), decodeURIComponent(defaultStr));

    if(inputStr == decodeURIComponent(defaultStr) || inputStr == '' || inputStr == null) return false;

    let url = 'https://www.google.co.jp/search?q=' + encodeURIComponent(inputStr) + '&lr=-lang_ja';

    window.open(url);

}())
;