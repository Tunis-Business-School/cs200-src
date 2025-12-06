// Selecting the form and elements to display submitted data
const form = document.getElementById('myForm');
const submittedData = document.getElementById('submittedData');
const submittedName = document.getElementById('submittedName');
const submittedEmail = document.getElementById('submittedEmail');

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevents the default form submission behavior

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // Display submitted data
  submittedName.textContent = name;
  submittedEmail.textContent = email;
  submittedData.style.display = 'block';
}

// Event listener for form submission
form.addEventListener('submit', handleSubmit);
