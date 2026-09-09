import { useEffect, useState } from 'react';

// Thin fixed bar at the very top of the page showing how far the visitor
// has scrolled, in the site's existing accent gradient (see .gradient-line
// in index.css) so it reads as part of the same design language.
const ScrollProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let ticking = false;

        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0);
            ticking = false;
        };

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateProgress);
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        updateProgress();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 z-[110]" aria-hidden="true">
            <div
                className="h-full transition-[width] duration-150 ease-out"
                style={{
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, #62e0ff 0%, #52aeff 25%, #fd5c79 65%, #6d45ce 100%)',
                }}
            />
        </div>
    );
};

export default ScrollProgress;
