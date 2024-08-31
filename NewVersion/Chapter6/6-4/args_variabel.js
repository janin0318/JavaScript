function sum(...nums) {
  let result = 0;

  for (num of nums) {
    if (typeof num !== "number") {
      throw new Error(`指定値が数字ではありません。${num}`);
    }
    result += num;
  }

  return result;
}

console.log(sum(1, 2, 3, 4, 5));
