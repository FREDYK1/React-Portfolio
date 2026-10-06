import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import { projects } from '../constants/index.js';
import TitleHeader from '../components/TitleHeader';
import HoverGlowCard from '../components/HoverGlowCard';

gsap.registerPlugin(ScrollTrigger);

const projectImages = {
    "Car Brokerage & Real Estate Platform": { src: "/images/edblinkx-project.png", alt: "Screenshot of the BLINKXDE car brokerage and real estate platform" },
    "Google Maps Business Scraper": { src: "/images/webscrapper-website.png", alt: "Screenshot of the Google Maps business scraper web interface" },
};

const categories = ["All", ...Object.keys(projects)];

// Diagrams (fit: "contain") sit on white so they read as figures rather
// than being cropped like screenshots.
const ProjectImage = ({ image, className = "" }) => (
    <div className={`image-wrapper rounded-xl overflow-hidden ${image.fit === "contain" ? "bg-white p-3" : ""} ${className}`}>
        <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className={`w-full h-full ${image.fit === "contain" ? "object-contain" : "object-cover"}`}
        />
    </div>
);

const ProjectMeta = ({ project }) => (
    <p className="text-white-50 text-sm">
        {project.date}
        {project.role && <span className="text-blue-50"> · {project.role}</span>}
    </p>
);

const ProjectLinks = ({ project }) => {
    if (!project.liveUrl && !project.repoUrl) return null;
    return (
        <div className="flex flex-wrap items-center gap-6 mt-auto pt-2">
            {project.liveUrl && (
                <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white-50 hover:text-white transition-colors duration-300"
                >
                    <span>View Live</span>
                    <img src="/images/arrow-right.svg" alt="" className="size-3" />
                </a>
            )}
            {project.repoUrl && (
                <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white-50 hover:text-white transition-colors duration-300"
                >
                    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className="size-4">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    <span>View Code</span>
                </a>
            )}
        </div>
    );
};

const ProjectTags = ({ tags }) => (
    <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
            <span key={tag} className="hero-badge">{tag}</span>
        ))}
    </div>
);

const ProjectCard = ({ project }) => {
    const image = project.image ?? projectImages[project.title];

    return (
        <HoverGlowCard className="project-card rounded-xl p-8 flex flex-col gap-4">
            {image && <ProjectImage image={image} className="h-48" />}
            <div className="flex flex-col gap-1">
                <h4 className="text-white text-xl font-semibold">{project.title}</h4>
                <ProjectMeta project={project} />
            </div>
            <p className="text-white-50 text-lg">{project.description}</p>
            <ProjectTags tags={project.tags} />
            <ProjectLinks project={project} />
        </HoverGlowCard>
    );
};

// Full-width flagship card: story + proof points on one side, the
// architecture diagram on the other.
const FeaturedProjectCard = ({ project }) => (
    <HoverGlowCard className="project-card rounded-xl p-6 md:p-10 grid xl:grid-cols-2 gap-10 mb-6">
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
                <span className="hero-badge text-white">★ Featured Project</span>
                <h4 className="text-white text-2xl md:text-3xl font-semibold">{project.title}</h4>
                <ProjectMeta project={project} />
            </div>
            <p className="text-white-50 text-lg">{project.description}</p>

            {project.highlights && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {project.highlights.map((h) => (
                        <div key={h.label} className="rounded-xl bg-black-200 px-4 py-3">
                            <p className="text-white text-2xl md:text-3xl font-semibold">{h.value}</p>
                            <p className="text-white-50 text-xs md:text-sm">{h.label}</p>
                        </div>
                    ))}
                </div>
            )}

            {project.scenarios && (
                <div className="flex flex-col gap-3">
                    <p className="text-white text-sm font-semibold uppercase tracking-wider">Attacks run → detected</p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                        {project.scenarios.map((s) => (
                            <li key={s.id} className="flex items-center gap-3 text-white-50">
                                <span className="font-mono text-xs text-white bg-blue-100 rounded-md px-2 py-1 shrink-0">{s.id}</span>
                                <span>{s.name}</span>
                                <span className="ml-auto text-green-400" aria-label="detected">✓</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <ProjectTags tags={project.tags} />
            <ProjectLinks project={project} />
        </div>

        {project.image && (
            <a
                href={project.image.src}
                target="_blank"
                rel="noopener noreferrer"
                className="block self-center"
                title="Open the full architecture diagram"
            >
                <ProjectImage image={project.image} className="h-72 md:h-[28rem] hover:opacity-90 transition-opacity duration-300" />
                <p className="text-white-50 text-sm text-center mt-3">Architecture diagram — click to enlarge</p>
            </a>
        )}
    </HoverGlowCard>
);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const isFirstFilterRun = useRef(true);
    const [activeFilter, setActiveFilter] = useState("All");

    useGSAP(() => {
        gsap.fromTo(sectionRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Initial reveal (default "All" filter): each card animates in as
        // it scrolls into view.
        gsap.utils.toArray(".project-card").forEach((card, index) => {
            gsap.fromTo(
                card,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.1 * (index % 4),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });
    }, []);

    // Re-animate cards on filter changes only (not on the initial mount,
    // which the scroll-triggered reveal above already handles). The
    // section is necessarily already in view for the user to have clicked
    // a filter tab, so this can play immediately rather than on scroll.
    useEffect(() => {
        if (isFirstFilterRun.current) {
            isFirstFilterRun.current = false;
            return;
        }
        gsap.fromTo(
            ".project-card",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: "power2.out" }
        );
    }, [activeFilter]);

    const visibleCategories = activeFilter === "All"
        ? Object.entries(projects)
        : Object.entries(projects).filter(([category]) => category === activeFilter);

    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="Selected Work"
                    sub="🛡️ Security & Cloud Projects First"
                />
                <div className="flex flex-wrap justify-center gap-3 mt-10" role="tablist" aria-label="Filter projects by category">
                    {categories.map((category) => {
                        const isActive = activeFilter === category;
                        return (
                            <button
                                key={category}
                                type="button"
                                role="tab"
                                aria-selected={isActive}
                                onClick={() => setActiveFilter(category)}
                                className={`px-5 py-2 rounded-full text-sm md:text-base font-semibold transition-colors duration-300 ${
                                    isActive
                                        ? "bg-white text-black"
                                        : "bg-black-200 text-white-50 hover:text-white"
                                }`}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>
                {visibleCategories.map(([category, items]) => (
                    <div key={category} className="mt-16">
                        {activeFilter === "All" && (
                            <h3 className="text-2xl md:text-3xl font-semibold mb-8">{category}</h3>
                        )}
                        {items.filter((p) => p.featured).map((project) => (
                            <FeaturedProjectCard key={project.title} project={project} />
                        ))}
                        <div className="grid-3-cols">
                            {items.filter((p) => !p.featured).map((project) => (
                                <ProjectCard key={project.title} project={project} />
                            ))}
                        </div>
                    </div>
                ))}
                <p className="text-white-50 text-center mt-16">
                    More projects and source code on{' '}
                    <a
                        href="https://github.com/FREDYK1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white underline hover:text-blue-50 transition-colors duration-300"
                    >
                        github.com/FREDYK1
                    </a>
                </p>
            </div>
        </section>
    );
}
export default ShowcaseSection;
