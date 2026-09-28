/**
 * Original generative line-field for InSol hero bands (purple → magenta → orange).
 * Deterministic (no randomness) so static export output is stable.
 */
export function HeroArt({ className = "" }: { className?: string }) {
  const lines = Array.from({ length: 34 }, (_, i) => {
    const t = i / 33;
    const y0 = 760 - t * 180;
    const c1x = 520 + Math.sin(t * Math.PI) * 160;
    const c1y = 620 - t * 520;
    const c2x = 860 - t * 160;
    const c2y = 120 + Math.cos(t * Math.PI * 1.4) * 140;
    const x3 = 1480;
    const y3 = -40 + t * 420;
    return {
      d: `M -40 ${y0.toFixed(1)} C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${x3} ${y3.toFixed(1)}`,
      w: 1.2 + Math.sin(t * Math.PI) * 2,
      o: 0.35 + Math.sin(t * Math.PI) * 0.6,
    };
  });

  return (
    <svg
      className={className}
      viewBox="0 0 1440 760"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      focusable="false"
    >
      <defs>
        <linearGradient id="insol-hero-stroke" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#772587" stopOpacity="0" />
          <stop offset="30%" stopColor="#a100ff" />
          <stop offset="62%" stopColor="#d76eeb" />
          <stop offset="100%" stopColor="#f26223" />
        </linearGradient>
        <radialGradient id="insol-hero-glow" cx="78%" cy="30%" r="55%">
          <stop offset="0%" stopColor="#a100ff" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#a100ff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="insol-hero-glow-2" cx="55%" cy="95%" r="50%">
          <stop offset="0%" stopColor="#d76eeb" stopOpacity="0.26" />
          <stop offset="100%" stopColor="#d76eeb" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1440" height="760" fill="url(#insol-hero-glow)" />
      <rect width="1440" height="760" fill="url(#insol-hero-glow-2)" />
      <g fill="none" stroke="url(#insol-hero-stroke)" strokeLinecap="round">
        {lines.map((l, i) => (
          <path key={i} d={l.d} strokeWidth={l.w} strokeOpacity={l.o} />
        ))}
      </g>
    </svg>
  );
}
