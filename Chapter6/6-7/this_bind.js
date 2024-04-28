document.addEventListener('DOMContentLoaded', function () {
  var data = {
    title: 'Javaポケットリファレンス',
    price: 2690,
    show: function () {
      console.log(this.title + '/' + this.price + '円');
    }
  };

  document.getElementById('btn').addEventListener('click', data.show.bind(data), false);
})
