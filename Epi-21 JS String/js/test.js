// alert("this is an alert");

// let rollDice = parseInt(Math.random() * 6 + 1);

// console.log(rollDice);

// let a = 10;
// let b = 2;
// let c = Math.abs(b-a);
// console.log(c);

// JS String Methods

let stringValue = "";

console.log(stringValue);

let sentence = "Bangladesh";
console.log(sentence);

// length
let newUser = "Monir"
console.log(newUser.length);


let str1 = "Good Night ";

let str2 = "Monir";

// String concat

let complete = str1.concat(str2);
console.log(complete);

// subString

let subStr = sentence.substring(6,10);
console.log(subStr);

// slice //takes negative value

let sliceStr = "This is a dummy text";
console.log(sliceStr.slice(0, 10) + "...");

//findIndex of a word by indexOf

let newSen = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aut cumque minima quae do consectetur tempore veritatis adipisci temporibus nulla do. Quasi minhaj."
console.log(newSen.indexOf("i"));


// string CharAt()
let searchLetter = newSen.charAt(6);
console.log(searchLetter);


// String includes

let newSen2 = "This is a new Sentence for us";

let findInclu = newSen2.includes("us");
console.log(findInclu);

// remove white space

let removeSpace = "     This is a dummy text";

console.log(removeSpace.trim());

// Problem >> Find if the word "enjoy" present in the new given sentence?

let natureWords = "Hello , I always love to enjoy beauty of Nature";

let searchFor = "Enjoy";

// let result = natureWords.toLowerCase().indexOf(searchFor.toLowerCase());
// console.log(result);
// if(natureWords.toLowerCase().indexOf(searchFor.toLowerCase())){
//     console.log("yes word enjoy present in the sentence");
// }else {
//     console.log("No word enjoy is not present in the sentence");
// }
// let result = natureWords.toLowerCase().includes(searchFor.toLowerCase());
// console.log(`${result} word ${searchFor} is  present in the sentence`);


// lastIndexOf

let lsastInd = searchFor.lastIndexOf("y");
console.log(lsastInd); 
// search
let searchV = searchFor.search("E");
console.log(searchV);

let emailAdderss = "minhaj2md@gmail.com";

if(emailAdderss.includes("@gmail.com")){
    console.log("it's a valid email");
}else {
    console.log("invalid email");
}

// JS Objects

const car = {
    carName: "BMW",
    carModel: 2020,
    carColor: "white",
    carWeight: "850kg"
}
console.log(car);



