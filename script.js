// Hamburger meny toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Lukk meny når et link klikkes
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Smooth scrolling for anker-linker
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

// Kontaktskjema håndtering
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Hent skjemadata
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // Her kan du legge til logikk for å sende skjemaet til en backend
        // TODO: Implementer backend integrasjon:
        // - Sett opp API endpoint (f.eks. POST /api/contact)
        // - Valider data på server-siden
        // - Implementer feilhåndtering og retry-logikk
        // - Legg til CSRF-beskyttelse
        // - Send bekreftelse via e-post
        
        // Vis suksessmelding
        showNotification('Takk for din henvendelse! Vi kommer tilbake til deg snart.', 'success');
        
        // Nullstill skjema
        contactForm.reset();
    });
}

// Enkel notification funksjon
function showNotification(message, type = 'info') {
    // Valider type parameter for sikkerhet
    const validTypes = ['info', 'success', 'warning', 'error'];
    const safeType = validTypes.includes(type) ? type : 'info';
    
    // Opprett notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${safeType}`;
    notification.textContent = message;
    notification.setAttribute('role', 'alert');
    notification.setAttribute('aria-live', 'polite');
    
    document.body.appendChild(notification);
    
    // Fjern etter 3 sekunder
    setTimeout(() => {
        notification.classList.add('notification-exit');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Legg til animasjon når elementer kommer i view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

// Sjekk om bruker foretrekker redusert bevegelse
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            if (!prefersReducedMotion) {
                entry.target.style.transform = 'translateY(0)';
            }
        }
    });
}, observerOptions);

// Observer alle seksjoner
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    if (!prefersReducedMotion) {
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    } else {
        section.style.transition = 'opacity 0.6s ease';
    }
    observer.observe(section);
});
