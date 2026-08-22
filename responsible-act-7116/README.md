<div align="center">

<img src="public/logo.png" alt="Sunglow Fashion" width="140" />

# Sunglow Fashion — application

</div>

This folder holds the Next.js 13 application. **The full project
documentation — features, screenshots, API reference, routes and known
issues — lives in the [root README](../README.md).**

## Quick start

```bash
npm install
npm run dev
```

Storefront: [http://localhost:3000](http://localhost:3000)
Admin panel: [http://localhost:3000/Admin](http://localhost:3000/Admin)

The app talks to a hosted `json-server` API on Render. Those instances sleep
on the free tier, so the first request after idling can take up to a minute.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Development server on port 3000. |
| `npm run build` | Production build and static export to `out/`. |
| `npm start` | Serve the production build. |
| `npm run lint` | Run ESLint via `next lint`. |

## Environment

Google OAuth credentials are currently hardcoded in `next.config.js` and
should be moved to an untracked `.env.local`:

```bash
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
JWT_SECRET=a-long-random-string
NEXTAUTH_URL=http://localhost:3000
```

## Local API (optional)

`db.json` is the seed dataset. To serve it locally instead of using the hosted
API:

```bash
npx json-server --watch db.json --port 8080
```

Then point `src/utils/url.js` and the `src/redux/**/**.api.js` files at
`http://localhost:8080`.
