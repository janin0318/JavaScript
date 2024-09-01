let i = 0;
let member = {
  name: '田中太郎',
  birth: new Date(1970, 4, 26),
  [`memo${++i}`]: '正社員',
  [`memo${++i}`]: '関東支部',
  [`memo${++i}`]: '関東'
};

console.log(member);
