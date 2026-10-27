import { logos } from "../constants/index.js"

const LogoSection = () => {
    // Calculate how many times to repeat the logos to fill the screen (e.g., 10 times for a wide row)
    const repeatCount = 10;
    const repeatedLogos = Array.from({ length: repeatCount })
        .flatMap(() => logos);

    const logoBoxStyle = {
        width: '80px',
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fff', // white background for contrast
        borderRadius: '16px', // rounded corners
        padding: '8px', // inner padding
        boxSizing: 'border-box',
    };

    const LogoIcon = ({ icon, idx }) => {
        const img = (
            <img
                src={icon.imgPath}
                alt={icon.alt}
                style={{ width: '64px', height: '64px', objectFit: 'contain', display: 'block' }}
            />
        );

        return icon.url ? (
            <a
                href={icon.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-none flex-center marquee-item"
                key={icon.imgPath + idx}
                style={logoBoxStyle}
            >
                {img}
            </a>
        ) : (
            <div
                className="flex-none flex-center marquee-item"
                key={icon.imgPath + idx}
                style={logoBoxStyle}
            >
                {img}
            </div>
        );
    }

    return (
        <div className="md:my-20 my-10 relative">
            <nav className="sr-only" aria-label="Employers">
                <ul>
                    {logos.map((logo) => (
                        <li key={logo.alt}>
                            {logo.url ? (
                                <a href={logo.url} target="_blank" rel="noopener noreferrer">{logo.alt}</a>
                            ) : (
                                logo.alt
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="gradient-edge"/>
            <div className="gradient-edge"/>

            <div className="marquee h-52" aria-hidden="true">
                <div className="marquee-box md:gap-12 gap-5">
                    {repeatedLogos.map((icon, idx) => (
                        <LogoIcon icon={icon} idx={idx} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LogoSection