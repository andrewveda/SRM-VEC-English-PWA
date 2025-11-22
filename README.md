# SRM VEC English PWA

A fast, mobile-friendly Progressive Web App designed for SRM Valliammai Engineering College students to practise English through short, engaging missions.

---

## What the App Offers

- **Daily Quests** – Quick English practice tasks (MCQs).
- **Video Quests** – Curated from YouTube: TED talks, trailers, songs and clips
- **Story Quests** – Narrative-based reading: Cloze tests.
- **Mission Leaderboard** – Live ranking of students (accuracy, time, quests completed), powered by Supabase.
- **Pilot Profile View** – Detailed stats for each learner, including attempts, accuracy, mission time, and a daily activity calendar.
- **Class Telemetry Dashboard** – One-click view of class-wide averages and totals.

---

## How It Works

- The app is built using **HTML, CSS, and JavaScript**.
- **Supabase** provides real-time data for scores, timings, quests, videos, and story completions.
- The leaderboard updates dynamically and supports sorting by:
  - Accuracy  
  - Total mission time  
  - Quests completed  
  - Videos completed  
  - Stories completed  
  - Last mission timestamp  
- A built-in **mission calendar** visualises activity streaks for Quests, Videos, and Stories.
- No logins required; the app reads from a shared Supabase view.

---

## Run Locally

```bash
git clone https://github.com/andrewveda/SRM-VEC-English-PWA
cd SRM-VEC-English-PWA
python3 -m http.server 8000
