import { navLinks } from '../constants/index.js'
import { useEffect, useState } from 'react';


const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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
                    { navLinks.map(({name, link}) => (
                        <li key={name} className="group">
                            <a href={link}>
                                <span>{name}</span>
                                <span className="underline"/>
                            </a>
                        </li>
                    ))}
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
                    {navLinks.map(({ name, link }) => (
                        <li key={name}>
                            <a
                                href={link}
                                className="text-white-50 hover:text-white transition-colors duration-300 text-lg"
                                onClick={() => setMenuOpen(false)}
                            >
                                {name}
                            </a>
                        </li>
                    ))}
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
