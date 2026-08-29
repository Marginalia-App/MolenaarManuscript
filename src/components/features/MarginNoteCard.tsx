import type { MarginNote } from "@/types";

interface MarginNoteCardProps {
  note: MarginNote;
}

function timeAgo(ts: number) {
  const diff = Date.now() - ts;
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins} min ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs} hr ago`;
  const days = Math.floor(hrs / 24);
  return `${days} day${days > 1 ? "s" : ""} ago`;
}

export default function MarginNoteCard({ note }: MarginNoteCardProps) {
  return (
    <figure
      className="relative break-inside-avoid rounded-sm border border-ink/15 bg-paper/80 p-5 shadow-page transition-transform duration-300 hover:rotate-0 fibered"
      style={{ transform: `rotate(${note.rotation}deg)` }}
    >
      <span className="absolute -top-2 left-5 h-3 w-3 rounded-full bg-oxblood shadow" />
      <blockquote className="font-type text-[0.95rem] leading-relaxed text-ink">
        {note.text}
      </blockquote>
      <figcaption className="mt-4 flex items-center justify-between border-t border-ink/10 pt-3 text-xs">
        <span className="font-display italic text-ink-soft">— {note.name}</span>
        <span className="text-ink-faint">{timeAgo(note.createdAt)}</span>
      </figcaption>
    </figure>
  );
}
