javascript:(function(){
	var inputStr = window.prompt(decodeURIComponent('Wikipedia検索&Google画像検索'), decodeURIComponent('検索したい文字列を入力して下さい'));
	if(inputStr == decodeURIComponent('検索したい文字列を入力して下さい') || inputStr == '' || inputStr == null) return false;
	var url1         = 'https://ja.wikipedia.org/wiki/' + encodeURIComponent(inputStr)
	  , url2         = 'http://www.google.co.jp/search?newwindow=1&site=&tbm=isch&source=hp&q=' + encodeURIComponent(inputStr)
	  , screenWidth  = (window.screen.width - 15) / 2
	  , screenHeight = window.screen.height - 95
	  , winName      = '_blank'
	  , winleft1     = 0;

	window.screenX >= window.screen.width ? winleft1 = window.screen.width : winleft1 = 0;

	var winOption1 = 'left=' + winleft1 + ',width=' + screenWidth + ',height=' + screenHeight + ',scrollbars=yes,resizeable=yes,menubar=yes,location=no'
	  , winOption2 = 'left=' + (winleft1 + screenWidth + 15) + ',width=' + (screenWidth - 15) + ',height=' + screenHeight + ',scrollbars=yes,resizeable=yes,menubar=yes,location=no';

	window.open(url1, winName, winOption1);
	window.open(url2, winName, winOption2);
} )();