import type { Book } from "@/types";
import coverHouse from "@/assets/cover-house.jpg";
import coverYellow from "@/assets/cover-yellow.jpg";
import coverMarginalia from "@/assets/cover-marginalia.jpg";

export const BOOKS: Book[] = [
  {
    slug: "the-house-that-reads-itself",
    title: "The House That Reads Itself",
    subtitle: "A novel in unstable rooms",
    year: 2024,
    cover: coverHouse,
    tagline: "A novel with a floor plan that refuses to hold still.",
    status: "In Print",
    buyUrl: "#",
    synopsis: [
      "When archivist Edith Vane inherits a narrow house on Reinier Street, she finds the interior measures larger than the exterior by exactly one room. The room is never in the same place twice.",
      "As Edith catalogues the house, the house begins to catalogue her — annotating her days in a hand that looks unnervingly like her own. The Reinier Prize jury called it \"a haunting you read with a ruler.\"",
    ],
    passages: [
      {
        text:
          "The hallway was seven paces on Monday and eleven on Thursday, and I had begun to suspect the house of keeping a diary. Not a metaphor. A diary. I found it behind the wallpaper, written in the margins of the plaster, and every entry was dated for a day I had not yet lived.",
        noteId: 1,
      },
      {
        text:
          "I measured the parlour again. The tape recoiled at four metres and then, quietly, admitted to six. Walls should not apologise. Mine did, in a whisper of settling wood, and I wrote the confession down so that at least one of us would remember it.",
        noteId: 2,
      },
      {
        text:
          "By the fourteenth night the corridor had grown a door I had never opened, and behind the door was the corridor, and behind the corridor was a smaller version of me, reading aloud from a book I would not finish writing until the spring.",
      },
    ],
    footnotes: [
      {
        id: 1,
        text:
          "The dates are printed in the original edition exactly as Edith transcribed them. Three of them correspond to nights on which the reader is statistically likely to be holding this book. Do not check.",
      },
      {
        id: 2,
        text:
          "Structural engineers consulted for the paperback release declined to be named. One returned the manuscript with a single word pencilled inside the cover: 'stop.'",
      },
    ],
  },
  {
    slug: "the-yellow-corridor",
    title: "The Yellow Corridor",
    subtitle: "A confinement, in three papers",
    year: 2021,
    cover: coverYellow,
    tagline: "She papered the walls to keep the walls from papering her.",
    status: "Restored Edition",
    buyUrl: "#",
    synopsis: [
      "Sent to a rented cottage to rest, translator Marta Lund is forbidden ink, company, and the stairs. She is given, instead, a room the colour of a fading bruise and told to admire it.",
      "What follows is a fever kept in the second person — the reader is the one confined — until the pattern on the wall stops being a pattern and starts keeping appointments.",
    ],
    passages: [
      {
        text:
          "You are not to write, they said, and so you write on the only surface left to you, which is the inside of your own attention. The wallpaper is the colour of a lie told slowly. You have begun to like it, which is the first symptom.",
        noteId: 1,
      },
      {
        text:
          "At night the pattern loosens its shoulders and walks. You have counted the figures behind the flowers — always one more than the night before, always one of them wearing your face turned slightly away, as if embarrassed to be caught leaving.",
        noteId: 2,
      },
      {
        text:
          "When they finally open the door they will find the paper stripped in long even ribbons and the room quite empty, and they will not think to ask the wall where you have gone, though the wall, being polite, would have told them.",
      },
    ],
    footnotes: [
      {
        id: 1,
        text:
          "The second-person voice is not a device. Early readers reported an involuntary reluctance to close the book, which the author considered a satisfactory review.",
      },
      {
        id: 2,
        text:
          "The Restored Edition reinstates a passage removed by the first publisher on grounds of 'atmospheric liability.' It is printed in yellow ink and is best read once.",
      },
    ],
  },
  {
    slug: "marginalia",
    title: "Marginalia",
    subtitle: "Stories found in other people's books",
    year: 2018,
    cover: coverMarginalia,
    tagline: "Every book you have ever loved has been reading you back.",
    status: "In Print",
    buyUrl: "#",
    synopsis: [
      "A collection assembled entirely from the notes strangers leave in secondhand books: underlinings, arguments, confessions, a shopping list that turns out to be a suicide note deferred.",
      "Molenaar arranges these fragments until they cohere into a single anxious biography — yours, possibly. The margins, it turns out, were the main text all along.",
    ],
    passages: [
      {
        text:
          "The first book I bought secondhand contained a pencilled note beside a paragraph about grief: 'he never says this to me.' I have spent nine years trying to find out who 'he' was, and I am beginning to fear the answer is the reader, and that the reader is you.",
        noteId: 1,
      },
      {
        text:
          "Collect enough marginalia and a chorus assembles itself. They disagree about the ending. They agree, without exception, that the book has changed since they last read it, and that this is not their imagination, and that you should not lend it out.",
      },
    ],
    footnotes: [
      {
        id: 1,
        text:
          "Readers are invited to add their own marginalia to this website. The author reads every note. The author does not always reply to the same century.",
      },
    ],
  },
];

export const getBook = (slug: string) => BOOKS.find((b) => b.slug === slug);
