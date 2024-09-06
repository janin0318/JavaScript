const AUTHOR = 'YAMADA, TARO';

export function getTriangleAre(base, height) {
  return base * height / 2;
}

export class Member {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  show() {
    return `こんにちは！${this.#name}、${this.#age}歳！`;
  }
}
