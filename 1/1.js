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