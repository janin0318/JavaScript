document.addEventListener('DOMContentLoaded', () => {
  var books = [
    {title: 'タイトル１', price: 2500},
    {title: 'タイトル２', price: 3000},
    {title: 'タイトル３', price: 4000},
  ];

  var list = document.getElementById('list');

  for (var i = 0, len = books.length; i < len; i++) {
    var book = books[i];
    var li = document.createElement('li');
    var text = document.createTextNode(book.title + ': ' + book.price);
    li.appendChild(text);
    list.appendChild(li);
  }
}, false);
