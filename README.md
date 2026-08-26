# Khaopun — Portfolio

Personal site for Pun (Khaopun): photography, keys with KU Acoustic, and
Computer Science at Kasetsart University.

Built with Next.js (App Router) + Tailwind v4. The design lives in Figma:
**[Khaopun — Portfolio](https://www.figma.com/design/ohHplWPiC0HBTRe76oLXC8)**
— the `03 · Foundations` page there is the source of truth for the palette
and type ramp, and `src/app/globals.css` mirrors it token for token.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

## Layout

```
src/app/globals.css     design tokens (colour, fluid type ramp) — mirrors Figma
src/app/layout.tsx      fonts (Instrument Serif / IBM Plex Sans / IBM Plex Mono)
src/app/page.tsx        section order
src/components/         Nav, Hero, Work, Projects, Keys, About, Footer
src/lib/photos.ts       photo captions + crop ratios
src/lib/github.ts       which repos to feature, and the live GitHub fetch
public/photos/          web-sized photos (~1600px). Originals: legacy/picture/
legacy/                 the original hand-written HTML site, kept as-is
```

## The projects section

`src/lib/github.ts` fetches `api.github.com/users/CHxNOBODY/repos` in a server
component, revalidating hourly. Edit the `FEATURED` array to change which repos
appear and in what order — course-code repos get a readable display title there.
If the API is unreachable or rate-limited the `FALLBACK` map keeps the build
green, so update it if a featured repo's description changes.

## Still to fill in

- Locations for two photos — `town` (archway) and `light` (pendants) in
  `src/lib/photos.ts`. Add `place: "..."` and the caption picks it up.
- Instagram handle, if you want it in the footer next to GitHub.
