javascript:(function(){    
    let regex = new RegExp(/(www\.google\.com\/search)/)
      , isGoogleSearch = regex.test(location.href)
      , withinOneYearUrl = location.href + '&as_qdr=y'

    isGoogleSearch ? location.href = withinOneYearUrl : alert('Google検索のページではありません')
})();