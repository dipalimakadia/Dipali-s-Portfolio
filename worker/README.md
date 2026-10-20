# SparkaraNeo backend (Cloudflare Worker + Workers AI)

Free, always-on replacement for the Railway FastAPI backend (`backend/main.py`).
It uses Cloudflare Workers AI, so there is **no API key and no Hugging Face account** involved.

## Deploy (one time, about 5 minutes)

1. Create a free Cloudflare account: https://dash.cloudflare.com/sign-up
2. In a terminal:

   ```
   cd worker
   npm install -g wrangler        # or just use: npx wrangler ...
   npx wrangler login             # opens the browser, click Allow
   npx wrangler deploy
   ```

3. Wrangler prints a URL like `https://sparkaraneo.<your-subdomain>.workers.dev`.
4. Put it in `frontend/.env.production`:

   ```
   REACT_APP_CHAT_URL=https://sparkaraneo.<your-subdomain>.workers.dev/ask
   ```

5. Rebuild and publish the site: `cd ../frontend && npm run deploy`.

Check it works: open `https://sparkaraneo.<your-subdomain>.workers.dev/healthz` and you should see `{"status":"ok"}`.

## Notes

- Free allowance: Workers AI includes 10,000 "neurons" per day (roughly 100 chats a day with this setup) and Workers allows 100,000 requests per day. If the AI allowance runs out, SparkaraNeo shows its offline message and the site still answers basic questions locally.
- If you change your portfolio text, update `PORTFOLIO_CONTENT` in `portfolio.js` and run `npx wrangler deploy` again.
- Only `https://dipalimakadia.github.io` and `http://localhost:3000` may call the Worker (see `ALLOWED_ORIGINS` in `index.js`).
- Model can be changed with `MODEL` in `index.js` (list: https://developers.cloudflare.com/workers-ai/models/).

Docs: https://developers.cloudflare.com/workers/get-started/guide/ and https://developers.cloudflare.com/workers-ai/
