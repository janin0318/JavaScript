document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn').addEventListener('click', (e) => {
    var name = document.getElementById('name');
    var result = document.getElementById('result');
    result.innerHTML = 'こんにちは ' + name.value + 'さん！';
  }, false);
}, false);
