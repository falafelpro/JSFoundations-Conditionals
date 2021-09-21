const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.

const numOne = +prompt("Please enter the first number: ");
const numTwo = +prompt("Please enter the second number: ");
const operation = prompt("Please choose the operation (+, -, /, *):");

const mathOps = ["+","-","/","*"]
let redFlag = false
if (isNaN(numTwo) || isNaN(numOne) ){
    console.log("please enter real numbers");
    redFlag = true;
}
if (!mathOps.includes(operation)){
    console.log("please only enter these symbols (+, -, /, *)");
    redFlag = true;
}

if(!redFlag){
    if(operation === "+") 
    console.log(`${numOne} ${operation} ${numTwo} =  ${ numOne + numTwo}`)
    if(operation === "-") 
    console.log(`${numOne} ${operation} ${numTwo} =  ${ numOne - numTwo}`)
    if(operation === "/") 
    console.log(`${numOne} ${operation} ${numTwo} =  ${ numOne / numTwo}`)
    if(operation === "*") 
    console.log(`${numOne} ${operation} ${numTwo} =  ${ numOne * numTwo}`)
}


