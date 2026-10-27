import { useRef } from "react";

// Generic version of the mouse-tracking conic-gradient glow border used on
// the experience timeline (see GlowCard.jsx), for reuse anywhere a plain
// card-border box wants the same hover treatment. Deliberately independent
// of GlowCard so the experience timeline's markup/behaviour stays untouched.
const HoverGlowCard = ({ children, className = "", as, ...rest }) => {
  const Tag = as || "div";
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", angle + 60);
  };

  return (
    <Tag
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`card card-border overflow-hidden ${className}`}
      {...rest}
    >
      <div className="glow" />
      {children}
    </Tag>
  );
};

export default HoverGlowCard;
