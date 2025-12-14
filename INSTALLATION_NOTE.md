# Viktig Merknad om Bilder

På grunn av nettverksbegrensninger i utviklingsmiljøet, inneholder dette repositoriet placeholder-bilder i stedet for de faktiske bildene fra Pexels og Unsplash.

## Slik erstatter du placeholder-bildene med ekte bilder:

### 1. Last ned bildene manuelt:

**Hero bakgrunn:**
```bash
curl -L -o assets/images/hero-417173.jpg "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1600"
```

**Portfolio bilde 1:**
```bash
curl -L -o assets/images/portfolio-1481031.jpg "https://images.pexels.com/photos/1481031/pexels-photo-1481031.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=700"
```

**Portfolio bilde 2:**
Last ned fra [Unsplash](https://unsplash.com/photos/iFgRcqHznqg) og lagre som `assets/images/portfolio-unsplash1.jpg`

### 2. Alternativt, erstatt med dine egne bilder

Bilder bør ha følgende dimensjoner for best resultat:
- Hero bakgrunn: 1600x900 eller lignende widescreen format
- Portfolio thumbnails: 700x400 eller 16:9 format

Se README.md for fullstendig bildeattribusjon og lisenser.
