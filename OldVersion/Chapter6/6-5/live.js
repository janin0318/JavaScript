document.addEventListener('DOMContentLoaded', () => {
  let li = document.getElementsByTagName('li');
  console.log('変更前' + li.length);

  let ul = document.getElementById('list');
  ul.appendChild(document.createElement('li'));
  console.log('変更後' + li.length);
})
