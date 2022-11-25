**- for a better format pls right click the tab or file and select preview -**

```js
//-------------"Function"-------------
// we declare the function addTwo(), in it's parentheses we will set the parameters of num and num1
// the parameters will be assigned undefined by default
function addTwo(num, num1) {
  // function body
  // the sum variable is a container that will hold what we will return
  let sum = 0;
  // we can use shorthand syntax to turn *sum = sum + 5* into sum += 5
  sum += num; // sum = 5
  sum += num1; // sum = 15
  // *return* keyword will send the value back to where it is being invoked
  return sum;
}
// addTwo(5,10) <-- we are calling or invoking the function, inside the parentheses we input *arguments(5,10)* that will be placed where ever our parameters are placed inside the function
console.log("function addTwo() will return", addTwo(5, 10));
```

```js
//--------------"Iteration"------------------

console.log("for ... loop");
function countUp(target) {
  for (let i = 0; i < target; i++) {
    // will print 1 at the start then iterate up by one until it is 1 off of the target (5) as we are using the less than operator
    console.log(i);
  }
  return console.log(target);
}

countUp(5);

function countDown(num) {
  // we are iterating down to 0
  // we assign num to i; if i is greater than 0; i will iterate down by one
  for (let i = num; 0 < i; i--) {
    // will print 5 to start then go down by one through each iteration
    console.log(i);
  }
  // we return console.log(0) that will print 0 to the terminal
  return console.log(0);
}

countDown(5);
```

```js
//-------------"while loop"------------------

function whileUp(target) {
  // we have i as our starting point
  let i = 0;
  // the will loop while keep iterating as long as what is inside the parentheses evaluates to true
  // if i is less than target it will iterate
  while (i < target) {
    console.log(i);
    // we add 1 to i
    i++;
  }
  // return target printed to the terminal
  return console.log(target);
}

whileUp(6);

function whileDown(num) {
  let i = num;
  // if i is greater than or equals to 1 then loop
  while (i >= 1) {
    console.log(i);
    // we subtract 1 each loop
    i--;
  }
  return console.log(0);
}

whileDown(6);
```

```js
//-------------"Nested loops"--------------

function inBothArr(arr, arr2) {
  // result is our container that we will return
  let result = [];
  // we use a for loop to iterate through the first array(arr)
  for (let i = 0; i < arr.length; i++) {
    // we assign the current iteration the the variable num
    const num = arr[i];
    // let now iterate through the second array(arr2) but we assign the current iteration to *j* as we already have *i* assigned to the outer loop
    for (let j = 0; j < arr2.length; j++) {
      // the numj variable will hold our current iteration
      let numJ = arr2[j];
      // by using a if conditional to see if num(arr[i]) is the same as numJ[arr2[j]]
      if (num === numJ) {
        // if true then we push the num to our container
        result.push(num);
      }
    }
  }
  return console.log(result);
}

inBothArr([5, 1, 7, 5, 6, 2, 5, 7, 5], [1, 2, 4, 6]);
```

```js
//-------------"Conditionals"-----------------------

function maybe(arr) {
  // the if keyword allows us to compare if something is true or not ; if the array.length is greater the 2 then return greater than two
  if (arr.length > 2) {
    return console.log("greater than two");
    //the else if allows for an additonal conditional
  } else if (arr.length < 1) {
    return console.log("lesser than one");
    // else is where every result that didnt pass throught the if statement goes to
  } else {
    return console.log(" is at one");
  }
}

maybe([0, 1, 2, 3]);
```
