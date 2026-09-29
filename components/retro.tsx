// Decorative 70s poster pieces. All purely visual, so hidden from screen readers.

// Hex rather than CSS vars: SVG presentation attributes don't take var() everywhere.
const c = {
  paper: "#F4EAD5",
  ink: "#2A1A11",
  tang: "#E5622A",
  mustard: "#EFAA31",
  rust: "#A93A14",
  cocoa: "#6B4226",
};

// Gaps cut through the lower half of the sun, widening toward the horizon.
const sunCuts = [
  { y: 226, h: 5 },
  { y: 254, h: 8 },
  { y: 283, h: 11 },
  { y: 313, h: 14 },
  { y: 344, h: 18 },
];

export function Sun({ id, className = "" }: { id: string; className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 420 420" className={className}>
      <defs>
        <linearGradient id={`${id}-fill`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={c.mustard} />
          <stop offset="0.55" stopColor={c.tang} />
          <stop offset="1" stopColor={c.rust} />
        </linearGradient>
        <mask id={`${id}-cuts`}>
          <rect width="420" height="420" fill="#fff" />
          {sunCuts.map((cut) => (
            <rect key={cut.y} y={cut.y} width="420" height={cut.h} fill="#000" />
          ))}
        </mask>
      </defs>
      {/* Off-register outline, like a slipped second print pass */}
      <circle
        cx="222"
        cy="222"
        r="190"
        fill="none"
        stroke={c.ink}
        strokeWidth="3"
        mask={`url(#${id}-cuts)`}
      />
      <circle cx="206" cy="206" r="190" fill={`url(#${id}-fill)`} mask={`url(#${id}-cuts)`} />
    </svg>
  );
}

export function SpinBadge({ text, className = "" }: { text: string; className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 200 200" className={`spin-slow ${className}`}>
      <defs>
        <path id="badge-ring" d="M100,100 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0" />
      </defs>
      <circle cx="100" cy="100" r="97" fill={c.ink} />
      <circle cx="100" cy="100" r="92" fill="none" stroke={c.mustard} strokeWidth="1.5" />
      <text
        fill={c.paper}
        style={{ fontFamily: "var(--font-mono), monospace" }}
        fontSize="15"
        fontWeight="500"
        letterSpacing="2"
      >
        <textPath href="#badge-ring" textLength="436" lengthAdjust="spacing">
          {text}
        </textPath>
      </text>
      <Sparkle x={70} y={70} size={60} fill={c.mustard} />
    </svg>
  );
}

// Four-point sparkle; usable standalone or nested inside another SVG.
export function Sparkle({
  x = 0,
  y = 0,
  size = 24,
  fill = c.ink,
  className,
}: {
  x?: number;
  y?: number;
  size?: number;
  fill?: string;
  className?: string;
}) {
  return (
    <svg aria-hidden x={x} y={y} width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path d="M12 0C13 8 16 11 24 12 16 13 13 16 12 24 11 16 8 13 0 12 8 11 11 8 12 0Z" fill={fill} />
    </svg>
  );
}

export function Stripes({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`stripes ${className}`}>
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}

const railColors = [c.mustard, c.tang, c.rust, c.cocoa];

export function Rail() {
  return (
    <div aria-hidden className="rail">
      {railColors.map((color, i) => (
        <span key={color} style={{ "--i": i, "--c": color } as React.CSSProperties} />
      ))}
    </div>
  );
}
