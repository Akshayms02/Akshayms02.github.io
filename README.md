# Akshay M S — Portfolio

Personal portfolio for [akshayms.site](https://akshayms.site).

## Local

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:4321](http://127.0.0.1:4321).

## Free hosting (GitHub Pages)

1. Create a GitHub repo named **`Akshayms02.github.io`** (user site) *or* any repo + custom domain.
2. Push this project to that repo (`main` branch).
3. In the repo: **Settings → Pages → Build from GitHub Actions** or deploy with:

```bash
npm run deploy
```

`public/CNAME` already points to `akshayms.site`.

4. At your domain registrar, add DNS for `akshayms.site`:
   - `A` records to GitHub Pages IPs, or
   - `CNAME` for `www` → `Akshayms02.github.io`

## Vercel (alternative)

Import the GitHub repo in [Vercel](https://vercel.com) — zero config for Vite. Then add `akshayms.site` under Domains.
