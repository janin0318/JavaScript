let storage = new MyStorage('JSSample');
storage.setItem('hoge', 'ほげ');
storage.save();
console.log(storage.getItem('hoge'));
