var list = document.querySelectorAll('#list .external');
for (var i = 0, lent = list.length; i< lent; i++) {
  window.alert(list[i].href);
}
