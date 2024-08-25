let book = {
  title: 'Javaポケットリファレンス',
  publisher: '技術評論社',
  price: 2680,
  other: {keyword: 'JavaSE', logo: 'logo.jpg'}
};

let {title: subject, publisher: company} = book;
console.log(subject);
console.log(company);
