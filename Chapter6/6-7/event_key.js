document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('key').addEventListener('keydown', (e) => {
    console.log('キーコード' + e.key);
  })
})
