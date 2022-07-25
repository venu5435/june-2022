let one = Math.ceil(Math.random() * 6);
let two = Math.ceil(Math.random() * 6);

let dice = one + two;

let q1 = prompt("Enter any number in between 1 and 12");
if(q1 > 12 && q1 == 0 ){
prompt("Please enter a number below 12");
}


if (q1 === dice){
console.log("dice one number is ", one);
console.log("dice two number is ",two);
console.log("dice number is ",dice);

console.log("Entered number matched with dice value");
}


else{
// (q1 === dice)
    console.log("dice one number is ", one);
console.log("dice two number is ",two);
console.log("dice number is ",dice);

    console.log("Entered number didn't match")
}
