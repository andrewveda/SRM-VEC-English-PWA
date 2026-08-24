/* ══════════════════════════════════════════════════════════════
   QUEST DATA DATABASE
   Add, remove, or modify your quests and dialogues here easily.
   ══════════════════════════════════════════════════════════════ */
const QuestDatabase = {
  "Carpe_Diem": {
    questID: "Quest 206",
    title: "Carpe Diem",
    subtitle: "A conversation on time and seizing the day.",
    conversation: [
      { speaker: 'teacher', emotion: '💡', text: 'Carpe ___. Seize the day before it slips away!', answer: 'diem' },
      { speaker: 'scholar', emotion: '😅', text: 'I tried to seize the day today, but I almost missed the ___.', answer: 'bus' },
      { speaker: 'teacher', emotion: '🧘', text: 'Sometimes the bus we miss teaches us to slow ___ and spend time on introspection.', answer: 'down' },
      { speaker: 'scholar', emotion: '🤔', text: 'But life is always busy. There is always something to ___.', answer: 'do' },
      { speaker: 'teacher', emotion: '🌿', text: 'The mind becomes busy when it tries to hold ___.', answer: 'everything' },
      { speaker: 'scholar', emotion: '🙇', text: 'So what should I do when there are too many ___?', answer: 'tasks' },
      { speaker: 'teacher', emotion: '✨', text: 'Pick one task and take one ___ at a time. Baby steps!', answer: 'step' },
      { speaker: 'scholar', emotion: '📉', text: 'And if I ___ while trying, what should I do?', answer: 'fail' },
      { speaker: 'teacher', emotion: '🎯', text: 'Remember what Beckett said! Ever tried. Ever failed. No matter. Try again. Fail again. Fail ___.', answer: 'better' },
      { speaker: 'scholar', emotion: '💡', text: 'Then the important thing is to do the classic reframing and focus on ___.', answer: 'trying' },
      { speaker: 'teacher', emotion: '🎉', text: 'Absolutely! We should ___ effort! I personally celebrate failure!', answer: 'celebrate' },
      { speaker: 'scholar', emotion: '🚀', text: 'Like Edison, I am also going to set a record of failing at least a ___ times!', answer: 'thousand' }
    ]
  },
  "Zen_Empty_Cup": {
    questID: "Zen 01",
    title: "The Empty Cup",
    subtitle: "A Zen parable on the art of unlearning.",
    conversation: [
      { speaker: 'scholar', emotion: '📖', text: 'Master, I have read many books and studied many ___ of philosophy.', answer: 'schools' },
      { speaker: 'teacher', emotion: '🍵', text: 'You are like this cup, full of your own ___ opinions and preconceptions.', answer: 'opinions' },
      { speaker: 'scholar', emotion: '❓', text: 'How can I ever hope to learn anything ___?', answer: 'new' },
      { speaker: 'teacher', emotion: '✨', text: 'First, you must learn to empty your ___ before I can pour anything in.', answer: 'cup' }
    ]
  },
  "Zen_Value_Name": {
    questID: "Zen 02",
    title: "The Marketplace Gift",
    subtitle: "A lesson on perception and emotional boundaries.",
    conversation: [
      { speaker: 'scholar', emotion: '😤', text: 'Master, a man insulted me today in the public marketplace without any ___!', answer: 'cause' },
      { speaker: 'teacher', emotion: '🧘', text: 'Tell me, if someone hands you a gift and you refuse to ___, to whom does the gift belong?', answer: 'accept' },
      { speaker: 'scholar', emotion: '🤔', text: 'Naturally, it would still belong to the ___ who tried to give it.', answer: 'person' },
      { speaker: 'teacher', emotion: '🌿', text: 'The same rule applies to insults and unkind words. Do not let them ___ your inner peace.', answer: 'disturb' },
      { speaker: 'scholar', emotion: '💡', text: 'So true freedom is choosing what we allow into our ___ space.', answer: 'mental' }
    ]
  },
  "Quote_Aurelius": {
    questID: "Quote 01",
    title: "The Inner Citadel",
    subtitle: "Stoic wisdom from Marcus Aurelius.",
    conversation: [
      { speaker: 'teacher', emotion: '🏛️', text: 'Marcus Aurelius wrote: You have power over your mind — not outside ___. Realize this, and you will find strength.', answer: 'events' },
      { speaker: 'scholar', emotion: '😰', text: 'That is easier said than done when exam results are ___ out.', answer: 'coming' },
      { speaker: 'teacher', emotion: '🛡️', text: 'External circumstances cannot hurt you; only your ___ to them creates suffering.', answer: 'reaction' },
      { speaker: 'scholar', emotion: '💪', text: 'So instead of wishing for an easy life, I should build a stronger ___ to weather the storm.', answer: 'mind' }
    ]
  },
  "Habits_Compound": {
    questID: "Habits 01",
    title: "Compound Growth",
    subtitle: "Behavioral science insights on marginal gains.",
    conversation: [
      { speaker: 'teacher', emotion: '📈', text: 'If you get one percent better each day for a year, you will end up thirty-seven times ___ by the time you are done.', answer: 'better' },
      { speaker: 'scholar', emotion: '📉', text: 'That sounds impossible. Small changes surely make very little ___ in the short run.', answer: 'difference' },
      { speaker: 'teacher', emotion: '🌱', text: 'Habits are the compound interest of self-___. Success is the product of daily habits.', answer: 'improvement' },
      { speaker: 'scholar', emotion: '🎯', text: 'Then I should stop worrying about massive goals and focus on building a better ___ routine.', answer: 'daily' }
    ]
  }
};
