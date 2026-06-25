# AI Learning Object Directory for SRM VEC English PWA

> A pedagogical, behavioural-science, gamification, UX, analytics, and AI-personalisation blueprint for evolving this repository into a Duolingo-scale English learning ecosystem.

## 1. Executive Summary

This repository is already more than a collection of static pages. It is an emerging **quest-based English learning ecosystem** built around short activities, repeated practice, public progress visibility, literary enrichment, vocabulary play, student identity, and Supabase-backed performance records. The dominant design language is mission-oriented: students complete quests, accumulate correct answers, appear on leaderboards, maintain streak-like habits, and navigate themed hubs such as **Veni Vidi Vici**, **Vox Velocity**, **Blossom**, **Wordle Blitz**, **ELLL**, **Mystic Summit**, and **Vox Forum**.

From a learning-sciences perspective, the platform already contains many powerful object types:

- Retrieval-practice quizzes and MCQ quests.
- Error-correction/retry loops.
- Tap-to-match grammar and vocabulary exercises.
- Cloze reading and contextual grammar tasks.
- Video-based comprehension quests.
- Story-based comprehension and reflection activities.
- Vocabulary games including Wordle, Hangman, Blossom, 4 Pics 1 Word, and idiom quests.
- Speaking practice modules.
- Literature study guides.
- Project and presentation assignments.
- Prompt-engineering and AI-literacy assignments.
- Progress dashboards, leaderboards, scorecards, report cards, and student profiles.
- Daily logs, quote walls, and motivational identity rituals.
- Student speech/publication spaces through Vox Forum.

The next step is not merely adding more pages. The next step is adding a **learning-object layer**: every activity should declare its objective, skill tags, difficulty, misconceptions, feedback strategy, retry policy, data model, and AI adaptation rules. This document provides that blueprint.

## 2. Repository Pedagogical Map

### 2.1 Platform-level purpose

The platform appears designed for engineering-college English learners who need frequent low-stakes practice in communication, grammar, vocabulary, reading, presentation, literature, listening/video comprehension, and confidence-building. Its strongest educational identity is **habitual microlearning with playful challenge**.

### 2.2 Core learner needs addressed

| Learner need | Current repository response | Learning science foundation |
|---|---|---|
| Consistent practice | Daily quests, calendars, mission hubs, streak language | Distributed practice, habit formation, behavioural reinforcement |
| Grammar accuracy | MCQ, tap-to-match, cloze, tense, article, function-word, punctuation quests | Retrieval practice, feedback, discrimination practice |
| Vocabulary growth | Vox Velocity, idioms, Wordle, Blossom, Hangman, GRE/foreign/philosophy word sets | Semantic networks, elaboration, orthographic retrieval |
| Reading comprehension | Story quests, cloze passages, book insights, literary pages | Schema activation, close reading, generation effect |
| Listening/viewing comprehension | Video quests and podcast/TED variants | Dual coding, multimodal learning, active viewing |
| Speaking confidence | Speaking quests, self-introduction, Vox Forum | Oral rehearsal, exposure, fluency practice, self-efficacy |
| Motivation | XP-like scores, badges, leaderboards, themed worlds | Self-determination theory, goal-gradient effect |
| Teacher visibility | Supabase submissions, leaderboards, department reports | Learning analytics, formative assessment |
| Identity and belonging | Quotes, forums, event quests, class activity consoles | Social learning, relatedness, narrative identity |

## 3. Existing Learning Objects: Exhaustive Design Analysis

Each object below describes the educational function inferred from the repository's HTML, JS, JSON, and Markdown patterns.

---

### 3.1 Quest Calendar / Mission Home

**Representative files:** `index.html`, `layout.html`, `select.html`, `quote.html`, `stylelayout.html`, `supacalendar.html`, `instantload.html`, `18febwhiteindex.html`, `21marchindex.html`, `22aprildradft.html`, `directory.html`, `template.html`, `manifest.json`, `service-worker.js`.

**Educational purpose:** Provides the central learning map where students select daily quests, video quests, story quests, cloze tasks, Wordle, leaderboard views, and profile/progress pages. It converts an English course into a sequence of visible missions rather than isolated assignments.

**Learning science principles:**

- Distributed practice through frequent short sessions.
- Goal-setting theory through visible completion states.
- Self-regulated learning through navigation and choice.
- Cue-based habit formation through recurring calendar access.
- Context-dependent memory via repeated use of the same mission environment.

**Behavioural science principles:**

- The calendar lowers initiation friction: students see what to do next.
- Mission framing creates anticipation and identity: the student is a participant, not a passive test-taker.
- Streak/cell completion can create ethical dopamine loops when used to celebrate return behaviour, not shame absence.
- Choice architecture encourages autonomy if multiple quest types are available.

**Gamification mechanisms:** Quest cards, streak icons, completion states, dashboard navigation, themed mission language, profile links, progress visibility, PWA installability. Best used for habit and orientation; should not be used to punish missed days.

**Student experience:** A student opens the app, identifies available tasks, completes bite-sized activities, and sees personal or class progress reflected in dashboards/leaderboards.

**Strengths:** Strong thematic consistency, mobile-friendly PWA ambition, visible progress, low-friction daily learning loop.

**Weaknesses:** Many static pages duplicate patterns; metadata is implicit in HTML rather than centralised. Without a recommendation engine, students may choose tasks randomly rather than pedagogically.

**Improvement opportunities:** Create a `learning_objects` table or JSON registry with `id`, `title`, `type`, `skill_tags`, `difficulty`, `estimated_time`, `prerequisites`, `mastery_threshold`, `retry_policy`, `feedback_policy`, and `ai_recommendation_weight`.

---

### 3.2 Standard MCQ Quest

**Representative files:** `buttons/MCQ/*.html`, `semII/10.html` through `semII/87.html`, `test/A.html`, `test/B.html`, `buttons/scorecard.html`, `buttons/first.html`, `buttons/firsts_theory.html`, `buttons/firsts_worldtheory.html`, `buttons/battle.html`, `semII/prep.html`, `semII/verb.html`, `sounds/thanks.html`.

**Educational purpose:** Builds fast recognition of grammar, vocabulary, usage, literature facts, comprehension points, and course-specific English lab content. MCQs are efficient for broad formative practice.

**Learning science principles:** Retrieval practice, immediate feedback, fluency building, discrimination learning, corrective feedback, test-enhanced learning.

**Behavioural science principles:**

- Correct answers provide immediate competence feedback.
- Retry rounds reduce learned helplessness by making wrong answers part of the loop.
- Scores and timers should reward improvement and completion as well as accuracy.
- Encouragement after errors should use growth language: “You are closer; try the rule again.”

**Gamification mechanisms:** Scores, timers, retry rounds, quest completion, badges, completion submission, cosmic/mission themes. Use timers for energising practice, not for high-anxiety learners or first exposure.

**Student experience:** Student answers one item at a time, receives right/wrong feedback, progresses through a question set, may retry missed items, and submits performance to Supabase or local score state.

**Strengths:** Highly scalable, easy for teachers to author, strong for retrieval and exam preparation.

**Weaknesses:** Can overemphasise recognition rather than production; distractor quality determines learning value; repeated static questions may promote memorisation without transfer.

**Improvement opportunities:** Add confidence ratings, misconception tags per distractor, item-level explanations, adaptive remediation, spaced reappearance of missed concepts, and AI-generated parallel items.

---

### 3.3 Adaptive Error-Correction MCQ / Retry Round

**Representative files:** many `buttons/MCQ/*.html` and `semII/3.html`, `semII/4.html` show retry-round language.

**Educational purpose:** Converts mistakes into mastery opportunities by recycling missed questions until the learner can answer correctly.

**Learning science principles:** Corrective feedback, deliberate practice, desirable difficulties, mastery learning, error-based learning.

**Behavioural science principles:**

- Protects weak students from final failure by making eventual mastery visible.
- Rewards persistence, not only first-try correctness.
- Should separate “learning score” from “accuracy score” so a learner can feel progress after retries.
- Encouragement should be immediate after wrong answers, with hints unlocking gradually.

**Gamification mechanisms:** Retry round, persistence badges, comeback streaks, mastery animation after eventual correction. Avoid public ranking based on first-attempt mistakes unless anonymised.

**Student experience:** Missed items are stored; after finishing the round, the learner re-enters a focused retry round; hints or changed distractors can appear; mastery is celebrated when errors are corrected.

**Strengths:** Strong anti-failure design; aligns with mastery learning.

**Weaknesses:** If the same item repeats unchanged too quickly, students may memorise option position rather than concept.

**Improvement opportunities:** Randomise distractors, ask for rationale on second attempt, show rule cards, and schedule a delayed retrieval item tomorrow.

---

### 3.4 Tap-to-Match Quiz

**Representative files:** `buttons/MCQ/tensematch1.html` to `tensematch6.html`, `buttons/bib.html`, `buttons/lpage.html`, `quests/grammar1.html`, `quests/areis.html`, `cloze/Quotes1.html`.

**Educational purpose:** Builds relational understanding by matching prompts to answers, terms to definitions, sentence halves, tense forms, bibliography elements, or grammar structures.

**Learning science principles:** Dual coding, chunking, associative learning, retrieval plus recognition, pattern discrimination, cognitive load reduction through visible options.

**Behavioural science principles:**

- Drag/tap interaction creates embodied engagement.
- Pair completion creates frequent micro-rewards.
- Matching should be constrained to avoid overload: 4–8 pairs on mobile is ideal.
- Mistakes should gently reset only the pair, not the whole board.

**Gamification mechanisms:** Pair streaks, combo points, timed challenge mode, perfect-match badge, puzzle completion animation. Avoid using speed as the only success metric.

**Student experience:** Learner sees cards or blanks, taps one prompt and one answer, receives feedback, and clears matched pairs.

**Strengths:** Excellent for vocabulary, grammar categories, tense patterns, literary terms, and source citation components.

**Weaknesses:** Matching can become shallow if it does not require production or explanation.

**Improvement opportunities:** Add “explain your match” after completion, AI-generated examples using the matched pair, and spaced review of mismatched pairs.

---

### 3.5 Cloze Reading / Fill-in-the-Blank Quest

**Representative files:** `cloze/*.html`, `quests/quest1.html`, `quests/quest70.html`, `semII/questions.json`.

**Educational purpose:** Strengthens contextual grammar, vocabulary inference, cohesion, reading comprehension, collocation, register, and discourse-level noticing.

**Learning science principles:** Generation effect, contextual retrieval, semantic priming, close reading, desirable difficulty, elaborative encoding.

**Behavioural science principles:**

- Missing words create curiosity gaps.
- Immediate validation keeps effort loops short.
- Hints can scaffold weaker students without giving away answers.
- Progress bars should show blanks completed, not only correctness.

**Gamification mechanisms:** Sentence repair points, combo streaks for consecutive blanks, “context detective” badge, unlockable explanations. Avoid over-timing literary or reflective passages.

**Student experience:** Learner reads a passage, selects or types missing words, receives feedback, completes a passage-level challenge, and sees a completion celebration.

**Strengths:** Better transfer than isolated MCQs because language is embedded in meaningful context.

**Weaknesses:** If answer banks are too obvious, the task becomes matching rather than inference; if too hard, it becomes frustration.

**Improvement opportunities:** Add adaptive blank density, synonym acceptance, AI feedback explaining contextual clues, and post-passage comprehension/reflection.

---

### 3.6 Video Quest

**Representative files:** `buttons/videoquests.html`, `buttons/videoquests.json`, `buttons/videoquestspodcast.html`, `buttons/videoqueststed.html`, `buttons/videonew.html`, `buttons/videoi.html`, `buttons/videoy.html`, `buttons/videoyg.html`, `semII/vid1.html`, `semII/vid2.html`.

**Educational purpose:** Turns passive video watching into active listening/viewing comprehension with accountability, summarisation, and quiz follow-up.

**Learning science principles:** Multimedia learning, dual coding, active viewing, retrieval practice, attention guidance, segmenting principle.

**Behavioural science principles:**

- Video choice can increase autonomy.
- Watch targets create a clear minimum action.
- Summaries and quizzes convert entertainment into learning.
- Learners should be rewarded for note-taking and thoughtful summaries, not only quiz correctness.

**Gamification mechanisms:** Video quest badges, watch-progress target, category collections, TED/podcast playlists, completion confetti. Avoid rewarding only video completion without comprehension evidence.

**Student experience:** Student chooses a video, watches a target portion or full clip, answers questions or submits summary, receives score/completion state.

**Strengths:** Supports listening, general knowledge, pronunciation exposure, and authentic input.

**Weaknesses:** External video links can break; learners may skip watching unless embedded checkpoints exist.

**Improvement opportunities:** Add AI-generated transcript highlights, pre-watch prediction, mid-video checkpoints, post-video oral summary, vocabulary extraction, and adaptive comprehension questions.

---

### 3.7 Story Quest / Reading Vault

**Representative files:** `buttons/stories.html`, many `cloze/story*.html`, `quests/quest-*.json`, `quests/manifest.json`, `buttons/bookinsights.html`, `bookinsights-draft.html`, `semII/bookchimp1.html`.

**Educational purpose:** Builds reading comprehension, narrative inference, moral reasoning, vocabulary in context, and sustained attention.

**Learning science principles:** Narrative transportation, schema activation, inferencing, elaboration, retrieval practice, reflective abstraction.

**Behavioural science principles:**

- Stories increase intrinsic motivation through curiosity and emotional engagement.
- Reflection prompts should help learners connect story meaning to self, reducing purely mechanical reading.
- Unlocking story collections creates progress without relying on social comparison.

**Gamification mechanisms:** Story vaults, chapter unlocks, comprehension badges, “deep reader” collections. Avoid turning all stories into speed tests; preserve meaning-making.

**Student experience:** Learner opens a story, reads or completes cloze questions, answers comprehension items, and may reflect on the message.

**Strengths:** Richer and more human than isolated grammar drills.

**Weaknesses:** Reading level may not be adaptive; long pages can overwhelm mobile users.

**Improvement opportunities:** Add adjustable reading level, read-aloud audio, vocabulary tap definitions, AI Socratic discussion, and summary comparison.

---

### 3.8 4 Pics 1 Word / Connect Quest

**Representative files:** `4pics.html`, `semII/2.html`, `semII/pics.html`, `semII/pics2.html`, `semII/picsdraft.html`, `quests/quest-001.json` to `quest-008.json`, `buttons/picturequest.html`.

**Educational purpose:** Develops abstraction, semantic association, vocabulary retrieval, lateral thinking, and visual-verbal mapping.

**Learning science principles:** Dual coding, analogical reasoning, generation effect, semantic network activation, productive struggle.

**Behavioural science principles:**

- Visual puzzles produce curiosity and manageable uncertainty.
- Letter tiles or answer blanks create incremental progress.
- Hints should cost soft currency or unlock after effort, not after failure alone.

**Gamification mechanisms:** Puzzle streaks, hint economy, reveal-one-letter unlocks, image detective badge, boss puzzles. Avoid making hints so costly that struggling learners are punished.

**Student experience:** Learner sees multiple images, infers the connecting word, enters or selects letters, receives feedback, and moves to the next puzzle.

**Strengths:** High engagement and useful for vocabulary depth.

**Weaknesses:** Images can be culturally ambiguous; answers may depend on prior knowledge.

**Improvement opportunities:** Add rationale feedback, alternate accepted answers, culturally localised image sets, and AI-generated clue explanations.

---

### 3.9 Vox Velocity Vocabulary Modules

**Representative files:** `buttons/vox-velocity-directory.html`, `buttons/vv-directory.html`, `buttons/vv_*.html`, `buttons/vox-velocity_foreign.html`, `buttons/vox-velocity_gre.html`, `buttons/vox-velocity_philosophy.html`, `buttons/vvgredraft.html`, `buttons/vv_idioms*.html`, `idioms/*.html`.

**Educational purpose:** Builds lexical breadth and depth across idioms, GRE-style words, foreign-origin words, philosophy terms, food words, identity words, people words, and thematic vocabulary.

**Learning science principles:** Spaced retrieval, semantic clustering, elaboration, orthographic retrieval, interleaving, contextualisation.

**Behavioural science principles:**

- Themed word worlds create identity and curiosity.
- Fast vocabulary games can create flow when difficulty matches learner level.
- Celebrate word recovery after hints to reduce vocabulary anxiety.

**Gamification mechanisms:** Word collections, lexicon levels, streaks, badges, timed modes, rare-word unlocks, vocabulary boss battles. Avoid rewarding obscure word memorisation without usage.

**Student experience:** Learner enters a themed vocabulary page, answers word/meaning/context questions or games, sees score and completion, and may appear in word-game leaderboards.

**Strengths:** Strong breadth; playful naming makes vocabulary less dry.

**Weaknesses:** Needs spaced review and productive usage; otherwise words fade quickly.

**Improvement opportunities:** Add flashcard scheduling, example sentence generation, pronunciation, learner-generated sentences, AI semantic maps, and “use it in your life” prompts.

---

### 3.10 Idiom Hangman

**Representative files:** `buttons/idiomhangman.html`, `buttons/idiomhangmandraft.html`, `buttons/vox-velocity-directory.html`, `buttons/vv-directory.html`.

**Educational purpose:** Builds idiom recognition, phrase memory, spelling, and anticipation of multiword expressions.

**Learning science principles:** Retrieval practice, partial cueing, orthographic pattern recognition, chunk learning.

**Behavioural science principles:**

- Hangman creates suspense and a meaningful cost for guesses.
- Failure should be framed as clue discovery, not humiliation.
- Provide idiom meaning and usage after answer reveal.

**Gamification mechanisms:** Lives, streaks, rescue badges, clue unlocks. Avoid death imagery for younger learners; use safer metaphors such as “rocket fuel” or “bridge strength.”

**Student experience:** Learner guesses letters to uncover an idiom, receives correct/incorrect feedback, then sees meaning and example.

**Strengths:** Engaging and memorable for phrases.

**Weaknesses:** Guessing letters alone may not teach meaning.

**Improvement opportunities:** Add context sentence before/after, paraphrase challenge, and AI dialogue using the idiom.

---

### 3.11 Wordle / Wordle Blitz / Word Game Hub

**Representative files:** `buttons/wordle.html`, `buttons/wordledaily.html`, `buttons/wordleedge.html`, `buttons/wordleleaderboard.html`, `wordleblitz.html`, `wordleblitzdraft.html`, `buttons/fun.html`.

**Educational purpose:** Develops spelling, phonological/orthographic pattern recognition, vocabulary hypothesis testing, and strategic reasoning.

**Learning science principles:** Hypothesis testing, feedback-based learning, pattern recognition, retrieval, problem solving.

**Behavioural science principles:**

- Limited attempts produce productive tension.
- Daily puzzle structures return habits.
- Leaderboards need fairness controls because native-like vocabulary advantages can dominate.

**Gamification mechanisms:** Daily streak, attempt distribution, speed score, leaderboards, badges, hidden words. Avoid making public ranking the primary reward.

**Student experience:** Learner guesses words, receives colour-coded feedback, improves hypotheses, and may submit score/time.

**Strengths:** High intrinsic puzzle appeal.

**Weaknesses:** Not always aligned to syllabus; can frustrate low-vocabulary learners.

**Improvement opportunities:** Add levelled word banks, word meanings after play, morphology clues, and personal best tracking rather than only class rank.

---

### 3.12 Blossom / Bullseye Word Game

**Representative files:** `buttons/blossomhub.html`, `buttons/bullseye.html`, `buttons/bullseyedraft.html`, `buttons/blossom_leaderboard.html`, `buttons/linguathon.html`.

**Educational purpose:** Encourages generative vocabulary production from constrained letters; builds morphological flexibility and spelling fluency.

**Learning science principles:** Generation effect, fluency practice, productive retrieval, orthographic patterning.

**Behavioural science principles:**

- Open-ended discovery supports autonomy and curiosity.
- Found-word counters create progress loops.
- Difficulty should scale with word length and learner level.

**Gamification mechanisms:** Found words, pangram/bullseye target, leaderboard, rare-word badges, collection completion. Avoid penalising learners who know fewer obscure words.

**Student experience:** Learner forms as many valid words as possible from letters, sees accepted words, score, and leaderboard rank.

**Strengths:** Strong productive vocabulary practice.

**Weaknesses:** Dictionary validity and word obscurity can feel arbitrary.

**Improvement opportunities:** Add “learn my missed words,” AI hints by semantic category, and post-game sentence practice.

---

### 3.13 Speaking Quest

**Representative files:** `quests/speaking.html`, `quests/speaking1.html`, plus speaking references inside some ELLL and Sem II pages.

**Educational purpose:** Provides low-stakes oral practice for introductions, fluency, pronunciation, confidence, and communication lab readiness.

**Learning science principles:** Deliberate practice, exposure, fluency building, self-efficacy, social rehearsal.

**Behavioural science principles:**

- Speaking anxiety must be reduced through private rehearsal before public submission.
- Completion should celebrate courage and effort.
- Feedback should be specific and kind: pace, clarity, pronunciation, structure.

**Gamification mechanisms:** Courage badges, speaking streaks, fluency levels, unlockable prompts. Avoid public ranking of accents or voice quality.

**Student experience:** Learner reads a prompt, records or rehearses speech, completes the quest, and potentially receives teacher/AI feedback.

**Strengths:** Directly addresses communication confidence.

**Weaknesses:** Browser audio recording, privacy, and feedback quality may be limited.

**Improvement opportunities:** Add speech-to-text, pronunciation analytics, fluency metrics, AI conversation partner, and self-review rubric.

---

### 3.14 ELLL Virtual Record / Lab Component Tracker

**Representative files:** `buttons/ELLL.html`, `buttons/ELLLprint.html`, `buttons/cat-a-log-in.html`, `cat-a.html`, `buttons/revision.html`, `bulletcards.html`.

**Educational purpose:** Tracks English Language Lab components such as SWOC, phonics, listening, personal speech, song decode, headline hunt, creative rendezvous, letter, and self-reflection.

**Learning science principles:** Portfolio assessment, competency tracking, multimodal practice, metacognition, spaced completion.

**Behavioural science principles:**

- A visual checklist reduces ambiguity and increases completion intent.
- Gem/light-up systems reward progress across diverse skills.
- Printable views support teacher verification and institutional accountability.

**Gamification mechanisms:** Gems, component completion, printable record, profile integration. Avoid turning reflective components into checkbox-only compliance.

**Student experience:** Learner views required lab tasks, completes components, sees lit/completed states, and can generate or print records.

**Strengths:** Integrates assessment administration with learner-facing motivation.

**Weaknesses:** Completion can overshadow quality if rubrics are not stored.

**Improvement opportunities:** Add rubrics, evidence uploads, teacher comments, AI formative feedback, and longitudinal lab competency maps.

---

### 3.15 Leaderboards, Dashboards, Profiles, Scorecards, Reports

**Representative files:** `buttons/leaderboard*.html`, `buttons/leaderboard_dept.html`, `buttons/leaderboard_hub.html`, `buttons/profile.html`, `profile.html`, `buttons/scorecard.html`, `semester_1/*.json`, `buttons/wordleleaderboard.html`, `buttons/blossom_leaderboard.html`.

**Educational purpose:** Makes learning visible to students and teachers, supports accountability, displays completion, accuracy, time, rank, department performance, and activity history.

**Learning science principles:** Feedback loops, self-monitoring, formative analytics, goal-setting, social comparison.

**Behavioural science principles:**

- Dashboards can increase agency when they answer “What should I do next?”
- Leaderboards motivate some learners but can discourage weaker students.
- Use segmented leaderboards: personal best, improvement rank, effort rank, team rank, and opt-in competitive rank.

**Gamification mechanisms:** Rank, medals, badges, activity grids, mission status, squad overview, reports. Avoid toxic comparison, naming/shaming, and permanent low ranks.

**Student experience:** Learner checks standing, completed quests, time, correct/wrong counts, recent activity, and profile stats.

**Strengths:** Strong teacher analytics and class energy.

**Weaknesses:** Accuracy/time rankings may privilege already strong learners.

**Improvement opportunities:** Add mastery dashboards, misconception heatmaps, next-best-quest recommendations, private teacher interventions, and wellbeing-sensitive analytics.

---

### 3.16 Daily Progress Log

**Representative files:** `buttons/log.html`.

**Educational purpose:** Encourages self-monitoring and habit reflection, making students conscious of practice frequency and progress.

**Learning science principles:** Metacognition, self-regulated learning, implementation intentions, reflective practice.

**Behavioural science principles:**

- Logging creates commitment and identity reinforcement.
- It should be fast, forgiving, and non-judgmental.
- Prompts should ask what was learned, what felt hard, and what the next step is.

**Gamification mechanisms:** Log streaks, reflection badges, growth timeline. Avoid rewarding fake logs without meaningful entries.

**Student experience:** Student records daily work and sees confirmation that the log is saved.

**Strengths:** Builds learning awareness beyond quiz scores.

**Weaknesses:** Logs may become superficial if not reviewed.

**Improvement opportunities:** AI summarises weekly patterns and recommends next goals.

---

### 3.17 Literature Study Guide Pages

**Representative files:** `buttons/alt.html`, `buttons/gglb.html`, `buttons/jk.html`, `buttons/ow.html`, `buttons/pbs.html`, `buttons/stc.html`, `buttons/ws.html`.

**Educational purpose:** Provides structured literary knowledge on canonical authors and works, supporting exam preparation, cultural literacy, interpretation, and historical context.

**Learning science principles:** Schema building, elaboration, organised knowledge structures, contextual learning.

**Behavioural science principles:**

- Beautiful, structured pages can reduce intimidation around literature.
- Badges or progress should reward reading sections and answering interpretive questions.
- Add low-stakes “what do you think?” prompts to increase ownership.

**Gamification mechanisms:** Author collections, literature badges, quote unlocks, timeline quests. Avoid reducing literature to fact recall only.

**Student experience:** Learner reads author biography, works, themes, and study notes; may use it for revision or linked quests.

**Strengths:** Rich content and polished presentation.

**Weaknesses:** Static reading lacks interaction and mastery checks unless paired with tasks.

**Improvement opportunities:** Add concept maps, passage annotation, AI debate with a character/critic, and spaced review cards.

---

### 3.18 Project-Based Assignments and Presentation Trials

**Representative files:** `buttons/mystic.html`, `buttons/brochure1.html`, `buttons/event1.html`, `buttons/chess.html`, `buttons/chess-writing.html`, `buttons/cryptic-re-perception.html`.

**Educational purpose:** Moves students from answer selection to creation, presentation, event design, prompt engineering, and perceptual reframing.

**Learning science principles:** Project-based learning, constructionism, transfer, productive failure, authentic assessment, creativity.

**Behavioural science principles:**

- Narrative framing makes difficult work feel like a mission.
- Rubrics protect students from ambiguity.
- Peer showcases increase relatedness and audience awareness.

**Gamification mechanisms:** Quest briefs, deliverable lists, badges, event titles, roles. Avoid vague scoring; creative tasks need transparent criteria.

**Student experience:** Learner receives a themed challenge, creates a deliverable, presents or submits it, and receives evaluation.

**Strengths:** Strong transfer to real communication contexts.

**Weaknesses:** Current artifacts may be assignment briefs without structured submission/rubric workflow.

**Improvement opportunities:** Add milestone checkpoints, peer review, AI rubric pre-check, and portfolio publishing.

---

### 3.19 Vox Forum Student Publication / Speech Showcase

**Representative files:** `buttons/vox-forum.html`, `vox-forum/*.html`, `vox-forum/students.json`.

**Educational purpose:** Gives students an authentic audience for speeches, essays, and ideas; supports voice, identity, civic reasoning, and communication confidence.

**Learning science principles:** Social learning, authentic audience, elaboration, identity-based motivation, peer modelling.

**Behavioural science principles:**

- Public showcase increases pride and belonging.
- Must include consent, moderation, and supportive feedback norms.
- Student pages should celebrate growth and originality.

**Gamification mechanisms:** Speaker badges, featured essays, topic tags, audience reactions, constructive-comment quests. Avoid popularity contests based on likes alone.

**Student experience:** Learner sees a directory, opens student work, reads a speech/essay, and may be inspired to contribute.

**Strengths:** Humanises the platform and supports expression.

**Weaknesses:** Needs moderation, privacy safeguards, and feedback scaffolds.

**Improvement opportunities:** Add peer response stems, AI feedback before publication, revision history, and thematic debate rooms.

---

### 3.20 Quote Wall / Motivation Object

**Representative files:** `QUOTES.md`, `quote.html`, `quotes.html`.

**Educational purpose:** Builds growth mindset, emotional resilience, and classroom culture through short motivational texts.

**Learning science principles:** Attribution theory, growth mindset, affective priming, identity-based motivation.

**Behavioural science principles:**

- Quotes can reframe failure and effort.
- Students should add personal interpretations to promote internalisation.
- Avoid generic positivity that ignores real difficulty.

**Gamification mechanisms:** Quote-of-the-day, reflection streaks, student quote submissions, inspiration collections. Avoid substituting slogans for actual support.

**Student experience:** Learner reads quotes and may connect them to learning struggles.

**Strengths:** Supports emotional climate.

**Weaknesses:** Low instructional value unless connected to reflection/action.

**Improvement opportunities:** AI asks: “How does this quote apply to your last mistake?” and stores reflection.

---

### 3.21 ATS Resume Scanner

**Representative files:** `ats/analyse.html`.

**Educational purpose:** Helps learners improve resumes for employability by checking ATS-style readiness and possibly score categories.

**Learning science principles:** Authentic assessment, feedback literacy, writing revision, professional transfer.

**Behavioural science principles:**

- Scores can motivate revision but must not be presented as fixed ability.
- Feedback should suggest concrete edits and explain why.
- Version comparison supports visible progress.

**Gamification mechanisms:** Resume readiness score, revision badges, employability milestones. Avoid overpromising job outcomes.

**Student experience:** Student inputs or uploads resume text, receives score/feedback, revises.

**Strengths:** Highly relevant to engineering students.

**Weaknesses:** ATS scoring can be opaque and anxiety-inducing.

**Improvement opportunities:** Add rubrics for clarity, impact verbs, quantification, formatting, role alignment, and AI rewrite suggestions with human approval.

---

### 3.22 Authentication, Student Selection, and PWA Infrastructure

**Representative files:** `auth.html`, `auth-guard.js`, `buttons/entry.html`, `manifest.json`, `service-worker.js`.

**Educational purpose:** Not learning objects themselves, but they enable persistence, identity, data continuity, offline access, and personalised analytics.

**Learning science principles:** Continuity of learning data, self-monitoring, personalised learning.

**Behavioural science principles:**

- Login must be frictionless to protect learning momentum.
- Student identity should support belonging, not surveillance.
- Offline access supports habit reliability.

**Gamification mechanisms:** Named profile, persistent progress, installed app icon. Avoid excessive gatekeeping before practice.

**Student experience:** Student signs in/selects identity and continues learning across sessions.

**Strengths:** Enables platform-scale data.

**Weaknesses:** Privacy and data validation need careful governance.

**Improvement opportunities:** Add roles, consent, class enrolment, anonymised analytics, and parent/teacher views if needed.

## 4. File-Level Directory and Pedagogical Inference

Because the repository contains hundreds of repeated quiz and quest pages, this section lists every educationally relevant file/family and gives concise interpretation. Repeated files are intentionally grouped where they share the same engine and pedagogy; individual paths are preserved so implementers can map them back to the codebase.

### 4.1 Root-level platform and hub files

| Files | Learning object type | Purpose and evaluation |
|---|---|---|
| `README.md` | Platform narrative | Defines the PWA as daily gamified English missions. Strong vision; should be extended with authoring/data standards. |
| `index.html`, `layout.html`, `select.html`, `stylelayout.html`, `supacalendar.html`, `instantload.html`, `template.html`, `quote.html` | Quest calendar/home/dashboard variants | Central navigation and mission framing. Strength: habit loop and visibility. Weakness: duplicated variants can fragment UX. Improve with one configurable shell. |
| `directory.html` | Quest directory | Makes activities discoverable. Improve with filters by skill, difficulty, time, and recommended next activity. |
| `manifest.json`, `service-worker.js` | PWA infrastructure | Supports mobile install/offline affordances. Improve with offline queueing for submissions. |
| `auth.html`, `auth-guard.js`, `buttons/entry.html` | Identity/access | Supports named progress. Improve with privacy notices and durable student IDs. |
| `QUOTES.md`, `quotes.html` | Motivation/reflection | Growth mindset and classroom culture. Improve with reflection prompts linked to failures. |
| `4pics.html`, `wordleblitz.html`, `wordleblitzdraft.html`, `comic.html`, `fun.html`, `intro.html`, `elevator.html`, `dragondraft.html`, `bookinsights-draft.html`, `bulletcards.html` | Root activities/drafts | Mixed experiments in games, stories, cards, and drafts. Strength: innovation. Weakness: inconsistent metadata. Improve by registering each as a typed learning object. |
| `semester_1/*.json` | Analytics exports | Evidence of real learner submissions, leaderboard rows, report-card views, and summaries. Improve by normalising events and item-level data. |

### 4.2 MCQ and grammar files

| Files | Type | Purpose, strengths, weaknesses, improvements |
|---|---|---|
| `buttons/MCQ/Homophone1.html`, `buttons/MCQ/Homophone2.html` | Homophone MCQ | Teaches sound-alike word discrimination. Strong for common errors; add audio pronunciation and sentence generation. |
| `buttons/MCQ/article1.html`, `article2.html`, `article3.html`, `homophonearticles.html` | Article grammar MCQ | Teaches a/an/the/zero article usage. Add rule feedback and contrastive examples. |
| `buttons/MCQ/compound.html`, `compound2.html` | Compound-word MCQ | Builds morphology and vocabulary. Add word-building production after recognition. |
| `buttons/MCQ/functionwords1.html`, `functionwords2.html` | Function words | Builds grammatical glue words. Add cloze transfer to authentic sentences. |
| `buttons/MCQ/idiom1.html` to `idiom4.html` | Idiom MCQ | Builds phrase meaning and cultural fluency. Add usage tasks and dialogue examples. |
| `buttons/MCQ/negative.html`, `questions1.html`, `t2negquesprestense.html`, `t3.html`, `t4.html` | Negatives/questions/present tense | Teaches sentence transformation and question formation. Add production and speech practice. |
| `buttons/MCQ/present1.html`, `tense1.html`, `tense2.html` | Tense MCQ | Teaches tense recognition. Add timeline visuals and misconception tagging. |
| `buttons/MCQ/punctuation1.html`, `punctuation2.html` | Punctuation MCQ | Teaches mechanics. Add editing mode where students correct full paragraphs. |
| `buttons/MCQ/collocation1.html` | Collocation MCQ | Builds natural word partnerships. Add corpus-like examples and phrase-bank review. |
| `buttons/MCQ/tensematch1.html` to `tensematch6.html` | Tap-to-match tense practice | Good relational grammar activity. Add “why this tense?” explanations. |
| `quests/grammar1.html`, `quests/areis.html` | Tap-to-match grammar | Builds grammar discrimination. Add adaptive difficulty and delayed review. |
| `buttons/bib.html`, `buttons/lpage.html`, `cloze/Quotes1.html` | Match-style practice | Supports bibliography, language, or quote matching. Add transfer prompt. |

### 4.3 Sem II quest series

| Files | Type | Purpose and evaluation |
|---|---|---|
| `semII/2.html`, `semII/pics.html`, `pics2.html`, `picsdraft.html` | 4 Pics 1 Word / adverb quest | Visual vocabulary/grammar inference. Strong engagement; add clue explanations. |
| `semII/3.html`, `semII/4.html` | Contextual meaning/video-style retry MCQ | Good error-correction loop. Add confidence and adaptive hints. |
| `semII/5.html`, `6.html`, `7.html`, `prep.html`, `verb.html` | Vote of thanks / grammar practice | Communication-lab relevance. Add speech output and rubric. |
| `semII/8.html`, `9.html` | Adverbs/tense, prefixes/suffixes | Grammar and morphology retrieval. Add production examples. |
| `semII/10.html` to `50.html` | Purpose statement / mixed Sem II MCQ bank | Large scalable retrieval bank. Strength: breadth. Weakness: static repetition. Improve with item metadata, explanations, and mastery scheduling. |
| `semII/51.html` to `87.html` | Book Insights / mixed reading and reflection MCQ bank | Reading/literary/professional content practice. Add reflective synthesis and AI feedback. |
| `semII/bookchimp1.html` | Book insight quest | Uses popular psychology/nonfiction reading. Add concept map and application prompt. |
| `semII/bulletquests.html` | 5-minute timed quest | Builds fluency under time. Offer untimed practice mode. |
| `semII/jumb.html` | Sentence quest/jumbled sentence | Supports syntax and coherence. Add multiple correct variants when possible. |
| `semII/questions.json` | Question bank | Good centralisation pattern. Expand to all activities with metadata. |
| `semII/vid1.html`, `semII/vid2.html` | Video quest | Multimodal comprehension. Add transcript and checkpoints. |

### 4.4 Cloze collection

| Files | Type | Purpose and evaluation |
|---|---|---|
| `cloze/blog1.html` to `blog18.html` | Blog/data-interpretation cloze | Contextual vocabulary, grammar, and reading. Strong transfer; add adaptive blank density and explanations. |
| `cloze/story1.html` to `story31.html` | Story cloze | Narrative comprehension and grammar in context. Add reading-level choices and reflection. |
| `cloze/bookreview1.html` to `bookreview4.html` | Book review cloze | Genre awareness and review language. Add student review-writing follow-up. |
| `cloze/conversation1.html` to `conversation5.html` | Dialogue cloze | Pragmatics and conversational English. Add speaking role-play after completion. |
| `cloze/instructions1.html`, `instructions2.html` | Instructional text cloze | Procedural reading. Add sequencing tasks. |
| `cloze/invention1.html` to `invention7.html` | Expository/invention cloze | Academic reading and technical vocabulary. Add concept-check questions. |
| `cloze/report1.html` to `report7.html` | Report cloze | Professional writing structures. Add report-writing production. |
| `cloze/quotes1.html`, `quotes2.html`, `Quotes1.html` | Quote cloze/matching | Motivational language plus retrieval. Add personal interpretation. |
| `cloze/expandcompoundnoun.html` | Compound noun expansion | Builds noun phrase awareness. Add engineering-domain examples. |
| `cloze/funthanks.html` | Vote-of-thanks/functional language | Practical communication. Add oral delivery rubric. |
| `cloze/localstoredupload.html`, `test.html`, `test1.html`, `testfile.html` | Experiments/test engines | Useful prototypes. Consolidate into a stable cloze engine. |

### 4.5 Vocabulary, idiom, and word-game files

| Files | Type | Purpose and evaluation |
|---|---|---|
| `buttons/vox-velocity-directory.html`, `buttons/vv-directory.html` | Vocabulary directory | Navigation for themed vocabulary. Add skill filters and spaced review queue. |
| `buttons/vv_idioms1.html` to `vv_idioms9.html`, `buttons/vv_idioms1_water.html`, `idioms/1.html` to `idioms/4.html` | Idiom practice | Phrase comprehension and cultural fluency. Add context, dialogue, and production. |
| `buttons/vv_food.html`, `vv_people.html`, `vv_others.html`, `vv_droll.html`, `vv_pompous.html`, `vv_positiveexperience.html`, `vv_positiveidentity.html`, `vv_vocab1.html` | Thematic lexicon modules | Semantic clustering. Add spaced repetition and learner sentence generation. |
| `buttons/vox-velocity_foreign.html`, `vox-velocity_gre.html`, `vox-velocity_philosophy.html`, `vvgredraft.html` | Advanced vocabulary | High-challenge lexicon development. Add level gating and examples. |
| `buttons/idiomhangman.html`, `idiomhangmandraft.html` | Idiom Hangman | Partial-cue retrieval. Add meaning explanation after reveal. |
| `buttons/wordle.html`, `wordledaily.html`, `wordleedge.html`, `wordleleaderboard.html`, `wordleblitz.html`, `wordleblitzdraft.html` | Wordle/word puzzle | Orthographic reasoning and vocabulary. Add levelled word banks. |
| `buttons/blossomhub.html`, `bullseye.html`, `bullseyedraft.html`, `blossom_leaderboard.html`, `linguathon.html`, `lingualeague.html` | Blossom/Bullseye/Linguathon word games | Productive word generation and competitive events. Add missed-word review and fair rank categories. |

### 4.6 Video, story, literature, and public communication files

| Files | Type | Purpose and evaluation |
|---|---|---|
| `buttons/videoquests.html`, `videoquestspodcast.html`, `videoqueststed.html`, `videonew.html`, `videoi.html`, `videoy.html`, `videoyg.html`, `buttons/videoquests.json` | Video/podcast/TED quests | Active listening and comprehension. Add transcript-based AI coaching. |
| `buttons/stories.html`, `quests/quest1.html`, `quests/quest70.html`, `quests/manifest.json`, `quests/quest-001.json` to `quest-008.json` | Story and connect quests | Reading, visual reasoning, comprehension. Fix malformed JSON where present and centralise schema. |
| `buttons/bookinsights.html`, `bookinsights-draft.html`, `semII/bookchimp1.html` | Book insights | Reading reflection and applied wisdom. Add AI discussion and concept mapping. |
| `buttons/alt.html`, `gglb.html`, `jk.html`, `ow.html`, `pbs.html`, `stc.html`, `ws.html` | Literature guides | Canonical author study. Add interactive annotations and quizzes. |
| `quests/speaking.html`, `quests/speaking1.html` | Speaking quest | Oral confidence and fluency. Add audio recording, speech-to-text, feedback rubric. |
| `buttons/vox-forum.html`, `vox-forum/1.html`, `vox-forum/page.html`, `vox-forum/Barid_Baran.html`, `vox-forum/Sunanda.html`, `vox-forum/students.json` | Student forum/publication | Authentic audience for student voice. Add moderation, peer feedback, and consent states. |
| `buttons/mystic.html`, `brochure1.html`, `event1.html` | Event-management/presentation quests | Project-based communication. Add milestones and rubrics. |
| `buttons/chess.html`, `chess-writing.html`, `cryptic-re-perception.html` | Prompting/creative perception assignments | AI literacy and creative writing. Add structured submission and revision loops. |

### 4.7 Analytics, reports, and administrative files

| Files | Type | Purpose and evaluation |
|---|---|---|
| `buttons/leaderboard.html`, `leaderboard_1.html`, `leaderboard_live.html`, `leaderboarddraft.html`, `leaderboardprofile.html` | Learner leaderboard | Motivation and visibility. Add improvement ranking and privacy controls. |
| `buttons/leaderboard_dept.html`, `leaderboardprint.html`, `leaderboard_hub.html` | Department/class analytics | Teacher monitoring and reports. Add interventions and mastery maps. |
| `buttons/profile.html`, `profile.html` | Student profile | Self-monitoring. Add next-best-task recommendations. |
| `buttons/scorecard.html` | Scorecard | Summative/formative score display. Add mastery breakdown and remediation links. |
| `buttons/log.html` | Daily progress log | Metacognition and habit. Add weekly AI reflection. |
| `ats/analyse.html` | Resume scanner | Professional writing feedback. Add transparent rubric and revision history. |
| `buttons/ELLL.html`, `ELLLprint.html` | Lab record | Competency tracker. Add evidence/rubric storage. |

## 5. Missing Learning Objects to Add for a Duolingo-Scale AI Ecosystem

The current platform is rich in quests and games, but a full AI-powered ecosystem should include the following additional object types.

### 5.1 Diagnostic Placement Test

**Purpose:** Establish baseline grammar, vocabulary, reading, listening, speaking, and writing levels.

**Learning science:** Adaptive testing, zone of proximal development, prerequisite mapping.

**Behavioural design:** Present as “finding your best starting point,” not as a judgment. Give immediate strengths plus first three recommendations.

**Exact behaviour:** Starts with medium items, adapts up/down, collects confidence, stops when uncertainty is low, generates learner profile.

**Gamification:** Discovery map unlock, starter badge; no leaderboard.

**AI opportunities:** IRT/Bayesian ability estimates, misconception detection, personalised pathway.

**Data:** Item responses, response time, confidence, hints, ability estimate, skill mastery.

**Schema:** `diagnostic_sessions`, `diagnostic_item_events`, `skill_estimates`.

**UI:** Calm, low-pressure, progress as “calibration.”

**Pitfalls:** Labelling students as weak; too long.

**Contexts:** K-12, higher education, ESL, corporate onboarding.

### 5.2 Spaced Repetition Flashcards

**Purpose:** Prevent forgetting of vocabulary, grammar rules, idioms, literary terms.

**Learning science:** Spaced repetition, retrieval practice, desirable difficulty.

**Behavioural design:** Daily review queue; celebrate showing up and recovering forgotten cards.

**Exact behaviour:** Cards appear at expanding intervals; learner rates recall; missed cards return soon; examples adapt.

**Gamification:** Review streak, mastery rings, collections; avoid punishing lapse.

**AI opportunities:** Generate examples, mnemonics, distractors, and adaptive schedules.

**Data:** Ease factor, interval, due date, recall rating, latency, examples viewed.

**Schema:** `flashcards`, `flashcard_reviews`, `memory_schedules`.

**UI:** Swipe cards, audio, large tap targets, minimal clutter.

**Pitfalls:** Reward dependence; rote memorisation without use.

**Contexts:** All.

### 5.3 AI Tutor Conversation

**Purpose:** Provide Socratic, conversational help when students are stuck.

**Learning science:** Scaffolding, tutoring feedback, elaboration, metacognition.

**Behavioural design:** Warm, non-judgmental, asks guiding questions before giving answers.

**Exact behaviour:** Student asks question; tutor diagnoses skill; gives hint ladder; checks understanding; logs unresolved misconceptions.

**Gamification:** Help-seeking badge; do not rank tutor usage negatively.

**AI opportunities:** Natural-language tutoring, misconception models, adaptive explanations.

**Data:** Conversation turns, skill tags, hints, affect signals, resolved/unresolved state.

**Schema:** `tutor_sessions`, `tutor_messages`, `misconception_events`.

**UI:** Chat with citations to lesson objects, “explain differently” button.

**Pitfalls:** Hallucinated explanations; answer-giving without learning.

**Contexts:** All, especially self-learning.

### 5.4 Confidence-Based Assessment

**Purpose:** Distinguish lucky guesses from secure knowledge.

**Learning science:** Metacognition, calibration, retrieval.

**Behavioural design:** Reward honest uncertainty; never shame low confidence.

**Exact behaviour:** After each answer, learner selects confidence; system flags high-confidence errors for remediation.

**Gamification:** Calibration badge; “honest learner” rewards.

**AI opportunities:** Predict misconceptions and overconfidence patterns.

**Data:** Answer, correctness, confidence, calibration score.

**Schema:** Add `confidence_rating` to `item_attempts`; create `calibration_metrics`.

**UI:** Simple 3-point confidence slider.

**Pitfalls:** Students may game confidence if scoring is punitive.

**Contexts:** Higher ed, professional, exam prep.

### 5.5 Reflection Journal

**Purpose:** Build metacognition, emotional resilience, and transfer.

**Learning science:** Reflective practice, self-regulated learning, attribution retraining.

**Behavioural design:** Prompts focus on strategies, not fixed ability.

**Exact behaviour:** After activities, student writes what worked, what was hard, next plan; AI summarises weekly.

**Gamification:** Reflection streak, growth timeline; no leaderboard.

**AI opportunities:** Detect frustration, suggest strategies, summarise growth.

**Data:** Entries, mood, linked activity, strategy tags.

**Schema:** `reflection_entries`, `reflection_tags`, `weekly_reflection_summaries`.

**UI:** Private, calming, optional voice input.

**Pitfalls:** Forced reflection can feel like busywork.

**Contexts:** All.

### 5.6 Writing Sandbox with AI Feedback

**Purpose:** Develop composition, grammar, clarity, tone, and revision skills.

**Learning science:** Deliberate practice, revision, feedback literacy, genre learning.

**Behavioural design:** Praise effort and revision count; frame feedback as options.

**Exact behaviour:** Student drafts; AI gives rubric feedback; student revises; system compares versions.

**Gamification:** Revision XP, clarity badge, portfolio unlocks; avoid rewarding AI-written submissions.

**AI opportunities:** Grammar feedback, style coaching, rubric scoring, plagiarism/authorship support.

**Data:** Drafts, revisions, feedback accepted/rejected, rubric scores.

**Schema:** `writing_tasks`, `writing_submissions`, `writing_revisions`, `ai_feedback`.

**UI:** Split editor/feedback, track changes, accessible readability.

**Pitfalls:** Over-correction can reduce voice; AI dependency.

**Contexts:** Higher education, ESL, professional.

### 5.7 Pronunciation Practice Module

**Purpose:** Improve phonics, pronunciation, stress, intonation, and speaking confidence.

**Learning science:** Deliberate oral practice, auditory feedback, motor learning.

**Behavioural design:** Private rehearsal, celebrate attempts, avoid accent shaming.

**Exact behaviour:** Learner listens, records, sees word-level feedback, repeats, compares attempts.

**Gamification:** Courage streak, clarity levels; no public leaderboard.

**AI opportunities:** Speech recognition, phoneme diagnosis, personalised minimal pairs.

**Data:** Audio metadata, transcript, phoneme errors, fluency metrics.

**Schema:** `speaking_prompts`, `speech_attempts`, `pronunciation_metrics`.

**UI:** Waveform, slow playback, privacy notice.

**Pitfalls:** Biased speech models; anxiety.

**Contexts:** ESL, communication labs.

### 5.8 Debate Simulator

**Purpose:** Build argumentation, critical thinking, and civic/professional communication.

**Learning science:** Argument mapping, elaboration, perspective-taking.

**Behavioural design:** Encourages curiosity and respectful disagreement.

**Exact behaviour:** Student chooses side; AI opponent responds; student must use evidence; rubric scores logic, clarity, civility.

**Gamification:** Debate league, reasoning badges; avoid popularity ranking.

**AI opportunities:** Simulated opponent, fallacy detection, evidence prompts.

**Data:** Claims, evidence, rebuttals, rubric scores.

**Schema:** `debate_sessions`, `debate_turns`, `argument_rubrics`.

**UI:** Turn-based cards, argument map.

**Pitfalls:** Polarisation; unsafe topics.

**Contexts:** Higher ed, professional, K-12 with guardrails.

### 5.9 Scenario-Based Simulation

**Purpose:** Practice communication in interviews, meetings, customer interactions, presentations.

**Learning science:** Situated cognition, transfer, deliberate practice.

**Behavioural design:** Safe failure; retry with coaching.

**Exact behaviour:** Learner enters scenario, makes choices or speaks, receives consequences and feedback.

**Gamification:** Branching paths, mastery endings, role badges.

**AI opportunities:** Dynamic NPCs, adaptive difficulty, feedback.

**Data:** Choices, language used, outcome, retries, confidence.

**Schema:** `scenarios`, `scenario_sessions`, `scenario_decisions`.

**UI:** Chat/story interface with replay.

**Pitfalls:** Cognitive overload; unrealistic AI behaviour.

**Contexts:** Corporate, professional, ESL.

### 5.10 Mastery Pathway Quiz

**Purpose:** Move students through prerequisites until mastery is stable.

**Learning science:** Mastery learning, adaptive sequencing, spaced retrieval.

**Behavioural design:** Progress map shows “not yet” rather than failure.

**Exact behaviour:** Skill nodes unlock after threshold; weak nodes trigger remediation; mastered nodes reappear later.

**Gamification:** Mastery path, levels, boss checks.

**AI opportunities:** Personal curriculum generation.

**Data:** Skill mastery, attempts, remediation history.

**Schema:** `skills`, `skill_prerequisites`, `learner_skill_mastery`.

**UI:** Path map with clear next step.

**Pitfalls:** Over-locking reduces autonomy.

**Contexts:** All.

### 5.11 Peer Teaching Activity

**Purpose:** Students learn by explaining concepts to peers.

**Learning science:** Protégé effect, generation effect, elaboration.

**Behavioural design:** Reward helpfulness and clarity, not dominance.

**Exact behaviour:** Student creates explanation; peer rates usefulness; AI checks accuracy.

**Gamification:** Mentor badges, helpfulness points.

**AI opportunities:** Validate explanations, suggest improvements.

**Data:** Explanations, ratings, corrections.

**Schema:** `peer_explanations`, `peer_feedback`, `explanation_quality_scores`.

**UI:** Safe comment templates.

**Pitfalls:** Misinformation; popularity bias.

**Contexts:** K-12, higher ed.

### 5.12 Escape Room Challenge

**Purpose:** Integrate multiple skills into collaborative puzzle solving.

**Learning science:** Problem-based learning, interleaving, collaboration.

**Behavioural design:** Creates suspense and teamwork; hints prevent helplessness.

**Exact behaviour:** Students solve grammar/vocab/reading clues to unlock rooms.

**Gamification:** Locks, keys, timers, team badges.

**AI opportunities:** Adaptive hints, dynamic puzzle generation.

**Data:** Team actions, hints, time, puzzle attempts.

**Schema:** `escape_rooms`, `room_puzzles`, `team_sessions`.

**UI:** Visual room map, accessible clues.

**Pitfalls:** Timers can stress; group freeloading.

**Contexts:** K-12, higher ed events.

### 5.13 Boss Battle Assessment

**Purpose:** Summative-but-playful integrated skill challenge.

**Learning science:** Cumulative retrieval, interleaving, transfer.

**Behavioural design:** The boss represents the challenge, not the learner’s worth.

**Exact behaviour:** Mixed items across mastered skills; weak areas reduce boss health less; remediation unlocks.

**Gamification:** Boss health, power-ups, achievements.

**AI opportunities:** Generate personalised boss from weak skills.

**Data:** Skill hits, misses, power-up use.

**Schema:** `boss_battles`, `boss_attempts`, `boss_item_events`.

**UI:** Energetic but not chaotic.

**Pitfalls:** Over-gamification can trivialise assessment.

**Contexts:** K-12, higher ed revision.

### 5.14 Misconception Clinic

**Purpose:** Target patterns of repeated error.

**Learning science:** Error analysis, conceptual change, feedback.

**Behavioural design:** Names the misconception kindly: “A common trap.”

**Exact behaviour:** System groups errors, teaches mini-lesson, asks contrastive items.

**Gamification:** Trap-breaker badge.

**AI opportunities:** Detect latent misconceptions.

**Data:** Error clusters, clinic completion.

**Schema:** `misconceptions`, `learner_misconceptions`, `clinic_sessions`.

**UI:** Small focused cards.

**Pitfalls:** Too much remediation can feel punitive.

**Contexts:** All.

### 5.15 Curiosity Quest / Wonder Prompt

**Purpose:** Encourage exploration beyond syllabus.

**Learning science:** Inquiry learning, intrinsic motivation.

**Behavioural design:** Student chooses questions; autonomy drives engagement.

**Exact behaviour:** AI presents 3 intriguing prompts; student explores, summarises, connects to English skill.

**Gamification:** Curiosity collection, explorer badge.

**AI opportunities:** Personalised curiosity prompts.

**Data:** Chosen prompt, summary, time, follow-up interests.

**Schema:** `curiosity_prompts`, `curiosity_sessions`.

**UI:** Beautiful cards with “surprise me.”

**Pitfalls:** Can drift from learning goals.

**Contexts:** Self-learning, higher ed.

## 6. Data Architecture Blueprint

### 6.1 Core tables

```text
learners(id, name, department, section, email, role, consent_status, created_at)
learning_objects(id, slug, title, type, subtype, subject, skill_tags, difficulty, estimated_minutes, file_path, active)
skills(id, name, domain, description, parent_skill_id)
object_skills(object_id, skill_id, weight)
items(id, object_id, item_type, prompt, answer, options_json, explanation, difficulty, misconception_tags)
attempts(id, learner_id, object_id, started_at, completed_at, score, correct, wrong, time_spent, device, mode)
item_attempts(id, attempt_id, item_id, response, correct, response_time_ms, confidence, hint_count, retry_number)
hints(id, item_id, hint_level, hint_text, cost, ai_generated)
learner_skill_mastery(learner_id, skill_id, mastery_score, confidence_interval, last_practiced_at, next_due_at)
badges(id, name, criteria_json, type)
learner_badges(learner_id, badge_id, awarded_at, evidence_attempt_id)
streaks(learner_id, streak_type, current_count, longest_count, last_activity_date)
leaderboard_snapshots(id, scope, metric, generated_at, rows_json)
reflection_entries(id, learner_id, object_id, prompt, response, mood, strategy_tags, created_at)
ai_feedback(id, learner_id, object_id, attempt_id, feedback_type, content, model, created_at)
```

### 6.2 Event telemetry

Store raw events separately from summary scores:

```text
learning_events(id, learner_id, object_id, event_type, event_payload_json, created_at)
```

Examples: `opened_object`, `answered_item`, `requested_hint`, `changed_answer`, `paused_video`, `completed_retry_round`, `viewed_explanation`, `submitted_reflection`, `played_audio`, `recorded_speech`.

### 6.3 Minimum analytics for every activity

Every object should store:

- Attempts and completion state.
- Accuracy and item-level correctness.
- Response time and total time.
- Confidence rating.
- Hint usage and hint level.
- Retry count.
- Streak state.
- Emotional state indicator if voluntarily reported.
- Mastery score by skill.
- Difficulty estimate.
- Engagement metrics such as starts, completions, abandons, and returns.

## 7. AI Personalisation Opportunities

1. **Next-best quest recommendation:** Combine mastery gaps, due spaced repetition, learner interest, and available time.
2. **Adaptive difficulty:** Increase challenge after high accuracy/high confidence; reduce after repeated errors/low confidence.
3. **Distractor generation:** Generate plausible distractors based on common learner misconceptions.
4. **Hint ladder generation:** Create hint levels from gentle cue to worked explanation.
5. **Feedback generation:** Explain why an answer is correct/incorrect in learner-friendly language.
6. **Student modelling:** Maintain skill mastery, confidence calibration, persistence, and preferred modalities.
7. **Predictive analytics:** Flag risk of disengagement, not merely low scores.
8. **Personal curriculum:** Build weekly plan across grammar, vocabulary, reading, speaking, and writing.
9. **Automatic remediation:** Route learners from wrong items to mini-lessons and contrastive practice.
10. **Learning-style caution:** Adapt to demonstrated performance and preference, but avoid fixed “learning style” labels unsupported by evidence.

## 8. UX and Accessibility Recommendations

- Design mobile-first with thumb-friendly buttons and one primary action per screen.
- Use high contrast and do not rely only on colour for correctness; add icons/text.
- Offer reduced-motion mode for confetti/animations.
- Keep timers optional or hidden in practice mode.
- Use warm feedback: “Not yet — notice the article before a vowel sound.”
- Celebrate effort milestones: first attempt, retry completion, hints used wisely, streak return after absence.
- Use progress indicators for effort and mastery separately.
- Provide text alternatives for images and transcripts for videos/audio.
- Make leaderboards opt-in or segmented by improvement/team/effort.
- Add privacy controls for profiles and public student work.

## 9. Systemic Pitfalls to Avoid

- **Toxic leaderboards:** Static rank can demotivate weaker learners. Use improvement and personal-best boards.
- **Over-gamification:** Points without meaning can crowd out intrinsic motivation.
- **Cognitive overload:** Too many animations, colours, timers, and options can reduce learning.
- **Reward dependence:** Learners may work only for badges. Pair rewards with reflection and mastery.
- **False personalisation:** Do not label students permanently as weak/visual/auditory.
- **AI hallucination:** AI explanations and generated items need validation and source/rubric constraints.
- **Privacy risk:** Speech, names, leaderboards, and public forums require consent and moderation.
- **Static duplication:** Hundreds of standalone HTML files make maintenance difficult; move toward configurable engines.

## 10. Recommended Implementation Roadmap

### Phase 1: Standardise metadata

- Create a central `learning_objects.json` or database table.
- Tag every current file by object type, skill, difficulty, time, and data policy.
- Consolidate repeated MCQ/cloze engines.

### Phase 2: Improve formative feedback

- Add explanations, confidence ratings, hints, and retry analytics.
- Add item-level misconception tags.
- Add private mastery dashboard.

### Phase 3: Add spaced repetition and AI tutor

- Convert missed vocabulary/grammar items into review cards.
- Add AI hint and explanation generation with teacher-approved templates.

### Phase 4: Expand productive skills

- Add writing sandbox, pronunciation practice, speaking analytics, debate simulator, and peer teaching.

### Phase 5: Build full adaptive ecosystem

- Personal pathway engine.
- Predictive support dashboard.
- Portfolio and public showcase with consent.
- Integrated teacher authoring tools.

## 11. Age Groups and Contexts

| Object family | K-12 | Higher Education | ESL | Professional | Self-learning | Corporate |
|---|---:|---:|---:|---:|---:|---:|
| MCQ/retry quests | Yes | Yes | Yes | Yes | Yes | Yes |
| Cloze/story quests | Yes | Yes | Yes | Yes | Yes | Some |
| Video quests | Yes | Yes | Yes | Yes | Yes | Yes |
| Word games | Yes | Yes | Yes | Some | Yes | Some |
| Speaking/pronunciation | Yes | Yes | Excellent | Excellent | Yes | Excellent |
| Literature guides | Some | Excellent | Some | Rare | Yes | Rare |
| Project assignments | Yes | Excellent | Yes | Excellent | Some | Excellent |
| Leaderboards | Cautious | Cautious | Cautious | Cautious | Optional | Team-only |
| AI tutor | Guarded | Excellent | Excellent | Excellent | Excellent | Excellent |
| Writing sandbox | Yes | Excellent | Excellent | Excellent | Excellent | Excellent |
| Debate/simulation | Older | Excellent | Yes | Excellent | Yes | Excellent |

## 12. Concluding Blueprint

This repository already contains the raw ingredients of a powerful personalised English learning platform: habit loops, micro-quests, vocabulary games, story practice, video comprehension, speaking prompts, literature resources, student showcases, and analytics. To reach Duolingo-scale quality, the platform should evolve from many individual pages into a coherent **learning object system**:

1. Every file becomes a typed learning object.
2. Every object declares skills, difficulty, feedback, and data requirements.
3. Every student action produces useful formative analytics.
4. Every mistake routes to support, not shame.
5. Every game mechanic serves mastery, curiosity, persistence, or belonging.
6. AI personalises hints, pathways, feedback, and review while preserving teacher oversight and learner dignity.

The ideal future platform is not simply more quizzes. It is a humane AI-powered learning ecosystem where each learner experiences the app as a patient tutor, a motivating coach, a playful game world, a reflective journal, a performance studio, and a trusted map toward communicative confidence.
