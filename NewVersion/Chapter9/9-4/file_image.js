let file = document.querySelector('#file');
let reader = new FileReader();

reader.addEventListener('load', (e) => {
  document.querySelector('#result').src = reader.result;
})

file.addEventListener('change', (e) => {
  reader.readAsDataURL(file.files[0]);
})
