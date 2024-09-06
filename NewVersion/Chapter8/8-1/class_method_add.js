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

Member.prototype.greet = function () {
  console.log(`こんにちは、${this.name}さん`);
};

m.show();
m.greet();

console.log(Member.prototype)
