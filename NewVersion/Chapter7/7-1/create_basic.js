'use strict';

let member = Object.create(Object.prototype, {
  name: {
    value: '佐藤太郎',
    writable: true,
    configurable: true,
    enumerable: true
  },
  birth: {
    value: new Date(1970, 4, 26),
    writable: true,
    configurable: true,
    enumerable: true
  },
  memo: {
    value: '仮入部期間です。',
    writable: true,
    configurable: true,
    enumerable: true
  }
});

console.log(member);

// プロパティ値への書き込み
member.memo = '正式加入しました。'

console.log(member);

for (let prop in member) {
  console.log(`${prop}: ${member[prop]}`);
}

delete member.memo;
console.log(member);
