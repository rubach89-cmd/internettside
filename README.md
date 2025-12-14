# internettside

Demo statisk nettside - en moderne og responsiv nettside bygget med ren HTML, CSS og JavaScript.

## 📋 Om Prosjektet

Dette er en demo statisk nettside som viser et enkelt, responsivt design uten eksterne rammeverk eller biblioteker. Nettsiden inkluderer:

- **Hjemmeside** (`index.html`) - Landing page med hero-seksjon, funksjoner og porteføljeforhåndsvisning
- **Om Oss** (`about.html`) - Informasjon om nettsiden og teknologien
- **Portefølje** (`portfolio.html`) - Showcase av demo-prosjekter
- **Personvern** (`privacy.md`) - Demo personvernerklæring
- **Responsiv CSS** (`assets/styles.css`) - Tilpasset styling uten eksterne CSS-rammeverk
- **SVG Logo** (`assets/favicon.svg`) - Enkelt, skalerbart logo

## 🚀 Kom i Gang

### Kjør Lokalt

Du kan kjøre nettsiden lokalt på flere måter:

#### Metode 1: Python HTTP Server (Python 3)
```bash
# Naviger til prosjektmappen
cd /path/to/internettside

# Start en enkel HTTP-server på port 8000
python3 -m http.server 8000

# Åpne nettleseren på http://localhost:8000
```

#### Metode 2: Node.js HTTP Server
```bash
# Installer http-server globalt (første gang)
npm install -g http-server

# Naviger til prosjektmappen
cd /path/to/internettside

# Start serveren
http-server -p 8000

# Åpne nettleseren på http://localhost:8000
```

#### Metode 3: VS Code Live Server
1. Installer "Live Server" extension i VS Code
2. Høyreklikk på `index.html`
3. Velg "Open with Live Server"

#### Metode 4: Direkte i nettleser
Du kan også åpne `index.html` direkte i nettleseren din, men noen funksjoner kan være begrenset uten en lokal server.

## 📁 Prosjektstruktur

```
internettside/
├── index.html          # Hovedside / landing page
├── about.html          # Om oss-side
├── portfolio.html      # Portefølje-side
├── privacy.md          # Personvernerklæring
├── assets/
│   ├── styles.css      # Hoved CSS-fil
│   └── favicon.svg     # Logo / favicon
├── .gitignore          # Git ignore-fil
└── README.md           # Denne filen
```

## ✨ Funksjoner

- ✅ **Responsiv Design** - Fungerer på alle skjermstørrelser
- ✅ **Ingen Eksterne Avhengigheter** - Kun ren HTML, CSS og JavaScript
- ✅ **Moderne CSS** - Grid, Flexbox, CSS-variabler og animasjoner
- ✅ **Tilgjengelig** - Semantisk HTML og ARIA-attributter
- ✅ **Mobilvennlig Navigasjon** - Hamburger-meny for mobile enheter
- ✅ **Rask Lasting** - Optimalisert for ytelse

## 🎨 Tilpasning

### Endre Farger
Rediger CSS-variablene i `assets/styles.css`:

```css
:root {
    --primary-color: #3498db;
    --secondary-color: #2c3e50;
    /* ... andre farger */
}
```

### Legge til Egne Sider
1. Kopier en eksisterende HTML-fil (f.eks. `about.html`)
2. Oppdater innholdet
3. Legg til lenken i navigasjonsmenyen i alle HTML-filer

### Endre Logo
Erstatt `assets/favicon.svg` med ditt eget logo (SVG anbefales for skalerbarhet)

## 📝 Neste Steg

Dette er en demo-side med placeholder-innhold. For å gjøre den til din egen:

1. **Erstatt Demo-innhold**
   - Oppdater tekst og beskrivelser
   - Legg til egne bilder og logoer
   - Tilpass farger og styling

2. **Legg til Ekte Innhold**
   - Erstatt demo-prosjektene med faktiske prosjekter
   - Legg til ekte kontaktinformasjon
   - Oppdater personvernerklæringen

3. **Legg til Flere Funksjoner** (valgfritt)
   - Kontaktskjema
   - Bildegalleri
   - Blog/nyheter
   - Flere sider

4. **Hosting**
   - GitHub Pages (gratis)
   - Netlify (gratis)
   - Vercel (gratis)
   - Egen hosting

## 🔒 Personvern

Denne demo-nettsiden samler ikke inn personopplysninger. Les `privacy.md` for mer informasjon om hva du bør inkludere i en ekte personvernerklæring.

## 📄 Lisens

Dette er et demo-prosjekt. Bruk det som du vil!

## 🤝 Bidrag

Dette er en demo-nettside. Føl deg fri til å forke og tilpasse til dine egne behov.

---

**Laget med ❤️ som en demo statisk nettside**
