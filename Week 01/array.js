let fruits = ['apple', 'banana', 'mango']
let intfruits = new Array('kiwi', 'dragon fruit', 'avacado')

console.log(typeof (fruits));
console.log(typeof (intfruits));

console.log(fruits[0]);
console.log(fruits.length);

fruits[0] = 'blueberry';
console.log(fruits[0]);


fruits.push("new item");//adds in last of array
console.log(fruits);

fruits.unshift("new item2"); //adds at 0th index
console.log(fruits);

fruits.pop(); //pops the last element
console.log(fruits);
console.log(fruits.pop());



