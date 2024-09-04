class Member {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `こんにちは、${this.name}さん`;
  }
}

class BusinessMember extends Member {
  work() {
    return `${this.name}は働いています。`;
  }
}

let bm = new BusinessMember('佐藤太郎');
console.log(bm.greet());
console.log(bm.work());
