import { useState } from "react";
import { Feather } from "lucide-react";
import { useMarginalia } from "@/hooks/useMarginalia";
import MarginNoteCard from "@/components/features/MarginNoteCard";
import WallpaperVeil from "@/components/features/WallpaperVeil";

export default function Marginalia() {
  const { notes, addNote } = useMarginalia();
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim().length < 3) {
      setError("The margin is narrow, but it needs at least a few words.");
      return;
    }
    setError("");
    addNote(name, text);
    setName("");
    setText("");
    setConfirmed(true);
    window.setTimeout(() => setConfirmed(false), 4000);
  };

  return (
    <div className="relative py-16">
      <WallpaperVeil fixed={false} opacity={0.12} />
      <div className="container relative">
        <header className="mx-auto max-w-2xl text-center">
          <p className="font-type text-xs uppercase tracking-[0.35em] text-oxblood">
            Marginalia
          </p>
          <h1 className="mt-4 font-display text-4xl font-black text-ink sm:text-5xl">
            The wall where readers write back
          </h1>
          <p className="mt-5 font-serif text-lg italic text-ink-soft">
            Pin a note to the plaster. It will hang here for the next reader who
            wanders in, and the author reads every one.
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-12 max-w-xl rounded-sm border border-ink/20 bg-paper/80 p-6 shadow-page fibered sm:p-8"
        >
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-2 block font-type text-xs uppercase tracking-widest text-ink-soft"
            >
              Signed (optional)
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="A reader on Reinier Street"
              className="w-full rounded-sm border border-ink/25 bg-paper px-4 py-3 font-serif text-ink outline-none transition-colors focus:border-oxblood"
            />
          </div>

          <div>
            <label
              htmlFor="note"
              className="mb-2 block font-type text-xs uppercase tracking-widest text-ink-soft"
            >
              Your note in the margin
            </label>
            <textarea
              id="note"
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={4}
              placeholder="Write what the book would not let you keep to yourself…"
              className="w-full resize-none rounded-sm border border-ink/25 bg-paper px-4 py-3 font-type text-ink outline-none transition-colors focus:border-oxblood"
            />
          </div>

          {error && (
            <p className="mt-3 flex items-center gap-2 font-type text-sm text-oxblood">
              <Feather className="h-4 w-4" /> {error}
            </p>
          )}
          {confirmed && (
            <p className="mt-3 font-type text-sm text-ink-soft">
              Your note has been pinned to the margin. Thank you for reading back.
            </p>
          )}

          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-sm bg-oxblood px-7 py-3 font-type text-sm uppercase tracking-widest text-paper transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-110"
          >
            <Feather className="h-4 w-4" /> Pin to the wall
          </button>
        </form>

        <div className="rule-ornament my-16" />

        <p className="mb-8 text-center font-type text-xs uppercase tracking-[0.3em] text-ink-faint">
          {notes.length} note{notes.length === 1 ? "" : "s"} left in the margin
        </p>

        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {notes.map((note) => (
            <MarginNoteCard key={note.id} note={note} />
          ))}
        </div>
      </div>
    </div>
  );
}
