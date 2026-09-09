import React from 'react'
import TitleHeader from './../components/TitleHeader';
import { techStackIcons, skillGroups } from '../constants/index.js'
import TechIcon from './../components/Models/TechLogos/TechIcon';
import HoverGlowCard from './../components/HoverGlowCard';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {

    useGSAP(() => {
        gsap.fromTo('.tech-card', {y: 50, opacity: 0}, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.inOut',
            stagger: 0.2,
            scrollTrigger:{
                trigger: '#skills',
                start: 'top center',
            }
        })
    })

  return (
    <div id="skills" className="flex-center section-padding">
        <div className="w-full h-full md:px-10 px-5">
            <TitleHeader
                title="Skills & Tech Stack"
                sub="🧰 What I Work With"
            />
        <div className="tech-grid">
            {techStackIcons.map((icon) => (
                <div key={icon.name} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
                    <div className="tech-card-animated-bg"/>
                    <div className="tech-card-content">
                        <div className="tech-icon-wrapper">
                            {icon.logoImg ? (
                                <div className="w-32 h-32 md:w-36 md:h-36 transition-transform duration-300 group-hover:scale-110">
                                    <img src={icon.logoImg} alt={`${icon.name} logo`} className="tech-flat-logo w-full h-full object-contain" />
                                </div>
                            ) : (
                                <TechIcon model={icon} />
                            )}
                        </div>
                        <div className="padding-x w-full">
                            <p>{icon.name}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className="grid-3-cols mt-16">
            {skillGroups.map((group) => (
                <HoverGlowCard key={group.category} className="rounded-xl p-8 flex flex-col gap-4">
                    <h3 className="text-white text-xl font-semibold">{group.category}</h3>
                    <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                            <span key={skill} className="hero-badge">{skill}</span>
                        ))}
                    </div>
                </HoverGlowCard>
            ))}
        </div>
        </div>
    </div>
  )
}

export default TechStack