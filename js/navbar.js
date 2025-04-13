// === Scroll Hide/Show Navbar on Scroll (Desktop & Mobile) ===
let lastScrollTop = 0;

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    const navbarLinks = document.querySelector('.navbar-links');
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Get the height of the navbar (including the logo)
    const navbarHeight = navbar.offsetHeight;

    // Hide/show the navbar based on scroll direction
    if (currentScroll > lastScrollTop) {
        navbar.style.top = `-${navbarHeight}px`; // Scroll down = hide
        if (window.innerWidth <= 900 && navbarLinks.classList.contains('active')) {
            navbarLinks.classList.remove('active'); // Close mobile menu on scroll
        }
    } else {
        navbar.style.top = "0"; // Scroll up = show
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);

// === Toggle mobile menu visibility ===
function toggleMenu() {
    const navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.classList.toggle('active');
}

// === Close mobile menu when link is clicked ===
document.querySelectorAll('.navbar-link').forEach(link => {
    link.addEventListener('click', function (e) {
        // Optional smooth scroll if you're targeting section IDs
        // You can uncomment and adjust this if needed
        // e.preventDefault();
        // const targetId = this.getAttribute('href').substring(1);
        // const targetSection = document.getElementById(targetId);
        // window.scrollTo({
        //     top: targetSection.offsetTop - 60,
        //     behavior: 'smooth'
        // });

        if (window.innerWidth <= 900) {
            const navbarLinks = document.querySelector('.navbar-links');
            navbarLinks.classList.remove('active');
        }
    });
});

// === Enable mobile dropdown toggle ===
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
