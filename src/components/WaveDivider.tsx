import { useScrollY } from "@/hooks/use-scroll-y";

type Props = {
  /** Tailwind text-* color class of the section BELOW the wave (the wave fill). */
  fillClassName: string;
  flip?: boolean;
  className?: string;
  /** Horizontal ripple speed (px of scroll -> % of one wave tile). */
  rippleSpeed?: number;
  /** Vertical lag: how much slower the wave scrolls than the page. */
  parallax?: number;
};

const WAVE_PATH =
  "M0 18c120 14 240 21 360 15s240-26 360-27 240 18 360 24 240 1 360-9v27H0Z";

function Wave({ fillClassName }: { fillClassName: string }) {
  return (
    <svg
      viewBox="0 0 1440 48"
      preserveAspectRatio="none"
      className={`block h-8 w-1/2 shrink-0 sm:h-12 ${fillClassName}`}
    >
      <path fill="currentColor" d={WAVE_PATH} />
    </svg>
  );
}

/** A barely-there wave that ripples horizontally and lags vertically on scroll. */
export function WaveDivider({
  fillClassName,
  flip = false,
  className = "",
  rippleSpeed = 0.04,
  parallax = 0.08,
}: Props) {
  const scrollY = useScrollY();
  const shift = ((scrollY * rippleSpeed) % 50) - 50;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none -mt-px w-full overflow-hidden leading-none ${
        flip ? "rotate-180" : ""
      } ${className}`}
      style={{
        transform: `translate3d(0, ${scrollY * parallax}px, 0)`,
        willChange: "transform",
      }}
    >
      <div
        className="flex w-[200%]"
        style={{ transform: `translate3d(${shift}%, 0, 0)`, willChange: "transform" }}
      >
        <Wave fillClassName={fillClassName} />
        <Wave fillClassName={fillClassName} />
      </div>
    </div>
  );
}
