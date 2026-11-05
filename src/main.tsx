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
              <p className="text-sm uppercase tracking-[0.3em] text-primary">Dove siamo e contatti</p>
              <h2 className="mt-2 font-display text-4xl">Nel cuore di Napoli</h2>
              <p className="mt-4 opacity-80">In Via Grande Archivio, accanto allo storico Archivio di Stato, nel quartiere San Lorenzo: tutto il centro storico si gira a piedi.</p>
              <ul className="mt-8 space-y-4">
                <li className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-primary" />Via Grande Archivio 22, 80138 Napoli</li>
                <li className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-primary" /><a href={PHONE} className="hover:text-primary">081 658 2367</a></li>
                <li className="flex gap-3"><MessageCircle className="h-5 w-5 shrink-0 text-primary" /><a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:text-primary">WhatsApp: +34 611 244 712</a></li>
                <li className="flex gap-3"><Mail className="h-5 w-5 shrink-0 text-primary" /><a href="mailto:g.archivionap@gmail.com" className="break-all hover:text-primary">g.archivionap@gmail.com</a></li>
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
