export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20 25C20 22.2386 22.2386 20 25 20H75C77.7614 20 80 22.2386 80 25V50C80 66.5685 66.5685 80 50 80H20V25Z"
        fill="#FFB347"
      />
      <path
        d="M50 50C50 41.7157 56.7157 35 65 35H80V50C80 66.5685 66.5685 80 50 80V50Z"
        fill="#FFB347"
        fillOpacity="0.5"
      />
    </svg>
  );
}
