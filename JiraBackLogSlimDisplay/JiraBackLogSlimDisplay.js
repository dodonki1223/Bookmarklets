javascript: (function () {
  const elems = document.querySelectorAll('span.ghx-extra-field-content');
  setInterval(() => {
    Array.prototype.forEach.call(elems, function (elem) {
      if (elem.innerText == '割り込み') {
        elem.parentElement.parentElement.parentElement.querySelector('.ghx-inner').setAttribute('style', 'color: red;')
      }
    });
    const label = document.querySelectorAll('div.ghx-plan-extra-fields.ghx-plan-extra-fields-1.ghx-row');
    label.forEach(label => label.setAttribute('style', 'display: none;'));
  }, 1000);
})();
