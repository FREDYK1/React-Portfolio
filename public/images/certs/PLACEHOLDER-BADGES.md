# Placeholder certification badges

All six files in this folder are simple colored-circle placeholders, not the
issuers' real certification badges — no official badge images were available
when this was built:

| File | Certification |
|---|---|
| `aws-ccp-badge.svg` | AWS Certified Cloud Practitioner (CLF-C02) |
| `aws-educate-badge.svg` | AWS Educate Cloud Badge |
| `google-cybersecurity-badge.svg` | Google Cybersecurity Professional Certificate |
| `google-itsupport-badge.svg` | Google IT Support Professional Certificate |
| `cisco-network-badge.svg` | Cisco Network Architecture Fundamentals |
| `tryhackme-badge.svg` | TryHackMe SAL1 |

## To replace one

Most of these certifications provide an official badge image via
[Credly](https://www.credly.com/) or the issuer's own certificate page —
download the PNG/SVG they give you for each credential.

1. Save the real badge image into this folder, **keeping the same filename**
   (e.g. a new `aws-ccp-badge.svg` or `aws-ccp-badge.png`).
2. If it uses a different file extension than the placeholder, update the
   matching `badge` value in `src/constants/index.js` (search for
   `certifications` — each entry has a `badge: "/images/certs/..."` field) to
   point at the new filename. Same filename + same extension needs no code
   change at all.
