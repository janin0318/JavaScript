let y = 'Global';

function outerFunction() {
  let y = 'Local Outer';

  function innerFunction() {
    let z = 'Local Inner';
    console.log(z);
    console.log(y);
    console.log(x);
  }

  innerFunction();
}

outerFunction();
