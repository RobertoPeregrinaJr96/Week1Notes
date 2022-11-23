// copy and paste this in the terminal
//(          node practice/func.js               )


console.log("Function")
// we declare the function addTwo(), in it's parentheses we will set the parameters of num and num1
// the parameters will be assigned undefined by default
function addTwo(num, num1) {
    // function body
    // the sum variable is a container that will hold what we will return
    let sum = 0
    // we can use shorthand syntax to turn *sum = sum + 5* into sum += 5
    sum += num // sum = 5
    sum += num1 // sum = 15
    // *return* keyword will send the value back to where it is being invoked
    return sum
}
// addTwo(5,10) <-- we are calling or invoking the functio, inside the parentheses we input *arguments(5,10)* that will be placed where ever our parameters are placed inside the function
console.log('function addTwo() will return', addTwo(5, 10))

console.log("-----------------------------------")

console.log("Iteration")

console.log("for ... loop")
function countUp(target) {
    for (let i = 0; i < target; i++) {
        // will print 1 at the start then iterate up by one until it is 1 off of the target (5) as we are using the less than operator
        console.log(i)
    }
    // will print 5 to the terminal
    return console.log(target)
}

countUp(5)

function countDown(num) {
    // we are iterating down to 0
    // we assign num to i; if i is greater than 0; i will iterate down by one
    for (let i = num; 0 < i; i--) {
        // will print 5 to start then go down by one through each iteration
        console.log(i)
    }
    // we return console.log(0) that will print 0 to the terminal
    return console.log(0)
}

countDown(5)

console.log("while ... loop")

function whileUp(target) {
    // we have i as our starting point
    let i = 0
    // the will loop while keep iterating as long as what is inside the parenthese evaluates to true
    // if i is less than target it will iterate
    while (i < target) {
        console.log(i)
        // we add 1 to i
        i++
    }
    // return target printed to the terminal
    return console.log(target)
}

whileUp(6)

function whileDown(num) {
    let i = num
    // if i is greater than or equals to 1 then loop
    while (i >= 1) {
        console.log(i)
        // we subtract 1 each loop
        i--
    }
    return console.log(0)
}

whileDown(6)
