'use strict';
// ejecutar con node:
// `node --es_staging --harmony_default_parameters`

// Properties of functions
const f = (a, b, c) => a+b+c;
console.log(f.length ===3);

// Rest operator
const g = (...x) => x.length;
console.log(g(1, 2, 3) ===3);
console.log(g(1, 2)    ===2);

// Spread operator
console.log(g([1, 2, 3])    ===1);
console.log(g(...[1, 2, 3]) ===3);

// Default parameters
const h = (x, y, z=3) => x+y+z;
console.log(h(1,2)  ===6);

// Currify example
const ip = (a, b, c, d) => [a, b, c, d].join('.');

console.log(ip(192, 168, 0, 1)  ==='192.168.0.1');

const currify = function(fn) {
  const gn = (...a) => a.length>=fn.length ? fn(...a) : (...r) => gn(...a, ...r);
  return gn;
}

const curried = currify(ip);
const local = curried(192, 168);

console.log(local(0, 0)  ==='192.168.0.0');
console.log(local(0, 1)  ==='192.168.0.1');
