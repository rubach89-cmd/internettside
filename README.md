# internettside

En enkel, responsiv demo statisk nettside.

## Om Prosjektet

Dette er en demo statisk nettside bygget med ren HTML, CSS og minimal JavaScript. Nettsiden er responsiv og fungerer på alle enheter.

**Viktig:** Dette er en demo-side med placeholder-innhold. Alt innhold må byttes ut før produksjon.

## Innhold

- **index.html** - Hovedside med hero, funksjoner, portefølje-forhåndsvisning og footer
- **about.html** - Om-side med informasjon om nettsiden
- **portfolio.html** - Portefølje-side med demo-prosjekter
- **privacy.html** - Demo personvernerklæring (må oppdateres før produksjon)
- **assets/styles.css** - Responsiv styling uten eksterne rammeverk
- **assets/favicon.svg** - Enkel SVG logo/favicon

## Kjøre Lokalt

### Alternativ 1: Åpne direkte i nettleser

Naviger til prosjektmappen og dobbeltklikk på `index.html` for å åpne i nettleseren.

### Alternativ 2: Bruk en lokal server (anbefalt)

**Med Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Med Node.js (http-server):**
```bash
# Installer globalt (kun første gang)
npm install -g http-server

# Kjør server
http-server
```

**Med PHP:**
```bash
php -S localhost:8000
```

Åpne deretter nettleseren og gå til `http://localhost:8000`

## Neste Steg

Før nettsiden kan brukes i produksjon, bør du:

1. **Erstatt innhold:**
   - Bytt ut all placeholder-tekst med reelt innhold
   - Legg til egne bilder og media
   - Oppdater kontaktinformasjon i footer

2. **Tilpass design:**
   - Endre farger i `assets/styles.css` (se CSS-variabler øverst i filen)
   - Tilpass logo/favicon i `assets/favicon.svg`
   - Juster layout og spacing etter behov

3. **Legg til funksjoner (valgfritt):**
   - Kontaktskjema (krever backend eller tredjeparts-tjeneste)
   - Analytics (Google Analytics, Plausible, etc.)
   - SEO-optimalisering (meta-tags, sitemap, robots.txt)
   - Cookie-banner (hvis du legger til cookies)

4. **Oppdater personvern:**
   - Les `privacy.html` og oppdater med korrekt informasjon
   - Konsulter juridisk rådgiver for å sikre GDPR-compliance
   - Implementer cookie-samtykke hvis nødvendig

5. **Testing:**
   - Test på forskjellige enheter (mobil, nettbrett, desktop)
   - Test i forskjellige nettlesere (Chrome, Firefox, Safari, Edge)
   - Valider HTML og CSS
   - Kjør Lighthouse-audit for ytelse og tilgjengelighet

6. **Deploy:**
   - Velg hosting-plattform (GitHub Pages, Netlify, Vercel, etc.)
   - Sett opp custom domene
   - Konfigurer HTTPS

## Teknologi

- HTML5
- CSS3 (responsivt design med CSS Grid og Flexbox)
- Vanilla JavaScript (nav toggle og dynamisk år)
- SVG (logo/favicon)

## Lisens

Dette er en demo-nettside. Tilpass etter dine behov.
