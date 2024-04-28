document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn').addEventListener('click', (e) => {
    var target = e.target;
    console.log('発生元' + target.nodeName + '/' + target.id);
    console.log('種類：' + e.type);
  }, false);
}, false);
