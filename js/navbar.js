// === Scroll Hide/Show Navbar on Scroll (Desktop & Mobile) ===
let lastScrollTop = 0;
let isScrollingMenu = false;

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const navbarLinks = document.querySelector('.navbar-links');

    // === Detect scroll inside the mobile menu ===
    if (navbarLinks) {
        navbarLinks.addEventListener('scroll', () => {
            isScrollingMenu = true;

            // Reset scroll flag after short delay
            clearTimeout(navbarLinks.scrollTimeout);
            navbarLinks.scrollTimeout = setTimeout(() => {
                isScrollingMenu = false;
            }, 150);
        });
    }

    // === Scroll listener for page scroll ===
    window.addEventListener('scroll', function () {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        const navbarHeight = navbar.offsetHeight;

        // If mobile menu is open and user is scrolling inside it — do nothing
        if (window.innerWidth <= 900 && navbarLinks.classList.contains('active') && isScrollingMenu) {
            return;
        }

        if (currentScroll > lastScrollTop) {
            navbar.style.top = `-${navbarHeight}px`; // Scroll down = hide

            // Close mobile menu on actual page scroll
            if (window.innerWidth <= 900 && navbarLinks.classList.contains('active')) {
                navbarLinks.classList.remove('active');
            }
        } else {
            navbar.style.top = "0"; // Scroll up = show
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }, false);

    updateNavbarLinksPosition(); // Set position on initial load

    // === Enable mobile dropdown toggle ===
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

// === Toggle mobile menu visibility ===
function toggleMenu() {
    const navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.classList.toggle('active');
    updateNavbarLinksPosition(); // Ensure position is updated when opened
}

// === Close mobile menu when a link is clicked ===
document.querySelectorAll('.navbar-link').forEach(link => {
    link.addEventListener('click', function () {
        if (window.innerWidth <= 900) {
            const navbarLinks = document.querySelector('.navbar-links');
            navbarLinks.classList.remove('active');
        }
    });
});

// === Dynamically adjust mobile dropdown position ===
function updateNavbarLinksPosition() {
    const navbar = document.querySelector('.navbar');
    const navbarLinks = document.querySelector('.navbar-links');

    if (window.innerWidth <= 900 && navbar && navbarLinks) {
        const navbarHeight = navbar.offsetHeight;
        navbarLinks.style.top = navbarHeight + 'px';
    } else {
        navbarLinks.style.top = ''; // Reset on desktop
    }
}

window.addEventListener('resize', updateNavbarLinksPosition);
