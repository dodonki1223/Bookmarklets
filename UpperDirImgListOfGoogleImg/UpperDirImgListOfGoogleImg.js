javascript:(function() {
    var s = location.href ,
        upperDirectory;

    if(s.charAt(s.length-1)=='/'){

        var t              = s.substring(0,s.length-1);
            upperDirectory = t.substring(0,t.lastIndexOf('/'));

    } else {

        upperDirectory = s.substring(0,s.lastIndexOf('/'));

    }

    var url = 'https://www.google.co.jp/search?newwindow=1&site=&tbm=isch&source=hp&q=site:' + upperDirectory;
    window.open(url);

}
)();