const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const menuItems = document.querySelectorAll('.nav-links a');

// Toggle menu
mobileMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

// Close menu when clicking menu items
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('menu-open');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

// Prevent scrolling when menu is open
document.body.addEventListener('touchmove', (e) => {
    if (document.body.classList.contains('menu-open')) {
        e.preventDefault();
    }
}, { passive: false });

// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

// Scroll Animation Observer
const scrollElements = document.querySelectorAll('.scroll-fade, .scroll-fade-left, .scroll-fade-right, .scroll-fade-up');

const elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <=
        ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100))
    );
};

const displayScrollElement = (element) => {
    element.classList.add('is-visible');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 90)) {
            displayScrollElement(el);
        }
    });
};

// Initialize on load
window.addEventListener('load', () => {
    handleScrollAnimation();
});

// Add scroll event listener
window.addEventListener('scroll', () => {
    handleScrollAnimation();
});