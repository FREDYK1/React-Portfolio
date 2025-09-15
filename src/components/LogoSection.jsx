import { logos } from "../constants/index.js"

const LogoSection = () => {
    // Calculate how many times to repeat the logos to fill the screen (e.g., 10 times for a wide row)
    const repeatCount = 10;
    const repeatedLogos = Array.from({ length: repeatCount })
        .flatMap(() => logos);

    const LogoIcon = ({ icon, idx }) => {
        return (
            <div
                className="flex-none flex-center marquee-item"
                key={icon.imgPath + idx}
                style={{
                    width: '80px',
                    height: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#fff', // white background for contrast
                    borderRadius: '16px', // rounded corners
                    padding: '8px', // inner padding
                    boxSizing: 'border-box',
                }}
            >
                <img
                    src={icon.imgPath}
                    alt={icon.alt}
                    style={{ width: '64px', height: '64px', objectFit: 'contain', display: 'block' }}
                />
            </div>
        );
    }

    return (
        <div className="md:my-20 my-10 relative">
            <div className="gradient-edge"/>
            <div className="gradient-edge"/>

            <div className="marquee h-52">
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