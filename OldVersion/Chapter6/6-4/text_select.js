document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('btn').addEventListener('click', function() {
    var name = document.getElementById('name').value;
    console.log(name);
    var result = document.getElementById('result');
    result.textContents = name;
  }, false);
}, false);
