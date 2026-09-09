import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { leadership } from "../constants";
import TitleHeader from "../components/TitleHeader";
import HoverGlowCard from "../components/HoverGlowCard";

gsap.registerPlugin(ScrollTrigger);

const Leadership = () => {
    useGSAP(() => {
        gsap.utils.toArray(".leadership-card").forEach((card, index) => {
            gsap.fromTo(
                card,
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: 0.08 * (index % 3),
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        toggleActions: "play none none reverse",
                    },
                },
            );
        });
    }, []);

    return (
        <section
            id="leadership"
            className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
        >
            <div className="w-full h-full md:px-20 px-5">
                <TitleHeader
                    title="Leadership & Community"
                    sub="🤝 Beyond the Code"
                />
                <div className="grid-3-cols mt-16">
                    {leadership.map((role) => (
                        <HoverGlowCard
                            key={`${role.org}-${role.title}`}
                            className="leadership-card rounded-xl p-8 flex flex-col gap-3"
                        >
                            <h3 className="text-white text-xl font-semibold">{role.title}</h3>
                            <p className="text-[#839CB5]">{role.org}</p>
                            <p className="text-white-50 text-sm">{role.date}</p>
                            <p className="text-white-50 text-lg">{role.description}</p>
                        </HoverGlowCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Leadership;
