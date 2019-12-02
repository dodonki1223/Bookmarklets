javascript: (() => {
  const elems = document.querySelectorAll('span.ghx-extra-field-content');
  function changeStyle(elem, label, color) {
    if (elem.innerText !== label) return;
    let target = elem.parentElement.parentElement.parentElement.querySelector('.ghx-inner');
    target.setAttribute('style', 'color: ' + color + ';');
    if (target.innerText.indexOf(label) != -1) return;
    target.innerText = '★' + label + '★ ' + target.innerText.substring('★' + label + '★ '.length);
  }
  setInterval(() => {
    Array.prototype.forEach.call(elems, function (elem) {
      changeStyle(elem, '割り込み', 'green');
      changeStyle(elem, '期限付き', 'red');
    });
    const label = document.querySelectorAll('div.ghx-plan-extra-fields.ghx-plan-extra-fields-1.ghx-row');
    label.forEach(label => label.setAttribute('style', 'display: none;'));
  }, 1000);
})();
