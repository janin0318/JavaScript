class Member {
  constructor(name = '名無し', age = 0) {
    this.name = name;
    this.age = age;
  }

  show() {
    console.log(`私の名前は${this.name}、${this.age}歳です。`);
  }
}

let m = new Member('田中太郎', 25);
console.log(Object.getPrototypeOf(m));
console.log(Member.prototype === Object.getPrototypeOf(m));
