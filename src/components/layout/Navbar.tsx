import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const LINKS = [
  { to: "/", label: "The Manuscript" },
  { to: "/library", label: "The Shelf" },
  { to: "/marginalia", label: "Marginalia" },
  { to: "/about", label: "The Author" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/20 bg-paper/85 backdrop-blur">
      <nav className="container flex h-16 items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-ink font-display text-lg font-bold text-paper">
            M
          </span>
          <span className="font-display text-lg font-bold tracking-wide text-ink">
            J.V. Molenaar
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "link-underline font-type text-xs uppercase tracking-[0.2em] transition-colors",
                    isActive ? "text-oxblood" : "text-ink-soft hover:text-ink"
                  )
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <ul className="container flex flex-col gap-1 pb-4 md:hidden">
          {LINKS.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "block rounded-sm px-3 py-3 font-type text-sm uppercase tracking-widest",
                    isActive
                      ? "bg-ink text-paper"
                      : "text-ink-soft hover:bg-paper-dark"
                  )
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
