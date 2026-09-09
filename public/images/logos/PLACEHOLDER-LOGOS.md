# Placeholder logos

## Still placeholders

These files are simple text-monogram placeholders, not the real logos — no
official brand assets were available when this was built:

| File | Represents |
|---|---|
| `turntabl-logo.svg` | Turntabl (employer) |
| `splunk-logo.svg` | Splunk Enterprise (tech stack — "SOC Analyst" card) |
| `burpsuite-logo.svg` | Burp Suite (tech stack — "Ethical Hacking" card) |

Cert badges under `../certs/` are placeholders too — see that folder.

### To replace one

1. Get the real logo (square or near-square works best).
2. Save it over the existing file, **keeping the same filename**.
3. If your replacement uses a different file extension (e.g. `.png` instead of
   `.svg`), update the matching `imgPath` / `logoPath` / `logoImg` value in
   `src/constants/index.js` (search for the filename without its extension)
   to match. Same filename + same extension needs no code change at all.

## Already real

`amalitech-logo.png` and `aurora-logo.png` are the real company logos (the
Aurora mark was cleaned up and upscaled from a very small source image — see
git history on this file for the original). `touchstack-logo.svg`,
`solution-space-logo.svg`, and `edblinkx.svg` are also the real company logos.
None of these need replacing.
