# NOIRLINE — Underwear Store v4

React + Vite + Tailwind practice storefront.

## What was fixed in v4
- 48 products remain: 22 women + 26 men.
- Exactly 50 distinct optimized product images are used; images are no longer cycled randomly across unrelated categories.
- Women and men have separate category pools. Bras, panties, bikini, thong, hipster, boyshort, lace and stockings use women-oriented imagery; boxer brief, brief, trunk, boxer, jockstrap and performance use men-oriented imagery.
- Jockstrap products use dedicated jockstrap imagery, including the red product for **Red Performance Jockstrap**.
- Stockings use dedicated stockings imagery.
- Pexels images request a 273x350 compressed/cropped CDN rendition at quality 72 to reduce payload size.
- Product cards use an exact 273:350 media frame with `object-fit: cover`.
- Product detail pages use the same 273:350 image ratio and lazy-load thumbnails.
- Images use lazy loading and async decoding.
- Search now uses React Router navigation instead of a full browser reload, and search result cards initialize their reveal animation correctly.
- Added a wildcard route so an unknown URL never renders a blank page.
- Added SPA fallback rules for Vercel (`vercel.json`) and Netlify (`public/_redirects`) so `/shop/women`, `/shop/men`, `/search`, and product URLs survive refresh/direct navigation.
- Catalog version was bumped so an old localStorage cart is cleared once after this update.

## Categories
### Women
Bras, panties, bikini, thong, hipster, boyshort, lace, stockings.

### Men
Boxer brief, brief, trunk, boxer, jockstrap, performance.

## Run
```bash
npm install
npm run dev
```

Build:
```bash
npm run build
```

## Image note
The storefront references compressed CDN renditions of free-to-use stock images. For a production store, replace them with image files that you own or have explicit commercial redistribution rights for.

Checkout is simulated; no real payment is processed.


## v7 additions
- Local demo profile sign-in with name/email/password validation; password is never stored in plaintext.
- Header shows user initials and email after sign-in, with logout.
- Home link added beside Women/Men.
- PS5 raffle entry flow with validated demo card fields and raffle intent.
- A qualifying purchase started from the raffle flow awards one demo raffle chance shown on the payment review and delivery dashboard.
- Dashboard shows current login and raffle status.
- Demo profile/order data stays in browser localStorage; no real authentication or payments are connected.
# Ali-project-
