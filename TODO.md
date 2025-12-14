# Hva skal jobbes med videre?

Dette dokumentet beskriver hva som bør arbeides med videre for internettside-prosjektet.

## Fase 1: Grunnleggende struktur (Høy prioritet)

### 1.1 Prosjektoppsett
- [ ] Opprett grunnleggende mappestruktur
  - `src/` - Kildekode
  - `public/` - Statiske filer
  - `assets/` - Bilder, fonter, ikoner
- [ ] Velg teknologistack (f.eks. React, Vue, vanilla HTML/CSS/JS)
- [ ] Sett opp byggverktøy (Vite, Webpack, eller lignende)
- [ ] Opprett `package.json` hvis Node.js brukes

### 1.2 Design og Layout
- [ ] Definer fargepalett og designsystem
- [ ] Lag wireframes for hovedsider
- [ ] Opprett CSS/SCSS struktur
- [ ] Implementer responsivt design (mobil/tablet/desktop)

### 1.3 Innhold og Sider
- [ ] Hjemmeside (index.html)
- [ ] Om-side
- [ ] Kontaktside
- [ ] Header/navigasjon
- [ ] Footer

## Fase 2: Funksjonalitet (Middels prioritet)

### 2.1 Navigasjon og Routing
- [ ] Implementer menystruktur
- [ ] Sett opp routing (hvis single-page application)
- [ ] Legg til "smooth scrolling"
- [ ] Implementer mobil-meny (hamburger)

### 2.2 Interaktivitet
- [ ] Kontaktskjema med validering
- [ ] Animasjoner og overganger
- [ ] Knapper og interaktive elementer
- [ ] Feilhåndtering

### 2.3 Innholdsadministrasjon
- [ ] Bestem om CMS er nødvendig
- [ ] Sett opp backend (hvis nødvendig)
- [ ] Opprett API-endepunkter
- [ ] Database-oppsett

## Fase 3: Kvalitet og Ytelse (Middels prioritet)

### 3.1 Testing
- [ ] Sett opp testing-rammeverk (Jest, Vitest, Playwright)
- [ ] Skriv enhetstester
- [ ] Skriv integrasjonstester
- [ ] Skriv end-to-end tester
- [ ] Sett opp CI/CD pipeline

### 3.2 Optimalisering
- [ ] Bildekomprimering og lazy loading
- [ ] Minifisering av CSS/JS
- [ ] Caching-strategi
- [ ] Performance-testing (Lighthouse)

### 3.3 Tilgjengelighet
- [ ] WCAG 2.1 compliance
- [ ] Semantisk HTML
- [ ] Keyboard navigation
- [ ] Screen reader testing
- [ ] Fargekontrast-sjekk

## Fase 4: Deployment og Vedlikehold (Lav prioritet)

### 4.1 Hosting og Deploy
- [ ] Velg hosting-løsning (Netlify, Vercel, GitHub Pages, eller egen server)
- [ ] Sett opp domene
- [ ] Konfigurer SSL-sertifikat
- [ ] Sett opp CI/CD for automatisk deployment

### 4.2 SEO og Analytics
- [ ] Meta-tags og Open Graph
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] Google Analytics eller alternativ
- [ ] Search Console setup

### 4.3 Dokumentasjon
- [ ] Utviklerdokumentasjon
- [ ] Brukerdokumentasjon
- [ ] API-dokumentasjon (hvis relevant)
- [ ] Deployment-guide

## Fase 5: Ekstra Funksjoner (Lav prioritet)

- [ ] Blog/nyhetseksjon
- [ ] Søkefunksjonalitet
- [ ] Flerspråklig støtte
- [ ] Dark mode / Light mode
- [ ] Sosiale medier-integrasjon
- [ ] Newsletter-påmelding
- [ ] Kommentarsystem
- [ ] Brukerautentisering (hvis nødvendig)

## Anbefalte Første Steg

For å komme i gang raskt, anbefales følgende rekkefølge:

1. **Opprett grunnleggende HTML-struktur** - Start med en enkel `index.html`
2. **Legg til CSS for grunnleggende styling** - Opprett `style.css`
3. **Definer innhold** - Bestem hva siden skal handle om
4. **Implementer responsivt design** - Sørg for at siden fungerer på mobil
5. **Legg til JavaScript for interaktivitet** - Kun hvis nødvendig
6. **Deploy tidlig** - Få siden online så raskt som mulig
7. **Iterer og forbedre** - Legg til funksjoner gradvis

## Ressurser

- [MDN Web Docs](https://developer.mozilla.org/) - Webteknologi-dokumentasjon
- [CSS-Tricks](https://css-tricks.com/) - CSS-tips og triks
- [Can I Use](https://caniuse.com/) - Browser-kompatibilitet
- [Web.dev](https://web.dev/) - Best practices og ytelse

## Notater

- Prioriter å få noe fungerende tidlig (MVP - Minimum Viable Product)
- Test på ekte enheter, ikke bare i browser-emulator
- Hold koden enkel og vedlikeholdbar
- Dokumenter valg og beslutninger underveis
