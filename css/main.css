/* Basic Navbar Styles */
.navbar {
    position: relative; /* No longer fixed */
    width: 100%; /* Make it span the full width */
    background-color: white;
    z-index: 999;
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    margin: 0; /* Ensure no margins cause centering */
}

.navbar img {
    width: auto;
    max-width: 40%;
    height: auto;
}

.navbar-links {
    display: flex;
    justify-content: space-evenly; /* Spread links evenly */
    align-items: center;
    flex-grow: 1;
}

.navbar-link {
    margin: 0 15px;
    text-decoration: none;
    font-family: 'Lora', serif;
    color: #404040;
    transition: color 0.3s ease;
}

.navbar-link:hover {
    color: #007bff; /* Optional hover effect */
}

.hamburger {
    display: none;
    cursor: pointer;
    font-size: 30px;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
    .navbar-links {
        display: none;
        width: 100%;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 60px;
        left: 0;
        background-color: white;
        z-index: 1000;
        padding: 10px 0;
    }

    .navbar-links.active {
        display: flex;
    }

    .navbar-link {
        margin: 10px 0;
    }

    .hamburger {
        display: block;
    }
}
