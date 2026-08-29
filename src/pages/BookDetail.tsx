import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, BookOpen, Check } from "lucide-react";
import { getBook } from "@/constants/books";
import ExcerptReader from "@/components/features/ExcerptReader";
import NotFound from "@/pages/NotFound";

export default function BookDetail() {
  const { slug } = useParams();
  const book = slug ? getBook(slug) : undefined;
  const [reserved, setReserved] = useState(false);

  if (!book) return <NotFound />;

  return (
    <div className="container py-16">
      <Link
        to="/library"
        className="inline-flex items-center gap-2 font-type text-xs uppercase tracking-widest text-ink-soft hover:text-oxblood"
      >
        <ArrowLeft className="h-4 w-4" /> Back to the shelf
      </Link>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,300px)_1fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="relative overflow-hidden rounded-sm shadow-page">
            <img
              src={book.cover}
              alt={`Cover of ${book.title}`}
              className="aspect-[2/3] w-full object-cover"
            />
            <span className="absolute left-0 top-4 bg-oxblood px-3 py-1 font-type text-[0.65rem] uppercase tracking-widest text-paper">
              {book.status}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setReserved(true)}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-sm bg-ink px-6 py-3 font-type text-sm uppercase tracking-widest text-paper transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-110"
          >
            {reserved ? (
              <>
                <Check className="h-4 w-4" /> A copy is set aside
              </>
            ) : (
              <>
                <BookOpen className="h-4 w-4" /> Reserve a copy
              </>
            )}
          </button>
          {reserved && (
            <p className="mt-3 text-center font-type text-xs text-ink-faint">
              We will find you. Books usually do.
            </p>
          )}
        </div>

        <div>
          <p className="font-type text-xs uppercase tracking-[0.3em] text-ink-faint">
            {book.year} · {book.subtitle}
          </p>
          <h1 className="mt-3 font-display text-4xl font-black text-ink sm:text-5xl">
            {book.title}
          </h1>
          <p className="mt-4 font-serif text-xl italic text-oxblood">
            {book.tagline}
          </p>

          <div className="mt-8 space-y-5">
            {book.synopsis.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
          </div>

          <div className="rule-ornament my-12" />

          <ExcerptReader book={book} />

          <div className="mt-12 text-center">
            <Link
              to="/marginalia"
              className="inline-block rounded-sm border border-ink/30 px-7 py-3 font-type text-sm uppercase tracking-widest text-ink transition-colors duration-200 hover:bg-paper-dark"
            >
              Answer this book in the margins
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
