// Navbar functionality
document.addEventListener('DOMContentLoaded', function() {
    // Handle dropdown visibility on hover
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        const dropdown = item.querySelector('.dropdown');
        const navLink = item.querySelector('.nav-link');
        
        // Mouse enter
        item.addEventListener('mouseenter', function() {
            if (dropdown) {
                dropdown.style.opacity = '1';
                dropdown.style.visibility = 'visible';
                dropdown.style.transform = 'translateX(-50%) translateY(0)';
            }
        });
        
        // Mouse leave
        item.addEventListener('mouseleave', function() {
            if (dropdown) {
                dropdown.style.opacity = '0';
                dropdown.style.visibility = 'hidden';
                dropdown.style.transform = 'translateX(-50%) translateY(-10px)';
            }
        });
    });
    
    // Search button functionality
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            alert('Search functionality would go here');
        });
    }
    
    // Bag button functionality
    const bagBtn = document.querySelector('.bag-btn');
    if (bagBtn) {
        bagBtn.addEventListener('click', function() {
            alert('Shopping bag functionality would go here');
        });
    }
    
    // Logo click
    const logo = document.querySelector('.nav-logo');
    if (logo) {
        logo.addEventListener('click', function() {
            window.location.href = '#';
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Handle navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
        navbar.style.backgroundColor = 'rgba(15, 30, 50, 0.98)';
    } else {
        navbar.style.backgroundColor = 'rgba(15, 30, 50, 0.95)';
    }
});

