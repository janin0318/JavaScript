document.addEventListener('DOMContentLoaded', function(event) {
  let elem = document.getElementById('elem');

  elem.addEventListener('click', function(event) {
    this.classList.toggle('highlight');
  }, false);
}, false);
