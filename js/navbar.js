// === Toggle mobile menu visibility ===
function toggleMenu() {
    const navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.classList.toggle('active');
    updateNavbarLinksPosition();
}

// === Dynamically adjust mobile dropdown position ===
function updateNavbarLinksPosition() {
    const navbar = document.querySelector('.navbar');
    const navbarLinks = document.querySelector('.navbar-links');
    if (window.innerWidth <= 900 && navbar && navbarLinks) {
        const navbarHeight = navbar.offsetHeight;
        navbarLinks.style.top = navbarHeight + 'px';
    } else if (navbarLinks) {
        navbarLinks.style.top = '';
    }
}

let lastScrollTop = 0;
let isScrollingMenu = false;

// === Run once the navbar markup has been injected into the page ===
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const navbarLinks = document.querySelector('.navbar-links');

    if (navbarLinks) {
        navbarLinks.addEventListener('scroll', () => {
            isScrollingMenu = true;
            clearTimeout(navbarLinks.scrollTimeout);
            navbarLinks.scrollTimeout = setTimeout(() => {
                isScrollingMenu = false;
            }, 150);
        });
    }

    window.addEventListener('scroll', function () {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        const navbarHeight = navbar.offsetHeight;
        if (window.innerWidth <= 900 && navbarLinks.classList.contains('active') && isScrollingMenu) {
            return;
        }
        if (currentScroll > lastScrollTop) {
            navbar.style.top = `-${navbarHeight}px`;
            if (window.innerWidth <= 900 && navbarLinks.classList.contains('active')) {
                navbarLinks.classList.remove('active');
            }
        } else {
            navbar.style.top = "0";
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }, false);

    updateNavbarLinksPosition();

    document.querySelectorAll('.dropdown').forEach(dropdown => {
        const title = dropdown.querySelector('.dropdown-title');
        title.addEventListener('click', (e) => {
            if (window.innerWidth <= 900) {
                e.preventDefault();
                dropdown.querySelector('.dropdown-content').classList.toggle('mobile-active');
            }
        });
    });

    document.querySelectorAll('.navbar-link').forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 900) {
                navbarLinks.classList.remove('active');
            }
        });
    });

    window.addEventListener('resize', updateNavbarLinksPosition);
}
