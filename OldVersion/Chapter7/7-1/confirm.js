document.addEventListener('DOMContentLoaded', function(e) {
  document.getElementById('fm').addEventListener('submit', function(e) {
    if (!window.confirm('ベージを送信してもいいですか？')) {
      e.preventDefault();
      console.log('キャンセル');
    }
    console.log('OK')
  }, false);
}, false);
