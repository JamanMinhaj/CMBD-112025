// alert("This is an alert");
const arr = ["Banana", "Litchi", "Orange", "Kiwi"];

console.log(arr);

//array methods

// pop
arr.pop();// remove an item to last
console.log(arr);

// push
arr.push("Apple");// add an item to last
console.log(arr);

// shift
arr.shift();
console.log(arr);// remove an item from first

// unshift
arr.unshift("Plum");
console.log(arr);// add an item from first




// joining an array

let arr2 = ["Peach", "Avocado", "Grapes"];

console.log(arr.concat(arr2));


// slicing an array

let animals = ["Cat", "Tiger", "Lion", "Dog"];
console.log(animals);

// let slice = animals.slice(1,3);
// console.log(slice);

// let str = "This is a text";
// console.log(str.slice(0,4));



// splice

// let splice = animals.splice(2,1,"Cow");

// console.log(splice);

animals.sort();
console.log(animals);
animals.reverse();

console.log(animals);




// JS Function

// function addition(x,y){
//     return x + y;
// }
// let result = addition(20,30);
// console.log(result);

function addition(x,y){
    console.log(x + y);
}
addition(20,4);

function multiplecation(x,y){
    console.log(x * y);
}
multiplecation(2,2);

function greet(user){
    console.log(`Hi ${user} Good Morning`);
}
greet("Minhaj");

function subtractions(x,y){
    let subtrac = x - y;
    return subtrac;
}
console.log(subtractions(10,4));



// arrow function

const division = () => 10 / 2;
console.log(division());

const addition2 = (x,y) => {
    let add = x + y;
    return add;
};

console.log(addition2(20,30));

//immediate invoke function

(function(){
    console.log("immediate call");
})();

const newSum = (function(x,y){
    let sum = x + y;
    return sum;
})(20, 3);
console.log(newSum);

function isGmail(gmailAddress){
    const checkFor = "@gmail.com";
    if(gmailAddress.toLowerCase().includes(checkFor.toLowerCase())){
        console.log("This is a correct Gmail");
    }else{
        console.log("This is not a Gmail");
    }
}
isGmail("sakib@gmail.com");

function checkWord(check){
    let checkHi = "Hi";

    if(check.toLowerCase().search(checkHi.toLowerCase()) !== -1){
        console.log(`${checkHi} is present in sentence`);
    }else {
        console.log(`${checkHi} is not present in sentence`);
    }
    
}
checkWord("HI this is Minhaj");
checkWord("hello");
checkWord("bye");

const gradeFn = (mark) => {
    let grade;

    if(mark >= 90 && mark <= 100){
        grade = "A+";
    }else if(mark >=80 && mark <= 90){
        grade = "A";
    }else if(mark >= 50 && mark <= 79){
        grade = "B";
    }else {
        grade = "F"
        
    }
    return grade;
}
console.log(gradeFn(49), "better luck next year");