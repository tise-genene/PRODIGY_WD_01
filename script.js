document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Change navbar color on scroll and based on the active section
    window.addEventListener('scroll', function () {
        var navbar = document.getElementById('navbar');
        var homeSection = document.getElementById('home');
        var servicesSection = document.getElementById('services');
        var aboutSection = document.getElementById('about');
        var contactSection = document.getElementById('contact');

        if (isElementInViewport(homeSection)) {
            navbar.style.backgroundColor = '#3498db'; // Blue for Home
        } else if (isElementInViewport(servicesSection)) {
            navbar.style.backgroundColor = '#f1c40f'; // Yellow for Services
        } else if (isElementInViewport(aboutSection)) {
            navbar.style.backgroundColor = '#e74c3c'; // Red for About Us
        } else if (isElementInViewport(contactSection)) {
            navbar.style.backgroundColor = '#2ecc71'; // Green for Contact Us
        }
    });

    // Check if an element is in the viewport
    function isElementInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }
});
