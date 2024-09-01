let member = {
  name: '山田太郎',
  age: 18
};

Object.defineProperty(member, 'age', {
  value: 30,
  writable: false,
  configurable: true,
  enumerable: true
});

Object.defineProperty(member, 'gender', {
  value: 'male',
  writable: true,
  configurable: true,
  enumerable: true
});

for (let prop in member) {
  console.log(`${prop}: ${member[prop]}`);
}
