let img = document.querySelector('#logo');
console.log(img.getAttribute('title'));
console.log(img.getAttribute('src'));

for (let attribute of img.attributes) {
  console.log(attribute);
}
