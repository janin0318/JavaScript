document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('isbn').addEventListener('change', () => {
    location.href = 'https://www.wings.msn.to/index.php/-/A-03/' + this.value;
  }, false);
}, false)
