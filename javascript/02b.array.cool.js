'use strict';

var arr = [4, 5, 9];

// forEach
arr.forEach(function (e) {
  console.log(e);
});

// Map
var doubled = arr.map(function(t) {
  return t*2;
});
console.log(doubled);

// Reduce
var total = arr.reduce(function(t, acc) {
  return t+acc;
}, 0);
console.log(total);

// Filter
var evens = arr.filter(function(t) {
  return t%2;
});
console.log(evens);

// Concat
var arr2 = arr.concat(3);
console.log(arr2);

// Some
var someGood = arr.some(function(t) {
  return t >= 5;
})
console.log(someGood);

// Every
var allGood = arr.every(function(t) {
  return t >= 5;
})
console.log(allGood);
