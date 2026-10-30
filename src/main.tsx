import React from "react";
import { createRoot } from "react-dom/client";
import { Wifi, Snowflake, Tv, Bath, MapPin, Mail, Users } from "lucide-react";
import "./styles.css";

const BOOK = "https://grandearchivionapoli22.kross.travel/it/camere";
const CDN = "https://cdn.krossbooking.com/borgo1313/images/1";
const HERO = "https://cdn.krbo.eu/borgo1313/contents/fcb478dde5f717dc79b852358c5935f4.jpg";

const rooms = [
  { type: "Camera doppia", guests: 2, img: `${CDN}/7/17486034336012.webp`, text: "Accogliente e luminosa, perfetta per coppie o amici in viaggio. Letto matrimoniale o due singoli su richiesta." },
  { type: "Camera tripla", guests: 3, img: `${CDN}/8/17486038291543.webp`, text: "Spaziosa e funzionale, ideale per famiglie o gruppi di amici. Letto matrimoniale e letto singolo, bagno privato." },
  { type: "Camera tripla", guests: 3, img: `${CDN}/9/17486038828866.webp`, text: "Spaziosa e funzionale, ideale per famiglie o gruppi di amici. Letto matrimoniale e letto singolo, bagno privato." },
  { type: "Camera quadrupla", guests: 4, img: `${CDN}/10/17486041184733.webp`, text: "Perfetta per famiglie numerose o gruppi: letto matrimoniale e divano letto, spazio, comfort e praticità." },
  { type: "Camera tripla", guests: 3, img: `${CDN}/11/17877329913923.webp`, text: "Spaziosa e funzionale, ideale per famiglie o gruppi di amici. Letto matrimoniale e letto singolo, bagno privato." },
];
const services = [
  { icon: Wifi, label: "Wi-Fi gratuito" },
  { icon: Snowflake, label: "Aria condizionata" },
  { icon: Tv, label: "TV in camera" },
  { icon: Bath, label: "Bagno privato" },
];

function BookBtn({ children = "Prenota ora", className = "" }: { children?: React.ReactNode; className?: string }) {
  return <a href={BOOK} className={`inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary-hover ${className}`}>{children}</a>;
}

function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="sticky top-0 z-20 border-b border-border bg-card/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="/" className="flex items-center gap-3">
            <img src="/GAN_logo.jpg" alt="Logo B&B Grande Archivio Napoli" className="h-16 w-16 rounded-full" />
            <span className="font-display text-xl leading-tight md:text-2xl">GAN 22 – Grande Archivio Napoli</span>
          </a>
          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#camere" className="hover:text-primary">Camere</a>
            <a href="#servizi" className="hover:text-primary">Servizi</a>
            <a href="#dove" className="hover:text-primary">Dove siamo</a>
          </nav>
          <BookBtn className="px-4 py-2 text-sm" />
        </div>
      </header>
      <main>
        <section className="relative flex min-h-[80vh] items-end overflow-hidden">
          <img src={HERO} alt="GAN 22 – Grande Archivio Napoli" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
          <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 text-ink-foreground">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">Bed & Breakfast · Napoli</p>
            <h1 className="max-w-3xl font-display text-5xl leading-tight md:text-7xl">GAN 22 – Grande Archivio Napoli</h1>
            <p className="mt-4 max-w-xl text-lg opacity-90">Cinque camere nel cuore del centro storico, a pochi passi da Duomo, Via dei Tribunali e Spaccanapoli.</p>
            <BookBtn className="mt-8 text-lg">Verifica disponibilità</BookBtn>
          </div>
        </section>
        <section id="servizi" className="bg-secondary">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-10 md:grid-cols-4">
            {services.map(({ icon: Icon, label }) => <div key={label} className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground"><Icon className="h-5 w-5" /></span><span className="font-medium">{label}</span></div>)}
          </div>
        </section>
        <section id="camere" className="mx-auto max-w-6xl px-5 py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">Le nostre camere</p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl">Camere in centro storico</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">Una doppia, tre triple e una quadrupla, tutte nel cuore del centro storico di Napoli.</p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rooms.map(r => <article key={r.img} className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-lg">
              <div className="aspect-[4/3] overflow-hidden"><img src={r.img} alt={`Camera in centro storico – ${r.type}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /></div>
              <div className="p-6">
                <div className="flex items-baseline justify-between"><h3 className="font-display text-2xl">{r.type}</h3><span className="flex items-center gap-1 text-sm text-muted-foreground"><Users className="h-4 w-4" />max {r.guests}</span></div>
                <p className="text-sm font-medium text-primary">Camera in centro storico</p>
                <p className="mt-3 text-sm text-muted-foreground">{r.text}</p>
                <BookBtn className="mt-5 w-full py-2 text-sm">Verifica disponibilità</BookBtn>
              </div>
            </article>)}
          </div>
        </section>
        <section id="dove" className="bg-ink text-ink-foreground">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-primary">Dove siamo</p>
              <h2 className="mt-2 font-display text-4xl">Nel cuore di Napoli</h2>
              <p className="mt-4 opacity-80">In Via Grande Archivio, accanto allo storico Archivio di Stato, nel quartiere San Lorenzo: tutto il centro storico si gira a piedi.</p>
              <ul className="mt-8 space-y-4">
                <li className="flex gap-3"><MapPin className="h-5 w-5 text-primary shrink-0" />Via Grande Archivio 22, 80138 Napoli</li>
                <li className="flex gap-3"><Mail className="h-5 w-5 text-primary shrink-0" /><a href="mailto:g.archivionap@gmail.com" className="hover:text-primary">g.archivionap@gmail.com</a></li>
              </ul>
              <BookBtn className="mt-8">Prenota direttamente</BookBtn>
            </div>
            <iframe title="Mappa di GAN 22" className="h-80 w-full rounded-lg border-0 md:h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Via+Grande+Archivio+22,+80138+Napoli&output=embed" />
          </div>
        </section>
      </main>
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} GAN 22 – Grande Archivio Napoli · Via Grande Archivio 22, Napoli</footer>
    </div>
  );
}
createRoot(document.getElementById("root")!).render(<App />);
