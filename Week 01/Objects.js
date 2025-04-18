//Problem: Create an object representing a type of tea with properties for name,type, and caffeine content.

const teas={
    name:"Lemon tea",
    type:"Green",
    caffine:"low",
}

//Problem: Access and print the name and type properties of the tea object.

console.log(teas.name);
console.log(teas.type);

//Problem: Add a new property origin to the tea object.

teas.origin="Assam";


//Problem: Change the caffine level of the tea object to "Medium".

teas.caffine="Medium";

//Problem: Remove the type property from the tea object.

delete teas.type

//Problem: Check if the tea object has the property origin.

console.log("origin" in teas);


//Problem: Use a for...in loop to print all properties of the tea object.

for(let key in teas){
    console.log(key + teas[key]);
}


//Problem: Create a nested object representing different types of teas and their properties.

const myTeas={
    greenTea:{
        name:"Green Tea",
        Origin:"India",
    },
    blackTea:{
        name:"Black Tea",
        Origin:"India",
    }
}

//Problem: Create a copy of the tea object.

const teaCopy = { ...teas };
console.log(teaCopy);


//Problem: Add a custom method describe to the tea object that returns a description string.

teas.describe = function() {
    return `The tea is ${this.name}, has ${this.caffine} caffeine content, and originates from ${this.origin}.`;
};

console.log(teas.describe());


//Problem: Merge two objects representing different teas into one.
const herbalTea = {
    name: "Chamomile",
    type: "Herbal",
    caffine: "None",
    origin: "Egypt"
};
const mergedTea = { ...teas, ...herbalTea };
console.log(mergedTea);

