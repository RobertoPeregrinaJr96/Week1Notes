// copy and paste this in the terminal
//(          node practice/method.js               )

console.log(".length")

// when using .length method remember that your always off by one when targeting a index
console.log("apple".length) //  5
console.log("apple"[4]) // e <--- the last letter of the string

function addTwo(array) {
    // we can iterate through a array by using a loop to iterate the index within the []
    // we start at the 0 index; if 0 is less than 4 ; 0 + 1
    for (let index = 0; index < array.length; index++) {
        // element is the array parameter at the [index]
        let element = array[index];
        console.log(element)
    }

}

addTwo([1, 2, 3, 4, 5])


console.log("-----------------------------------")

console.log(".splice")
function shareFood(arr) {
    // the .splice method targets the index and take out the section out
    // we are saving the value of .splice to the variable forYou
    // we are targeting the first index and we are only take one out of it while inserting a thank you message
    let forYou = arr.splice(1, 1, "Thanks for the food")
    // console.log(arr) // [ 'bread',"Thanks for the food", 'cheese' ]
    return console.log(forYou) // ["bread"]
}

shareFood(["bread", "bread", "cheese"])

console.log("-----------------------------------")


console.log(".split and .join")
// the .split method allows the inmutable string data type to turn into a mutable array
console.log("apple".split('')) //[ 'a', 'p', 'p', 'l', 'e' ]
let arr = ['a', 'p', 'p', 'l', 'e']
// the .join method turns the array to a string
console.log(arr.join('')) // apple

function reverseString(string) {
    let letters = string.split('') // [ 'a', 'p', 'p', 'l', 'e' ]
    // the .reverse array method reverses the order of the array
    let reverse = letters.reverse() // [ 'e', 'l', 'p', 'p', 'a' ]
    let word = reverse.join('') // elppa
    return console.log(word)
}

 reverseString("apple")
