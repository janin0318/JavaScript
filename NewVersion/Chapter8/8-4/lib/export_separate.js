const AUTHOR = 'YAMADA, Yoshihiro';

function getTriangleArea(base, height) {
  return base * height / 2;
}

class Member {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  show() {
    console.log(`こんにちは！${this.name}さん（${this.age}歳）！`)
  }
}

export {getTriangleArea, Member as MyAppMember}
