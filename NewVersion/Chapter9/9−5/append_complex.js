let books = [
  {title: 'タイトル1', price: 1234},
  {title: 'タイトル2', price: 4321},
  {title: 'タイトル3', price: 2345},
];

let list = document.querySelector('#list');
for (let book of books) {
  let li = document.createElement('li');
  li.textContent = `${book.title} : ${book.price}`;
  list.appendChild(li);
}
