let images = document.querySelectorAll('img');

for (let img of images) {
  if (!img.hasAttribute('src')) {
    img.setAttribute('src', 'https://wings.msn.to/image/wings.jpg');
  }
}
