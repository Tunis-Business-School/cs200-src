// Selecting the body element
const body = document.body;

// Function to change the background color based on key press
function changeBackgroundColor(event) {
  // Display the key code in the span element
  document.getElementById('keyCode').textContent = event.keyCode;

  // Change background color based on key pressed
  switch (event.keyCode) {
    case 49: // Key code for "1"
      body.style.backgroundColor = 'lightblue';
      break;
    case 50: // Key code for "2"
      body.style.backgroundColor = 'lightgreen';
      break;
    case 51: // Key code for "3"
      body.style.backgroundColor = 'lightcoral';
      break;
    case 52: // Key code for "4"
      body.style.backgroundColor = 'lightyellow';
      break;
    default:
      // Reset to default color for other keys
      body.style.backgroundColor = 'white';
  }
}

// Event listener for keydown event
document.addEventListener('keydown', changeBackgroundColor);
