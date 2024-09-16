let books = [
  {title: 'タイトル1', price: 1234},
  {title: 'タイトル2', price: 4321},
  {title: '鈴木茜音', price: 2345},
];

let frag = document.createDocumentFragment();

for (let book of books) {
  let li = document.createElement('li');
  li.textContent = `${book.title} : ${book.price}円`;
  frag.append(li);
}
document.querySelector('#list').append(frag);
// document.querySelector('#list').prepend(frag);
// document.querySelector('#list').before(frag);
// document.querySelector('#list').after(frag);
