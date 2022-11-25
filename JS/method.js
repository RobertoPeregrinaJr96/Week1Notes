// copy and paste this in the terminal
//(          node practice/method.js               )

console.log(".length");

// when using .length method remember that your always off by one when targeting a index
console.log("apple".length); //  5
console.log("apple"[4]); // e <--- the last letter of the string

function arrCount(array) {
  let count = 0;
  // we can iterate through a array by using a loop to iterate the index within the []
  // we start at the 0 index; if 0 is less than array.length which is 4 ; 0 + 1
  for (let index = 0; index < array.length; index++) {
    // element is the array parameter at the [index]
    let element = array[index];
    // we are adding to the container
    count += element;
  }
  return count;
}

console.log(arrCount([1, 2, 3, 4, 5]));

console.log("-----------------------------------");

console.log(".splice");
function shareFood(arr) {
  // the .splice method targets the index and take out the section out
  // we are saving the value of .splice to the variable forYou
  // we are targeting the first index and we are taking out bread and cheese
  let forYou = arr.splice(1, 2);
  // console.log(arr) // [ 'bread', 'cheese' ]
  return console.log(forYou); // ["bread"]
}

shareFood(["bread", "bread", "cheese", "cheese"]);

console.log("-----------------------------------");

console.log(".split and .join");
// the .split method allows the inmutable string data type to turn into a mutable array
console.log("apple".split("")); //[ 'a', 'p', 'p', 'l', 'e' ]
let arr = ["a", "p", "p", "l", "e"];
// the .join method turns the array to a string
console.log(arr.join("")); // apple

function reverseString(string) {
  let letters = string.split(""); // [ 'a', 'p', 'p', 'l', 'e' ]
  // the .reverse array method reverses the order of the array
  let reverse = letters.reverse(); // [ 'e', 'l', 'p', 'p', 'a' ]
  let word = reverse.join(""); // elppa
  return console.log(word);
}

reverseString("apple");

console.log("-----------------------------------");

console.log(".unshift and .shift");

function firstElement(array) {
  if (array.length <= 2) {
    // .unshift will add a element to the front of the array
    array.unshift(1);
  } else {
    // .shift will take off the first element of the array
    array.shift();
  }
  return console.log(array);
}

firstElement([0, 1, 2, 3, 4, 5]); // [1,2,3,4,5]
firstElement([0]);// [1,0]

console.log(".push and .pop")

function firstElement1(array) {
    if (array.length <= 2) {
      // .push will add a element to the back of the array
      array.push(1);
    } else {
      // .pop will take off the last element of the array
      array.pop();
    }
    return console.log(array);
  }

  firstElement1([0, 1, 2, 3, 4, 5]); // [ 0, 1, 2, 3, 4 ]
  firstElement1([0]); // [0,1]
