import('./lib/util.js').then(util => {
  console.log(util.getTriangleAre(10, 2));

  let m = new util.Member('田中太郎', 25);
  console.log(m.show());
})
