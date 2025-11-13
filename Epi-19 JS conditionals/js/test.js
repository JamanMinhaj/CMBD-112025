// alert("This is an alert");

// console.log("this is a text");


// let & const
// language = "English";
// var language;           // This will work because of (VAR)
// console.log(language);

// language = "Bangla";
// let language;            // this will show an Error
// console.log(language);

// let a = "Text";

// {
//     let a = "Text2"
//     console.log(a);
// } 

// console.log(a);

// const age = 34;

// console.log(age);




// ? ****************************  
// Condition in JS


// let userName = "Minhaj"

// let age = 30;

// let isPass = true;

// let userPassword = prompt("give your passcode to login");
//  let passcode = userPassword;
// if(passcode === userPassword){
//     console.log("You logged in successfully");
// }

let math = 100;
let english = 90;
let science = 100;

let add = math + english + science;

let avg = add / 3;

let grade; 

if (avg >= 90 && avg <= 100){
    grade = "A+";
}else if( avg >= 80 && avg <= 89){
    grade = "A";
}else if (avg >= 60 && avg <= 79){
    grade = "B"
}else {
    grade = "Try next time";
}

console.log(grade);





