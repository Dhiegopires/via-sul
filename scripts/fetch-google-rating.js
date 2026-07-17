#!/usr/bin/env node
// Pulls the real Google rating for Via Sul via the Places API (New) Place Details
// endpoint and writes it to assets/data/google-rating.json, which the static
// site reads client-side (see assets/js/main.js).
//
// Why this exists as a script and not a browser fetch: Place Details requires
// an API key, and this is a static site with no server. Shipping the key in
// the browser means anyone can copy it out of view-source and spend your
// Google Cloud quota. Running it here keeps the key out of anything that
// reaches a visitor's browser — only the two numbers it returns (rating,
// review count) end up in the committed JSON.
//
// Usage:
//   GOOGLE_PLACES_API_KEY=xxxxx PLACE_ID=xxxxx node scripts/fetch-google-rating.js
//
// Getting the two values it needs:
//   1. GOOGLE_PLACES_API_KEY — Google Cloud Console > APIs & Services >
//      Credentials > Create API key, then enable "Places API (New)" for the
//      project. Restrict the key to that API only.
//   2. PLACE_ID — https://developers.google.com/maps/documentation/places/web-service/place-id-finder
//      search "Via Sul" + the address, copy the Place ID it returns.
//
// Re-run this whenever you want the on-site badge to reflect the current
// Google rating. It is not on a schedule by default; wire it into a CI cron
// or a pre-deploy step if it needs to refresh automatically.

const fs = require('fs');
const path = require('path');

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_ID = process.env.PLACE_ID;
const OUTPUT_PATH = path.join(__dirname, '..', 'assets', 'data', 'google-rating.json');

async function main() {
  if (!API_KEY || !PLACE_ID) {
    console.error(
      'Faltam variáveis de ambiente. Rode assim:\n' +
      '  GOOGLE_PLACES_API_KEY=xxxx PLACE_ID=xxxx node scripts/fetch-google-rating.js\n' +
      'Veja os comentários no topo deste arquivo para como conseguir as duas.'
    );
    process.exit(1);
  }

  const url = `https://places.googleapis.com/v1/places/${PLACE_ID}`;
  const res = await fetch(url, {
    headers: {
      'X-Goog-Api-Key': API_KEY,
      'X-Goog-FieldMask': 'rating,userRatingCount',
    },
  });

  if (!res.ok) {
    console.error(`Places API retornou ${res.status}: ${await res.text()}`);
    process.exit(1);
  }

  const data = await res.json();

  const payload = {
    rating: data.rating ?? null,
    reviewCount: data.userRatingCount ?? null,
    source: 'Google Places API (Place Details)',
    updatedAt: new Date().toISOString().slice(0, 10),
  };

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(payload, null, 2) + '\n');
  console.log('Atualizado:', payload);
}

main();
