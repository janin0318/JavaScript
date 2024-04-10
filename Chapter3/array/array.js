var ary1 = ['Sato', 'Takae', 'Osada', 'Hio', 'Saitoh', 'Sato'];
var ary2 = ['Yabuki', 'Aoki', 'Moriyama', 'Yamada'];

with (console) {
  log(ary1.length);
  log(Array.isArray(ary1));
  log(ary1.toString());
  log(ary1.indexOf('Sato'));
  log(ary1.lastIndexOf('Sato'));

  log(ary1.concat(ary2));

  log(ary1.join('／'));

  log(ary1.slice(1));
  log(ary1.slice(1, 2));
}
