document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle Functionality ---
    const menuToggleButton = document.getElementById('menu-toggle-button');
    const navCtaWrapper = document.querySelector('.nav-cta-wrapper'); // Target the wrapper

    if (menuToggleButton && navCtaWrapper) {
        menuToggleButton.addEventListener('click', () => {
            navCtaWrapper.classList.toggle('mobile-active'); // Toggle the class on the wrapper

            // Optional: Change button text/icon (Aria attribute for accessibility)
            const isExpanded = navCtaWrapper.classList.contains('mobile-active');
            menuToggleButton.setAttribute('aria-expanded', isExpanded);

            if (isExpanded) {
                menuToggleButton.innerHTML = '✕'; // Change to 'X' icon when open
            } else {
                menuToggleButton.innerHTML = '☰'; // Change back to hamburger icon
            }
        });

        // Optional: Close menu when a nav link is clicked (for single-page applications)
        const navLinks = navCtaWrapper.querySelectorAll('.main-navigation a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navCtaWrapper.classList.contains('mobile-active')) {
                    navCtaWrapper.classList.remove('mobile-active');
                    menuToggleButton.setAttribute('aria-expanded', 'false');
                    menuToggleButton.innerHTML = '☰';
                }
            });
        });

    } else {
        console.warn('Mobile menu toggle button or navigation wrapper not found.');
    }

    // --- Optional: Sticky Header Functionality ---
    const siteHeader = document.querySelector('.site-header');
    if (siteHeader) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) { // Adjust 50 to when you want the header to become sticky
                siteHeader.classList.add('scrolled');
            } else {
                siteHeader.classList.remove('scrolled');
            }
        });
    }

    // --- (Your existing slider-index.js logic will be in its own file or can be here too) ---
    // If you want to combine slider-index.js here, paste its content below,
    // but ensure it's also wrapped in a DOMContentLoaded listener or placed after this toggle code.
    // For now, assuming slider-index.js is separate and correctly linked.

});