let title = document.querySelector('#title');
let url = document.querySelector('#url');
let list = document.querySelector('#list');

document.querySelector('#btn').addEventListener('click', function () {
  let li = document.createElement('li');
  let anchor = document.createElement('a');
  anchor.href = url.value;
  anchor.textContent = title.value;
  li.append(anchor);
  list.append(li);
}, false);
