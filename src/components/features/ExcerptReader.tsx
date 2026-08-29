import type { Book } from "@/types";
import Footnote from "@/components/features/Footnote";
import { cn } from "@/lib/utils";

interface ExcerptReaderProps {
  book: Book;
}

export default function ExcerptReader({ book }: ExcerptReaderProps) {
  const noteText = (id?: number) =>
    book.footnotes.find((f) => f.id === id)?.text ?? "";

  return (
    <article className="paper-surface fibered relative mx-auto max-w-2xl rounded-sm border border-ink/15 px-6 py-10 sm:px-12 sm:py-14">
      <p className="mb-8 text-center font-type text-xs uppercase tracking-[0.35em] text-ink-faint">
        An excerpt · handle with care
      </p>

      {book.passages.map((passage, i) => (
        <p
          key={i}
          className={cn(
            "mb-6 text-lg leading-loose text-ink",
            i === 0 && "drop-cap"
          )}
        >
          {passage.text}{" "}
          {passage.noteId && (
            <Footnote number={passage.noteId}>
              {noteText(passage.noteId)}
            </Footnote>
          )}
        </p>
      ))}

      <div className="rule-ornament my-10" />

      <div className="space-y-4">
        {book.footnotes.map((f) => (
          <p key={f.id} className="font-type text-sm leading-relaxed text-ink-soft">
            <span className="mr-2 text-oxblood">[{f.id}]</span>
            {f.text}
          </p>
        ))}
      </div>
    </article>
  );
}
