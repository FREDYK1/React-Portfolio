import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { certifications, training } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const categoryOrder = ["Cloud", "Security", "Networking", "IT & Support"];

const Certifications = () => {
    useGSAP(() => {
        gsap.utils.toArray(".cert-card").forEach((card, index) => {
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

    const grouped = categoryOrder
        .map((category) => ({
            category,
            items: certifications.filter((cert) => cert.category === category),
        }))
        .filter((group) => group.items.length > 0);

    return (
        <section
            id="certifications"
            className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
        >
            <div className="w-full h-full md:px-20 px-5">
                <TitleHeader
                    title="Certifications & Continuous Learning"
                    sub="🎓 Credentials"
                />
                <div className="mt-16 flex flex-col gap-12">
                    {grouped.map(({ category, items }) => (
                        <div key={category}>
                            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-white-50">
                                {category}
                            </h3>
                            <div className="grid-3-cols">
                                {items.map((cert) => (
                                    <div
                                        key={cert.name}
                                        className="cert-card card-border rounded-xl p-6 flex items-center gap-4"
                                    >
                                        <img
                                            src={cert.badge}
                                            alt={`${cert.name} badge`}
                                            className="size-16 shrink-0"
                                        />
                                        <div className="flex flex-col gap-1">
                                            <h4 className="text-white font-semibold leading-snug">
                                                {cert.name}
                                            </h4>
                                            <p className="text-white-50 text-sm">{cert.issuer}</p>
                                            <p className="text-[#839CB5] text-sm">
                                                {cert.status === "in-progress" ? "In progress" : cert.date}
                                                {cert.detail && ` · ${cert.detail}`}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cert-card card-border rounded-xl p-8 mt-12 flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <h3 className="text-white text-2xl font-semibold">{training.title}</h3>
                        <p className="text-white-50">{training.provider} · {training.date}</p>
                    </div>
                    <ul className="list-disc ms-5 flex flex-col gap-3 text-white-50">
                        {training.points.map((point) => (
                            <li key={point} className="text-lg">{point}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
