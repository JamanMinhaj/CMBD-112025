// console.log("tes2t");

// let userName = "Minhaj";

// let userPass = "test5400";

// if(userName === "Minhaj" && userPass ==="test5400"){
//     console.log("Successfully logged in");
// }else {
//     console.log("wrong user");
// }
// let fullName = userName;
// fullName ? console.log("right") : console.log("wrong");

// let personAge = 40;

// if(personAge === 40){
//     console.log("true");
// }else {
//     console.log("false");


//Js Number Methods

// let carmodel = 2013;//interger number/ 

// let deciMal = 20.20012;// decimal Number/ floating number

// let add = carmodel + deciMal;

// // toFixed()
// console.log(parseFloat(add.toFixed(2)));



// // Math.round()
// console.log(Math.round(add));

// // Math.ceil()
// console.log(Math.ceil(add));

// // Math.floor()
// console.log(Math.floor(add));

// // Math.ABS()

// let value = -20;
// console.log(Math.abs(value));

// Generate a Random Number
// const randomNumber = Math.floor(Math.random()* 10000 + 1);

// console.log(randomNumber);

// const generatOtp = Math.floor(Math.random()* 9000 + 1000);

// console.log(generatOtp);
// toFixed()
// Math.round()
// Math.ceil()
// Math.floor()
// Math.abs()
// parseInt()
// parseFloat()



// Problem solve


// (1) Solve the problem with Javascript  to find the maximum between two numbers. (Hint: take 2 variables and find the maximum number between them)

let num1 = 50;

let num2 = 70;

if(num1 > num2){
    console.log(`${num1} is grater than ${num2} which is Number 1`);
}else {
    console.log(`${num2} is grater than ${num1} which is Number 2`);
} // solved

//(2) Solve the problem with Javascript  to check whether a number is negative, positive or zero. (take a single variable and check using if else condition)

let number = -7;

if(number >= 1){
    console.log(`Number is ${number} & it's a Positive Number`);
}else if( number < 0) {
    console.log(`Number is ${number} & it's a negative Number`);
}else {
    console.log(`Number is ${number}`);
}// solved

//(3) Solve the problem with Javascript  to check whether a number is divisible by 10 or not. (take single variable and check using if esle condition)

let divisible = 2;

if(divisible % 10 === 0){
    console.log(`${divisible} is divisible by 10`);
}else {
    console.log(`${divisible} is not divisible by 10`);
}// solved

//(4)Solve the problem with Javascript  to check whether a number is even or odd. 

let numberr = 3;

if(numberr % 2 === 0){
    console.log(`${numberr} is an even Number`);
}else {
    console.log(`${numberr} is an odd Number`);
}// solved

//(5)Solve the problem with Javascript  to check whether a character is in the alphabet or not.

let character = "M";

if(character >= "A" && character <= "Z" || character >= "a" && character <= "z"){
    console.log("Yes it is an alphabet");
}else {
    console.log("No it's not in alphabet");
}//solved

// (6)Solve the problem with Javascript  to check whether the temperature is hot, cold or normal. (30 <=  is hot, 25 >= is cold , anyother value is normal)

let temperature = 19;

if(temperature >= 30){
    console.log("Temperature is getting Hot");
}else if (temperature >= 20){
    console.log("Temperature is getting Normal");
}else {
    console.log("Temperature is cold");
}// solved

// (7)Solve the problem with Javascript  to find a maximum between three numbers. (Hint: take 3 variables and find the maximum number between them use logical and operator for that)

let one = 130;
let two = 150;
let three = 50;

if(one > two && one > three){
    console.log(`${one} is maximum Number than ${two} & ${three}`);
}else if (two > one && two > three){
    console.log(`${two} is maximum Number than ${one} & ${three}`);
}else {
    console.log(`${three} is maximum Number than ${one} & ${two}`);
}//solved

// let mathMax = Math.max(one,two, three);
// console.log(mathMax);

// (8)Write a JavaScript expression using the ternary operator that checks if a number x is even or odd. Store the result in a variable and print “Even Number” or “Odd Number”

let x = parseInt(prompt("input a number: "));

let result = (x % 2 === 0) ? `${x} it's an Even Number` : `${x} it's an Odd Number`;
console.log(result);// solved

//(9)Use the logical AND operator to determine if two variables, numOne and numTwo, are both greater than 30. Print a message to the console reflecting the result.

let numOne = 25;
let numTwo = 50;

if(numOne > 30 && numTwo > 30){
    console.log(`${numOne} & ${numTwo} both are Grater than 30`);
}else if( numOne < 30 && numTwo > 30){
    console.log(`${numOne} is less than 30 but ${numTwo} is grater than 30`);
}else if (numTwo < 30 && numOne > 30){
    console.log(`${numTwo} is less than 30 but ${numOne} is grater than 30`);
}else {
    console.log(`both ${numOne} & ${numTwo} are less than 30`);
}// solved

//(10)Write a JavaScript program that uses if-else statements combined with logical operators. The program should check if a person’s age is between 13 and 19. If so, print “Teenager”. Otherwise, print “Not a teenager”. (Hint: Combining If-Else and Logical Operators)

let age = 10;

if(age >= 13 && age <= 19){
    console.log("Teenager");
}else {
    console.log("Not a teenager");
}// solved



