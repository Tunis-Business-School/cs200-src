function reverseString(str){
    return str.split('').reverse().join('');
}

let userInput = prompt('Please enter a string:');
if (userInput !== null) {
  console.log('The reversed String is:', reverseString(userInput));
} else {
  console.log('User clicked Cancel');
}