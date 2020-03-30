javascript: (() => {
  const containerElems      = document.querySelectorAll('.container-lg');
  const threadContentsElems = document.querySelectorAll('.comment-holder');
  function chnageMaxWidth(elem) {
    elem.setAttribute('style', 'max-width: ' + window.parent.screen.width  + 'px !important;');
  }
  setInterval(() => {
    Array.prototype.forEach.call(containerElems, function (elem) {
      chnageMaxWidth(elem);
      elem.setAttribute('style', 'max-width: ' + window.parent.screen.width  + 'px !important;');
    });
    Array.prototype.forEach.call(threadContentsElems, function (elem) {
      chnageMaxWidth(elem);
    });
  }, 1000);
})();
