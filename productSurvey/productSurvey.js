const submitButton = document.getElementById('submitBtn');

// Attach the click handler once
submitButton.addEventListener('click', submitFeedback);

function submitFeedback(event) {
  // Prevent default form submission (if your button is inside a <form>)
  event.preventDefault();

  // Read values *inside* the function
  const username = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const email = document.getElementById('email').value;
  const job = document.getElementById('job').value;
  const designation = document.getElementById('designation').value;
  const productType = document.getElementById('productType').value;
  const feedback = document.getElementById('feedbackText').value;

  // Update the display section
  document.getElementById('userName').innerHTML = username;
  document.getElementById('userAge').innerHTML = age;
  document.getElementById('userEmail').innerHTML = email;
  document.getElementById('userJob').innerHTML = job;
  document.getElementById('userDesignation').innerHTML = designation;
  document.getElementById('userProductChoice').innerHTML = productType;
  document.getElementById('userFeedback').innerHTML = feedback;

  alert('Thank you for your valuable feedback');

  // Show the user info block
  document.getElementById('userInfo').style.display = 'block';
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitFeedback();
    }
  });