//Array.prototype.at()
//takes an integer value and returns the value at that index

const arr = [1, 2, 3, 4, 5]
let index = 2;
console.log(arr.at(2)); //3


//Array.prototype.concat()
//used to merge two or more arrays

const arr1 = [6, 7, 8, 9]
const arr2 = [1, 2, 3, 4]
const arr3 = arr1.concat(arr2);
console.log(arr3);


//Array.prototype.copyWithin()
//The copyWithin() method copies array elements to another position in an array.
//SYNTAX = array.copyWithin(target, start, end)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.copyWithin(2, 0));//Copy to index 2, all elements from index 0

console.log(fruits.copyWithin(2, 0, 2));//Copy to index 2, the elements from index 0 to 2

//Array.prototype.entries()
//returns a new array iterator object that contains the key/value pairs for each index in the array.
const array1 = ["a", "b", "c"];
const iterator1 = array1.entries();
console.log(iterator1.next().value);

for (const element of iterator1) {
  console.log(element);
}



//Array.prototype.every()
//The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

const isbelow10 = (value) => value < 10
console.log(arr.every(isbelow10));//true



//Array.prototype.fill()
//The fill() method of Array instances changes all elements within a range of indices in an array to a static value. It returns the modified array.
const a1 = [1, 2, 3, 4];
console.log(a1.fill(0, 2, 4));
console.log(a1.fill(5, 1));
console.log(a1.fill(6));



//Array.prototype.filter()
//filtered down the elements from the given array that pass the test implemented by the provided function.
const a2 = ['prerana', 'pravin', 'bhoi', 'pooja']
const result = a2.filter((word) => word.length > 6);
console.log(result);



//Array.prototype.find()
//The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
const a3 = [5, 12, 8, 130, 44];
const found = a3.find((element) => element > 10);

console.log(found);



//Array.prototype.findIndex()
//The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

const isLargeNumber = (element) => element > 13;

console.log(a3.findIndex(isLargeNumber));


//Array.prototype.findLast()
//The findLast() method of Array instances iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.

const res = a3.findLast((element) => element > 45);

console.log(res);


//Array.prototype.findLastIndex()
//The findLastIndex() method of Array instances iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

const LargeNumber = (element) => element > 45;

console.log(a3.findLastIndex(LargeNumber));



//Array.prototype.flat()
//The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const ar1 = [0, 1, 2, [3, 4]];

console.log(ar1.flat());


//Array.prototype.flatMap()
//The flatMap() method maps all array elements and creates a new flat array.
//flatMap() creates a new array from calling a function for every array element.

const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap(x => [x, x * 10]);
console.log(newArr);



//Array.prototype.forEach()
//The forEach() method of Array instances executes a provided function once for each array element.

const myarr1 = ["a", "b", "c"];
myarr1.forEach((element) => console.log(element));



//Array.prototype.includes()
//The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.
console.log(myarr1.includes("a"));//true
console.log(myarr1.includes("z"));//false


//Array.prototype.indexOf()
//The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.

const beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log(beasts.indexOf("bison"));//1
console.log(beasts.indexOf("giraffe"));//-1




//Array.prototype.join()
//The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

const elements = ["Fire", "Air", "Water"];

console.log(elements.join());




//Array.prototype.keys()
//The keys() method of Array instances returns a new array iterator object that contains the keys for each index in the array.

const myarray1 = ["a", "b", "c"];
const iterator = myarray1.keys();

for (const key of iterator) {
  console.log(key);//0 1 2
}







//Array.prototype.lastIndexOf()
//The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

const animals = ["Dodo", "Tiger", "Penguin", "Dodo", "Tiger"];

console.log(animals.lastIndexOf("Dodo"));//3





//Array.prototype.map()
//The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

const array5 = [1, 4, 9, 16];
const map1 = array5.map((x) => x * 2);
console.log(map1);




//Array.prototype.pop()
//The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.

const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

console.log(plants.pop());//tomato
console.log(plants);




//Array.prototype.push()
//The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.

const animal = ["pigs", "goats", "sheep"];

const count = animal.push("cows");
console.log(count);//4
console.log(animal);



//Array.prototype.reduce()

const array = [1, 2, 3, 4, 5];
const initialValue = 0;
const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
console.log(sumWithInitial);


//Array.prototype.reduceRight()
//The reduceRight() method of Array instances applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

const array7 = [
  [0, 1],
  [2, 3],
  [4, 5],
];
const result1 = array7.reduceRight((accumulator, currentValue) =>
  accumulator.concat(currentValue),
);
console.log(result1);




//Array.prototype.reverse()
const array8 = ["one", "two", "three"];
const reversed = array8.reverse();
console.log("reversed:", reversed);







//Array.prototype.shift()
//The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.
const elementfirst = array8.shift();
console.log(array8);
console.log(elementfirst);





//Array.prototype.slice()
//The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

const animalss = ["ant", "bison", "camel", "duck", "elephant"];
console.log(animalss.slice(2));
console.log(animalss.slice(2, 4));
console.log(animalss.slice(1, 5));




//Array.prototype.some()
//The some() method of Array instances tests whether at least one element in the array passes the test
const array9 = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(array9.some(even));//true

const re = (element) => element % 10 === 0;
console.log(array9.some(re));//false







//Array.prototype.sort()
//The sort() method of Array instances sorts the elements of an array in place and returns the reference to the same array, now sorted


const months = ["March", "Jan", "Feb", "Dec"];
console.log(months.sort());



//Array.prototype.splice()
//The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.


//Remove 1 element at index 2, and insert "trumpet"
const myFish = ["angel", "clown", "drum", "sturgeon"];
const removed = myFish.splice(2, 1, "trumpet");
console.log(removed);


//Remove 0 element at index 1, and insert "Feb"
const months2 = ["Jan", "March", "April", "June"];
months2.splice(1, 0, "Feb");
console.log(months);











//Array.prototype.toLocaleString()
//The toLocaleString() method of Array instances returns a string representing the elements of the array. The elements are converted to strings using their toLocaleString methods and these strings are separated by a locale-specific string

const arrayy = [1, "a", new Date("21 Dec 1997 14:12:00 UTC")];
const localeString = arrayy.toLocaleString("en", { timeZone: "UTC" });

console.log(localeString);






//Array.prototype.toReversed()
//The toReversed() method of Array instances is the copying counterpart of the reverse() method. It returns a new array with the elements in reversed order.

const items = [1, 2, 3];
const reversedItems = items.toReversed();
console.log(reversedItems);
console.log(items);





//Array.prototype.toSorted()
//The toSorted() method of Array instances is the copying version of the sort() method. It returns a new array with the elements sorted in ascending order.

const month = ["Mar", "Jan", "Feb", "Dec"];
const sortedMonth = month.toSorted();
console.log(sortedMonth); 
console.log(month); 





//Array.prototype.toSpliced()
//The toSpliced() method of Array instances is the copying version of the splice() method. It returns a new array with some elements removed and/or replaced at a given index.

const months3 = ["Jan", "Mar", "Apr", "May"];
const months4 = months3.toSpliced(1, 0, "Feb");
console.log(months4); 
const months5 = months4.toSpliced(2, 2);
console.log(months5);




//Array.prototype.toString()
//The toString() method of Array instances returns a string representing the specified array and its elements.

const str = [1, 2, "a", "1a"];

console.log(str.toString());




//Array.prototype.unshift()
//The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.

const array0 = [1, 2, 3];
console.log(array0.unshift(4, 5));
console.log(array0);





//Array.prototype.values()
//The values() method of Array instances returns a new array iterator object that iterates the value of each item in the array.

const a = ["a", "b", "c"];
const iter = a.values();

for (const value of iter) {
  console.log(value);
}





//Array.prototype.with()
//The with() method of Array instances is the copying version of using the bracket notation to change the value of a given index. It returns a new array with the element at the given index replaced with the given value.

const arra = [1, 2, 3, 4, 5];
console.log(arra.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arra); // [1, 2, 3, 4, 5]






//Array.prototype[Symbol.iterator]()
//The [Symbol.iterator]() method of Array instances implements the iterable protocol and allows arrays to be consumed by most syntaxes expecting iterables, such as the spread syntax and for...of loops. It returns an array iterator object that yields the value of each index in the array.

//The initial value of this property is the same function object as the initial value of the Array.prototype.values property.

const b = ["a", "b", "c"];
const iterator01 = b[Symbol.iterator]();

for (const value of iterator01) {
  console.log(value);
}












