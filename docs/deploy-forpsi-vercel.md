# Propojení GitHub, Vercel a domény (Forpsi)

Checklist pro **uklidbezprachu.cz**. DNS hodnoty vždy ověř v projektu na Vercelu (Settings → Domains) — mohou se mírně lišit.

## 1. GitHub

1. Účet na [github.com](https://github.com).
2. Nové repo (doporučený název: `uklidbezprachu_template`).
3. Lokální projekt:

   ```bash
   git remote add origin git@github.com:<USER>/<REPO>.git
   git push -u origin main
   ```

## 2. Vercel

1. Účet na [vercel.com](https://vercel.com) → **Continue with GitHub**.
2. **Add New Project** → import repozitáře.
3. Framework: **Next.js** (po vygenerování projektu).
4. Deploy — dostaneš URL typu `*.vercel.app`.

## 3. Doména na Forpsi

Po zaplacení domény v administraci Forpsi:

### Varianta A — DNS u Forpsi (typické)

V **DNS záznamy** pro `uklidbezprachu.cz`:

| Typ | Název | Hodnota | Poznámka |
|-----|--------|---------|----------|
| **A** | `@` | IP z Vercelu pro apex | Vercel → Domains → u apex domény ukáže IPv4 |
| **CNAME** | `www` | `cname.vercel-dns.com` | Nebo přesná hodnota z Vercelu |

V projektu na Vercelu: **Settings → Domains** → přidat `uklidbezprachu.cz` a `www.uklidbezprachu.cz`. Vercel navrhne přesné záznamy a ověří propagaci (může trvat hodiny).

### Varianta B — nameservery na Vercel

Forpsi nastavit NS na Vercel DNS — vhodné, pokud chceš DNS spravovat jen ve Vercelu. Postup je v dokumentaci Vercel „Using Vercel DNS“.

### Doporučení

- Jeden kanonický host (buď `www`, nebo apex) a druhý přesměrovat — nastaví se ve Vercelu po přidání obou domén.
- Po nasazení počítat s **1–48 h** propagací DNS.

## 4. Ověření

- [ ] `https://uklidbezprachu.cz` — platný certifikát (zelený zámek)
- [ ] `https://www.uklidbezprachu.cz` — stejné nebo redirect
- [ ] Push na `main` spustí nový deploy na Vercelu

## Poznámky pro ČR

- U Forpsi nechte u domény zapnuté **prodloužení / auto-renew**, ať nevyprší.
- E-maily na doméně (info@…) jsou oddělené od webhostingu — pokud budete chtít mail u Forpsi nebo jinde, doplníme MX záznamy zvlášť (nesmí kolidovat s A/CNAME pro web, pokud to Forpsi neumožní na jednom hostu — u apexu to řešíme podle jejich panelu).
