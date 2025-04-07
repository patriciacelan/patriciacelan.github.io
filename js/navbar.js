// Toggle mobile menu visibility
function toggleMenu() {
    const navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.classList.toggle('active');
}

// If you want to make the menu clickable even without the hamburger icon, 
// you can use the following (but typically, it's used for when clicking links too).
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
