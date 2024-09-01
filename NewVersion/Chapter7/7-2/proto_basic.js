let parent = {
  x: 10,
  y: 20
};

let obj = Object.create(parent, {
  z: {
    value: 30,
    writable: true,
    configurable: true,
    enumerable: true
  }
});

console.log(obj);
console.log(Object.getPrototypeOf(obj));
console.log(obj);

for (let prop in obj) {
  console.log(`${prop}: ${obj[prop]}`);
}
