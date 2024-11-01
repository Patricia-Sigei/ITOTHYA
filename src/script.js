document.addEventListener('DOMContentLoaded', function() {
    // Dropdown Menu Functionality
    const dropdownToggle = document.querySelector('.navbar .dropdown-toggle');
    const dropdownMenu = document.querySelector('.navbar .dropdown-menu');

    if (dropdownToggle && dropdownMenu) {
        dropdownToggle.addEventListener('click', function(event) {
            event.preventDefault();
            dropdownMenu.classList.toggle('show');
        });

        // Close dropdown if clicked outside
        window.addEventListener('click', function(event) {
            if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.classList.remove('show');
            }
        });
    }

    // Search Form Validation
    const searchForm = document.querySelector('.form-inline');
    const searchInput = document.querySelector('.nav_search-btn');

    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission

            const query = searchInput.value.trim();
            if (query === '') {
                alert('Please enter a search term.');
            } else {
                // Implement your search functionality here (e.g., AJAX call)
                alert(`Searching for: ${query}`);
                searchForm.reset(); // Optionally reset the form
            }
        });
    }

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('All fields are required.');
            } else {
                // Perform the contact submission logic here
                document.getElementById('confirmationMessage').innerText = 'Thank you for contacting us!';
                contactForm.reset(); // Reset the form fields
            }
        });
    }

    // Payment Button Functionality
    const paymentButton = document.querySelector('#payment button');
    if (paymentButton) {
        paymentButton.addEventListener('click', function() {
            const amount = document.getElementById('amount').value.trim();
            if (amount === '' || isNaN(amount) || amount <= 0) {
                alert('Please enter a valid amount.');
            } else {
                // Implement payment processing logic here
                document.getElementById('paymentMessage').innerText = `Payment of Ksh ${amount} processed successfully!`;
                document.getElementById('amount').value = ''; // Clear the input field
            }
        });
    }

    // Pay Now Button Functionality
    const payNowBtn = document.getElementById('payNowBtn');
    if (payNowBtn) {
        payNowBtn.addEventListener('click', function() {
            alert('Thank you for choosing to pay now! Redirecting you to the payment page...');
            // Optionally, redirect to a payment page
            // window.location.href = 'payment_page_url_here'; // Uncomment and replace with your URL
        });
    }
});
