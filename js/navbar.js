// Toggle mobile menu visibility
function toggleMenu() {
    document.querySelector('.navbar-links').classList.toggle('active');
}

// Load content dynamically (example for smooth transition)
document.querySelectorAll('.navbar-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        
        const targetId = this.getAttribute('href').substring(1); // Get target section ID
        const targetSection = document.getElementById(targetId);
        
        // You can use smooth scrolling or load content dynamically (AJAX)
        window.scrollTo({
            top: targetSection.offsetTop - 60, // Adjust for navbar height
            behavior: 'smooth'
        });

        // Close menu on mobile after clicking
        if (window.innerWidth <= 768) {
            toggleMenu();
        }
    });
});
