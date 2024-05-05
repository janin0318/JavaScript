document.addEventListener('DOMContentLoaded', () => {
  let list = document.getElementById('list');
  let pic = document.getElementById('pic');
  let del = document.getElementById('del');

  list.addEventListener('click', (e) => {
    let isbn = e.target.getAttribute('data-isbn');

    if (isbn) {
      let img = document.createElement('img');
      img.src = 'https://www.wings.msn.to/books/' + isbn + '/' + isbn + '.jpg';
      img.alt = e.target.textContent;
      img.height = 150;
      img.width = 100;
      if (pic.getElementsByTagName('img').length > 0) {
        pic.replaceChild(img, pic.lastChild);
      } else {
        del.disabled = false;
        pic.appendChild(img);
      }
    }
  }, false);

  del.addEventListener('click', (e) => {
    pic.removeChild(pic.lastChild);
    del.disabled = true;
  }, false);
}, false);
