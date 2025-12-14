# internettside

En enkel, responsiv demo-nettside med norsk innhold.

## ⚠️ Viktig merknad

Dette er en demo-nettside med plassholder-innhold. **Alt innhold må erstattes med ekte informasjon før produksjon.**

## 📋 Innhold

Dette nettstedet inneholder:
- **index.html** - Hjemmeside med oversikt over funksjoner
- **about.html** - Om oss-side med bedriftsinformasjon
- **portfolio.html** - Portfolio-side med prosjekteksempler
- **privacy.md** - Personvernerklæring (mal/demo)
- **assets/styles.css** - Responsiv CSS-styling
- **assets/favicon.svg** - Enkelt favicon (logo "D")

## 🚀 Kjøre lokalt

Denne nettsiden er en statisk HTML/CSS-nettside uten eksterne avhengigheter. For å kjøre lokalt:

### Alternativ 1: Åpne direkte i nettleser
```bash
# Åpne index.html direkte i nettleseren din
open index.html  # macOS
start index.html  # Windows
xdg-open index.html  # Linux
```

### Alternativ 2: Bruk en lokal webserver

Med Python 3:
```bash
python3 -m http.server 8000
# Åpne http://localhost:8000 i nettleseren
```

Med Node.js (npx http-server):
```bash
npx http-server -p 8000
# Åpne http://localhost:8000 i nettleseren
```

Med PHP:
```bash
php -S localhost:8000
# Åpne http://localhost:8000 i nettleseren
```

## 📝 Anbefalte neste steg

Før produksjon bør du:

1. **Erstatt alt demo-innhold**
   - Oppdater all tekst med ekte informasjon
   - Legg til ekte bilder i portfolio-seksjonen
   - Fyll inn ekte kontaktinformasjon

2. **Oppdater personvernerklæring**
   - Personvernerklæringen (privacy.md) må tilpasses dine forhold
   - Sjekk at den overholder GDPR og norsk personopplysningslov
   - Vurder juridisk gjennomgang

3. **Legg til kontaktskjema (valgfritt)**
   - Implementer et kontaktskjema med backend
   - Bruk tjenester som Formspree, EmailJS eller egen løsning
   - Husk å oppdatere personvernerklæringen hvis du samler inn data

4. **Optimaliser for produksjon**
   - Legg til Google Analytics eller annen statistikk (oppdater privacy.md)
   - Sett opp egendefinert domene
   - Konfigurer SSL/HTTPS
   - Optimaliser bilder og ressurser
   - Test på ulike enheter og nettlesere

5. **SEO og tilgjengelighet**
   - Oppdater meta-beskrivelser på alle sider
   - Legg til Open Graph-tags for sosiale medier
   - Sjekk WCAG-tilgjengelighet
   - Lag og send inn sitemap.xml til søkemotorer

## 🔧 Teknologi

- **HTML5** - Semantisk markup
- **CSS3** - Moderne styling med CSS Grid og Flexbox
- **Responsiv design** - Fungerer på mobil, tablet og desktop
- **Ingen JavaScript-rammeverk** - Enkel og rask statisk side

## 📄 Lisens

[Legg til lisens her]

## 👤 Kontakt

[Legg til kontaktinformasjon her]
