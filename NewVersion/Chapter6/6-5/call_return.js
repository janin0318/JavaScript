function getMaxMin(...nums) {
  return [Math.max(...nums), Math.min(...nums)];
}

let result = getMaxMin(5, 6, 9, 10, -100, 90);
console.log(result);

let [max, min] = getMaxMin(5, 6, 9, 10, -100, 90);
console.log(max);
console.log(min);
