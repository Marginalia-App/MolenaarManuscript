import { Link } from "react-router-dom";
import WallpaperVeil from "@/components/features/WallpaperVeil";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[70vh] items-center justify-center overflow-hidden py-24">
      <WallpaperVeil fixed={false} opacity={0.18} />
      <div className="container relative max-w-xl text-center">
        <p className="font-type text-xs uppercase tracking-[0.4em] text-oxblood">
          Error, or perhaps intent
        </p>
        <h1 className="mt-6 font-display text-7xl font-black text-ink">404</h1>
        <p className="mt-6 font-serif text-xl italic text-ink-soft">
          This page has been unwritten, or has wandered into a room that is not
          currently on the plan. The house does this. It means nothing by it.
        </p>
        <Link
          to="/"
          className="mt-10 inline-block rounded-sm bg-oxblood px-7 py-3 font-type text-sm uppercase tracking-widest text-paper transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-110"
        >
          Return to the manuscript
        </Link>
      </div>
    </div>
  );
}
