document.addEventListener('DOMContentLoaded', function () {
  // inner要素のclickイベントリスナー
  document.getElementById('inner').addEventListener('click', function (e) {
    window.alert('#innerリスナーが発生しました。');
  }, true);

  document.getElementById('inner').addEventListener('click', function (e) {
    window.alert('#innerリスナー２が発生しました。');
  }, true);

  document.getElementById('outer').addEventListener('click', function (e) {
    window.alert('#outerリスナーが発生しました。')
  }, true);
}, false);
