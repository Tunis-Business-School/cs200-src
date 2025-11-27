//alert('Welcome to JavaScript Dialog Boxes!');
let result = confirm('Are you sure you want to proceed?');
if (result) {
  // Code if user clicks OK
  console.log('User clicked OK');
} else {
  // Code if user clicks Cancel
  console.log('User clicked Cancel');
}
let userInput = prompt('Please enter your name:', 'John Doe');
if (userInput !== null) {
  console.log('User entered:', userInput);
} else {
  console.log('User clicked Cancel');
}

