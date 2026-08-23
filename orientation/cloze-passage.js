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

  // Add more quest objects below this line — newest quest goes last,
  // and the picker screen shows them newest-first automatically.
];
