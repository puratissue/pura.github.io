/* scripts.js */

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const navToggle = document.querySelector('#nav-toggle');
    const navMenu = document.querySelector('nav ul');
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('open');
    });
    
    // Form validation
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.querySelector('#name').value.trim();
            const email = document.querySelector('#email').value.trim();
            const message = document.querySelector('#message').value.trim();
            
            if (name === '' || email === '' || message === '') {
                alert('All fields are required!');
            } else {
                alert('Form submitted successfully!');
                contactForm.reset(); // Clear the form fields
            }
        });
    }
});
