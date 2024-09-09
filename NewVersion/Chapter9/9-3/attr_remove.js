let images = document.querySelectorAll('img');

let deps = ['align', 'border', 'hspace', 'vspace', 'longdesc', 'name'];

for (let image of images) {
  for (let dep of deps) {
    image.removeAttribute(dep);
  }
}
