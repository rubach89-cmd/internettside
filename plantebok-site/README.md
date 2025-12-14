# Plantebok Andørja — Nettside (start)

Dette er et startutkast for en statisk nettside basert på Plantebok-Andorja-Igeland.pdf.

Hvordan teste lokalt:

1. Klon repoet og bytt til branch `feature/plantebok-site` (PR opprettes automatisk av Copilot-agenten).
2. Åpne `index.html` i en enkel lokal server (f.eks. `npx serve .` eller `python -m http.server 8000`).

Neste steg:

- Ekstrahere full tekst og bilder fra PDF og fylle `data/` med alle arter.
- Lage separate sider per art og legge inn bilde-gallerier.
- Finne og importere høykvalitetsbilder (lokalt eller via Git LFS hvis nødvendig).

