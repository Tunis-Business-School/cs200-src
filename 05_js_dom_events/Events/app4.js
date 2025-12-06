// Function for mouseover event
function mouseOver(event) {
    event.target.textContent = 'Mouse Over';
  }
  
  // Function for mouseout event
  function mouseOut(event) {
    event.target.textContent = 'Mouse Out';
  }
  
  // Function for click event
  function mouseClick(event) {
    const clickInfo = document.getElementById('clickInfo');
    clickInfo.textContent = `You clicked box ${event.target.id}`;
  }
  