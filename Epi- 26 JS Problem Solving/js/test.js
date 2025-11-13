// // // // alert("JS Problem Solving")

// // // // variables

// // // // const genarateBtn = document.getElementById("genarate_btn");
// // // // const showOtp = document.getElementById("demo");

// // // // const codeGenarator = () => {
// // // //     let code = Math.floor(Math.random() * 9000 + 1000);
// // // //     return code;
// // // // }

// // // // genarateBtn.addEventListener("click", () => {
// // // //     showOtp.innerHTML = codeGenarator();
// // // // });

// // // //11 => Create a program that uses the logical OR operator to check if either one of two strings str1 or str2 is equal to "JavaScript". Output a boolean result.

// // // let str1 = "JavaScript";
// // // let str2 = "Python";

// // // let isJavascript = (str1 === "JavaScript") || (str2 === "Python");

// // // console.log(isJavascript);


// // // //12 => Given 3 subjects Math, English and Physics find the total marks and average of 3 subjects.
// // // // Find out if the average grade:
// // // // If Percentage >= 90% then print “Grade A”
// // // // Percentage >= 80% : Grade B
// // // // Percentage >= 70% : Grade C
// // // // Percentage >= 60% : Grade D
// // // // Percentage >= 40% : Grade E
// // // // Percentage < 40% : Grade F

// // // let math = 0;
// // // let english = 0;
// // // let physics = 30;


// // // let avg = (math + english + physics) / 3;
// // // let grade;
// // // if(avg >= 90 && avg <= 100){
// // //     grade = "A";
// // // }else if (avg >= 80){
// // //     grade = "B";
// // // }else if (avg >= 70){
// // //     grade = "C";
// // // }else if(avg >= 60){
// // //     grade = "D"
// // // }else if(avg >= 40) {
// // //     grade = "E"
// // // }else {
// // //     grade = "F"
// // // }
// // // console.log(grade);

// // // //13 => Find the random number between 1 to 10

// // // let randomNumber = Math.floor(Math.random() * 10 + 1);
// // // console.log(randomNumber);

// // // //14 => Create 3 meaningful arrays and  3 objects

// // // let arr1 = ["Banana","Orange","Litchi","Mango"];
// // // let arr2 = ["Fox","Cow","Dog","Cat"];
// // // let arr3 = ["Pen", "Book", "Marker", "Pencil"];

// // // // OBJ

// // // let obj1 = {
// // //     fullName: "Md Minhaj",
// // //     age: 30,
// // //     country: "Bangladesh"
// // // }
// // // let obj2 = {
// // //     firstName: "Md",
// // //     secondName: " Ahmed",
// // //     fullName: function(){
// // //         console.log(this.firstName.concat(this.secondName));
// // //     },
// // // }

// // // let obj3 = {
// // //     userName: "Md",
// // //     userAge: 20,
// // //     userPasscode: "2343"
// // // }

// // // //15 => Create a while loop which prints values from 10 to 50

// // // let value = 10;
// // // while(value <= 50){
// // //     console.log(value);
// // //     value++;
// // // }

// // // //16 => Create a for loop which prints values from 20 to 60

// // // for(let i = 20; i <= 60; i++){
// // //     console.log(i);
// // // }

// // // //17 => Create a function of adding two numbers. 

// // // function add(num1, num2){
// // //     return num1 + num2;
// // // }
// // // let result = add(2,2);
// // // console.log(result);

// // // const add2 = (x,y) => {x+y};//using array function
// // // console.log(add(30,40));

// // // //18 => Create a function which returns a for loop which takes two parameter one is initial value & final value to return the list of number from initial to final value. (shown in class)

// // // function rangList(initial, final){
// // //     let numbers = [];
// // //     if(initial <= final){
// // //         for(let i = initial; i <= final; i++){
// // //         numbers.push(i);
// // //     }
// // //     }else {
// // //         for(let i = initial; i >= final; i--){
// // //         numbers.push(i);
// // //     }
// // //     }
// // //     return numbers;
// // // }
// // // console.log(rangList(40, 20));

// // // // 19 => Create a function which return whether the year is leap year or not

// // // function leapYear(year){
// // //     if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
// // //         console.log("This is leap year");
// // //     } else {
// // //         console.log("This isn't leap year");
// // //     }
// // // }
// // // leapYear(2000);

// // // // 20 => Create a function which return whether the temperature is hot or cold (30 <=  is hot, 25 >= is cold , anyother value is normal)

// // // function temperature(value){
// // //     let cliMate;
// // //     if(value >= 20 && value <= 30){
// // //         cliMate = "Norlam";
// // //     }else if(value <= 20){
// // //         cliMate = "Cold";
// // //     }else {
// // //         cliMate = "Hot";
// // //     }
// // //     return cliMate;
// // // }
// // // console.log(temperature(19));

// // // // 21 => Create a function which returns whether the number is odd or even

// // // function numberCheck(n){
// // //     if(n % 2 !== 0){
// // //         console.log("Number is Odd");
// // //     }else {
// // //         console.log("Number is Even");
// // //     }
// // // }
// // // numberCheck(19);

// // // // 22 => Splice and an given array - remove two items and adding two new elements 

// // // let arr = ["Rahman", "Shafiq","Zabbar"];
// // // console.log(arr);
// // // arr.splice(0,2,"Minhaj","Sazzad");
// // // console.log(arr);

// // // // 23 => Reverse and sort an array where arr = [2,45,4,55,12,42,34,78]

// // // // let arr4 = [2,45,4,55,12,42,34,78];
// // // // console.log(arr4);
// // // // arr4.reverse();
// // // // console.log(arr4);
// // // // console.log(arr4.sort(());
// // // let arr4 = [1, 2, 3, 4, 5];
// // // // arr4.sort((a,b) => b - a);
// // // // console.log(arr4);
// // // let reverse = [];
// // // // let i = arr4.length -1;
// // // // let start = 0;
// // // // let end = arr4.length -1;

// // // for(let i = arr4.length -1; i >= 0; i--){
// // //     reverse.push(arr4[i]);
// // // }
// // // console.log(reverse);

// // //     // while(start < end){
// // //     //     let tmep = arr4[start];
// // //     //     arr4[start] = arr4[end]
        
// // //     //     arr4[end] = tmep;
// // //     //     start++;
// // //     //     end--;
    
// // //     // }
// // //     // for(let i = start; i < end)
// // //     // console.log(start);
// // //     // console.log(end);

// // // // while(i >= 0){
// // // //     reverse.push(arr4[i]);
// // // //     i--;
// // // // }

// // // // for(let i = arr4.length -1; i >= 0; i--){
// // // //     reverse.push(arr4[i]);
// // // // }
// // // // console.log(arr4);
// // // // console.log(reverse);
// // // // console.log(arr4);

// // // // 24 => Create an object with car and add two function in there (called methods as well) and print out  the result calling two functions using this keyword as well

// // // const car = {
// // //     brand: "Toyota",
// // //     start: function(){
// // //         console.log(`${this.brand} is starting`);
// // //     },
// // //     stop: function(){
// // //         console.log(`${this.brand} is stopping`);
// // //     } 
// // // }
// // // console.log(car.start());
// // // console.log(car.stop());

// // // // 25 => Reverse an given string. Where, - let text = “I love coding” - after reverse a string output will be - ‘gnidoc evol i’

// // // let text = "I love coding";

// // // let emptyV = "";

// // // for(let i = text.length -1; i >= 0; i--){
// // //     emptyV += text[i];
// // // }
// // // console.log(emptyV);

// // // // 26 => Create an array with list of items. Iterate the array to view the list of the items in the console using for loop. 

// // // let items = ["items #1", "items #2", "items #3"];

// // // for(let i = 0; i < items.length; i++){
// // //     console.log(items[i]);
// // // }



// // // /*

// // //   Class Video

// // // */


// // // function reverseString(str){
// // //     let empty = "";
// // //     for(let i = str.length -1; i >= 0; i--){
// // //         empty += str[i];
// // //     }
// // //     return empty;
// // // }
// // // console.log(reverseString("This"));

// // const stringReverse = (str) => {
// //     let blankString = "";
// //     for(let i = str.length - 1; i >= 0; i--){
// //         blankString += str[i];
// //     }
// //     return blankString;

// // }
// // console.log(stringReverse(
// //     "I Love Coding"
// // ));

// // // let sentence = "I Love Coding";
// // // let emptyS = sentence.split("").reverse().join("");
// // // console.log(emptyS);

// // // let split = sentence.split("");
// // // console.log(split.reverse());

// // const reverseStr = (str) => {
// //     return str.split("").reverse().join("");
// // }
// // console.log(reverseStr("Minhaj"));

// // // *******
// // // const heading = document.getElementById("head");
// // // const list = document.getElementById("list");

// // // heading.innerHTML = "This is head";
// // // heading.style.color = "white";
// // // heading.style.textAlign = "center"
// // // heading.style.fontSize = "1.3rem"

// // // let sentence = "JavaScript";
// // // sentence.split();

// // // for(let i = 0; i < sentence.length; i++){
// // //     console.log(sentence[i]);
// // //     list.innerHTML += `<li> ${i + 1} = ${sentence[i].toUpperCase()} </li>`
// // // }

// // // Practice

// // const input = document.getElementById("input");
// // const userName = document.getElementById("name");
// // const userId = document.getElementById("id");
// // const userAge = document.getElementById("age");
// // const findBtn = document.getElementById("find");
// // const notice = document.getElementById("notice");

// // const user = [
// //     {user: "Monir", id: 1, age: 20},
// //     {user: "Sazzad", id: 2, age: 25},
// //     {user: "Shaown", id: 3, age: 26},
// //     {user: "Nipu", id: 4, age: 23},
// //     {user: "Bayzid", id: 5, age: 24},
// //     {user: "kawcher", id: 6, age: 23},
// // ];
// // findBtn.addEventListener("click", () => {
// //     const getInput = input.value.toLowerCase().trim();

// //     const foundUser = user.find(u => u.user.toLowerCase() === getInput);

// //     if(foundUser){
// //         userName.innerHTML = foundUser.user;
// //         userId.innerHTML = foundUser.id;
// //         userAge.innerHTML = foundUser.age;
// //         notice.innerHTML = "";
// //     }else {
// //         if(getInput === ""){
// //             notice.innerHTML = "write a name to find";
// //         }else {
// //             notice.innerHTML = "This name you enterd not in the list";
// //             notice.style.color = "red";
// //         }
// //     }
// //     input.value = "";
// // });
// // for(let users = 0; users < user.length; users++){
// //     console.log(user[users]);
// //     document.getElementById("show_user").innerHTML += `<h2 class="text-white"> ${user[users].user} </h2>`
// // }
// // user.forEach(u => {
// //     console.log(u.user);
// // });

// // // let email = "email@gamil.com"
// // // console.log(email);

// // // function domainExtract(email){
// // //     let index = email.indexOf("@");
// // //     return email.substring(0,index);
// // // }
// // // console.log(domainExtract("Minhaj2md@gmail.com"));
// // // console.log(domainExtract("Minhaj2md@gmail.com"));

// // function wordExists(str,word) {
// //     let isWord = str.toLowerCase().includes(word.toLowerCase());
// //     return isWord;
// // }
// // console.log(wordExists("Hi","h"));

// // const wordExist = (str,w) => (str.toLowerCase().includes(w.toLowerCase()));
// // console.log(wordExist("Minhaj", "y"));

// // let sentence = "This is a sentence";

// // let split = sentence.split(" ").filter(s => s.length > 4);
// // console.log(split); 

// // function longWrod(str,n){
// //     let longSen = str.split(" ").filter(s => (s.length > 4));
// //     return longSen;
// // }
// // console.log(longWrod("This is a Sentence", 4));

// // let arr = [1, 2, 3, 4];

// // let arr2 = arr.map(num => (num *2));
// // console.log(arr);
// // console.log(arr2);

// // const names = ['Ali', 'Samantha', 'Bob', 'Christine'];
// // const newNames = names.filter(name => (name.length > 4))
// // console.log(newNames);

// // const fruits = ['apple', 'banana', 'cherry','Kiwi','Peach','Plum'];
// // fruits.forEach(f => console.log(f));

// // const numbers = [1, 2, 3, 4, 5, 6];
// // let multi = numbers.map(n => (n * 3)).filter(n => (n > 10));
// // console.log(multi);

// // const people = [
// //   { name: 'Alice', age: 22 },
// //   { name: 'Bob', age: 17 },
// //   { name: 'Charlie', age: 25 },
// //   { name: 'Diana', age: 15 }
// // ];
// // const underAdlt = people.filter(n => (n.age < 18)).map(name => (name.name));
// // console.log(underAdlt);

// // // let newSentence = "This is a new sentence";
// // function removeChar(sen,char){
// //     return sen.toLowerCase().split(char.toLowerCase()).join("");
// // }
// // console.log(removeChar("i Love to do code","I"));


// // const arr5 = ["Banana", "Mango","Banana","Kiwi","Litchi", "Apple","Orange","Orange"];

// // let removeDuplicat = arr5.filter((str,index) => (arr5.indexOf(str) === index));
// // console.log(removeDuplicat);

// // function addNumNext(num){
// //     return num + 1;
// // }
// // console.log(addNumNext(-3));

// // let reveS = "this is a sentence";
// // let reverse = reveS.split("").reverse().join("");

// // // for(let i = reveS.length -1; i >= 0; i--){
// // //     reverse += reveS[i];
// // // }
// // console.log(reverse);




// // Reverse a String

// // let sentence = "hello";
// // let reverse = sentence.split("").reverse().join("");
// // for(let i = sentence.length -1; i >= 0; i--){
// //     reverse += sentence[i];
// // }
// // console.log(reverse);

// // ✅ Count Vowels in a String
// let string = "aeiou";
// let countV = 0;

// for(let i = 0; i < string.length; i++){
//     if(
//         string[i] === "a"||
//         string[i] === "e"||
//         string[i] === "i"||
//         string[i] === "o"||
//         string[i] === "u"
//     ){
//         countV++;
//     }
// }
// console.log(countV);
// // ✅ Capitalize First Letter of Each Word

// function capitalizeWord(str) {
//     return str
//     .split(" ")
//     .map(w => w.charAt(0).toUpperCase() + w.slice(1))
//     .join(" ");
// }
// console.log(capitalizeWord("This is a capitalized sentence"));

// // ✅ Check for Palindrome
// function isPalindrom(str){
//     const reversed = str.split("").reverse().join("");
//     return str === reversed;
// }
// console.log(isPalindrom("madam"));

// // ✅ Count Occurrences of a Character in String

// function charOccurrence(str,w){
//     let count = 0;
//     for(let value of str){
//         if(value === w) count++;
//     }
//     return count;
// }
// console.log(charOccurrence("Programming and gg","g"));

// // ✅ Find Max Number in Array
// const arr = [100, 200, 300, 400, 500];
// function maxInArray(arr){
//     return arr.map(num => num > arr); 

// }
// console.log(maxInArray(arr));
// // ✅ Sum of Even Numbers in an Array

// // ✅ Remove Duplicates from an Array

// // ✅ Filter Out Falsy Values

// // ✅ FizzBuzz

// const numbers = [5, 10, 15, 20, 25, 30];

// function maxNum(arr){
//     return arr.filter(n => n >= 15);
// }
// console.log(maxNum(numbers));
// console.log(numbers);
// function evenReturn(arr){
//     return arr.filter(n => n % 2 === 0 && n >= 20);
// }
// console.log(evenReturn(numbers));

// const words = ["apple", "banana", "kiwi", "watermelon", "grape", "pineapple"];

// function returningArr(str){
//     return str
//     .filter(s => s.length > 5);
// }
// console.log(returningArr(words));

// const people = [
//   { name: "Ali", age: 22 },
//   { name: "Sam", age: 17 },
//   { name: "Zara", age: 19 },
//   { name: "Tom", age: 15 }
// ];

// function adultOlder(arr){
//     return arr.filter(s => s.age >= 18);
// }
// console.log(adultOlder(people));

// const nums = [12, 43, 56, 77, 23, 88, 35, 2];
// function returnOddLess(num){
//     return num 
//     .filter(n => n % 2 === 0 && n < 50);
// }
// console.log(returnOddLess(nums));
// const names = ["Ali", "sara", "Amanda", "Bob", "adam", "Zane"];
// function startWith(str){
//     return str
//     .filter(s => s.toLowerCase().charAt(0) === "a");
// }

// console.log(startWith(names));

// const words2 = ["code", "tree", "apple", "Cat", "bee", "do"];

// function retrunEndWord(arr){
//     return arr 
//     .filter(a => a.toLowerCase().charAt(a.length -1) === "e" && a.length > 3)
// }
// console.log(retrunEndWord(words2));

// const nums2 = [5, -3, 0, -1, 7, -8, 2];

// function negetiveValue(value){
//     return value 
//     .filter(n => n < 0);
// }
// console.log(negetiveValue(nums2));

// const words3 = ["Tree", "book", "elephant", "Cat", "pen"];
// function findE(find){
//     return find
//     .filter(f => f.toLowerCase().includes("e"));
// }
// console.log(findE(words3));

// const people2 = [
//   { name: "John", age: 30 },
//   { name: "Sally", age: 25 },
//   { name: "James", age: 35 },
//   { name: "Mary", age: 28 }
// ];

// function startWithJ(arr){
//     return arr
//     .filter(start => start.name.toLowerCase().charAt(0) === "j");
// }
// console.log(startWithJ(people2));

// const numbers2 = [3, 10, 12, 15, 20, 21, 30];
// function numberDivisable(num){
//     return num
//     .filter(n => n % 3 === 0);
// }
// console.log(numberDivisable(numbers2));

// const words4 = ["madam", "racecar", "apple", "level", "banana"];
// function findPalindrom(str2){
//     return str2.filter(word => word === word.toLowerCase().split("").reverse().join(""));
     
// }
// console.log(findPalindrom(words4));

// const strings = [" hello", "", "world", "", "!", ""];

// function emptyStr(str3){
//     return str3
//     .filter(s => s.trim() !== "")
// }
// console.log(emptyStr(strings));

// const people3 = [
//   { name: "Alice", age: 22 },
//   { name: "Bob", age: 29 },
//   { name: "Charlie", age: 30 },
//   { name: "Diana", age: 24 }
// ];

// function returnNames(arr){
//     return arr
//     .filter(names => names.age > 25)
//     .map(n => n.name)
// }
// console.log(returnNames(people3));

// // const nums3 = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// // function primeNum(num){
// //     return num
// //     .filter(n => isprime(n) );
// // }
// // console.log(primeNum(nums3));

// const fruits = ["apple", "pear", "kiwi", "banana", "fig"];

// function longerFour(str){
//     return str
//     .filter(w => w.length > 4)
//     .map(w => w.toUpperCase())
// }
// console.log(longerFour(fruits));

// const users = [
//   { name: "Sam", active: true },
//   { name: "Jill", active: false },
//   { name: "Mike", active: true }
// ];

// function activeTrue(arr){
//     return arr.filter(arr => arr.active)
// }
// console.log(activeTrue(users));

// // 8--10--2025

// const namess = ["Alice", "Bob", "Charlie"];

// namess.forEach((name, indx) => {
//     console.log(`${indx + 1} ${name}`);
// });

// const array = [1, 2, 3]

// let sum = array.reduce((acc,num) => {
//    return acc + num
// },1)
// console.log(sum);// 2 + 2 = 4 + 3 = 7

// let newArray = array.filter(num => num % 2 === 0)
// console.log(newArray);

// const givenArray = [20, 40, 69, 199]// sum all of the and set in a new array

// const newArray2 = givenArray.reduce((acc,num) => {
//     return acc + num;
// }, 0);
// console.log(newArray2);

// const fruitz = [
//   { name: "apple", color: "red", quantity: 5 },
//   { name: "banana", color: "yellow", quantity: 0 },
//   { name: "grape", color: "purple", quantity: 10 },
//   { name: "orange", color: "orange", quantity: 3 }
// ];
// let totalQty = fruitz.reduce((acc,num)=> {
//     return acc + num.quantity;
// },0);
// console.log(totalQty);
// let printEach = fruitz.forEach(prnt => {
//     console.log(`we have ${prnt.quantity} ${prnt.name}(s) in stock`);
// })
// console.log(printEach);
// let namesNew = fruitz.map((n) => {
//     return n.name;
// });
// console.log(namesNew);
// let fiveQty = fruitz.filter(qty => qty.quantity >= 5);
// console.log(fiveQty);

// const menu = [
//   { item: "Burger", price: 8, isAvailable: true },
//   { item: "Fries", price: 4, isAvailable: false },
//   { item: "Pizza", price: 12, isAvailable: true },
//   { item: "Salad", price: 6, isAvailable: true },
//   { item: "Soda", price: 2, isAvailable: false }
// ];

// let calculate = menu.reduce((acc, total) =>{
//     return acc + total.price;
// },0)
// console.log(calculate);
// let printThis = menu.map(item => {
//     return `${item.item} costs $ ${item.price} ${item.isAvailable} `
// })
// console.log(printThis);
// let available = menu.filter((a) => a.isAvailable);
// console.log(available);

// let stringForEach = menu.map((item,indx) => {
//     return `${indx + 1} ${item.item} - $${item.price}`;
// })
// console.log(stringForEach);


const menu = [
  { item: "Burger", price: 8, isAvailable: true },
  { item: "Fries", price: 4, isAvailable: false },
  { item: "Pizza", price: 12, isAvailable: true },
  { item: "Salad", price: 6, isAvailable: true },
  { item: "Soda", price: 2, isAvailable: false }
];

// 1. filter

// 👉 Get only the available items from the menu.
let availAble = menu.filter(availabe => {
    return availabe.isAvailable
});
console.log(availAble);

// 2. map

// 👉 Create an array of strings like this for each item:
// "Burger - $8", "Pizza - $12", etc.

let arrayOfStr = menu.map(item => {
    return `${item.item} - $${item.price}`
});
console.log(arrayOfStr);

// 3. reduce

// 👉 Calculate the total price of all available items.

let calculate = menu.reduce((acc,items) => {
    return items.isAvailable ? acc + items.price : acc;
},0);
console.log(calculate);

// 4. forEach

// 👉 Print this message for each item:
// "[Item] costs $[price]. Available: true/false"

 menu.forEach(item => {
    console.log(`${item.item} costs $${item.price} ${item.isAvailable}`);
});
console.log(menu);

// 5. (Combo Challenge 💪)

// 👉 First, filter only available items.
// Then, map them to a string: "Now serving: [item] for $[price]".

let firstFilter = 
menu.filter(item => {
    return item.isAvailable
});
console.log(firstFilter);
let combo = firstFilter.map(str => {
    return `Now Serving: ${str.item} for $${str.price}`
});
console.log(combo);