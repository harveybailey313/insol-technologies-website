export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden className={className}>
      <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
