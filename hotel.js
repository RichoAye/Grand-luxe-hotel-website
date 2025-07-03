document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    menuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
        this.querySelector('i').classList.toggle('fa-bars');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mainNav.classList.remove('active');
            menuToggle.querySelector('i').classList.remove('fa-times');
            menuToggle.querySelector('i').classList.add('fa-bars');
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
    // Get the header element
    const header = document.querySelector('.main-header');
    let lastScroll = 0;
    
    // Hide/show nav on scroll
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 100) {
            // At top of page - always show
            header.classList.remove('hide-nav');
            return;
        }
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down - hide
            header.classList.add('hide-nav');
        } else if (currentScroll < lastScroll) {
            // Scrolling up - show
            header.classList.remove('hide-nav');
        }
        
        lastScroll = currentScroll;
    });

    // Mobile menu toggle functionality
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    mobileToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
    });
});
    // Sticky Header
    const header = document.querySelector('.main-header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
        } else {
            header.style.backgroundColor = 'rgba(26, 26, 26, 0.9)';
        }
    });
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offset = 80; // Adjust for fixed header height
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Booking Form Date Picker
    const today = new Date();
    const checkInInput = document.getElementById('check-in');
    const checkOutInput = document.getElementById('check-out');
    
    // Format date as YYYY-MM-DD
    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    
    // Set min date for check-in (today)
    checkInInput.min = formatDate(today);
    
    // Set default check-in date (today)
    checkInInput.value = formatDate(today);
    
    // Set min date for check-out (tomorrow)
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    checkOutInput.min = formatDate(tomorrow);
    
    // Set default check-out date (tomorrow)
    checkOutInput.value = formatDate(tomorrow);
    
    // Update check-out min date when check-in changes
    checkInInput.addEventListener('change', function() {
        const checkInDate = new Date(this.value);
        const nextDay = new Date(checkInDate);
        nextDay.setDate(nextDay.getDate() + 1);
        checkOutInput.min = formatDate(nextDay);
        
        // If current check-out is before new min date, update it
        if (new Date(checkOutInput.value) < nextDay) {
            checkOutInput.value = formatDate(nextDay);
        }
    });
    
    // Form Submissions
    const bookingForm = document.getElementById('reservation-form');
    const contactForm = document.getElementById('contact-form');
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Booking request received! We will check availability and contact you shortly.');
            this.reset();
        });
    }
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will respond to you shortly.');
            this.reset();
        });
    }
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            alert(`Thank you for subscribing with ${emailInput.value}! You'll receive our latest offers and news.`);
            emailInput.value = '';
        });
    }
    
    // Gallery Image Click
    const galleryThumbs = document.querySelectorAll('.gallery-thumbs img');
    const galleryMain = document.querySelector('.gallery-main img');
    
    if (galleryThumbs && galleryMain) {
        galleryThumbs.forEach(thumb => {
            thumb.addEventListener('click', function() {
                galleryMain.src = this.src;
            });
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.main-header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        const heroSection = document.querySelector('.hero');
        const heroHeight = heroSection.offsetHeight;
        
        // Only start hiding after passing the hero section
        if (currentScrollY > heroHeight) {
            if (currentScrollY > lastScrollY) {
                // Scrolling down
                header.classList.add('hide');
            } else {
                // Scrolling up
                header.classList.remove('hide');
            }
        } else {
            // At top of page
            header.classList.remove('hide');
        }
        
        lastScrollY = currentScrollY;
    });
    
    // Mobile menu toggle (keep your existing code if you have it)
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    mobileToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
    });
});