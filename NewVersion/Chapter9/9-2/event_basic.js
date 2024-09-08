let pic = document.querySelector("#cover");

pic.addEventListener("mouseenter", function (e) {
  this.src = 'images/wings.jpg';
}, false);

pic.addEventListener("mouseleave", function (e) {
  this.src = 'images/wings_mini.jpg';
}, false);
