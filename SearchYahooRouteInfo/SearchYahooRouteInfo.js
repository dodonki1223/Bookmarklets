javascript:(function(){

	var departure = window.prompt(decodeURIComponent('Yahoo路線情報検索'), decodeURIComponent('出発地点を入力して下さい'));
	if(departure == decodeURIComponent('出発地点を入力して下さい') || departure == '' || departure == null) return false;

	var arrival   = window.prompt(decodeURIComponent('Yahoo路線情報検索'), decodeURIComponent('到着地点を入力して下さい'));
	if(arrival == decodeURIComponent('到着地点を入力して下さい') || arrival == '' || arrival == null) return false;

	var nowTime = getCurrentTime();
	var rideTime = window.prompt(decodeURIComponent('Yahoo路線情報検索\n　乗車時間を「yyyy/mm/dd hh:mm」形式で入力して下さい\n　※日付・時間のチェックはしないので正しい形式で入力して下さい'), nowTime);

	var year  = rideTime.substr(0,4)
	  , month = rideTime.substr(5,2)
	  , day   = rideTime.substr(8,2)
	  , hour  = rideTime.substr(11,2)
	  , time1 = rideTime.substr(14,1)
	  , time2 = rideTime.substr(15,1);

	var screenWidth  = (window.screen.width - 15) / 2
	  , screenHeight = window.screen.height - 95
	  , winName      = '_blank'
	  , winleft1     = 0;

	window.screenX >= window.screen.width ? winleft1 = window.screen.width : winleft1 = 0;

    var winOption1 = 'left=' + winleft1 + ',width=' + screenWidth + ',height=' + screenHeight + ',scrollbars=yes,resizeable=yes,menubar=yes,location=no'
      , winOption2 = 'left=' + (winleft1 + screenWidth + 15) + ',width=' + (screenWidth - 15) + ',height=' + screenHeight + ',scrollbars=yes,resizeable=yes,menubar=yes,location=no';

	window.open('http://transit.yahoo.co.jp/search/result?flatlon=&from=' + departure +
	            '&tlatlon=&to=' + arrival + '&via=&via=&via=&y=' + year + '&m=' + month + '&d=' + day + '&hh=' + hour + '&m2=' + time2 + '&m1=' + time1 +
	            '&type=1&ticket=ic&shin=1&ex=1&s=0&expkind=1&ws=2',winName,winOption1);
	window.open('http://transit.yahoo.co.jp/search/result?flatlon=&from=' + departure +
	            '&tlatlon=&to=' + arrival + '&via=&via=&via=&y=' + year + '&m=' + month + '&d=' + day + '&hh=' + hour + '&m2=' + time2 + '&m1=' + time1 +
	            '&type=2&ticket=ic&shin=1&ex=1&s=0&expkind=1&ws=2',winName,winOption2);

	function getCurrentTime() {
		var now = new Date();
		var res = "" + now.getFullYear() + "/" + padZero(now.getMonth() + 1) +
			      "/" + padZero(now.getDate()) + " " + padZero(now.getHours()) + ":" + padZero(now.getMinutes());
		return res;
	}

	function padZero(num) {
		var result;
		if (num < 10) {
			result = "0" + num;
		} else {
			result = "" + num;
		}
		return result;
	}

})();