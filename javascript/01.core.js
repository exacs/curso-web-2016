'use strict';

// Numbers
var n1 = 4;
var n2 = 0.78;
var n3 = 0xF0C3;

console.log(n1, n2, n3);

/* ES6
var n4 = 0o71;
var n5 = 0b1001;
console.log(n4, n5);
*/

// Strings
var s1 = 'Hola';
var s2 = "Hola";
console.log(s1, s2);

/* ES6
var s3 = `Hola`;
console.log(s3);
*/

// Objects
var p = {x:3, y:4};
console.log(p.x);
console.log(p['x']);

// Arrays
var p2 = [3, [4,5], 1, true];
console.log(p2[0]);
console.log(p2[1][0]);
console.log(p2[3]);

// Arrays in Objects
var p3 = {
  x: [3, 4],
  y: 6,
  z: {
    a: 7,
    b: 'c'
  }
};

console.log(p3.x[1]);
console.log(p3.z.a);
console.log(p3['z']['a']);

// Objects in Arrays
var p4 = [3, {x:'ña'}, 'Hello'];
console.log(p4[1].x);

// Functions
var fun = function(x, y) {return x+y;};
console.log(fun(3, 5));

// Functions inside objects
var p5 = {
	x: 3,
	y: fun,
	z: function(x,y) {
		return x+y;
	}
};

console.log(p5.x);
console.log(p5.y(1,2));
console.log(p5.z(1,2));

// Function as arguments
var execute = function(fun, value) {
	return fun(value);
}
var double = function(i) {
	return i*2;
}
console.log(execute(double, 5));

// Function as returning value
var generate = function() {
	return function(t) {
		return t*2;
	};
}

console.log(generate()(4));
