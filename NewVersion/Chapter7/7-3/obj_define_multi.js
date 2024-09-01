let member = {
  name: '山田太郎',
}

Object.defineProperties(member, {
  age: {
    value: 25,
    writable: true,
    configurable: true,
    enumerable: true
  },
  gender: {
    value: 'female',
    writable: true,
    configurable: true,
    enumerable: true
  }
});

console.log(member);
