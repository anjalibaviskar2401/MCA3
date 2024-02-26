// Get the form element
var form = document.getElementById('contact-form');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  
  // Get the input values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  
  // Display an alert message with the input values
  alert('Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);
});