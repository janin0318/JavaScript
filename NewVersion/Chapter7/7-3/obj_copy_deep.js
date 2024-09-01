let obj = {
  a: 10,
  b: {
    c: 20
  }
}

let copy = JSON.parse(JSON.stringify(obj));

console.log(copy);

obj.b.c = 100;

console.log(copy);
console.log(obj);
