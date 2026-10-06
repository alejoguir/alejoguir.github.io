document.addEventListener('DOMContentLoaded', () => {
    
    // 1. SMOOTH SCROLL ACCESSIBILITY PATCH
    const scrollButtons = document.querySelectorAll('.scroll-btn, .nav-link');
    
    scrollButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = button.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 2. SCROLL REVEAL ANIMATION (Intersection Observer API)
    const sections = document.querySelectorAll('section');
    
    const revealOptions = {
        root: null, // viewport
        threshold: 0.15, // trigger when 15% of section is visible
        rootMargin: "0px"
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Unobserve to stop repeating the animation on scroll back up
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});
