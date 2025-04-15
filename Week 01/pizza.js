let noofguest = 5;

let pizzasize;
// if(noofguest<=2){
//     console.log("bring small pizza");
// }
// else if(noofguest<=5){
//     console.log("bring medium pizza");
// }
// else{
//     console.log("bring large pizza");
// }

if (noofguest <= 2) {
      pizzasize = "small"
}
else if (noofguest <= 5) {
      pizzasize = "medium"
}
else {
      pizzasize = "large"
}
console.log(pizzasize);