import { useCallback, useEffect, useState } from "react";
import type { MarginNote } from "@/types";

const KEY = "jvm_marginalia";

const SEED: MarginNote[] = [
  {
    id: "seed-1",
    name: "A reader on Reinier Street",
    text: "I measured my own hallway after finishing chapter nine. It was fine. It is fine. I keep checking.",
    createdAt: Date.now() - 1000 * 60 * 60 * 48,
    rotation: -2.5,
  },
  {
    id: "seed-2",
    name: "M.",
    text: "The yellow ink passage. I read it once, as instructed. I have not stopped thinking about the wall being polite.",
    createdAt: Date.now() - 1000 * 60 * 60 * 12,
    rotation: 1.8,
  },
  {
    id: "seed-3",
    name: "Vela",
    text: "Found your books through a note somebody left inside a library copy. The margin sent me here. Hello.",
    createdAt: Date.now() - 1000 * 60 * 30,
    rotation: -1.2,
  },
];

function load(): MarginNote[] {
  const raw = localStorage.getItem(KEY);
  if (!raw) {
    localStorage.setItem(KEY, JSON.stringify(SEED));
    return SEED;
  }
  return JSON.parse(raw) as MarginNote[];
}

export function useMarginalia() {
  const [notes, setNotes] = useState<MarginNote[]>([]);

  useEffect(() => {
    setNotes(load());
  }, []);

  const addNote = useCallback((name: string, text: string) => {
    const note: MarginNote = {
      id: `note-${Date.now()}`,
      name: name.trim() || "Anonymous marginal",
      text: text.trim(),
      createdAt: Date.now(),
      rotation: Math.random() * 6 - 3,
    };
    setNotes((prev) => {
      const next = [note, ...prev];
      localStorage.setItem(KEY, JSON.stringify(next));
      return next;
    });
    return note;
  }, []);

  return { notes, addNote };
}
