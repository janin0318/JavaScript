document.addEventListener('DOMContentLoaded', function(event) {
  let btn = document.getElementById('btn');
  let listener = function() {
    window.alert('Hello World!');
  };

  btn.addEventListener('click', listener, false);

  // btn.removeEventListener('click', listener, false);
}, false);
