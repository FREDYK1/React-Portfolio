import { navLinks } from '../constants/index.js'
import { useEffect, useState } from 'react';


const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    // Highlights whichever nav link matches the section currently
    // crossing a thin band near the middle of the viewport.
    useEffect(() => {
        const sections = navLinks
            .map(({ link }) => document.getElementById(link.replace('#', '')))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, [])

    useEffect(() => {
        if (!menuOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setMenuOpen(false);
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [menuOpen]);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
        <div className="inner">
            <a className="logo" href="#hero">
                Frederick | Kankam
            </a>

            <nav className="desktop">
                <ul>
                    { navLinks.map(({name, link}) => {
                        const isActive = activeSection === link.replace('#', '');
                        return (
                            <li key={name} className="group">
                                <a href={link} aria-current={isActive ? 'page' : undefined}>
                                    <span className={isActive ? 'text-white' : ''}>{name}</span>
                                    <span className={`underline ${isActive ? 'w-full' : ''}`}/>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <button
                type="button"
                className="lg:hidden flex items-center justify-center size-10"
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-nav-menu"
                onClick={() => setMenuOpen((open) => !open)}
            >
                <img src="/images/menu.svg" alt="" className="size-6" />
            </button>

            <a href="#contact" className="contact-btn hidden lg:flex">
                <div className="inner">
                    <span>
                        Contact me
                    </span>
                </div>
            </a>
        </div>

        {menuOpen && (
            <nav id="mobile-nav-menu" className="lg:hidden bg-black-100 border-t border-black-50 mt-5">
                <ul className="flex flex-col padding-x-lg py-5 gap-5">
                    {navLinks.map(({ name, link }) => {
                        const isActive = activeSection === link.replace('#', '');
                        return (
                            <li key={name}>
                                <a
                                    href={link}
                                    aria-current={isActive ? 'page' : undefined}
                                    className={`transition-colors duration-300 text-lg ${isActive ? 'text-white' : 'text-white-50 hover:text-white'}`}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {name}
                                </a>
                            </li>
                        );
                    })}
                    <li>
                        <a
                            href="#contact"
                            className="text-white-50 hover:text-white transition-colors duration-300 text-lg"
                            onClick={() => setMenuOpen(false)}
                        >
                            Contact me
                        </a>
                    </li>
                </ul>
            </nav>
        )}
    </header>
  )
}

export default NavBar
