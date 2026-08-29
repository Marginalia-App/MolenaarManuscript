import { Link } from "react-router-dom";
import heroWallpaper from "@/assets/hero-wallpaper.jpg";
import { BOOKS } from "@/constants/books";
import BookCard from "@/components/features/BookCard";
import Footnote from "@/components/features/Footnote";
import WallpaperVeil from "@/components/features/WallpaperVeil";

export default function Home() {
  const featured = BOOKS[0];

  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[86vh] items-center overflow-hidden">
        <img
          src={heroWallpaper}
          alt="A dim room papered in creeping yellow"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/45 to-background" />
        <div className="absolute inset-0 shadow-inset" />

        <div className="container relative z-10 max-w-3xl py-24">
          <p className="animate-fade-up font-type text-xs uppercase tracking-[0.4em] text-wallpaper">
            The collected hauntings of
          </p>
          <h1 className="mt-4 animate-fade-up font-display text-5xl font-black leading-[0.95] text-paper drop-shadow-lg sm:text-7xl">
            J.V. Molenaar
          </h1>
          <p className="mt-6 max-w-xl animate-fade-up font-serif text-xl italic leading-relaxed text-paper/90">
            Welcome to a website that behaves like a manuscript — one that turns
            its own pages while you sleep.
            <Footnote number={0}>
              You are already inside it. The margins have noticed you arrive.
            </Footnote>
          </p>
          <div className="mt-10 flex animate-fade-up flex-wrap gap-4">
            <Link
              to="/library"
              className="rounded-sm bg-oxblood px-7 py-3 font-type text-sm uppercase tracking-widest text-paper transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-110"
            >
              Enter the Shelf
            </Link>
            <Link
              to="/marginalia"
              className="rounded-sm border border-paper/60 px-7 py-3 font-type text-sm uppercase tracking-widest text-paper transition-colors duration-200 hover:bg-paper/10"
            >
              Leave a Marginal Note
            </Link>
          </div>
        </div>
      </section>

      {/* Invitation / story preface */}
      <section className="relative py-24">
        <WallpaperVeil fixed={false} opacity={0.12} />
        <div className="container relative grid gap-12 lg:grid-cols-[1fr_minmax(0,340px)]">
          <div className="max-w-2xl">
            <p className="font-type text-xs uppercase tracking-[0.3em] text-oxblood">
              A note before you continue
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
              These are not books you read. They are rooms you are let into.
            </h2>
            <p className="drop-cap mt-8 text-lg leading-loose text-ink-soft">
              For twenty years I have written fiction that misbehaves — stories
              with footnotes that argue back, houses with an extra room, pages
              that keep a different record than the one you remember reading.
              This site is arranged the same way. Wander it slowly. Read the
              small print.
              <Footnote number={1}>
                The small print is where I keep the truest sentences. It is also
                where I keep the ones I could not defend in daylight.
              </Footnote>
            </p>
            <p className="mt-6 text-lg leading-loose text-ink-soft">
              When you are ready, the shelf is through the next door. And should
              you wish to answer the book — to write in its margins as strangers
              have written in mine — there is room for you here.
            </p>
          </div>

          <aside className="self-start rounded-sm border border-ink/20 bg-paper/70 p-6 shadow-page fibered">
            <p className="font-type text-xs uppercase tracking-[0.3em] text-ink-faint">
              House rules
            </p>
            <ul className="mt-4 space-y-4 font-serif text-ink-soft">
              <li>· Do not read the yellow ink twice.</li>
              <li>· Measure nothing you are not prepared to remeasure.</li>
              <li>· The margins are load-bearing. Write carefully.</li>
              <li>· If a room appears that was not here before, that is correct.</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* Featured book */}
      <section className="relative py-16">
        <div className="container">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="font-type text-xs uppercase tracking-[0.3em] text-oxblood">
                Newly in print
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
                The featured haunting
              </h2>
            </div>
            <Link
              to="/library"
              className="hidden link-underline font-type text-sm uppercase tracking-widest text-oxblood sm:inline"
            >
              All titles →
            </Link>
          </div>
          <BookCard book={featured} featured />
        </div>
      </section>

      {/* Marginalia CTA */}
      <section className="relative py-20">
        <WallpaperVeil fixed={false} opacity={0.1} />
        <div className="container relative">
          <div className="mx-auto max-w-2xl rounded-sm border border-ink/20 bg-ink px-8 py-12 text-center shadow-page">
            <h2 className="font-display text-3xl font-bold text-paper">
              Write in the margins
            </h2>
            <p className="mx-auto mt-4 max-w-md font-serif text-lg italic text-paper/80">
              Every reader who passes through leaves a trace. Add yours to the
              wall and read what others could not keep to themselves.
            </p>
            <Link
              to="/marginalia"
              className="mt-8 inline-block rounded-sm bg-oxblood px-8 py-3 font-type text-sm uppercase tracking-widest text-paper transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-110"
            >
              Open the margins
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
