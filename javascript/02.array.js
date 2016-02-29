'use strict';

var arr = [4, 5, 9];

// Propiedades
console.log(arr.length);

// Insertar un elemento al final
arr.push(4);
console.log(arr);

// Eliminar el elemento del final y retornarlo
var a = arr.pop();
console.log(arr);
console.log(a);

// Insertar un elemento al principio
arr.unshift(1);
console.log(arr);

// Elminar el elemento del principio y retornarlo
var b = arr.shift();
console.log(arr);
console.log(b);

// Buscar elemento
var b = arr.indexOf(5);
console.log(b);

// Ordenar array
arr.sort();
console.log(arr);
