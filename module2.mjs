// import export modules from other files 

// import dx from './module1.mjs' // --> will access the default export

import dx, { a, b, c, d } from './module1.mjs'

console.log(dx);
console.log(a);
console.log(b);
console.log(c);
console.log(d);