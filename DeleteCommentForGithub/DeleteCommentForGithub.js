javascript:(() => {
  const elems = document.querySelectorAll('td.line-comments');
  Array.prototype.forEach.call(elems, function (elem) {
    elem.style.display == 'none' ? elem.style.display = '' : elem.style.display = 'none';
  });
})();
