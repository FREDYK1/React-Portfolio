import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import { projects } from '../constants/index.js';
import TitleHeader from '../components/TitleHeader';

gsap.registerPlugin(ScrollTrigger);

const projectImages = {
    "Car Brokerage & Real Estate Platform": { src: "/images/edblinkx-project.png", alt: "Screenshot of the BLINKXDE car brokerage and real estate platform" },
    "Google Maps Business Scraper": { src: "/images/webscrapper-website.png", alt: "Screenshot of the Google Maps business scraper web interface" },
};

const ProjectCard = ({ project }) => {
    const image = projectImages[project.title];

    return (
        <div className="project-card card-border rounded-xl p-8 flex flex-col gap-4">
            {image && (
                <div className="image-wrapper rounded-xl overflow-hidden h-48">
                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                </div>
            )}
            <div className="flex flex-col gap-1">
                <h4 className="text-white text-xl font-semibold">{project.title}</h4>
                <p className="text-white-50 text-sm">{project.date}</p>
            </div>
            <p className="text-white-50 text-lg">{project.description}</p>
            <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <span key={tag} className="hero-badge">{tag}</span>
                ))}
            </div>
            {project.liveUrl && (
                <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white-50 hover:text-white transition-colors duration-300 mt-auto"
                >
                    <span>View Live</span>
                    <img src="/images/arrow-right.svg" alt="" className="size-3" />
                </a>
            )}
        </div>
    );
};

const ShowcaseSection = () => {
    const sectionRef = useRef(null);

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

    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="Selected Work"
                    sub="🛡️ Security & Cloud Projects First"
                />
                {Object.entries(projects).map(([category, items]) => (
                    <div key={category} className="mt-16">
                        <h3 className="text-2xl md:text-3xl font-semibold mb-8">{category}</h3>
                        <div className="grid-3-cols">
                            {items.map((project) => (
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
