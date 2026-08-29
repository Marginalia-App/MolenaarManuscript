export interface Footnote {
  id: number;
  text: string;
}

export interface Passage {
  text: string;
  noteId?: number;
}

export interface Book {
  slug: string;
  title: string;
  subtitle: string;
  year: number;
  cover: string;
  tagline: string;
  status: "In Print" | "Restored Edition" | "Out of Print";
  buyUrl: string;
  synopsis: string[];
  passages: Passage[];
  footnotes: Footnote[];
}

export interface MarginNote {
  id: string;
  name: string;
  text: string;
  createdAt: number;
  rotation: number;
}
