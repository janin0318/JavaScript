let elem = document.querySelector('#elem');

elem.addEventListener('mouseenter', function() {
  this.style.backgroundColor = 'Yellow';
})

elem.addEventListener('mouseleave', function() {
  this.style.backgroundColor = '';
})
