'use strict';

var arr = [4, 5, 9];

// forEach
arr.forEach(e => {console.log(e);});

// Map
var doubled = arr.map(t => t*2);
console.log(doubled);

// Reduce
var total = arr.reduce((t, acc) => t+acc, 0);
console.log(total);

// Filter
var evens = arr.filter(t => t%2);
console.log(evens);

// Concat
var arr2 = arr.concat(3);
console.log(arr2);

// Some
var someGood = arr.some(t => t >= 5);
console.log(someGood);

// Every
var allGood = arr.every(t => t >= 5);
console.log(allGood);
