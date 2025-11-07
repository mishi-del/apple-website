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

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    const heroContent = document.querySelector('.hero-content');
    const phoneMockup = document.querySelector('.phone-mockup');
    const gradientOrbs = document.querySelectorAll('.gradient-orb');
    
    if (heroSection && scrolled < window.innerHeight) {
        // Parallax for hero content
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
        }
        
        // Parallax for phone mockup
        if (phoneMockup) {
            phoneMockup.style.transform = `translateY(${scrolled * 0.3}px) rotate(${scrolled * 0.05}deg)`;
        }
        
        // Parallax for gradient orbs
        gradientOrbs.forEach((orb, index) => {
            const speed = (index + 1) * 0.1;
            orb.style.transform = `translate(${scrolled * speed * 0.1}px, ${scrolled * speed * 0.1}px)`;
        });
    }
});

// Intersection Observer for scroll-triggered animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe content cards
document.addEventListener('DOMContentLoaded', function() {
    const contentCards = document.querySelectorAll('.content-card');
    contentCards.forEach(card => {
        observer.observe(card);
    });
    
    // Add stagger animation to cards
    contentCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
});

// Subtle mouse move effect for gradient orbs (adds to existing animation)
let mouseParallaxX = 0;
let mouseParallaxY = 0;

document.addEventListener('mousemove', function(e) {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;
    
    const rect = heroSection.getBoundingClientRect();
    const isInHero = e.clientX >= rect.left && e.clientX <= rect.right && 
                     e.clientY >= rect.top && e.clientY <= rect.bottom;
    
    if (isInHero) {
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        
        mouseParallaxX = (x - 0.5) * 15;
        mouseParallaxY = (y - 0.5) * 15;
    } else {
        mouseParallaxX = 0;
        mouseParallaxY = 0;
    }
});

// Apply mouse parallax with smooth interpolation
function applyMouseParallax() {
    const gradientOrbs = document.querySelectorAll('.gradient-orb');
    gradientOrbs.forEach((orb, index) => {
        const intensity = (index + 1) * 0.2;
        const currentTransform = window.getComputedStyle(orb).transform;
        // Apply mouse parallax as additional transform
        orb.style.setProperty('--mouse-x', `${mouseParallaxX * intensity}px`);
        orb.style.setProperty('--mouse-y', `${mouseParallaxY * intensity}px`);
    });
    requestAnimationFrame(applyMouseParallax);
}

applyMouseParallax();

// Smooth reveal animation for hero elements on load
window.addEventListener('load', function() {
    const heroElements = document.querySelectorAll('.hero-content > *');
    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

