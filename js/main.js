// Project data
const projects = {
    project1: {
        title: "E-commerce Platform",
        description: "A full-stack e-commerce platform with user authentication, product management, and payment integration. Built with modern technologies and best practices.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        features: [
            "User authentication and authorization",
            "Product catalog with search and filters",
            "Shopping cart and checkout process",
            "Payment integration with Stripe",
            "Admin dashboard for product management",
            "Responsive design for all devices"
        ],
        links: {
            github: "https://github.com/yourusername/ecommerce",
            demo: "https://your-ecommerce-demo.com"
        }
    },
    project2: {
        title: "Task Management App",
        description: "A real-time task management application with drag-and-drop functionality and team collaboration features. Perfect for project management and team coordination.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        features: [
            "Real-time updates with Firebase",
            "Drag-and-drop task organization",
            "Team collaboration features",
            "Task assignment and tracking",
            "Progress visualization",
            "Mobile-responsive design"
        ],
        links: {
            github: "https://github.com/yourusername/task-manager",
            demo: "https://your-task-manager-demo.com"
        }
    },
    project3: {
        title: "Blog Platform",
        description: "A feature-rich blog platform with user authentication, content management, and SEO optimization. Built with Django and PostgreSQL for optimal performance.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        features: [
            "User authentication and profiles",
            "Rich text editor for posts",
            "SEO optimization tools",
            "Comment system",
            "Category and tag management",
            "Analytics dashboard"
        ],
        links: {
            github: "https://github.com/yourusername/blog-platform",
            demo: "https://your-blog-demo.com"
        }
    }
};

// Modal functionality
const modal = document.getElementById('projectModal');
const modalClose = document.querySelector('.modal-close');
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        const projectId = item.getAttribute('data-project');
        const project = projects[projectId];
        
        if (project) {
            modal.querySelector('.modal-image').src = project.image;
            modal.querySelector('.modal-title').textContent = project.title;
            modal.querySelector('.modal-description').textContent = project.description;
            
            // Add features with animation
            const featuresContainer = modal.querySelector('.modal-features');
            featuresContainer.innerHTML = '';
            project.features.forEach((feature, index) => {
                const featureElement = document.createElement('div');
                featureElement.className = 'modal-feature';
                featureElement.textContent = feature;
                featureElement.style.animationDelay = `${index * 0.1}s`;
                featuresContainer.appendChild(featureElement);
            });
            
            // Add links with animation
            const linksContainer = modal.querySelector('.modal-links');
            linksContainer.innerHTML = '';
            Object.entries(project.links).forEach(([type, url], index) => {
                const link = document.createElement('a');
                link.href = url;
                link.className = 'portfolio-link';
                link.innerHTML = `<i class="fab fa-${type === 'github' ? 'github' : 'external-link-alt'}"></i> ${type === 'github' ? 'View Code' : 'Live Demo'}`;
                link.style.animationDelay = `${index * 0.2}s`;
                linksContainer.appendChild(link);
            });
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const icon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    icon.classList.toggle('fa-sun');
    icon.classList.toggle('fa-moon');
    
    // Save theme preference with animation
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Add ripple effect
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    themeToggle.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
});

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

// Loading screen
const loadingScreen = document.getElementById('loadingScreen');

window.addEventListener('load', () => {
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1000);
});

// Smooth scroll with offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add animation to elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.about-content, .skills-content, .portfolio-grid, .contact-form, .stat-item, .skill-category, .portfolio-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animate');
        }
    });
};

// Initial animation check
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Add hover effect to skill items
const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-5px)';
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
    });
});

// Add typing effect to hero section
const typingText = document.querySelector('.typing-text');
if (typingText) {
    const roles = [
        "Web Developer",
        "Python Programmer",
        "Front-End Enthusiast",
        "Robotics Lover",
        "Creative Coder",
        "Tech Explorer"
    ];
    
    let currentRoleIndex = 0;
    let currentText = '';
    let isDeleting = false;
    let typingSpeed = 100;
    let deletingSpeed = 50;
    let pauseTime = 2000;
    
    function typeWriter() {
        const currentRole = roles[currentRoleIndex];
        
        if (isDeleting) {
            currentText = currentRole.substring(0, currentText.length - 1);
            typingSpeed = deletingSpeed;
        } else {
            currentText = currentRole.substring(0, currentText.length + 1);
            typingSpeed = 100;
        }
        
        typingText.textContent = currentText;
        
        if (!isDeleting && currentText === currentRole) {
            typingSpeed = pauseTime;
            isDeleting = true;
        } else if (isDeleting && currentText === '') {
            isDeleting = false;
            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
            typingSpeed = 500;
        }
        
        setTimeout(typeWriter, typingSpeed);
    }
    
    // Start typing effect when hero section is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                typeWriter();
                observer.unobserve(entry.target);
            }
        });
    });
    
    observer.observe(typingText);
}

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
        
        // Add scroll progress indicator
        const progress = (scrolled / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        document.documentElement.style.setProperty('--scroll-progress', `${progress}%`);
    }
});

// Add scroll progress bar
const progressBar = document.createElement('div');
progressBar.className = 'progress-bar';
document.body.appendChild(progressBar);

// Initialize animations
window.addEventListener('load', () => {
    animateOnScroll();
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});

window.addEventListener('scroll', animateOnScroll);

// --------- DOMContentLoaded: Initialize all scripts --------- //
document.addEventListener('DOMContentLoaded', function() {

    // --- Remove Loading Screen --- 
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        console.log("Attempting to hide loading screen..."); // Add log
        loadingScreen.style.display = 'none'; // Hide immediately for reliability
        console.log("Loading screen should be hidden."); // Add log
    }
    else {
        console.log("Loading screen element not found."); // Add log
    }

    // --- Temporarily Commented Out Initialization --- 
    // initializeHeaderScroll();
    // initializeSmoothScroll();
    // initializeNavigationHighlighting(); 
    // initializeModal();
    // initializeContactForm();
    // initializeScrollAnimations();
    // initializeParallax();
    
    console.log("DOMContentLoaded finished (simplified)."); // Add log
});

// --------- Initialization Functions --------- //

function initializeHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScrollY = window.scrollY;
    let ticking = false;

    window.addEventListener('scroll', () => {
        lastScrollY = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (lastScrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
                ticking = false;
            });
            ticking = true;
        }
    });
}

function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80; // Adjust based on fixed header height
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Manually update indicator on click if using indicator logic
                // (Currently handled within initializeNavigationHighlighting)
            }
        });
    });
}

function initializeNavigationHighlighting() {
    const navLinksContainer = document.querySelector('.nav-links');
    if (!navLinksContainer) return;

    const allLinks = navLinksContainer.querySelectorAll('a');
    const sections = document.querySelectorAll('section[id]');
    const indicator = document.createElement('div');
    indicator.className = 'nav-indicator';
    navLinksContainer.appendChild(indicator);
    
    let ticking = false;

    function positionIndicator(element) {
        if (indicator && element) {
            indicator.style.width = `${element.offsetWidth}px`;
            indicator.style.left = `${element.offsetLeft}px`;
            indicator.style.top = `${element.offsetTop}px`; // Added for vertical centering if needed
            indicator.style.height = `${element.offsetHeight}px`; // Match height
        }
    }

    function setActiveLink(targetLink) {
        allLinks.forEach(l => l.classList.remove('active'));
        if (targetLink) {
            targetLink.classList.add('active');
            positionIndicator(targetLink);
        } else {
            // If no target link (e.g., scrolled past last section), hide indicator or reset
            const homeLink = navLinksContainer.querySelector('a[href="#home"]');
            if (homeLink) homeLink.classList.add('active');
            positionIndicator(homeLink); // Default to home
        }
    }

    // Set initial state
    const initialLink = navLinksContainer.querySelector('a.active') || navLinksContainer.querySelector('a[href="#home"]');
    setActiveLink(initialLink);

    // Handle clicks
    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Smooth scroll is handled by initializeSmoothScroll
            // We only update the active state immediately for visual feedback
            setActiveLink(this);
        });
    });

    // Handle scroll updates (optimized)
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollPosition = window.scrollY;
                let currentSectionId = null;

                sections.forEach(section => {
                    const sectionTop = section.offsetTop - 150; // Adjust offset
                    const sectionHeight = section.offsetHeight;
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        currentSectionId = section.getAttribute('id');
                    }
                });
                
                const targetLink = currentSectionId ? navLinksContainer.querySelector(`a[href="#${currentSectionId}"]`) : navLinksContainer.querySelector('a[href="#home"]');
                const currentActiveLink = navLinksContainer.querySelector('a.active');
                
                if (targetLink !== currentActiveLink) { 
                    setActiveLink(targetLink);
                }
                ticking = false;
            });
            ticking = true;
        }
    });
}

function initializeModal() {
    const modal = document.getElementById('projectModal');
    const modalClose = modal ? modal.querySelector('.modal-close') : null;
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (!modal || !modalClose || portfolioItems.length === 0) return;

    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            const projectId = item.getAttribute('data-project');
            const project = projects[projectId];
            
            if (project) {
                modal.querySelector('.modal-image').src = project.image;
                modal.querySelector('.modal-title').textContent = project.title;
                modal.querySelector('.modal-description').textContent = project.description;
                
                // Add features
                const featuresContainer = modal.querySelector('.modal-features');
                featuresContainer.innerHTML = ''; // Clear previous
                if (project.features) {
                    project.features.forEach((feature, index) => {
                        const featureElement = document.createElement('div');
                        featureElement.className = 'modal-feature';
                        featureElement.textContent = feature;
                        // Optional: Add animation delay if needed
                        // featureElement.style.animationDelay = `${index * 0.1}s`; 
                        featuresContainer.appendChild(featureElement);
                    });
                }
                
                // Add links
                const linksContainer = modal.querySelector('.modal-links');
                linksContainer.innerHTML = ''; // Clear previous
                if (project.links) {
                    Object.entries(project.links).forEach(([type, url], index) => {
                        const link = document.createElement('a');
                        link.href = url;
                        link.target = '_blank'; // Open in new tab
                        link.rel = 'noopener noreferrer';
                        link.className = 'portfolio-link';
                        link.innerHTML = `<i class="fab fa-${type === 'github' ? 'github' : 'external-link-alt'}"></i> ${type === 'github' ? 'View Code' : 'Live Demo'}`;
                         // Optional: Add animation delay if needed
                        // link.style.animationDelay = `${index * 0.2}s`;
                        linksContainer.appendChild(link);
                    });
                }
                
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

function initializeContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        // Simulate form submission
        setTimeout(() => {
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message'; // Ensure this class is styled in CSS
            successMessage.textContent = 'Thank you! Message sent.';
            // contactForm.appendChild(successMessage); // Consider placing message elsewhere
            contactForm.reset(); // Reset form fields
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            
            // Display temporary confirmation (replace alert with a styled message if preferred)
            alert('Thank you for your message! I will get back to you soon.');
            
            // Optional: remove success message after a delay if appended to form
            // setTimeout(() => { successMessage.remove(); }, 3000);
        }, 1500);
    });
}

function initializeScrollAnimations() {
    const elementsToAnimate = document.querySelectorAll('.about-content, .skills-content, .portfolio-grid, .contact-form, .stat-item, .skill-category, .portfolio-item');
    if (elementsToAnimate.length === 0) return;

    let ticking = false;

    const animateOnScroll = () => {
        elementsToAnimate.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight * 0.8; // Trigger earlier (80% up screen)
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate'); // Add class to trigger CSS animation
            }
            // Optional: remove class if element scrolls out of view upwards
            // else if (elementPosition > window.innerHeight) {
            //     element.classList.remove('animate');
            // }
        });
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(animateOnScroll);
            ticking = true;
        }
    });
    
    // Initial check in case elements are already in view
    animateOnScroll(); 
}

function initializeParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                hero.style.backgroundPositionY = `${-(scrolled * 0.3)}px`; // Adjust multiplier for speed
                ticking = false;
            });
            ticking = true;
        }
    });
}

// --- Utility/Helper Functions (if any) --- 
// e.g., throttle or debounce if needed later

// --- Note: Typing effect is now in typing.js --- 