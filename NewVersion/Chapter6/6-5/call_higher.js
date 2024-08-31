function arrayWalk(data, callback) {
  for (let [key, value] of data.entries()) {
    callback(key,value);
  }
}

function showElement(key, value) {
  console.log(`${key} : ${value}`);
}

let list = [1, 2, 4, 8, 16];
arrayWalk(list,showElement);

console.log('下はアロー関数版')
arrayWalk(list, (key, value) => console.log(`${key} : ${value}`));
