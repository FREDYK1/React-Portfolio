import Button from './../components/button';
import HeroExperience from './../components/HeroModels/HeroExperience';
import AnimatedCounter from './../components/AnimatedCounter';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react"


const Hero = () => {
    useGSAP(() => {
        gsap.fromTo(".hero-text h1", { y: 50, opacity: 0 }, { y: 0, opacity: 1,stagger: 0.2, duration: 1, ease: "power2.inOut" });
    },
    );

  return (
    <section id="hero" className="relative overflow-hidden">
        <div className="absolute top-0 left-0 z-10">
            <img src="/images/bg.png" alt="" />
        </div>
        
        <div className="hero-layout">
            {/*LEFT: HERO CONTENT */}
            <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                <div className="flex flex-col gap-7">
                    <div className="hero-text">
                        <h1>Software engineer</h1>
                        <h1>moving into security operations.</h1>
                    </div>
                    <p>
                        AWS Certified Cloud Practitioner &middot; Google Cybersecurity Certificate &middot; BSc Computer Science, University of Ghana
                    </p>
                    <Button
                    className="md:w-80 md:h-16 w-60 h-12"
                    id="button"
                    text="See My Work"
                    />
                </div>
            </header>
            {/*RIGHT: 3D MODEL*/}
            <figure>
                <div className="hero-3d-layout">
                    <HeroExperience/>
                </div>
            </figure>
        </div>
        <AnimatedCounter />
    </section>
  )
}

export default Hero