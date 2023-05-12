let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

// let a = 5;
// let b = 12;
// let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10

// let myStr = "This is the first sentence.";
// myStr += " ";
// myStr += "This is the second sentence."

// Only change code below this line
// const myName = "Lena";
// const myStr = "My name is " + myName + " and I am well!";

// Change code below this line
// const someAdjective = "good";
// let myStr = "Learning to code is ";
// myStr += someAdjective

// Setup
// let lastNameLength = 0;
// const lastName = "Lovelace";

// Only change code below this line
// lastNameLength = lastName.length;

// Setup
// let firstLetterOfLastName = "";
// const lastName = "Lovelace";

// Only change code below this line
// firstLetterOfLastName = lastName[0]; // Change this line

// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line


// Setup
// const lastName = "Lovelace";

// Only change code below this line
// const thirdLetterOfLastName = lastName[2]; // Change this line


// Setup
// const lastName = "Lovelace";

// Only change code below this line
// const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line
// 
// // Setup
// const lastName = "Lovelace";
// 
// // Only change code below this line
// const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line
// 
// const myNoun = "dog";
// const myAdjective = "big";
// const myVerb = "ran";
// const myAdverb = "quickly";
// 
// // Only change code below this line
// const wordBlanks = "I have a " + myAdjective + " " + myNoun + "." + "And he " + myVerb + " " + myAdverb; // Change this line
// // Only change code above this line


// // Only change code below this line
// const myArray = ["Lena", 33];
// 
// 
// // Only change code below this line
// const myArray = ["Lena", [33, 23]];
// 
// 
// const myArray = [50, 60, 70];
// let myData = myArray[0];
// 
// 
// // Setup
// const myArray = [18, 64, 99];

// Only change code below this line
// myArray[0] = 45;


// const myArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [[10, 11, 12], 13, 14],
// ];
// 
// const myData = myArray[2][1];
// 
// 
// // Setup
// const myArray = [["John", 23], ["cat", 2]];
// 
// // Only change code below this line
// const removedFromMyArray = myArray.pop();
// 
// 
// // Setup
// const myArray = [["John", 23], ["dog", 3]];
// 
// // Only change code below this line
// let removedFromMyArray = myArray.shift()


// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35])


const myList = [["milk", 2], ["bread", 1], ["potatos", 5], ["tomatos", 2], ["chicken", 2],];


//------------------------------
// ФУНКЦИИ
// function reusableFunction() {
//     console.log("Hi World")
// }
// 
// reusableFunction();
// 
// 
// function functionWithArgs(a, b) {
//     console.log(a + b)
// }
// 
// functionWithArgs(5, 5)
// 
// 
// function timesFive(a) {
//     return a*5
// }
// timesFive(5)




function myLocalScope() {
    // Only change code below this line
    var myVar=5
    console.log('inside myLocalScope', myVar);
}
// myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
// console.log('outside myLocalScope', myVar);


// Setup
const outerWear = "T-Shirt";

function myOutfit() {
    // Only change code below this line
    const outerWear = "sweater";
    // Only change code above this line
    return outerWear;
}

myOutfit();



// Setup
let sum = 0;

function addThree() {
    return sum = sum + 3;
}

// Only change code below this line
function addFive() {
    sum = sum + 5
}

// Only change code above this line

// addThree();
// addFive();


// Setup
let processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);


function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    const ttt = arr.shift()
    return ttt;
    // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));


function welcomeToBooleans() {
    // Only change code below this line

    return true; // Change this line

    // Only change code above this line
}



function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    if(wasThatTrue){
        return "Yes, that was true"
    }
    return "No, that was false"


    // Only change code above this line

}

// Setup
function testEqual(val) {
    if (val==12) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}
// testEqual(10);

// Setup
function testEqual(val) {
    if (val===7) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}
// console.log(testEqual(10))

// Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  } 
//   compareEquality(10, "10");

// Setup
function testNotEqual(val) {
    if (val!=99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
//   testNotEqual(10);


function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
//   console.log(testStrictNotEqual("bob"))

function testGreaterThan(val) {
    if (va>100) {  // Change this line
      return "Over 100";
    }
  
    if (val>10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  } 
//   testGreaterThan(10);

function testGreaterOrEqual(val) {
    if (val>=20) {  // Change this line
      return "20 or Over";
    }
  
    if (val>=10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
//   testGreaterOrEqual(10);

function testLessThan(val) {
    if (val<25) {  // Change this line
      return "Under 25";
    }
  
    if (val<55) {  // Change this line
      return "Under 55";
    }
  
    return "55 or Over";
  }
//   testLessThan(10);

function testLessOrEqual(val) {
    if (val<=12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
  
    if (val<=24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
//   testLessOrEqual(10);

function testLogicalAnd(val) {
    // Only change code below this line
  if(val<=50 && val>=25){
    return "Yes";
    }
  return "No";
  }
//   console.log(testLogicalAnd(10))

function testLogicalOr(val) {
    if(val<10 || val >20) {
      return "Outside";
    }

    return "Inside";
  }
//   console.log(testLogicalOr(10))

function testElse(val) {
    let result = "";

    if (val > 5) {
      result = "Bigger than 5";
    }else {
      result = "5 or Smaller";
    }
  }
//   console.log(testElse(4))


function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    } else if (val < 5) {
      return "Smaller than 5";
    }else{
    return "Between 5 and 10"};
  }
//   testElseIf(7);


function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }
//   orderMyLogic(7);

function testSize(num) {
    // Only change code below this line
  if(num < 5) return "Tiny"
  else if(num < 10) return "Small"
  else if(num < 15) return "Medium"
  else if(num < 20) return "Large"
  else if(num >= 20) return "Huge"
  
    return "Change Me";
    // Only change code above this line
  } 
// console.log(testSize(3))

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
if(strokes===1) return "Hole-in-one!"
else if(strokes===(par - 2) || strokes<(par - 2)) return "Eagle"
else if(strokes===(par - 1)) return "Birdie"
else if(strokes===par) return "Par"
else if(strokes===(par + 1)) return "Bogey"
else if(strokes===(par + 2)) return "Double Bogey"
else if(strokes===(par + 3) || strokes>(par + 3)) return "Go Home!"
  return "Change Me";
  // Only change code above this line
}
// console.log(golfScore(5, 4))


function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
  switch(val){
    case 1:
        answer="alpha"
        break; 
    case 2:
        answer="beta"
        break;
    case 3:
        answer="gamma"
        break;        
    case 4:
        answer="delta"
        break;              
  }
    // Only change code above this line
    return answer;
  }
//   caseInSwitch(1);


// function countSheeps(arrayOfSheep) {
// 
//   return res=(arrayOfSheep.filter((el)=>el===true)).length
// }

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

function countSheeps(arrayOfSheep) {
  var array = arrayOfSheep.reduce((a,b)=>a + (b===true?1:0),0)
  return array;
}
// console.log(countSheeps([true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]))

function sequentialSizes(val) {
  let answer = "";
switch(val){
case 1:
case 2:
case 3:
answer = "Low"
break;
case 4:
case 5:
case 6:
answer = "Mid"
break;
case 7:
case 8:
case 9:
answer = "High"
break;
}
  return answer;
}
// sequentialSizes(1);


function chainToSwitch(val) {
  let answer = "";
  switch(val){
    case "bob":
    answer = "Marley";
    break;
    case 42:
    answer = "The Answer";
    break;
    case 1:
    answer = "There is no #1";
    break;
    case 99:
    answer = "Missed me by this much!";
    break;
    case 7:
    answer = "Ate Nine";
    break;
    default:
    answer = "";
  }
  // Only change code above this line
  return answer;
}
// chainToSwitch(7);

function isLess(a, b) {
return a < b
}
// isLess(10, 15);

// Setup
function abTest(a, b) {
if(a<0 || b<0){
  return undefined
}
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
// console.log(abTest(9,9))

const myDog0 = {
  name: "lll",
  legs:4,
  tails:1,
  friends:["jjjj","hhh"]

};


const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line



const testObj2 = {
  "an entree": "hamburger",
  "my side": "veggies",
};
const entreeValue = testObj2["an entree"];   // Change t


// Setup
const testObj3 = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
const playerNumber = 16;  // Change this line
const player = testObj3[playerNumber];   // Change this line


// Setup
// const myDog = {
//   "name": "Coder",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["freeCodeCamp Campers"]
// };
// myDog.name="Happy Coder"

// const myDog = {
//   "name": "Happy Coder",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["freeCodeCamp Campers"]
// };
// myDog.bark="gaf"

// Setup
const myDog5 = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line
delete myDog5.tails


// Setup
function phoneticLookup(val) {
  let result = "";
  const lookup ={
    alpha:"Adams",
    bravo:"Boston",
    charlie:"Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  }
  return lookup[val]

  return result;
}
// phoneticLookup("charlie");


function checkObj(obj, checkProp) {
return obj.hasOwnProperty(checkProp)? obj[checkProp] :"Not Found"
}
// console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"))

const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];
const myMusic2={
    "artist": "Billy Joel2",
    "title": "Piano Man2",
    "release_year": 19732,
    "formats": [
      "CD2",
      "8T2",
      "LP2"
    ],
    "gold2": true
  }
myMusic.push(myMusic2)

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const a1 = myStorage["car"]["inside"]["glove box"]
const gloveBoxContents = a1;


const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];
const secondTree = myPlants[1].list[1];


const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};
// -----------НЕ РЕШЕНО
function updateRecords(records, id, prop, value) {
    if(value===""){
      let newArr={...records}
      delete newArr[id][prop]
      return newArr
    }
    if(prop !="tracks" && value!=""){
      let newArr={...records}
      newArr[id][prop]=value
      return newArr
    }
    if(prop ==="tracks" && value!=""){
      if(!records[id].hasOwnProperty([prop])){
        let newArr={...records}
        newArr[id][prop] = []
        newArr[id][prop]=value
        return newArr
      }
    }
  

      

    }

// 
// console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"))

// -----------как то работала
// if(value==="" && records[id][prop] != 'tracks'){
//   let newArr={...records}
//   delete newArr[id][prop]
//   return newArr
// } else if(records[id].hasOwnProperty([prop])){
//   let newArr={...records}
//   newArr[id][prop].push(value)
//   return newArr
// } else {
//   let newArr={...records}
//   newArr[id][prop] = []
//   newArr[id][prop]=value
//   return newArr
// }

// Setup
const myArray5 = [];
let i=5
while(i>=0){
  myArray5.push(i)
  i--
}
// console.log(myArray5)

for (let i=1; i<6; i++){
  myArray.push(i)
}

for(let i=1; i<10; i+=2){
  myArray.push(i)
}

// Setup
const myArray6 = [];

// Only change code below this line
for(let i=9; i>=1; i-=2){
  myArray6.push(i)
}


// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total=0;
for (let i=0; i<myArr.length;i++){
  total+=myArr[i]
}


function multiplyAll(arr) {
  let product = 1;
let res=1;
for(let i=0; i<arr.length; i++){
for(j=0; j<arr[i].length; j++){
  res*=arr[i][j]
}
}
  return res;
}
// console.log(multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]]))