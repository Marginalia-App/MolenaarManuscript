import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import Footnote from "@/components/features/Footnote";

const PORTRAIT =
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=900&h=1100&fit=crop&sat=-60";

export default function About() {
  return (
    <div className="container py-20">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,360px)_1fr] lg:items-start">
        <div className="lg:sticky lg:top-24">
          <div className="overflow-hidden rounded-sm border border-ink/20 shadow-page">
            <img
              src={PORTRAIT}
              alt="A dim portrait of the author beside a candle"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <p className="mt-4 text-center font-type text-xs uppercase tracking-widest text-ink-faint">
            J.V. Molenaar · photographed by candlelight, unwillingly
          </p>
        </div>

        <div className="max-w-2xl">
          <p className="font-type text-xs uppercase tracking-[0.35em] text-oxblood">
            The Author
          </p>
          <h1 className="mt-4 font-display text-4xl font-black text-ink sm:text-5xl">
            I write the books I was afraid to find on the shelf.
          </h1>

          <div className="mt-8 space-y-6 text-lg leading-loose text-ink-soft">
            <p className="drop-cap">
              I began writing in the margins of other people's novels because my
              own paper frightened me. Somewhere between the underlinings and
              the arguments I had with dead authors, a voice formed that was not
              quite mine and not quite theirs.
              <Footnote number={1}>
                It has since learned to write without me. This is a problem I am
                choosing to describe as a career.
              </Footnote>
            </p>
            <p>
              My novels are experiments in unease: houses with impossible
              arithmetic, wallpaper that keeps a calendar, footnotes that outlive
              the story above them. If you have read Danielewski, Hall, or
              Gilman and wanted the walls to lean a little closer, we will get
              along.
            </p>
            <p>
              I live in a narrow house I try not to measure, and I answer every
              note left in the margins of this site — eventually, and in the
              order the house prefers.
            </p>
          </div>

          <div className="rule-ornament my-10" />

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:contact@onspace.ai"
              className="inline-flex items-center gap-2 rounded-sm bg-ink px-6 py-3 font-type text-sm uppercase tracking-widest text-paper transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-110"
            >
              <Mail className="h-4 w-4" /> Write a letter
            </a>
            <Link
              to="/marginalia"
              className="inline-block rounded-sm border border-ink/30 px-6 py-3 font-type text-sm uppercase tracking-widest text-ink transition-colors duration-200 hover:bg-paper-dark"
            >
              Or leave it in the margins
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
