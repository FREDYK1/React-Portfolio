# Placeholder employer logos

These three files are simple text-monogram placeholders, not the companies' real
logos — no official brand assets were available when this was built:

| File | Company |
|---|---|
| `amalitech-logo.svg` | AmaliTech Ghana Ltd |
| `aurora-logo.svg` | Aurora Software Labs |
| `turntabl-logo.svg` | Turntabl |

## To replace one

1. Get the real logo (square or near-square works best — it's displayed at a
   fixed size in a white rounded box on the marquee, and at 80x80 on the
   experience timeline).
2. Save it over the existing file, **keeping the same filename** — e.g. drop a
   new `amalitech-logo.svg` (or `.png`/`.jpg`, see below) into this folder.
3. If your replacement uses a different file extension (e.g. `.png` instead of
   `.svg`), update the matching `imgPath` / `logoPath` value in
   `src/constants/index.js` (search for `amalitech-logo`, `aurora-logo`, or
   `turntabl-logo`) to match the new filename. Same filename + same
   extension needs no code change at all.

`touchstack-logo.svg`, `solution-space-logo.svg`, and `edblinkx.svg` in this
same folder are the real company logos already and don't need replacing.
