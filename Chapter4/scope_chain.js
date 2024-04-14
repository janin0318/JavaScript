var y = 'Global';

function outerFunc() {
  var y = 'Local Outer';

  function innerFunc() {
    var z = 'Local inner';
    console.log(z);
    console.log(y);
    console.log(x);
  }

  innerFunc();
}

outerFunc();
