// Rotating first word in the hero headline ("[word] Secure Systems").
// Kept to exactly 4 short items — the CSS keyframes in index.css
// (.wrapper / @keyframes wordSlider) are hardcoded to 4 even steps.
export const heroRotatingWords = [
    "Engineering",
    "Hardening",
    "Fortifying",
    "Shielding",
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
export const logos = [
    {
        imgPath: "/images/logos/amalitech-logo.png",
        alt: "AmaliTech Ghana Ltd"
    },
    {
        imgPath: "/images/logos/aurora-logo.png",
        alt: "Aurora Software Labs"
    },
    {
        imgPath: "/images/logos/turntabl-logo.svg",
        alt: "Turntabl"
    },
    {
        imgPath: "/images/logos/solution-space-logo.svg",
        alt: "Solution Space"
    },
    {
        imgPath: "/images/logos/edblinkx.svg",
        alt: "EDBLINKX Empire Limited"
    },
    {
        imgPath: "/images/logos/touchstack-logo.svg",
        alt: "TouchStack Technologies"
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
// The `badge` images are placeholder icons, not the issuers' real badges
// (no official assets were supplied). To swap in the real badges, see
// public/images/certs/PLACEHOLDER-BADGES.md.
export const certifications = [
    {
        name: "AWS Certified Cloud Practitioner (CLF-C02)",
        issuer: "Amazon Web Services",
        date: "Aug 2026",
        detail: "Scored 882/1000",
        category: "Cloud",
        badge: "/images/certs/aws-ccp-badge.svg",
        status: "completed",
    },
    {
        name: "Google Cybersecurity Professional Certificate",
        issuer: "Google",
        date: "May 2026",
        category: "Security",
        badge: "/images/certs/google-cybersecurity-badge.svg",
        status: "completed",
    },
    {
        name: "Google IT Support Professional Certificate",
        issuer: "Google",
        date: "2026",
        category: "IT & Support",
        badge: "/images/certs/google-itsupport-badge.svg",
        status: "completed",
    },
    {
        name: "Network Architecture Fundamentals",
        issuer: "Cisco",
        date: "Jan 2026",
        category: "Networking",
        badge: "/images/certs/cisco-network-badge.svg",
        status: "completed",
    },
    {
        name: "AWS Educate Cloud Badge",
        issuer: "AWS Educate",
        date: "2026",
        category: "Cloud",
        badge: "/images/certs/aws-educate-badge.svg",
        status: "completed",
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
export const projects = {
    "Security & Cloud": [
        {
            title: "Nexus Plaza — Penetration Test Scoping & Rules of Engagement",
            date: "Aug 2026",
            description: "A full pre-engagement scope worksheet and rules-of-engagement document for an internal penetration test: scope boundaries, authorisation chain, testing windows, escalation contacts and out-of-scope systems.",
            tags: ["Penetration Testing", "Scoping", "Rules of Engagement"],
        },
        {
            title: "FraudShield — On-Device Anti-Scam Widget",
            date: "2026",
            description: "A floating Android widget that flags likely scam messages in real time using a small language model (Gemma) running entirely on-device, so no message data leaves the handset. Targets mobile money fraud, a high-volume attack vector in Ghana.",
            tags: ["Android", "On-Device AI", "Gemma", "Mobile Security"],
        },
        {
            title: "Sankofa — Winner, AWS Hackathon 2026",
            date: "2026",
            description: "A cloud-hosted patient feedback platform accepting voice or text, widening participation across literacy levels and giving hospitals actionable service-gap data.",
            tags: ["AWS", "Healthcare", "Accessibility"],
        },
        {
            title: "FloodGuard",
            date: "2026",
            description: "A flood alert and early-warning tool built on AWS generative AI services during the AWS re/Start programme's hackathon.",
            tags: ["AWS", "Generative AI", "Early Warning"],
        },
    ],
    "Software Engineering": [
        {
            title: "ShopAurora",
            date: "Jan 2026 – Present",
            description: "A full-stack e-commerce platform with dynamic product management, REST APIs over structured data models and a PostgreSQL schema built for scale and data integrity.",
            tags: ["Next.js", "REST APIs", "PostgreSQL"],
            liveUrl: "https://shopaurora.africa",
        },
        {
            title: "Hospital & Clinic Operations Optimizer",
            date: "2026",
            description: "Custom implementations of core data structures and algorithms (linked lists, heaps, trees, graphs) from scratch in Java, without built-in Java collections. Planning and Delivery Lead of a 15-person team.",
            tags: ["Java", "Data Structures & Algorithms"],
        },
        {
            title: "Holy Child Fundraising Platform",
            date: "Nov 2025 – Jan 2026",
            description: "A Next.js frame generator with Paystack payment integration for secure online donations during a school anniversary campaign.",
            tags: ["Next.js", "Paystack"],
            liveUrl: "https://holy-child-kappa.vercel.app",
        },
        {
            title: "Engineer Title Management System",
            date: "Oct – Nov 2025",
            description: "Turntabl capstone: a full-stack CRUD system (Next.js, Spring Boot, PostgreSQL) with migrations, REST APIs and a full test suite.",
            tags: ["Next.js", "Spring Boot", "PostgreSQL"],
        },
        {
            title: "Car Brokerage & Real Estate Platform",
            date: "Jun – Aug 2025",
            description: "The BLINKXDE platform for EDBLINKX Empire Ltd, unifying car brokerage, real estate and media modules.",
            tags: ["React", "Django", "PostgreSQL"],
            liveUrl: "https://edblinkxempirelimited.netlify.app",
        },
        {
            title: "Google Maps Business Scraper",
            date: "May – Aug 2025",
            description: "An internal lead-generation tool built at Touch Stack Technologies: scrapes Ghanaian business directories and enriches records via the Google Places API, usable as a web app or CLI.",
            tags: ["Python", "FastAPI", "React", "Google Places API"],
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
