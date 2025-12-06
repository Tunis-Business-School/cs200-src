document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('myInput');
  
    inputField.addEventListener('input', () => {
      document.getElementById('inputStatus').innerText = `Input Changed: ${inputField.value}`;
    });
  
    inputField.addEventListener('change', () => {
      document.getElementById('changeStatus').innerText = `Input Value Changed: ${inputField.value}`;
    });
  
    inputField.addEventListener('focus', () => {
      inputField.classList.add('focused');
      document.getElementById('focusStatus').innerText = 'Input Field Focused!';
    });
  
    inputField.addEventListener('blur', () => {
      inputField.classList.remove('focused');
      inputField.classList.add('blurred');
      document.getElementById('blurStatus').innerText = 'Input Field Blurred!';
    });
  });
  