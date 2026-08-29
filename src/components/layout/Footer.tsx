import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-ink/20 bg-paper/70">
      <div className="container grid gap-10 py-14 sm:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-bold text-ink">J.V. Molenaar</p>
          <p className="mt-3 max-w-xs font-serif italic text-ink-soft">
            Novels for readers who suspect the book is reading back.
          </p>
        </div>

        <div>
          <p className="font-type text-xs uppercase tracking-[0.3em] text-ink-faint">
            Navigate the House
          </p>
          <ul className="mt-4 space-y-2 text-ink-soft">
            <li><Link className="link-underline" to="/library">The Shelf</Link></li>
            <li><Link className="link-underline" to="/marginalia">Marginalia</Link></li>
            <li><Link className="link-underline" to="/about">The Author</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-type text-xs uppercase tracking-[0.3em] text-ink-faint">
            Correspondence
          </p>
          <p className="mt-4 text-ink-soft">
            Letters may be left in the{" "}
            <Link to="/marginalia" className="text-oxblood link-underline">
              margins
            </Link>
            . They are read on nights that permit it.
          </p>
        </div>
      </div>

      <p className="border-t border-ink/10 py-6 text-center font-type text-xs uppercase tracking-widest text-ink-faint">
        © {new Date().getFullYear()} J.V. Molenaar · This page may have rearranged itself
      </p>
    </footer>
  );
}
