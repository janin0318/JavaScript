class Member {
  constructor(name) {
    this.name = name;
  }
}

class BusinessMember extends Member {
  constructor(name = '名無し', title = '社員') {
    super(name);
    this.title = title;
  }
}

let bm = new BusinessMember('佐々木太郎', '主任');
console.log(bm);
