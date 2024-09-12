let onoff = document.querySelector('#onoff');

document.querySelector('#btn').addEventListener('click', (e) => {
  if (onoff.checked) {
    console.log(onoff.value);
  } else {
    console.log('チェックされていません')
  }
}, false);
