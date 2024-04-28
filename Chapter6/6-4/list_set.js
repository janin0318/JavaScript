document.addEventListener('DOMContentLoaded', function() {
  var setOptValue = function(name, value) {
    var opts = document.getElementById(name);
    for (var i = 0; i < opts.length; i++) {
      var opt = opts.item(i);
      if (value.indexOf(opt.value) > -1) {
        opt.selected = true;
      }
    }
  };
  setOptValue('food', ['餃子', '焼き肉']);
}, false);
