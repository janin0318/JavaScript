let obj = Object.create(Object.prototype, {
  name: {
    value: '佐々木太郎',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: {
    value: 23,
    writable: true,
    enumerable: false,
    configurable: true
  },
  gender: {
    value: 'male',
    writable: true,
    enumerable: true,
    configurable: true
  }
});

for (let prop of Object.keys(obj)) {
  console.log(Object.getOwnPropertyDescriptor(obj, prop));
}

for (let prop of Object.getOwnPropertyNames(obj)) {
  console.log(Object.getOwnPropertyDescriptor(obj, prop));
}
