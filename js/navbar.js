// Scroll Hide/Show Navbar on Scroll
let lastScrollTop = 0; // Keep track of the last scroll position

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Get the height of the navbar (including the logo)
    const navbarHeight = navbar.offsetHeight;

    // Check if user is scrolling down or up
    if (currentScroll > lastScrollTop) {
        // Scrolling down, hide navbar
        navbar.style.top = `-${navbarHeight}px`; // Hide navbar completely based on height
    } else {
        // Scrolling up, show navbar
        navbar.style.top = "0"; // Bring the navbar back into view
    }

    // Update last scroll position
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);

// Toggle mobile menu visibility
function toggleMenu() {
    const navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.classList.toggle('active');
}

// Smooth Scroll and Close Menu on Click (for mobile)
document.querySelectorAll('.navbar-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        
        // You can add smooth scroll behavior here
        const targetId = this.getAttribute('href').substring(1); // Get target section ID
        const targetSection = document.getElementById(targetId);

        // Scroll to the target section
        window.scrollTo({
            top: targetSection.offsetTop - 60, // Adjust for navbar height
            behavior: 'smooth'
        });

        // Close the menu on mobile after clicking
        if (window.innerWidth <= 768) {
            toggleMenu();  // Close the menu when a link is clicked
        }
    });
});







function toggleMenu() {
    const links = document.querySelector('.navbar-links');
    links.classList.toggle('active');
}

// Mobile dropdown toggle
document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const title = dropdown.querySelector('.dropdown-title');
        title.addEventListener('click', (e) => {
            if (window.innerWidth <= 900) {
                e.preventDefault();
                const content = dropdown.querySelector('.dropdown-content');
                content.classList.toggle('mobile-active');
            }
        });
    });
});
