console.log('hello world')

console.log(1 + 10)


// WRITING A COMMENT
// THE BEST SHORTCUT FOR A SINGLE LINE COMMENT INS CTR /
/*THIS IS A MULTI LINE 
COMMENT */


var myName = 'Shoha'
console.log(typeof myName)
myName = 'Brendan'
console.log(typeof myName)
myName = 9000
console.log(typeof myName)
console.log(myName)

// JS hoisting
console.log(age)
var age = 10
console.log(age)
var variable // DECLARATION
variable = 100 //DEFINITION

// INSTEAD OF VAR use LET or CONST

let myList = [1,2,3,4,5]
console.log(myList)
const nums = [10,9,8,7,6]
console.log(nums)

const favoriteNumber = 10
console.log(favoriteNumber * 10)
let favoriteColor = 'Yellow'
favoriteColor = 'Blue'
console.log(favoriteColor)
// use const until you have to use let based off the instance of your code


// in JS there is no distinction between Integers and Floats

const num1 = 10
const num2 = 3.14
console.log(num1, typeof num1)
console.log(num2, typeof num2)

// JS does not care about indentation
const teacher1 = 'Shoha'; const teacher2 = 'Brendan'; console.log(teacher1, teacher2)
// just make sure that your ending your code with an apostraphe


// lists are known as Arrays in JS
const names = ['Shoha', 'Brendan', 1,2,3,4, [10,11,12]]
console.log(names)
console.log(names[5][1])
Array.isArray(names)
console.log(Array.isArray(names))


// dictionaries are known as objects in JS
const obj = {
  'first name': 'Dimitrius',
  age: 21,
  last_name: 'Marino',
  'Content-Type': 'human'

};

console.log(obj)
console.log(obj['first name']) // bracket notation
console.log(obj.last_name) // dot notation
console.log(age)
console.log(obj['Content-Type']) // you use bracket notation when the key name is a little funky


obj['first name'] = 'Brendan'
console.log(obj['first name'])



// undeclared / undefined / null
let car // car is no longer undefined
console.log(car) // undefined
car = null
console.log(car)

// BASIC MATH OPERATIONS
console.log('----------------------------------------------------------------------------------------')
console.log('MATH')
console.log('--------------------------------------------------------------------------------------------------------')
//addition
let sum = 5 + 6;
console.log(sum);
sum ++
console.log(sum)


// addition
let diff = 10-4
console.log(diff)
diff --
console.log(diff)

//multiplication
let prod = 5 * 4
console.log(prod)
prod *=2
console.log(prod)
prod **
console.log(prod)

//division
let quo = 10/3
console.log(quo/=2)
console.log(quo)

// more math tingz
const floor = Math.floor(24.7)
console.log(floor)
const ceil = Math.ceil(24.7)

const n1 = 2
const n2 = '3'
const res = n1 + parseInt(n2) 
console.log(res, typeof res) // if you add a number to a string then it will automatically turn the asnwer or result into a string

console.log(parseInt('24.7'), typeof parseInt('24.7'))
console.log(parseFloat('24.7'), typeof parseFloat('24.7'))

//  method 1: most similar to pthon 
function nameOfFunction(param1, param2){
  'line1'
  'line2'
  'line3'
  'line4'
  return param1 + param2
}
console.log(nameOfFunction(1,200))

// method 2: nameless functions, but store it to a variable
const newFunc = function (x,y){
  'line1'
  'line2'
  return x + y
}

console.log(newFunc(2,1), typeof newFunc)

// method 3: arrow function
// SYNTAX () => {}
const test = (a,b) => {
  const output = a + b
  return output
}
console.log(test(21,25))
console.log(typeof test)

// arrow function with one param

const happyBirthday = (age) => {
  const newAge = age +1
  console.log('Happy Birthday! You are now ' + newAge + ' years old')
}

console.log(happyBirthday(20))

//  arrow function with one line in the body
const multiply = (num1, num2) => {return num1 * num2}
console.log(multiply(20,5));

//  simply arrow functio with one param and one line
const addTwo = num => num + 2;
console.log(addTwo(10));

// self invoking function
(()=>{
  console.log('I am running on my own');
})();

// closure
const outer = () => {
  let counter = 0; // private variable

  const inner = () => {
      console.log(counter);
      counter++;
  }

  return inner
}

const result = outer()
result()
result()
result()
result()
result()
result()
result()
result()
result()
result()
result()


// Control Flow
// If statements

const ifTest = (num) => {
  if (num < 10){
    console.log('small')
  }
  else if (num > 20){
    console.log('big')
  }
  else {
    console.log('medium')
  }
};

ifTest(200)

// Ternary Operator
// SYNTAX: CONDITION ? ( WHAT HAPPENS IF TRUE) : (WHAT HAPPEENS IF FALSE)
const getFee = isMember => {
  return isMember ? '2.00' : '10.00'
};
console.log(getFee(true))
console.log(getFee(false))


//  loops
// FOR LOOPS

const myNames = ['Shoha', 'Brendan', 'Dimitrius', 'Sawyer']
// SYNTAX: for (let variable; condition; incrementor){codeblock}
for (let i = 0; i < myNames.length; i++){
  console.log(i, myNames[i])

}

// ES6
// for - of loop when looping through an array
for (let name of myNames) {
  console.log(name)
};

// for - in loop when looping through an object
const people = {
  'shoha': 9000,
  'shohas': 9001,
  'shohaz': 9002
}
for (let person in people){
  console.log(person)
};

//while loops 
// while (condition) {codeblock}
let i = 0;
while (i < 10) {
  if (i == 4) {
    i++;
    continue;
  } else if (i == 8) {
    break;
  }
  i++;
}

// ARRAY METHODS
const my_people = ['shoha', 'brendan']
my_people.push('sam')
console.log(my_people)
console.log(my_people[2])
console.log(my_people.length)
console.log(my_people.toString())
console.log(my_people.join('##'))
console.log(my_people.slice(1, 4))
console.log(my_people)


// splice
console.log(my_people)
console.log(my_people.splice(1, 2))
console.log(my_people.splice())