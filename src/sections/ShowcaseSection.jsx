import React from 'react'
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);


    useGSAP(() => {
        // Main section fade in
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
        
        // Project cards animation
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((card, index) => {
            if (card) {
                gsap.fromTo(
                    card,
                    {
                        y: 100,
                        opacity: 0
                    },
                    {
                        y: 0, 
                        opacity: 1,
                        duration: 1, 
                        delay: 0.2 * index,
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 85%',
                            end: 'bottom 20%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                );
            }
        });
    }, []);
  return (
    <section id="work" ref={sectionRef} className="app-showcase">
        <div className="w-full">
            <div className="showcaseLayout flex flex-col md:flex-row md:gap-8">
                {/* LEFT */}
                <div className="first-project-wrapper md:w-1/2" ref={project1Ref}>
                    <div className="image-wrapper">
                        <img src="/images/project1.png" alt="Ryde" />
                    </div>
                    <div className="text-content">
                        <h2>
                            On-Demand Rides Made Simple with a PowerFull, User-Friendly App called Ryde
                        </h2>
                        <p className="text-white-50 md:text-xl">
                            An app built with React Native, Expo, & TailwindCSS for a fast, user-friendly experience.
                        </p>
                    </div>
                </div>
                {/* RIGHT */}
                <div className="project-list-wrapper md:w-1/2 flex flex-col gap-4 md:gap-6" ref={project2Ref}>
                    <div className="project">
                        <div className="image-wrapper bg-[#ffefdb]">
                            <img src="/images/project2.png" alt="Library Management Platform" />
                        </div>
                        <h2>Library Management Platform</h2>
                    </div>
                    <div className="project" ref={project3Ref}>
                        <div className="image-wrapper bg-[#ffe7eb]">
                            <img src="/images/project3.png" alt="YC Directory" />
                        </div>
                        <h2>YC Directory- A startup Showcase</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
export default ShowcaseSection;