// Wait for the DOM content to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // --- Responsive Navigation (Hamburger Menu) ---

    // Get the hamburger button and the navigation menu
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

    // Add a click event listener to the hamburger button
    hamburger.addEventListener('click', () => {
        // Toggle the 'active' class on both the hamburger and the nav menu
        // The 'active' class is used in CSS to show/hide the menu and animate the icon
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Close the mobile menu when a navigation link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            // Remove the 'active' class from both the hamburger and the nav menu
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });

    // --- Smooth Scrolling for all internal links ---

    // Select all links that start with '#' (internal links)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Prevent the default anchor link behavior
            e.preventDefault();

            // Use the `href` attribute to get the target element's ID
            const targetId = this.getAttribute('href');
            // Select the target element
            const targetElement = document.querySelector(targetId);

            // Scroll smoothly to the target element
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Client-Side Contact Form Validation ---

    // Get the contact form element
    const contactForm = document.getElementById('contact-form');

    // Add a submit event listener to the form
    contactForm.addEventListener('submit', function(e) {
        // Prevent the default form submission behavior
        e.preventDefault();

        // Get the form fields
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        // Simple validation checks
        let isValid = true;

        // Check if name is empty
        if (name.value.trim() === '') {
            alert('Please enter your name.');
            isValid = false;
            name.focus();
            return; // Exit the function if validation fails
        }

        // Check if email is empty and if it's a valid email format
        // The regex is a basic check; browser's built-in validation is more robust, but this provides a fallback
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === '') {
            alert('Please enter your email address.');
            isValid = false;
            email.focus();
            return;
        } else if (!emailRegex.test(email.value.trim())) {
            alert('Please enter a valid email address.');
            isValid = false;
            email.focus();
            return;
        }

        // Check if message is empty
        if (message.value.trim() === '') {
            alert('Please enter a message.');
            isValid = false;
            message.focus();
            return;
        }

        // If all fields are valid
        if (isValid) {
            // In a real application, you would send the form data to a server here
            // Example: using the Fetch API
            // fetch('/submit-form', {
            //     method: 'POST',
            //     body: new FormData(this)
            // }).then(response => {
            //     if (response.ok) {
            //         alert('Thank you for your message!');
            //         this.reset(); // Reset the form after successful submission
            //     } else {
            //         alert('There was an error sending your message. Please try again later.');
            //     }
            // });

            // For this example, we'll just show an alert and reset the form
            alert('Thank you for your message! We will get back to you shortly.');
            this.reset();
        }
    });

});