let book = {
  title: 'Javaポケットリファレンス',
  publisher: '技術評論社',
  price: 2680,
  other: {keyword: 'JavaSE', logo: 'logo.jpg'}
};

let price, title, memo;

({ price, title, memo = 'x'} = book);

console.log(title);
console.log(price);
console.log(memo);
