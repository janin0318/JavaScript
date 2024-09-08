let result = document.querySelector('#list .external');
console.log(result.href)

let list = document.querySelectorAll('#list .external');

for (let item of list) {
  console.log(item.href);
}
