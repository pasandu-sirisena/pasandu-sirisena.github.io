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

/** Seamless sine-like wave: starts and ends at the same height so tiles loop. */
const WAVE_PATH =
  "M0 30 q180 -40 360 0 t360 0 t360 0 t360 0 V60 H0 Z";

function Wave({ fillClassName }: { fillClassName: string }) {
  return (
    <svg
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      className={`block h-10 w-1/3 shrink-0 sm:h-14 ${fillClassName}`}
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
  const TILE = 100 / 3; // one tile as a % of the 300%-wide track
  const shift = -TILE - (((scrollY * rippleSpeed) % TILE) + TILE) % TILE;

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
        className="flex w-[300%]"
        style={{ transform: `translate3d(${shift}%, 0, 0)`, willChange: "transform" }}
      >
        <Wave fillClassName={fillClassName} />
        <Wave fillClassName={fillClassName} />
        <Wave fillClassName={fillClassName} />
      </div>
    </div>
  );
}
