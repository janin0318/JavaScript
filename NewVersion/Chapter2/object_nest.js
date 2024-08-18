let book = {
  title: 'JavaScript',
  author: {
    name: '山田',
    address: '住所'
  },
  price: 2800
};

console.log(book.author.name);
console.log(book['author']['name']);
