let s = document.querySelector('#food');

let opts = s.firstElementChild;

console.log(opts);

while (child) {
  console.log(child.value);
  child = child.nextElementSibling;
}
