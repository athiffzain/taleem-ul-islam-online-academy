export default function KhatamStar({
  className = "",
  strokeWidth = 1.2,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  // A traditional 8-point khatam star built from two overlapping squares.
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      aria-hidden="true"
    >
      <rect x="15" y="15" width="70" height="70" transform="rotate(0 50 50)" />
      <rect x="15" y="15" width="70" height="70" transform="rotate(45 50 50)" />
      <circle cx="50" cy="50" r="46" strokeWidth={strokeWidth * 0.6} opacity="0.5" />
    </svg>
  );
}
