document.addEventListener('DOMContentLoaded', function() {
    // Dropdown toggle functionality
    const dropdownToggle = document.querySelector('.navbar .dropdown-toggle');
    const dropdownMenu = document.querySelector('.navbar .dropdown-menu');

    if (dropdownToggle && dropdownMenu) {
        dropdownToggle.addEventListener('click', function(event) {
            event.preventDefault();
            dropdownMenu.classList.toggle('show');
        });

        window.addEventListener('click', function(event) {
            if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.classList.remove('show');
            }
        });
    }

    // Search form functionality
    const searchForm = document.querySelector('.form-inline');
    const searchInput = document.querySelector('.nav_search-btn');

    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const query = searchInput.value.trim();
            if (query === '') {
                alert('Please enter a search term.');
            } else {
                alert(`Searching for: ${query}`);
                searchForm.reset();
            }
        });
    }

    // Contact form functionality
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('All fields are required.');
            } else {
                document.getElementById('confirmationMessage').innerText = 'Thank you for contacting us!';
                contactForm.reset();
            }
        });
    }

    // Payment functionality
    const paymentButton = document.querySelector('#payment button');
    if (paymentButton) {
        paymentButton.addEventListener('click', function() {
            const amount = document.getElementById('amount').value.trim();
            if (amount === '' || isNaN(amount) || amount <= 0) {
                alert('Please enter a valid amount.');
            } else {
                document.getElementById('paymentMessage').innerText = `Payment of Ksh ${amount} processed successfully!`;
                document.getElementById('amount').value = '';
            }
        });
    }

    const payNowBtn = document.getElementById('payNowBtn');
    if (payNowBtn) {
        payNowBtn.addEventListener('click', function() {
            alert('Thank you for choosing to pay now! Redirecting you to the payment page...');
        });
    }

    // Back to top arrow functionality
    const backToTopButton = document.querySelector('.back-to-top');

    // Show/hide back-to-top button on scroll
    function toggleBackToTopButton() {
        if (window.scrollY > 100) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    }

    // Scroll to top when back-to-top button is clicked
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function(event) {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Listen for scroll events to toggle the button's visibility
        window.addEventListener('scroll', toggleBackToTopButton);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const partnerButton = document.querySelector('.main-btn');

    if (partnerButton) {
        partnerButton.addEventListener('click', function() {
            window.location.href = "html files/login.html"; 
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const partnerButton = document.querySelector('.main-btn');

    if (partnerButton) {
        partnerButton.addEventListener('click', function() {
            window.location.href = "html files/login.html"; 
        });
    }
});
