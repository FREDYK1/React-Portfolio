# Certification badges & logos

| File | Used for | What it is |
|---|---|---|
| `aws-ccp-badge.svg` | AWS Certified Cloud Practitioner (CLF-C02) | Hand-drawn placeholder (AWS colors, not the real badge) |
| `aws-educate-badge.svg` | AWS Educate Cloud Badge | Hand-drawn placeholder |
| `google-logo.svg` | Google Cybersecurity Professional Certificate, Google IT Support Professional Certificate | Hand-built recreation of Google's 4-color mark (not an exact trace — see below) |
| `cisco-logo.svg` | Network Architecture Fundamentals, Introduction to Cybersecurity, Penetration Testing | Hand-built recreation of Cisco's bar/bridge mark (not an exact trace — see below) |
| `tryhackme-badge.svg` | TryHackMe SAL1 | Hand-drawn placeholder, dashed border (in progress) |

## Why these aren't the real artwork

This environment's outbound network is locked down to a short allowlist (package
registries, GitHub, the Anthropic API) — it can't reach `credly.com`, any icon CDN
(`cdn.jsdelivr.net`, etc.), or general websites. So the real Credly badge images
given for several certifications, and any official Google/Cisco logo file, were
not fetchable from here. `google-logo.svg` and `cisco-logo.svg` are built from
scratch (plain geometry — arcs and bars — not traced from an official asset), good
enough to read clearly as "Google" / "Cisco" but not a pixel copy of the brand
guidelines file.

## To replace one with the real thing

1. Open the cert's `verifyUrl` in `src/constants/index.js` (the Credly page), or
   download the official brand asset from Google's/Cisco's press/brand page.
2. Save the image over the existing file, **keeping the same filename** — e.g. a
   new `google-logo.svg` (or `.png`).
3. If the replacement uses a different extension, update the matching `badge`
   value(s) in `src/constants/index.js` (search for the filename without its
   extension — several certifications share `google-logo.svg` / `cisco-logo.svg`,
   so one replacement file updates all of them at once unless you give each its
   own file and path).
