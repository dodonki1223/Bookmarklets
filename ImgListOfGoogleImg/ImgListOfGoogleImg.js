javascript:(function() {

    var url = 'https://www.google.co.jp/search?newwindow=1&site=&tbm=isch&source=hp&q=site:' + window.location.href;
    window.open(url);

}
)();