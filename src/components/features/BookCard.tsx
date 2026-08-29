import { Link } from "react-router-dom";
import type { Book } from "@/types";
import { cn } from "@/lib/utils";

interface BookCardProps {
  book: Book;
  featured?: boolean;
}

export default function BookCard({ book, featured = false }: BookCardProps) {
  return (
    <Link
      to={`/library/${book.slug}`}
      className={cn(
        "group grid gap-6 rounded-sm border border-ink/15 bg-paper/70 p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-page fibered",
        featured
          ? "sm:grid-cols-[minmax(0,220px)_1fr] sm:items-center sm:p-8"
          : "grid-cols-1"
      )}
    >
      <div className="relative overflow-hidden rounded-sm shadow-page">
        <img
          src={book.cover}
          alt={`Cover of ${book.title}`}
          className="aspect-[2/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-0 top-3 bg-oxblood px-2 py-0.5 font-type text-[0.65rem] uppercase tracking-widest text-paper">
          {book.status}
        </span>
      </div>

      <div>
        <p className="font-type text-xs uppercase tracking-[0.3em] text-ink-faint">
          {book.year} · {book.subtitle}
        </p>
        <h3
          className={cn(
            "mt-2 font-display font-bold text-ink",
            featured ? "text-3xl sm:text-4xl" : "text-2xl"
          )}
        >
          {book.title}
        </h3>
        <p className="mt-3 font-serif italic text-ink-soft">{book.tagline}</p>
        {featured && (
          <p className="mt-4 text-ink-soft">{book.synopsis[0]}</p>
        )}
        <span className="mt-5 inline-block link-underline font-type text-sm uppercase tracking-widest text-oxblood">
          Open the book →
        </span>
      </div>
    </Link>
  );
}
