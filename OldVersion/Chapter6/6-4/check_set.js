document.addEventListener("DOMContentLoaded", function() {
  var setCheckValue = function(name, value) {
    var elems = document.getElementsByName(name);

    for (var i = 0; i < elems.length; i++) {
      var elem = elems.item(i);
      if (value.indexOf(elem.value) > -1) {
        elem.checked = true;
      }
    }
  };

  setCheckValue('food', ['焼き肉', '餃子']);
})
