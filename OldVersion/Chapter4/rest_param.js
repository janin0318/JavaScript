function sum(...nums) {
  let result = 0;
  for (let num of nums) {
    if (typeof num !== 'number') {
      throw new Error('指定値が数値ではありません。' + num);
    }
    result += num;
  }
  return result;
}

try {
  console.log(sum(1, 2, 3, 4, 5));
} catch (e) {
  console.error(e);
}
