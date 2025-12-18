// Form submission handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    // Show success message
    alert(`Thank you ${name}! We have received your message and will contact you at ${email} soon.`);
    
    // Reset form
    document.getElementById('contactForm').reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if(window.scrollY > 100) {
        navbar.classList.add('bg-white');
        navbar.classList.add('shadow');
    } else {
        navbar.classList.remove('bg-white');
        navbar.classList.remove('shadow');
    }
});

// Initialize active nav link based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if(scrollY >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Additional functionality for logo click to scroll to top
document.querySelector('.navbar-brand').addEventListener('click', function(e) {
    // If already on home section, just prevent default
    if(window.location.hash === '#home' || window.location.hash === '') {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});

// Initialize animations and carousels when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        // Add a slight delay for each card
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
    });
    
    // Initialize carousels and add click handlers
    initializeCarousels();
});

// Add CSS for fade-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .fade-in {
        animation: fadeIn 0.5s ease-out forwards;
        opacity: 0;
    }
`;
document.head.appendChild(style);

// Function to initialize carousels and add click functionality
function initializeCarousels() {
    // Initialize Hill Stations Carousel
    const hillStationsCarouselEl = document.getElementById('hillStationsCarousel');
    if (hillStationsCarouselEl) {
        const hillStationsCarousel = new bootstrap.Carousel(hillStationsCarouselEl, {
            interval: 3000,
            wrap: true,
            pause: 'hover'
        });
    }
    
    // Initialize Temples Carousel
    const templesCarouselEl = document.getElementById('templesCarousel');
    if (templesCarouselEl) {
        const templesCarousel = new bootstrap.Carousel(templesCarouselEl, {
            interval: 3000,
            wrap: true,
            pause: 'hover'
        });
    }
    
    // Add click functionality to destination cards
    setTimeout(() => {
        const destinationCards = document.querySelectorAll('.destination-card');
        destinationCards.forEach(card => {
            // Make cards look clickable
            card.style.cursor = 'pointer';
            
            card.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const title = this.querySelector('.card-title').textContent;
                alert(`You selected: ${title}\n\nContact us to book a trip to this destination!\n\nCall: +91 96269 46939\nEmail: tamizhinitravels2727@gmail.com`);
                
                // Scroll to contact form
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    contactSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        console.log(`Added click handlers to ${destinationCards.length} destination cards`);
    }, 300);
}