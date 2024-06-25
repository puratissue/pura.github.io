<link rel="stylesheet" href="styles.css">

// scripts.js

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const navToggle = document.querySelector('#nav-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('open');
        });
    }

    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

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

    // Modal functionality for product details
    const modal = document.querySelector('#product-modal');
    const modalContent = document.querySelector('#product-modal .modal-content');
    const closeModalBtn = document.querySelector('#product-modal .close');

    const productDetailsLinks = document.querySelectorAll('.details-button');
    productDetailsLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const productId = this.getAttribute('href').split('=')[1];
            showProductDetails(productId);
        });
    });

    if 

