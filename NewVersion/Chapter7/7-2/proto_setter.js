let parent = Object.create(Object.prototype, {
  x: {
    get() {
      return this._x ?? 10;
    },
    set(value) {
      console.log(`setter is called: ${value}`);
      this._x = value;
    },
    configurable: true,
    enumerable: true
  },
  y: {
    value: 20,
    writable: true,
    configurable: true,
    enumerable: true
  }
});

let object = Object.create(parent, {
  z: {
    value: 30,
    writable: true,
    configurable: true,
    enumerable: true
  }
})

console.log(parent);

object.x = 20;

console.log(object);
console.log(parent);
