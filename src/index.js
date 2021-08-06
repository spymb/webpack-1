import x from './x.js'
import png from './assets/wp1.png'
console.log(png);

/* console.log(x); */

const div1 = document.getElementById('div1')
console.log(div1);
div1.innerHTML = `<img src="${png}">`

