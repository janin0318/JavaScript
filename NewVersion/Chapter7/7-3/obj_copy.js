let pet = {
  name: 'キラ',
  description: {
    brith: '2020-01-02'
  }
};

let copy = Object.assign({}, pet);

console.log(copy);

console.log(pet === copy);

// 浅いコピーのため、descriptionは変更に対して影響が出る
pet.description.brith = '2014-02-15';

console.log(copy);
