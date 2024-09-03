class Member {

  // プライベートプロパティ
  #name = '';
  #age = 0;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  // プライベートメソッド
  #createMessage() {
    return `私の名前は${this.#name}、${this.#age}歳です。`;
  }

  // パブリックメソッド
  show() {
    console.log(this.#createMessage());
  }
}

let m = new Member('田中太郎', 25);
m.show();
console.log(m.#name);
m.#createMessage();
