import { BOOKS } from "@/constants/books";
import BookCard from "@/components/features/BookCard";

export default function Library() {
  const [featured, ...rest] = BOOKS;

  return (
    <div className="container py-20">
      <header className="mx-auto max-w-2xl text-center">
        <p className="font-type text-xs uppercase tracking-[0.35em] text-oxblood">
          The Shelf
        </p>
        <h1 className="mt-4 font-display text-4xl font-black text-ink sm:text-5xl">
          Every title is a door
        </h1>
        <p className="mt-5 font-serif text-lg italic text-ink-soft">
          Choose carefully. Some of these have been known to change spines when
          reshelved.
        </p>
      </header>

      <div className="rule-ornament my-14" />

      <div className="mb-10">
        <BookCard book={featured} featured />
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((book) => (
          <BookCard key={book.slug} book={book} />
        ))}
      </div>
    </div>
  );
}
