// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
      <input type="checkbox">
      <span>${taskText}</span>
      <button class="deleteBtn">Delete</button>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = ''; // Clear input field after adding task

    // Event listener to delete task when the delete button is clicked
    taskItem.querySelector('.deleteBtn').addEventListener('click', () => {
      taskItem.remove();
    });
  }
}

// Event listener for the "Add" button
addBtn.addEventListener('click', addTask);
