class MyIterator {
  constructor(data) {
    this.data = data;
  }

  *[Symbol.iterator]() {
    let current = 0;
    while (current < this.data.length) {
      yield this.data[current++];
    }
  }
}

let mi = new MyIterator(['a', 'b', 'c']);

for (let i of mi) {
  console.log(i);
}
