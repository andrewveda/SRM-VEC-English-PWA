/* =========================================================================
   cloze-passage.js
   -------------------------------------------------------------------------
   This file is DATA ONLY. It holds every cloze quest available to the
   engine, plus shared app config (branding, Supabase, default blank
   settings). engine.html never needs to change when you add a new quest —
   just append a new object to QUESTS below.

   HOW TO ADD A NEW QUEST
   -----------------------------------------------------------------------
   1. Copy one of the objects in QUESTS.
   2. Give it a unique questId (used for Supabase rows + PDF filenames).
   3. Paste your passage text into `passage`.
   4. Leave blanksPerPage / blankFrequency as null to use the app defaults,
      or set numbers to override them for just this quest.
   5. Save. Reload engine.html — the new quest appears automatically on
      the picker screen, newest first.
   ========================================================================= */

export const APP_CONFIG = {
  // --- Branding shown on the name/department entry screen ---
  orgName: "YOUR COLLEGE NAME HERE",
  orgSubtitle: "(Autonomous)",
  deptName: "Department of English",

  // --- Supabase (used to log completed attempts) ---
  supabase: {
    url: "https://yellow-lab-4999.andrewveda.workers.dev",
    anonKey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFoZXpzc29jenZwYmt0ZWZmY2d6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4NTk1ODUsImV4cCI6MjA3ODQzNTU4NX0.2ZlqXnZxv0opkhynAT7OlK4S-xPygcc7ETUyTXRfGHE",
    table: "Quests",
  },

  // --- Defaults every quest inherits unless it overrides them ---
  defaultBlanksPerPage: 4, // bite-sized pages for mobile
  defaultBlankFrequency: 12, // roughly every 12th word becomes a blank

  // --- Departments offered on the entry screen (per-quest override allowed) ---
  departments: [
    "Cyber Security",
    "CSE-1",
    "CSE-2",
    "CSE-3",
    "Mechanical Engineering",
    "ECE-1",
    "ECE-2",
    "ECE-3",
    "AI DS-1",
    "AI DS-2",
    "Civil",
    "Agri",
    "EEE",
    "EIE",
    "Medical Electronics",
    "IT-1",
    "IT-2",
  ],
};

export const QUESTS = [
  {
    questId: "QUEST-PLACEHOLDER-001",
    title: "Blog Title Placeholder",
    subheading: "Subheading placeholder — e.g. a series name or theme",
    date: "DD Month YYYY",
    author: "Author name placeholder",

    // Leave null to inherit APP_CONFIG defaults, or override per quest:
    deptList: null, // e.g. ["CSE-1", "CSE-2"] to restrict this quest
    blanksPerPage: null, // e.g. 3
    blankFrequency: null, // e.g. 10

    passage: `
Paste your passage text here. Write naturally — the engine automatically
picks words to blank out based on blankFrequency above, so you don't need
to mark anything by hand. Keep paragraphs separated by a blank line, the
same way this placeholder text is laid out, since the passage keeps its
paragraph breaks when it's shown to students on the quiz screen.

Add as many paragraphs as you like. When you're ready to publish a real
quest, replace this whole passage string and update the title, subheading,
date and author fields above it.
`,
  },

    {
    questId: "QUEST-106",
    title: "The Stories That Shape Us",
    subheading: "On finding our identity through fiction, quotes, and the people around us",
    date: "24 August 2026",
    author: "Andrew Veda",
    deptList: null,
    blanksPerPage: null,
    blankFrequency: null,
    passage: `
Who am I without them? Who am I without Marvel and DC? Who am I without the people surrounding me? Who am I without these movies and series?

Beginning with a line from Dead Poets Society, spoken by Robin Williams' character John Keating: “No matter what anyone tells you, words and ideas can change the world.”

In the same way, the people you surround yourself with and the fictional characters you grow up with can also change you in beautiful ways.

I'm not saying that the characters you see in shows and movies completely change you overnight after you start watching them. Rather, their influence gradually becomes a part of you over a period of time. They can amplify certain behaviours, introduce you to new ways of thinking, inspire you, and sometimes even encourage you to become a better person.

When you try to explain this idea to someone around you — or perhaps even to yourself while reading this — they might think that you're borderline becoming insane. But maybe that simply means they haven't yet understood or noticed this phenomenon.

Be it learning to show empathy, like Barry Allen from The Flash, trying to put yourself in another person's shoes and see things from their point of view, standing alone and saying, “I can do this all day,” learning from our mistakes so that we don't repeat them, understanding the art of redemption, realizing that no amount of money can ever buy a second of time, redefining ourselves, or learning to pick ourselves up every time we fall — all of these ideas can contribute to our mentality in ways much larger than we initially expect.

And it isn't only about fictional characters. We learn countless things from the people around us and from the stories we experience. Some of them may be professional, some personal, and some as simple as basic knowledge. Yet, all of them contribute to our attitudes, behaviours, and the way we see the world, often more than we realize.

And who am I without some of the beautifully written quotes from movies and by some incredible writers?

“Why do we fall, sir? So that we can learn to pick ourselves up.” - Alfred Pennyworth

“Annihilating is easy. Razing things to the ground is easy. Trying to fix what's broken is hard. Hope is hard.” - Loki

“You will have bad times, but they will always wake you up to the good stuff you weren’t paying attention to.” - Sean Maguire

“There is a natural order to things. Things happen the way they do. We may not know why at the time, but there must always be a reason.” - Henry Allen

“When a miracle is actually happening, nobody recognizes it... and once it has already happened, there is no need to recognize it.” - Trivikram Srinivas

“It’s not how well you play that matters, but when you stop. If you lose after winning, the loss will be remembered. But if you win after losing, that victory will be remembered in history, because history only remembers how you finished.” - Venky Atluri

These are just a few quotes that popped into my mind while writing this post. There are countless other beautifully written lines that can change the way we perceive the world and even the way we perceive ourselves.
`
  }

];
