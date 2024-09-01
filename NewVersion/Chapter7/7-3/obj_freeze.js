'use strict';

let pet = {
  type: 'スノーホワイトハムスター',
  name: 'キラ',
  description: {
    title: 'memo'
  }
};

// Object.preventExtensions(pet);
// Object.seal(pet);
// Object.freeze(pet);
Object.freeze(pet.description);

// pet.name = '山田きら';
// delete pet.type;
// pet.weight = 42;
pet.description.title = 'メモ'

console.log(pet.description);
