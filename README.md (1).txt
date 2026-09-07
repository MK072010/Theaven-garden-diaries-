# Thevan Garden Diaries — Website

A cinematic, editorial one-page website for Thevan Garden Diaries, a garden cafe in
Shahpura, Jaipur. Built with plain HTML, CSS and vanilla JavaScript — no build step,
no framework, ready to deploy as-is.

## Structure

```
thevan-garden-diaries/
├── index.html         Homepage — hero, story, experience, menu preview, gallery, location
├── menu.html          Full Menu page — category tabs, item cards, veg/non-veg legend
├── css/style.css       Shared design system, layout, responsive rules
├── css/menu.css        Menu-page-specific styles (tabs, item cards, legend)
├── js/script.js        Nav behaviour, reveals, parallax, magnetic buttons, lightbox
├── js/menu.js          Menu category tab switching
└── README.md
```

## The Menu page

`menu.html` is a full working menu system, not just a preview:

- Five categories (Morning & Coffee, All-Day Plates, Garden Grill, Evenings & Sweet,
  Coolers & Beverages) switchable via sticky tabs — no page reload.
- Each dish is a card with a photo, name, short description, a veg / non-veg
  indicator dot, and a price.
- **Every dish name and price is a labelled sample** (marked with `*`) — replace
  with the real, current menu before launch. The strip above the tabs says so
  explicitly to anyone visiting the page.
- The homepage's "Signature Menu" section is a short preview that links through
  to this full page via **View the Menu**.

## Colour palette (updated — richer, more jewel-toned)

- Deep emerald green (`--forest-950` / `--forest-700`) — replaces the earlier
  near-black green for a richer, more saturated backdrop.
- Warm cream / ivory (`--ivory`, `--paper`) for light sections.
- Rich terracotta-rust (`--clay`) and a brighter antique gold (`--gold`,
  `--gold-bright`) for accents, underlines and hovers.
- A new deep royal maroon (`--royal`) used for the non-veg indicator dot, echoing
  Rajasthan's traditional palette.
- All colours are CSS variables at the top of `css/style.css` — change them
  once, and the whole site (including the menu page) updates.

## Before you launch — things to replace

Everything below was intentionally left as an **editable placeholder** rather than
invented, per the brief. Search `index.html` for these and update them:

- **Photography** — every image currently points to a stock placeholder
  (`images.unsplash.com`) chosen to match the mood (garden, greenery, food,
  lanterns). Replace every `src="https://images.unsplash.com/..."` with real,
  licensed photography of the actual cafe. This is the single highest-impact
  change — the design is built to carry real photography.
- **Location section** (`id="location"`):
  - Exact street address
  - Opening hours
  - Phone number
  - Instagram handle
  - The `<iframe>` map — swap the placeholder query for the venue's real
    Google Maps embed link (Google Maps → Share → Embed a map → copy the `src`).
- **Menu page** (`menu.html`) — all dishes and prices are marked with `*` and
  are editable placeholders, not confirmed menu items or real pricing. Replace
  every item, description and price with the real, current menu. The category
  tabs (`data-target` in `menu.html` matching `id` on each `.menu-category`)
  can be renamed, reordered, or have categories added/removed freely.
- **Social links** in the footer (`Instagram`, `Facebook`, `Google Maps`) currently
  point to `#` — add the real URLs.
- **"View the Menu" and "Get Directions" buttons** — currently `href="#"`;
  point them to a PDF/menu page and the real Maps link respectively.

## Design notes

- **Type**: Fraunces (display/editorial serif) + Archivo (UI/body sans), loaded
  from Google Fonts.
- **Palette**: deep botanical green (`--forest-950`), warm ivory (`--ivory`),
  muted clay (`--clay`) and a restrained antique gold (`--gold`) used only for
  small accents (underlines, the scroll cue, the eyebrow labels).
- **Motion**: one orchestrated reveal on load (the hero), scroll-triggered
  fades for sections, gentle image parallax, and magnetic hover on primary
  buttons. Everything respects `prefers-reduced-motion`.
- All interactive behaviour is in `js/script.js`, split into small independent
  blocks (nav, mobile menu, reveals, parallax, magnetic buttons, cursor) so
  any one of them can be trimmed without touching the others.

## Deploying to Vercel

1. Push this folder to a GitHub repo (or drag-and-drop it into the Vercel
   dashboard).
2. In Vercel: **New Project → Import** the repo.
3. Framework preset: **Other** (static site) — no build command, no output
   directory override needed; Vercel will serve `index.html` as-is.
4. Deploy.

Or via CLI, from inside this folder:

```
npm i -g vercel
vercel
```

## Performance & accessibility already in place

- Images use `loading="lazy"` (except the hero, which loads eager).
- Semantic HTML5 landmarks (`header`, `main`, `section`, `footer`) and
  descriptive `alt` text throughout.
- Visible keyboard focus states on links and buttons.
- Reduced-motion users get a static, fully functional page — no parallax,
  no cursor follower, no load curtain.
