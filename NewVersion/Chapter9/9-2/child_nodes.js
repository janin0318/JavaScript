let s = document.querySelector('#food');

let opts = s.childNodes;

for (let opt in opts) {
  if (opt.nodeType === Node.ELEMENT_NODE) {
    console.log(opt.value);
  }
}
