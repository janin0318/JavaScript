document.addEventListener('DOMContentLoaded', function () {
  // inner要素のclickイベントリスナー
  document.getElementById('inner').addEventListener('click', function (e) {
    window.alert('#innerリスナーが発生しました。');
    e.stopPropagation();
  }, false);

  document.getElementById('inner').addEventListener('click', function (e) {
    window.alert('#innerリスナー２が発生しました。');
  }, false);

  document.getElementById('outer').addEventListener('click', function (e) {
    window.alert('#outerリスナーが発生しました。')
  }, false);
}, false);
