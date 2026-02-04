# SRM VEC English PWA

An interactive gamified PWA that turns English learning into a daily mission, strengthening skills and helping students of SRM Valliammai Engineering College fall in love with consistent learning.

Students complete short quests every day, earn streaks, and track progress through a visual dashboard.

---

## Features

### 🌟 Learning Missions
- **Daily Quests** – Quick grammar/vocabulary challenges.  
- **Video Quests** – Short learning videos followed by MCQs.  
- **Story Quests** – Narrative-based comprehension tasks.  
- Completed items appear with a **🔥 fire icon** in the calendar.

### 🏆 Leaderboard (Mission: *Veni, Vidi, Vici!*)
- Live rankings powered by **Supabase**.  
- Sort by:
  - Accuracy  
  - Time  
  - Quests Completed  
  - Videos Completed  
  - Stories Completed  
  - Last Test Taken  
- Pilot-style cards with medals and visual tags.

### 👤 Pilot Profile Dashboard
- Shows total Quests, Videos, Stories, and Time spent.  
- Monthly calendar turns **green with 🔥** for every completed mission.  

### 📚 ELLL Virtual Record (Gems System)
- Tracks 9 English Lab components:
  - SWOC  
  - Phonics  
  - Listening  
  - Something Close to My Heart  
  - Song Decode  
  - Headline Hunt  
  - Creative Rendezvous  
  - Letter  
  - Self Reflection  
- Each task lights up as students progress.

### 📱 Progressive Web App
- PWA installable on Android/iOS. 
- Smooth navigation with bottom navigation bar.

### 🔗 Quick Links Menu
- Daily Vocabulary  
- Mystic Summit  
- Video Quests  
- Wordle  
- Leaderboard  
- ELLL Record  

---

## How It Works

- Built with **HTML, CSS, JavaScript**.  
- Supabase stores:
  - Quests completed  
  - Videos completed  
  - Stories completed  
  - Accuracy  
  - Time spent (seconds)  
  - Last test timestamp  
- Leaderboard and profile update automatically from a Supabase view.  
- Calendar heatmap groups Quests, Videos, and Stories by date.  
- No login required beyond student name; app updates in real time.

---

## Run Locally

```bash
git clone https://github.com/andrewveda/SRM-VEC-English-PWA
cd SRM-VEC-English-PWA
python3 -m http.server 8000
cd SRM-VEC-English-PWA
python3 -m http.server 8000
