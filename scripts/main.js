document.addEventListener("DOMContentLoaded", () => {
    let menuIcon = document.querySelector('#menu-icon'); 
    let navbar = document.querySelector('.navbar');

    // Toggle menu on icon click
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    };

    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    // Scroll event to highlight the active link and apply sticky header
    window.onscroll = () => {
        let top = window.scrollY;

        sections.forEach(sec => {
            let offset = sec.offsetTop - 150; // Offset to adjust for header
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
            
            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            }
        });

        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);

        // Close menu on scroll (optional)
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    };

    // Initialize ScrollReveal
    const sr = ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    // Apply ScrollReveal to different elements
    sr.reveal('.home-content, heading', { origin: 'top' });
    sr.reveal('.home-img, .skills-container, .contact-form', { origin: 'bottom' });
    sr.reveal('.home-contact h1, .about-img', { origin: 'left' });
    sr.reveal('.home-content p, .about-content', { origin: 'right' });
});
