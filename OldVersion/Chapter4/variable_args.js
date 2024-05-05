function sum() {
  var result = 0;
  for (var i = 0, lent = arguments.length; i < lent; i++) {
    var tmp = arguments[i];
    if (typeof (tmp) !== "number") {
      throw new Error('引数が数値ではありません。');
    }
    result += tmp;
  }
  return result;
}

try {
  console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));
} catch (e) {
  console.error(e);
}

try {
  console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 'a'));
} catch (e) {
  console.error(e);
}
