// alert("This is dom and loops");

// JS Loops
// function forLoop(loop){
//     for(let i = 1; i <= loop; i++){
//         console.log(i);
//     }
// }
// forLoop(5);

// const evenOdd = (x) =>{
//     if(x % 2 === 0){
//         console.log(`${x} is an Even Number`);
//     }else {
//         console.log(`${x} is an Odd Number`);
//     }
// }

// for(let i = 40; i <= 80; i++){
//     evenOdd(i);
// }


// const evenOdd = (start, end) => {
//     for(let i = start; i <= end; i++){
//         if(i % 2 !== 0){
//             console.log(`${i} is an Odd Number`);
//         }else {
//             console.log(`${i} is an Even Number`);
//         }
//     }
// }
// evenOdd(20,40);

// let animals = ["Cat", "Dog", "Cow", "Fox"];

//  for(let i = 0; i < animals.length; i++){
//     console.log(animals[i]);
//  }

 
// while loop 

// let a = 0; 

// while(a < animals.length){
//     console.log(animals[a]);
//     a++;





// Object Methods

// let person = {
//     personName: "Minhaj",
//     personFrom: "Bangladesh",
//     personProfession: "Coder",
//     isMarried: false,
//     personAge: 18,
//     showMessage: function(){
//         console.log(`${this.personName} is a coder`);
//     },
//     showIsMarried: function() {
//         if(this.isMarried){
//             console.log(`${this.personName} is married`);
//         }else {
//             console.log(`${this.personName} is Unmarried`);
//         }
//     },
//     checkAdult: function() {
//         if(this.personAge >= 18){
//             console.log(`${this.personName} is Adult`);
//         }else {
//             console.log(`${this.personName} is minor`);
//         }
//     }
// }
// person.showMessage();
// person.showIsMarried();
// person.checkAdult();

// JS DOM

// let hTag = document.getElementsByTagName("h1");
// console.log(hTag);
// hTag[0].innerHTML = "Hi JS";

// let para = document.getElementById("demo");para.innerHTML = "This is a paragraph";
// para.style.color = "red";
// para.style.backgroundColor = "green";
// para.style.padding = "10px";
// para.style.textAlign = "center";


// function vowels(str){
//     let count = 0;
//     for(let i = 0; i < str.length; i++){
//         if(
//             str[i] === "a" ||
//             str[i] === "e" ||
//             str[i] === "i" ||
//             str[i] === "o" ||
//             str[i] === "u" 
//         ){
//             count ++;
//         }
//        console.log(count);
//     }
// }
// vowels("This is a string"); 

// function vowels(str) {
//     let countVowels = 0; 
//     str = str.toLowerCase();
//     for(let i = 0; i < str.length; i++){
//         if(
//             str[i] === 'a'||
//             str[i] === 'e'||
//             str[i] === 'i'||
//             str[i] === 'o'||
//             str[i] === 'u'
//         ){
//             countVowels++;
//         }
//     }
//     console.log(countVowels);
// }
// vowels("This is a string a a a aa");

// const add = (n,m) => {
//     return n + m;
// }
// console.log(add(20,20));

// function findV(sen) {
//     let arr = ['a','e','i','o','u']
//     let count;
//     if(sen.includes(arr)){
//         count++;
//     }else {
//         console.log("Nothing");
//     }
// }
// findV("This is a sentence");

// function findvowels(str){
//     let vowels = "aeiouAEIOU";
//     let count = 0;

//     for(let char of str){
//         if(vowels.includes(char)){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(findvowels("This is a text"));


// function findBd(str) {
//     let countryName = "Bangladesh"
//     countryName = countryName.toLowerCase();

//     if(str.includes(countryName)){
//         console.log("Yes it's in it");
//     }else {
//         console.log("Nothing Found");
//     }
// }
// findBd("There is a country call bangladesh");

// let nine = document.getElementById("nine");
// function countNine(){
//     console.log(9);
// }

// let valueOne = document.getElementById("inputOne");

// let valueTwo = document.getElementById("inputTwo");

// function addFn(){
    // let sum = parseFloat(valueOne.value) + parseFloat(valueTwo.value);
    // document.getElementById("button").innerHTML = "add is " + sum;
    
    // let add = parseFloat(valueOne.value) + parseFloat(valueTwo.value);
    // document.getElementById("add").innerText = add;

    // valueOne.value = "";
    // valueTwo.value = "";
    


// function subFn(){
    // let sum = parseFloat(valueOne.value) + parseFloat(valueTwo.value);
    // document.getElementById("button").innerHTML = "add is " + sum;
    
//     let sub = parseFloat(valueOne.value) - parseFloat(valueTwo.value);
//     document.getElementById("substractions").innerText = sub;

//     valueOne.value = "";
//     valueTwo.value = "";
    
// }
// function countVowels(){
//    let input = prompt("Write Somethig than I will say how many strings are there").toLowerCase();
//    let count = 0;
//    for(let i = 0; i < input.length; i++){
//     if(
//         input[i] === "a"||
//         input[i] === "e"||
//         input[i] === "i"||
//         input[i] === "o"||
//         input[i] === "u"
//     ){
//         count++;
//     }
//    }
//    console.log(count);
// let str = document.getElementById("demo").value.toLowerCase();
// let counts = document.getElementById("counts");
// let count = 0;
// for(let i = 0; i < str.length; i++){
//     if(
//         str[i] === "a"||
//         str[i] === "e"||
//         str[i] === "i"||
//         str[i] === "o"||
//         str[i] === "u"
//     ){
//         count++;
//     }
// }
//     counts.innerHTML = count;
//     document.getElementById("demo").value = " ";
// }


