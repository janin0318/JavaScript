let param = 'height, width';
let formula = 'return height * width';
let diamond = new Function(param, formula);

console.log(diamond(5,2));
