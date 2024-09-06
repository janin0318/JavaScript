class Member {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `こんにちは、${this.name}さん`;
  }
}

class BusinessMember extends Member {
  // greetメソッドをオーバーライド
  greet(title) {
    return `こんにちは、${this.name}${title}`;
  }
}

let bm = new BusinessMember('山田太郎');
console.log(bm.greet('課長'));
