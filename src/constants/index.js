// Rotating first word in the hero headline ("[word] Secure Systems").
// Kept to exactly 4 items — the CSS keyframes in index.css
// (.wrapper / @keyframes wordSlider) are hardcoded to 4 even steps.
export const heroRotatingWords = [
    { text: "Engineering", imgPath: "/images/gear.svg" },
    { text: "Hardening", imgPath: "/images/lock.svg" },
    { text: "Fortifying", imgPath: "/images/fortress.svg" },
    { text: "Shielding", imgPath: "/images/shield.svg" },
];

export const counterItems = [
    { value: 1, suffix: "+", label: "Years Professional Experience" },
    { value: 5, suffix: "", label: "Certifications Earned" },
    { value: 10, suffix: "+", label: "Projects Shipped" },
    { value: 3.54, suffix: "", label: "CGPA, University of Ghana" },
];

export const navLinks = [
    {
        name: "Work",
        link: "#work"
    },
    {
        name: "Experience",
        link: "#experience"
    },
    {
        name: "Certifications",
        link: "#certifications"
    },
    {
        name: "Skills",
        link: "#skills"
    },
    {
        name: "Leadership",
        link: "#leadership"
    },
]

// Employer logos shown in the scrolling marquee.
// Turntabl still uses a placeholder wordmark (no official brand asset
// was supplied). To swap it for the real logo, see
// public/images/logos/PLACEHOLDER-LOGOS.md.
//
// `url`, where present, links the logo to the company's site. This
// sandbox's network couldn't verify these are still live (outbound
// access is locked to a short allowlist) — confirm amalitech.com,
// turntabl.io and touchstacktechnologies.com resolve correctly.
// No distinct public site was found for "Solution Space" (it reads as
// an internal team name within the EDBLINKX engagement, not a
// separate company) and Aurora Software Labs' own corporate site
// wasn't confirmed, so its logo links to ShopAurora, its product.
export const logos = [
    {
        imgPath: "/images/logos/amalitech-logo.png",
        alt: "AmaliTech Ghana Ltd",
        url: "https://www.amalitech.com",
    },
    {
        imgPath: "/images/logos/aurora-logo.png",
        alt: "Aurora Software Labs",
        url: "https://shopaurora.africa",
    },
    {
        imgPath: "/images/logos/turntabl-logo.svg",
        alt: "Turntabl",
        url: "https://turntabl.io",
    },
    {
        imgPath: "/images/logos/solution-space-logo.svg",
        alt: "Solution Space",
    },
    {
        imgPath: "/images/logos/edblinkx.svg",
        alt: "EDBLINKX Empire Limited",
        url: "https://edblinkxempirelimited.netlify.app",
    },
    {
        imgPath: "/images/logos/touchstack-logo.svg",
        alt: "TouchStack Technologies",
        url: "https://touchstacktechnologies.com",
    },
]

export const abilities = [
    {
        title: "Security-Minded Engineering",
        description: "backed by AWS and Google Cybersecurity certifications and hands-on training in SIEM concepts, IAM and alert triage — building the habit of reading the code and cloud infrastructure that generates the alerts.",
        icon: "/images/seo.png"
    },
    {
        title: "Full-Stack Engineering Background",
        description: "production experience across Java (Spring Boot), Python (FastAPI), Django, Next.js and React — shipping REST APIs, database migrations and CI/CD pipelines across three internships and a startup team.",
        icon: "/images/code.svg"
    },
    {
        title: "Cloud Fundamentals & Team Leadership",
        description: "hands-on with AWS EC2, S3 and IAM through a 12-week full-time cloud programme, paired with a track record leading teams — a 5-person Scrum team, a 15-person data-structures project, and a campus cybersecurity club I co-founded.",
        icon: "/images/chat.png"
    }
];

// Work experience, most recent first.
export const expCards = [
    {
        title: "Cybersecurity Intern",
        company: "AmaliTech Ghana Ltd",
        date: "Aug – Oct 2026",
        location: "Remote, Accra",
        logoPath: "/images/logos/amalitech-logo.png",
        review: "Selected through a competitive five-stage process for AmaliTech's Voluntary Internship Programme, Cohort 3 — a full-time cybersecurity track built around real threat models, security tooling and incident response.",
        responsibilities: [
            "Completed a full-time (40 hrs/week) cybersecurity track covering threat modelling, security tooling and incident response",
            "Delivering a capstone for a live community partner in a cross-functional team of 4–6 drawn from three tracks",
            "Own the threat model and security review of the team's capstone beyond the track requirements",
        ]
    },
    {
        title: "Software Engineer / COO",
        company: "Aurora Software Labs",
        date: "Dec 2025 – Present",
        location: "Remote",
        logoPath: "/images/logos/aurora-logo.png",
        review: "Split between backend engineering and operations at a student-run software startup — building the REST APIs behind ShopAurora on clean-architecture principles while leading the team's operational strategy.",
        responsibilities: [
            "Develop backend services and REST APIs on clean-architecture principles, improving scalability and maintainability",
            "Lead operational strategy for ShopAurora, coordinating cross-functional development and product workflows",
            "Apply secure development practices to protect data, APIs and user workflows",
        ]
    },
    {
        title: "Software Engineering Intern",
        company: "Turntabl (TechOps Team)",
        date: "Oct – Nov 2025",
        location: "Achimota, Accra",
        logoPath: "/images/logos/turntabl-logo.svg",
        review: "Full-stack engineer on a title management system, replacing static mappings with a database-driven CRUD service across Next.js, Spring Boot and PostgreSQL.",
        responsibilities: [
            "Designed REST APIs supporting filtering, creation, update and soft deletion; migrated data into relational tables with zero data loss",
            "Applied SOLID and DRY principles with design patterns including Factory, Builder, Strategy and Observer, cutting response time by 10%",
            "Wrote unit, integration and frontend component tests",
        ]
    },
    {
        title: "Scrum Master & Full-Stack Developer",
        company: "EDBLINKX Empire Ltd",
        date: "Jun – Aug 2025",
        location: "East Legon, Accra",
        logoPath: "/images/logos/solution-space-logo.svg",
        review: "Led a 5-person team on the Solution Space Dev Team, running sprint planning, stand-ups and retrospectives while building the BLINKXDE platform end to end.",
        responsibilities: [
            "Delivered 100% of sprint goals across the engagement",
            "Built the BLINKXDE platform (React, Django) unifying car brokerage, real estate and media modules",
            "Designed PostgreSQL schemas and implemented CI/CD pipelines, cutting deployment time by 30%",
        ]
    },
    {
        title: "Software Engineering Intern",
        company: "Touch Stack Technologies",
        date: "May – Aug 2025",
        location: "Osu, Accra",
        logoPath: "/images/logos/touchstack-logo.svg",
        review: "Owned an internal lead-generation tool end to end — a Python (FastAPI) and React application scraping Ghanaian business directories and enriching records via the Google Places API.",
        responsibilities: [
            "Built a web scraper against Ghanaian business directories to extract company records at scale",
            "Integrated the Google Places API to enrich the dataset with business details from Google Maps",
            "Shipped results consumable through a web interface or a CLI console",
        ]
    },
]

// Items with modelPath render as an interactive 3D model; items with
// logoImg render as a flat logo instead (used for tools that have no
// 3D asset). splunk-logo.svg and burpsuite-logo.svg are placeholder
// badges — no official brand assets were supplied for either.
export const techStackIcons = [
    {
        name: "Python",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "SOC Analyst",
        logoImg: "/images/logos/splunk-logo.svg",
    },
    {
        name: "React & Next.js",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Git & CI/CD",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
    {
        name: "Ethical Hacking",
        logoImg: "/images/logos/burpsuite-logo.svg",
    },
]

// Certifications, most recent first. status: "completed" | "in-progress"
// `badge` is the issuer's brand logo (Google/Cisco are hand-built SVG
// recreations — this environment couldn't reach Credly or any icon CDN
// to pull the exact artwork; see public/images/certs/PLACEHOLDER-BADGES.md).
// `verifyUrl`, where present, is the real public Credly verification link.
export const certifications = [
    {
        name: "AWS Certified Cloud Practitioner (CLF-C02)",
        issuer: "Amazon Web Services",
        date: "Aug 2026",
        detail: "Scored 882/1000",
        category: "Cloud",
        badge: "/images/certs/aws-ccp-badge.svg",
        status: "completed",
        verifyUrl: "https://www.credly.com/badges/07f6d328-14d6-420f-abdc-c142014d712b/public_url",
    },
    {
        name: "Google Cybersecurity Professional Certificate",
        issuer: "Google",
        date: "May 2026",
        category: "Security",
        badge: "/images/certs/google-logo.svg",
        status: "completed",
        verifyUrl: "https://www.credly.com/badges/a977c51c-e3a7-457e-bf33-9b2e8fe199c5/public_url",
    },
    {
        name: "Google IT Support Professional Certificate",
        issuer: "Google",
        date: "2026",
        category: "IT & Support",
        badge: "/images/certs/google-logo.svg",
        status: "completed",
    },
    {
        name: "Network Architecture Fundamentals",
        issuer: "Cisco",
        date: "Jan 2026",
        category: "Networking",
        badge: "/images/certs/cisco-logo.svg",
        status: "completed",
    },
    {
        name: "Introduction to Cybersecurity",
        issuer: "Cisco",
        category: "Security",
        badge: "/images/certs/cisco-logo.svg",
        status: "completed",
        verifyUrl: "https://www.credly.com/badges/f167e8fc-79ff-4128-a6cf-af4f3979c77b/public_url",
    },
    {
        name: "Penetration Testing",
        issuer: "Cisco",
        date: "In progress",
        category: "Security",
        badge: "/images/certs/cisco-logo.svg",
        status: "in-progress",
    },
    {
        name: "AWS Educate Cloud Badge",
        issuer: "AWS Educate",
        date: "2026",
        category: "Cloud",
        badge: "/images/certs/aws-educate-badge.svg",
        status: "completed",
        verifyUrl: "https://www.credly.com/badges/9ae0b60b-092a-47be-aebf-e32285ab9496/public_url",
    },
    {
        name: "TryHackMe SAL1 (Security Analyst Level 1)",
        issuer: "TryHackMe",
        date: "In progress",
        category: "Security",
        badge: "/images/certs/tryhackme-badge.svg",
        status: "in-progress",
    },
];

export const training = {
    title: "AWS re/Start Cloud Programme",
    provider: "AmaliTech / AWS Talent Bridge",
    date: "2026 · 12 weeks, full-time",
    points: [
        "Provisioned and administered EC2 instances on Amazon Linux 2023 with SSH key-pair authentication, security group rules and Apache deployment",
        "Deployed a static website to Amazon S3 with bucket policies governing public access",
        "Scored 90% on the AWS Management Console assessment",
        "Passed the AWS Certified Cloud Practitioner (CLF-C02) exam on completion",
    ],
};

export const skillGroups = [
    {
        category: "Security",
        skills: ["Incident Detection & Response", "SIEM Concepts", "Alert Triage", "IAM", "Network Security", "Threat Modelling", "Penetration-Test Scoping"],
    },
    {
        category: "Networking",
        skills: ["OSI & TCP/IP", "IPv4 / IPv6", "TCP vs UDP", "Routing & Switching", "Network Segmentation"],
    },
    {
        category: "Cloud (AWS)",
        skills: ["EC2", "S3", "IAM", "Security Groups", "Shared Responsibility Model"],
    },
    {
        category: "Languages",
        skills: ["Python", "Java", "JavaScript", "SQL", "Bash"],
    },
    {
        category: "Frameworks",
        skills: ["Spring Boot", "FastAPI", "Django", "Next.js", "React"],
    },
    {
        category: "Databases",
        skills: ["PostgreSQL", "MySQL"],
    },
    {
        category: "Tools",
        skills: ["Git", "GitHub", "CI/CD", "Linux (Ubuntu 24.04)", "Figma", "TryHackMe"],
    },
];

// Projects, security & cloud work first per current positioning.
// Optional project fields: role, repoUrl, liveUrl, image { src, alt, fit },
// and for the one flagship card per category: featured, highlights, scenarios.
export const projects = {
    "Security & Cloud": [
        {
            title: "SentryLab — Cloud Detection & Response Lab",
            date: "Sep – Oct 2026",
            role: "AmaliTech Cohort 3 Cybersecurity Capstone",
            featured: true,
            description: "A deliberately exposed AWS environment built entirely in Terraform, attacked with six MITRE ATT&CK techniques. Every attack is caught in CloudTrail, VPC Flow Logs or a Wazuh SIEM, and the highest-severity detection (someone switching CloudTrail off) fires a live SNS email alert.",
            highlights: [
                { value: "6/6", label: "Attacks detected" },
                { value: "6", label: "ATT&CK techniques" },
                { value: "~$0", label: "AWS spend (budget $20)" },
                { value: "10", label: "Days, build to demo" },
            ],
            scenarios: [
                { id: "T1110", name: "SSH brute force" },
                { id: "T1046", name: "Port scan" },
                { id: "T1548", name: "Privilege escalation" },
                { id: "T1087", name: "IAM reconnaissance" },
                { id: "T1562.008", name: "CloudTrail tampering" },
                { id: "T1530", name: "S3 data exfiltration" },
            ],
            tags: ["AWS", "Terraform", "Wazuh SIEM", "CloudTrail", "VPC Flow Logs", "MITRE ATT&CK"],
            repoUrl: "https://github.com/FREDYK1/sentrylab",
            image: { src: "/images/sentrylab-architecture.webp", alt: "SentryLab AWS architecture: VPC, victim EC2, CloudTrail, CloudWatch, SNS alerting and a Wazuh SIEM", fit: "contain" },
        },
        {
            title: "KASA Core — Twi Voice Assistant for Mobile Money",
            date: "Sep 2026",
            role: "USSD Engine Lead · Tɛkyerɛma Pa Hackathon 2026",
            description: "An Android assistant that lets blind and low-vision users check balances and send mobile money by speaking Twi. It drives the carrier's own USSD menus and stops at the PIN prompt, so the app never sees, stores or sends the PIN.",
            tags: ["Kotlin", "Jetpack Compose", "FastAPI", "Accessibility", "Security by Design"],
            repoUrl: "https://github.com/FREDYK1/kasa-core",
            image: { src: "/images/kasa-core-trust-boundary.webp", alt: "KASA Core trust-boundary diagram showing the PIN bypassing the app entirely", fit: "contain" },
        },
        {
            title: "Nexus Plaza — Penetration Test Scoping & Rules of Engagement",
            date: "Aug 2026",
            description: "A full pre-engagement scope worksheet and rules-of-engagement document for an internal penetration test: scope boundaries, authorisation chain, testing windows, escalation contacts and out-of-scope systems.",
            tags: ["Penetration Testing", "Scoping", "Rules of Engagement"],
            docsUrl: "https://drive.google.com/drive/folders/1KtgZPi-OjWB6dKI4Y5ZG8tyg-RhkbmGb?usp=sharing",
        },
        // Commented out — no live site or repo link yet. Add a liveUrl,
        // repoUrl, or docsUrl and uncomment to bring it back.
        // {
        //     title: "FraudShield — On-Device Anti-Scam Widget",
        //     date: "2026",
        //     description: "A floating Android widget that flags likely scam messages in real time using a small language model (Gemma) running entirely on-device, so no message data leaves the handset. Targets mobile money fraud, a high-volume attack vector in Ghana.",
        //     tags: ["Android", "On-Device AI", "Gemma", "Mobile Security"],
        // },
        // {
        //     title: "Sankofa — Winner, AWS Hackathon 2026",
        //     date: "2026",
        //     description: "A cloud-hosted patient feedback platform accepting voice or text, widening participation across literacy levels and giving hospitals actionable service-gap data.",
        //     tags: ["AWS", "Healthcare", "Accessibility"],
        // },
    ],
    "Software Engineering": [
        {
            title: "Q-Flow — Smart Queue Manager",
            date: "Sep 2026",
            role: "Team Lead · 6-Person AmaliTech Team",
            description: "A virtual queue for walk-in services: scan a QR code, get a live wait estimate and an SMS when your turn nears. Led the team and designed its anti-queue-jumping control — rotating, single-use QR tokens.",
            tags: ["Team Lead", "Requirements", "Threat Modelling", "JWT", "WebSockets"],
            liveUrl: "https://q-flow-one-jade.vercel.app",
            repoUrl: "https://github.com/Q-Flow-Team/q-flow",
            docsUrl: "https://drive.google.com/drive/folders/1ul-GVDrBTe2zAh65Crg8imbipZz7Vrq0?usp=sharing",
        },
        {
            title: "ShopAurora",
            date: "Jan 2026 – Present",
            description: "A full-stack e-commerce platform with dynamic product management, REST APIs over structured data models and a PostgreSQL schema built for scale and data integrity.",
            tags: ["Next.js", "REST APIs", "PostgreSQL"],
            liveUrl: "https://shopaurora.africa",
        },
        // Commented out — no live site or repo link yet. Add a liveUrl,
        // repoUrl, or docsUrl and uncomment to bring it back.
        // {
        //     title: "Hospital & Clinic Operations Optimizer",
        //     date: "2026",
        //     description: "Custom implementations of core data structures and algorithms (linked lists, heaps, trees, graphs) from scratch in Java, without built-in Java collections. Planning and Delivery Lead of a 15-person team.",
        //     tags: ["Java", "Data Structures & Algorithms"],
        // },
        {
            title: "Holy Child Custom Framing App",
            date: "Nov 2025 – Jan 2026",
            description: "A Next.js photo-framing app built for Holy Child College of Education's 80th Anniversary: upload a portrait, position it in a Classic or Anniversary frame, pay by mobile money via Paystack, and download a print-ready composite.",
            tags: ["Next.js", "TypeScript", "Tailwind CSS", "Paystack", "Canvas API"],
            liveUrl: "https://holy-child-kappa.vercel.app",
            repoUrl: "https://github.com/FREDYK1/Holy-Child",
        },
        {
            title: "Car Brokerage & Real Estate Platform",
            date: "Jun – Aug 2025",
            description: "The BLINKXDE platform for EDBLINKX Empire Ltd, unifying car brokerage, real estate and media modules.",
            tags: ["React", "Django", "PostgreSQL"],
            liveUrl: "https://edblinkxempirelimited.netlify.app",
        },
        {
            title: "TruthLens",
            date: "2026",
            role: "12-Person DCIT 318 Team Project",
            description: "A misinformation screener for viral claims and headlines: an ML.NET multiclass classifier scores a claim's credibility, a source-reputation lookup flags how trustworthy a domain is, and the community can flag claims as circulating, debunked or misleading.",
            tags: ["Blazor WebAssembly", ".NET 9", "ML.NET", "EF Core", "SQLite"],
            repoUrl: "https://github.com/emmanuelcobbinah007/TruthLens",
        },
        {
            title: "TidyCrew",
            date: "2026",
            description: "A marketing and lead-generation site for a Coventry, UK commercial cleaning company — office, commercial, window and medical-facility cleaning — with an instant quote-request form wired to a serverless backend.",
            tags: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Supabase"],
            liveUrl: "https://tidycrewcleaningservices.co.uk",
            repoUrl: "https://github.com/FREDYK1/tidy-crew-brand",
        },
    ],
};

export const leadership = [
    {
        title: "Co-Founder & Inaugural Chair",
        org: "Cyber Geeks Club, University of Ghana",
        date: "Aug 2026 – Present",
        description: "Co-founded a cybersecurity club with nine founding members and set a foundations-first curriculum with a weekly cadence before members split into specialist tracks.",
    },
    {
        title: "Planning & Delivery Lead",
        org: "15-Person University Data Structures Project",
        date: "2026",
        description: "Co-led five sub-teams building data structures and algorithms from scratch, setting the leadership structure, task tracker and repository organisation.",
    },
    {
        title: "Peer Coding Mentor",
        org: "University of Ghana",
        date: "2025 – Present",
        description: "Guides junior students through Python, Git and web development fundamentals.",
    },
    {
        title: "Mentorship Volunteer",
        org: "Barcamp Accra / Konnect",
        date: "Jun 2024 – Present",
        description: "Volunteers as a mentor at Barcamp Accra and Konnect community mentorship events.",
    },
];

export const socialImgs = [
    {
        name: "GitHub",
        url: "https://github.com/FREDYK1",
        imgPath: "/images/github.svg"
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/frederick-kankam-85646a302",
        imgPath: "/images/linkedin.png"
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/frederick.kankam.360",
        imgPath: "/images/insta.png"
    },
    {
        name: "X",
        url: "https://x.com/FredKankam360?s=09",
        imgPath: "/images/x.png"
    },
]
