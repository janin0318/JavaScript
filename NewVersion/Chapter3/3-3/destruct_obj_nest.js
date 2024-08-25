let book = {
  title: 'Javaポケットリファレンス',
  publisher: '技術評論社',
  price: 2680,
  other: {keyword: 'JavaSE', logo: 'logo.jpg'}
};

let {title, other, other: {keyword}} = book;
console.log(title);
console.log(other);
console.log(keyword);
