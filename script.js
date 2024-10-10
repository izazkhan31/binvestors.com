document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Log the message to the console (for demonstration)
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

    // Show an alert to the user
    alert('Your message has been sent!');

    // Reset the form
    document.getElementById('contactForm').reset();
});
