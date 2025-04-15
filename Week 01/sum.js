let MyArray = [1, 4, 2, 3, 5, 6]

function sumfac(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i]
       //sum+=numbers[i]
    }



    return sum

}

let result=sumfac(MyArray);
console.log(result);


let anotherresult=sumfac([1,2,3,4,5]);
console.log(`my result is ${anotherresult}`);