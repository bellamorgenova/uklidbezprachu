# uklidbezprachu_template

Next.js šablona webu pro uklízecí firmu [uklidbezprachu.cz](https://uklidbezprachu.cz) (projekt **Úklid bez prachu**).

## Stack (plán)

- **Next.js** — statický / marketingový web
- **GitHub** — verzování a CI trigger pro deploy
- **Vercel** — hosting a HTTPS
- **Forpsi** — registrace domény a DNS

## Lokální vývoj

Web je **Next.js** port šablony [ProCleaning](https://github.com/anastasiiaxfr/ProCleaning) (MIT) — vizuálně odpovídá [pro-cleaning-eta.vercel.app](https://pro-cleaning-eta.vercel.app/).

```bash
npm install
npm run dev
```

Otevři [http://localhost:3000](http://localhost:3000).

## Deploy a doména

Postup propojení GitHub → Vercel → Forpsi je v [docs/deploy-forpsi-vercel.md](./docs/deploy-forpsi-vercel.md).

## Kontext a dokumentace

- **Teď:** veškerý projektový kontext (rozhodnutí, obsah, poznámky k webu) drž v této lokální složce — zejména v `docs/`.
- **Po napojení GitHubu:** stejné informace patří do repozitáře; GitHub bude hlavní zdroj pravdy pro budoucí práci na webu.

## Nasazení (git + Vercel)

- Agent připraví změny lokálně a **navrhne commit + push** na `main` (→ automatický deploy na Vercelu).
- **Push provede jen po výslovném schválení uživatele** (např. „pushni“, „schváleno“, „ok deploy“).
- Bez schválení: žádný `git push`, žádný commit, pokud o commit výslovně nepožádáš.
