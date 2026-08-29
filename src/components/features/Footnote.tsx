import type { ReactNode } from "react";

interface FootnoteProps {
  number: number;
  children: ReactNode;
}

/**
 * A House of Leaves style footnote: an oxblood marker that reveals its
 * annotation on hover / focus, spoken in the typewriter voice of the margin.
 */
export default function Footnote({ number, children }: FootnoteProps) {
  return (
    <span className="group relative inline-block">
      <button
        type="button"
        aria-label={`Footnote ${number}`}
        className="footnote-ref rounded-sm px-0.5 focus:outline-none focus:ring-2 focus:ring-oxblood/50"
      >
        [{number}]
      </button>
      <span
        role="note"
        className="pointer-events-none absolute bottom-full left-1/2 z-40 mb-2 w-64 -translate-x-1/2 translate-y-1 rounded-sm border border-ink/30 bg-paper px-4 py-3 text-left text-sm leading-relaxed text-ink-soft opacity-0 shadow-page transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 font-type"
      >
        <span className="mb-1 block text-xs uppercase tracking-widest text-oxblood">
          note {number}
        </span>
        {children}
      </span>
    </span>
  );
}
