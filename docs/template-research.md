# Výzkum šablon — Úklid bez prachu

Datum: 2026-03-22  
Cíl: marketingový web uklízecí firmy, deploy **GitHub + Vercel**, stack preferovaně **Next.js**.

---

## Doporučení (shrnutí)

| Priorita | Šablona | Proč |
|----------|---------|------|
| **1 — hlavní volba** | **[Gleamer](https://gleamer-main.vercel.app/)** (placená, ~29 USD) | Přímo pro úklid, **Next.js 16 + Tailwind 4 + shadcn**, demo na Vercelu, stránky služeb, ceník, galerie, formuláře. Sedí na plánovaný stack bez kompromisu. |
| **2 — designová inspirace (zdarma)** | **[Sparkle](https://uicookies.com/downloads/sparkle/)** (Bootstrap 5 HTML) | Velmi pěkný „čistý“ vizuál (aqua–teal, mint), silná konverze (ceník, FAQ, odhad ceny). Není Next.js — bereme jako **vzor UX a barev**, implementaci uděláme v Nextu (nebo pod Gleamerem). |
| **3 — zdarma, jiný framework** | **[ProCleaning](https://pro-cleaning-eta.vercel.app/)** ([GitHub MIT](https://github.com/anastasiiaxfr/ProCleaning)) | Astro + Tailwind, rychlé, SEO; vhodné jen pokud byste **změnili** stack z Next.js na Astro. |

**Návrh pro realizaci:** stavět na **Gleamer** (po zakoupení licence) nebo — pokud nechcete platit licenci — **vlastní Next.js web** s rozložením a sekcami podle **Sparkle** + jemnější branding pro „Úklid bez prachu“ (svěží zelená/modrá, důvěra, CTA „Nezávazná poptávka“).

---

## Kandidáti detailně

### Gleamer — Cleaning Next.js Template

- **Demo:** https://gleamer-main.vercel.app/
- **Dokumentace:** https://gleamer-main.vercel.app/documentation
- **Prodej:** např. https://getnextjstemplates.com/products/gleamer-nextjs-template (~29 USD, osobní/komerční licence dle prodejce)
- **Tech:** Next.js 16, React 19, TypeScript, Tailwind 4, shadcn/ui, Framer Motion; volitelně Supabase (auth — u jednoduchého webu firmy často **vypneme / nebudeme používat**)
- **Stránky (demo):** úvod, seznam služeb, detail služby, ceník, kontakt/poptávka, galerie
- **Vzhled:** moderní, světlý, profesionální; vhodné pro domácnosti i firmy
- **Lokalizace:** texty v angličtině → přeložíme do češtiny, ceny v Kč

### Sparkle — free HTML (UICookies)

- **Info / stažení:** https://uicookies.com/downloads/sparkle/
- **Licence:** zdarma i pro komerční použití
- **Tech:** statické HTML, Bootstrap 5, vanilla JS (2 stránky: landing + služby s rezervací/odhad ceny)
- **Vzhled:** Sora + Inter, aqua-teal paleta — velmi sedí na „úklid bez prachu“
- **Použití u nás:** referenční šablona pro sekce (hero + poptávka, služby, proč my, ceník, jak to funguje, reference, FAQ, oblasti působnosti)

### ProCleaning — Astro (open source)

- **Demo:** https://pro-cleaning-eta.vercel.app/
- **Repo:** https://github.com/anastasiiaxfr/ProCleaning (MIT)
- **Tech:** Astro 6, Tailwind 4, DaisyUI, obsah v Markdownu
- **Plus:** SEO, blog, tým, služby; **mínus:** ne Next.js (jiný build na Vercelu — stále OK, ale míjí původní plán)

### Ortega's Cleaning — Next.js (open source)

- **Repo:** https://github.com/webimpactuw/ortegas-cleaning
- **Obsah:** booking, MongoDB, Sanity, EmailJS — **příliš složité** pro první verzi webu české firmy bez online rezervací

### Coreclean — ThemeForest

- **URL:** https://themeforest.net/item/coreclean-cleaning-services-react-nextjs-template/64666777
- Hodně stránek (7+ homepage), placená; Bootstrap v tagu — konkurence Gleameru, vyšší cena a váha

### Gleamer alternativy (placené / obecné)

- **jstemplate.net Cleaning Service** — Next/React varianty, méně ověřené demo než Gleamer
- **Framer: CleanHub / Cleanix** — hezké, ale **Framer hosting**, ne náš Git+Vercel+Next plán

### České / no-code (ne pro náš stack)

- **Wix** šablony „Úklidová firma“, Shynix — vhodné bez vývojáře, ne pro repozitář na GitHubu
- **WordPress Cleaning Specialist**, **Divi Cleaning Company** — WordPress ekosystém
- **Nicepage** — editor, ne kód v gitu

---

## Co by měl web „Úklid bez prachu“ mít (bez ohledu na šablonu)

1. **Úvod** — jasná value proposition, telefon / rychlá poptávka, důvěra (pojištění, zkušenosti, oblast)
2. **Služby** — domácnosti, kanceláře, jednorázový / pravidelný úklid, případně mytí oken / po rekonstrukci
3. **Ceník nebo orientační ceny** — transparentnost (i „od X Kč“ nebo kalkulačka později)
4. **Jak to probíhá** — 3 kroky (poptávka → termín → úklid)
5. **Reference / fotky** — reálná práce (až budou)
6. **Kontakt + formulář** — GDPR souhlas, mapa oblasti (kraj / města)
7. **SEO** — title/description v češtině, lokální klíčová slova

Volitelně později: blog tipy, online rezervace (Sparkle/Gleamer umí UI, backend doplníme).

---

## Rozhodnutí k potvrzení

- [ ] **Gleamer** — koupit licenci a použít jako základ kódu
- [ ] **Vlastní Next.js** — vizuálně inspirováno **Sparkle**, bez licence
- [ ] **ProCleaning (Astro)** — přejít na Astro místo Next.js

Po potvrzení navážeme scaffoldem v projektu a českým obsahem.
