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
        
        // Hent og valider skjemadata
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        // Sanitiser input (fjern HTML tags og whitespace)
        const sanitize = (str) => str.trim().replace(/<[^>]*>/g, '');
        
        const formData = {
            name: sanitize(nameInput.value),
            email: sanitize(emailInput.value),
            message: sanitize(messageInput.value)
        };
        
        // Valider data
        if (!formData.name || formData.name.length < 2) {
            showNotification('Vennligst oppgi et gyldig navn', 'error');
            nameInput.focus();
            return;
        }
        
        // Enkel e-post validering
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showNotification('Vennligst oppgi en gyldig e-postadresse', 'error');
            emailInput.focus();
            return;
        }
        
        if (!formData.message || formData.message.length < 10) {
            showNotification('Meldingen må være minst 10 tegn', 'error');
            messageInput.focus();
            return;
        }

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
    // Valider og sanitiser input
    const validTypes = ['info', 'success', 'warning', 'error'];
    const safeType = validTypes.includes(type) ? type : 'info';
    const safeMessage = String(message).trim().substring(0, 200); // Begrens lengde
    
    if (!safeMessage) return;
    
    // Opprett notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${safeType}`;
    notification.textContent = safeMessage; // textContent forhindrer XSS
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
