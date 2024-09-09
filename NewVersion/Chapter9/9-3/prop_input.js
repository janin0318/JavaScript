let member = document.querySelector('#name');
document.querySelector('#btn').addEventListener('click', (e) => {
  console.log(member.value);
  console.log(member.getAttribute('value'));
})
