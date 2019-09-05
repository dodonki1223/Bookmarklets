javascript:(function() {
    const elems = document.querySelectorAll('div.js-issue.ghx-selected');
    let w = 0;
    let d = 0;
    let h = 0;
    let m = 0;
    Array.prototype.forEach.call(elems, function(elem) {
        const estimate = elem.querySelector('.aui-badge').innerText;
        w += getEstimateValue('w', estimate);
        d += getEstimateValue('d', estimate);
        h += getEstimateValue('h', estimate);
        m += getEstimateValue('m', estimate);
    });
    console.log('w：' + w + ' d：' + d + ' h：' + h + ' m：' + m);
    const oneWeek = (24 * 60) * 7;
    const oneDay = 24 * 60;
    const oneHour = 60;
    let sumMinuts = (w * oneWeek) + (d * oneDay) + (h * oneHour) + m;
    console.log('合計：' + sumMinuts + '分');

    let hour = Math.floor(sumMinuts / oneHour);
    let minuts = sumMinuts - (hour * 60);
    let day = Math.floor(hour / 24);
    hour = hour - (day * 24);
    let week = Math.floor(day / 7);
    day = day - (week * 7);

    alert(week + '週' + day + '日' + hour + '時間' + minuts + '分');

    function getEstimateValue(estimateType, estimate) {
        return ( estimate.indexOf(estimateType) != -1 ) ? Number(estimate.slice(0, estimate.length - 1)) : 0;
    }
})();
