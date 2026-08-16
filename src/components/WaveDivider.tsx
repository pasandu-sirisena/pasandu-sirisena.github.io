type Props = {
  /** Tailwind text-* color class of the section BELOW the wave (the wave fill). */
  fillClassName: string;
  flip?: boolean;
  className?: string;
};

/** A barely-there wave that separates two sections. */
export function WaveDivider({ fillClassName, flip = false, className = "" }: Props) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none -mt-px w-full leading-none ${flip ? "rotate-180" : ""} ${className}`}
    >
      <svg
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        className={`block h-8 w-full sm:h-12 ${fillClassName}`}
      >
        <path
          fill="currentColor"
          d="M0 18c120 14 240 21 360 15s240-26 360-27 240 18 360 24 240 1 360-9v27H0Z"
        />
      </svg>
    </div>
  );
}
