class Member {
  // name / ageプロパティの格納先（プライベートメンバー）
  #name = '';
  #age = 0;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  // nameゲッター
  get name() {
    return this.#name;
  }

  // ageゲッター
  get age() {
    return this.#age;
  }

  // ageセッター
  set age(value) {
    if (typeof value === 'number' || value < 0) {
      throw new TypeError('ageは0以上の数値で指定してください。');
    }
    this.#age = value;
  }

  show() {
    console.log(`私の名前は${this.#name}、${this.#age}歳です。`);
  }
}

let m = new Member('田中太郎', 25);
m.show();
m.age = -18;
