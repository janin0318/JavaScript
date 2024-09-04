class Member {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `こんにちは、${this.name}さん`;
  }
}

class BusinessMember extends Member {
  greet() {
    return `■${super.greet()}■`;
  }
}

let bm = new BusinessMember('田中太郎');
console.log(bm.greet());
