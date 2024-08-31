function showMessage(msg) {
  if (arguments.length !== 1) {
    throw new Error('引数の数がおかしいです。');
  }
  console.log(msg);
}

try {
  showMessage('a', 'b');
} catch (e) {
  console.log(e.message);
}
