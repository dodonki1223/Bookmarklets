javascript:(function() {
  const pullRequests = [];

  document.querySelectorAll('div.flex-auto.min-width-0.p-2.pr-3.pr-md-2>a').forEach(a => {
    pullRequests.push({title: a.innerHTML, href: a.href});
  });

  pullRequests.map(request => console.log(request.title, request.href));
})();
