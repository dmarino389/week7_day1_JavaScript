


//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dog_string, dog_names){
  let foundAMatch = false;
  for (let i = 0; i < dog_names.length; i++) {
    let name = dog_names[i];

    if (dog_string.includes(name)){
      console.log('Mathced ' + name);
      foundAMatch = true;
    }
  }
  if (!foundAMatch) {
    console.log('No Matches')
  }
}



//Call method here with parameters
findWords(dog_string, dog_names); 
console.log(findWords('Hello', dog_names));
console.log('-------------------------------------------------------------------------')

let arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];

function replaceEvens(arr) {
  for (let i = 0; i < arr.length; i += 2) {
    arr.splice(i, 1, "even index");
  }
  return arr;
}

console.log(replaceEvens(arr));


//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


// https://www.codewars.com/kata/583710ccaa6717322c000105/train/python
function simple_multiplication(number) {
  if (number % 2 == 0) {
  return number *8;
  }else {
    return number * 9
  }
  
}

// https://www.codewars.com/kata/55a70521798b14d4750000a4/train/python
function greet(name) {
  console.log('Hello ' + name + ' How are you doing today?')
}

greet('dimitrius')