javascript: (() => {
  const elems = document.querySelectorAll('span.ghx-extra-field-content');
  setInterval(() => {
    Array.prototype.forEach.call(elems, function (elem) {
      if (elem.innerText == '割り込み') {
        let target = elem.parentElement.parentElement.parentElement.querySelector('.ghx-inner');
        target.setAttribute('style', 'color: green;')
        target.innerText = '★割り込み★ ' + target.innerText.substring('★割り込み★ '.length); 
      } else if (elem.innerText == '期限付き') {
        let target = elem.parentElement.parentElement.parentElement.querySelector('.ghx-inner');
        target.setAttribute('style', 'color: red;')
        target.innerText = '★期限付き★ ' + target.innerText.substring('★期限付き★ '.length); 
        elem.parentElement.parentElement.parentElement.querySelector('.ghx-inner').setAttribute('style', 'color: red;')
      }
    });
    const label = document.querySelectorAll('div.ghx-plan-extra-fields.ghx-plan-extra-fields-1.ghx-row');
    label.forEach(label => label.setAttribute('style', 'display: none;'));
  }, 1000);
})();
