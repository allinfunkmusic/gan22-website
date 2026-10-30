# GAN 22 – Grande Archivio Napoli

Sito statico React + Vite + Tailwind CSS 4.

## Sviluppo locale
```bash
npm install
npm run dev
```

## Pubblicazione Netlify
Collega il repository GitHub a Netlify. Il file `netlify.toml` configura:
- Build command: `npm run build`
- Publish directory: `dist`

## Nota sulle fotografie
Le immagini delle camere e la foto principale sono caricate da URL esterni KrossBooking.
Se tali URL cambiano, occorrerà aggiornarli in `src/main.tsx`.

## Logo
Il file originale è incluso in `public/GAN_logo.jpg`.
