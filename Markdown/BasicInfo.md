**- for a better format pls right click the tab or file and select preview -**


```js
// console.log() is a great debugging tool
console.log("Hello World") // prints Hello World to the terminal
// <--- these are single line code comments; use these for comments for your code

/*

 these are multi line comments

*/

```

```js
//-----------"Number Type"-----------------
console.log(1) // prints 1
console.log(2) // prints 2
console.log(3) // prints 3
console.log(4) // prints 4
console.log(5) // prints 5
```
------------------------------------------------------------------

```js
//--------------------"Operators"---------------
console.log(1 + 1) // prints 2      + adds the number
console.log(2 - 1) // prints 1      - subtract's the number
console.log(3 * 2) // prints 6      * multiply's the number
console.log(4 / 2) // prints 2      / divides the number
console.log(5 % 10) // prints 5     % modulo returns the remainder

//-----------------"Boolean Operators"----------------------
console.log(!true) // false        ! bang returns the opposite value
console.log(true && false) // flase     && and has to have both be true to be true
console.log(true || false) // true      || only needs one to be true to return true

//----------------"Comparison Operators"------------------
console.log(2 === 2) // true        === compares both elements strictly
console.log(2 == "2") // true       == compares both elements loosly
console.log(2 !== 1) // true        !== compares to see if there not the same
console.log(2 > 1) // true      > checks if 2 is greater than 1
console.log(2 < 1) // false     < checks if 2 is lesser than 1
console.log(12 >= 12) // true    >= checks if 12 is greater than or equal to 12
console.log(23 <= 43) // true    <= checks if 23 is lesser than or qual to 43
```

```js
//------------"Variables"--------------
// let number ;      <----- declares the variable // will return undefined as nothing was assigned to it
// let number = 20  <----- the variable number is being initializing
```

------------------------------------------------------------------
``` js
//--------------"Truthy Values"-------------
console.log(2)      // has value
console.log("true")     // has value
console.log(true)       // is true
//--------------"Falsy Value"---------------
console.log(false)      // is false
console.log(0)      // has no value
console.log(-0)     // anything less than 0 is falsy
console.log(0n)     // idk it just is
console.log("")     // is a string but is empty
console.log(null)       // absence of value
console.log(undefined)      // isnt a value
console.log(NaN)        // Not a number
```
------------------------------------------------------------------
```js
//---------------"Arrays"--------------
// Arrays are data structures that holds data
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9,]) // will print [1, 2, 3, 4, 5, 6, 7, 8, 9,] in the terminal //
console.table([1, 2, 3, 4, 5, 6, 7, 8, 9,]) // will print a table pairing the element with their corresponding indices
// a tip to remember is that the "index is always off by one"
console.table([[1, 2, 3, 4, 5], ['a', 'b', 'c', 'd', 'e']])
// you can nest arrays in one another and this is called a 2D array
```
------------------------------------------------------------------


```js
//-------------"typeof"------------
console.log(typeof 4) // number
console.log(typeof [1, 2, 3, 4]) // object
console.log(typeof function () { })//    function
console.log(typeof "apple") // string
```
