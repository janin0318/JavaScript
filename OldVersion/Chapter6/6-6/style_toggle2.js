document.addEventListener('DOMContentLoaded', function () {
  var elem = document.getElementById('elem');

  elem.addEventListener('click', function () {
    var classes = this.className.split(' ');

    // classにhighlightがあるか？
    var index = classes.indexOf('highlight');

    if (index === -1) {
      // なければ追加
      classes.push('highlight');
    } else {
      // あれば除去
      classes.splice(index, 1);
    }

    // クラスを結合
    this.className = classes.join(' ');
  }, false);
}, false);
