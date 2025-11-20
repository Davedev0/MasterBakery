// Initialize EmailJS
emailjs.init("G1HPdUGsu1x_fnhrC");

// Form submission handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form data
  const formData = {
    from_name: document.getElementById('contact-name').value,
    from_email: document.getElementById('contact-email').value,
    subject: document.getElementById('contact-subject').value,
    message: document.getElementById('contact-message').value
  };
  
  // Send email using EmailJS
  emailjs.send('service_1w3k69g', 'template_enwxgkh', formData)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');

    }, function(error) {
      console.log('FAILED...', error);
      alert('Failed to send message. Please try again.');
    });
});