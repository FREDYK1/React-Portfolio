import { heroRotatingWords } from './../constants/index';
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
                    <div className="hero-text md:text-[76px] text-[36px]">
                        <h1 className="h-[58px] md:h-[100px]">
                            <span className="slide h-[58px] md:h-[100px]">
                                <span className="wrapper">
                                    {heroRotatingWords.map((word) => (
                                        <span key={word.text} className="flex items-center md:gap-4 gap-2 pb-2">
                                            <img src={word.imgPath} alt="" className="size-9 md:size-14 p-2 rounded-full bg-white-50 object-contain" />
                                            <span>{word.text}</span>
                                        </span>
                                    ))}
                                </span>
                            </span>
                        </h1>
                        <h1>Secure Systems</h1>
                    </div>
                    <p>
                        BSc Computer Science (UG) &middot; AWS Certified Cloud Practitioner &middot; Google Cybersecurity Certified
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