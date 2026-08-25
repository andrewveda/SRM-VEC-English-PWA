/* ══════════════════════════════════════════════════════════════
   QUEST DATA DATABASE
   Add, remove, or modify your quests and dialogues here easily.
   ══════════════════════════════════════════════════════════════ */
const QuestDatabase = {
  "Zen_Old_Man": {
    questID: "Quest Story 1",
    title: "The Old Man's Horse",
    subtitle: "A Zen parable on judgment, fortune, and perspective.",
    conversation: [
      { speaker: 'teacher', emotion: '🐎', text: 'An old man lost his prized horse. The villagers came to console him: "What terrible ___!"', answer: 'misfortune' },
      { speaker: 'scholar', emotion: '🤔', text: 'The old man merely shrugged. "Maybe," he said. "We cannot yet know what this will ___."', answer: 'bring' },
      { speaker: 'teacher', emotion: '🐎', text: 'A few days later, the horse returned, bringing a herd of wild horses with it. The villagers cried, "What extraordinary ___!"', answer: 'fortune' },
      { speaker: 'scholar', emotion: '🧘', text: 'The old man smiled. "Maybe," he replied. "Let us not be too quick to ___."', answer: 'celebrate' },
      { speaker: 'teacher', emotion: '😲', text: 'His son began taming the wild horses, but one threw him to the ground and broke his ___.', answer: 'leg' },
      { speaker: 'scholar', emotion: '🌧️', text: 'The villagers returned in sorrow. "What terrible ___!" they lamented.', answer: 'misfortune' },
      { speaker: 'teacher', emotion: '🧘', text: 'The old man remained unmoved. "Maybe," he said. "Who are we to ___?"', answer: 'judge' },
      { speaker: 'scholar', emotion: '⚔️', text: 'Soon afterward, soldiers came to the village and conscripted every able-bodied young man into ___.', answer: 'war' },
      { speaker: 'teacher', emotion: '🛡️', text: 'Because of his broken leg, the old man’s son was spared. The villagers fell silent, suddenly ___ of their earlier judgments.', answer: 'ashamed' },
      { speaker: 'scholar', emotion: '🌿', text: 'The old man only said, "Maybe." For what seems like fortune may become misfortune, and what seems like misfortune may become a ___ blessing.', answer: 'hidden' },
      { speaker: 'teacher', emotion: '🌊', text: 'The villagers finally understood: the old man was not calling any event fortunate or unfortunate. He was refusing to make a ___ judgment.', answer: 'final' },
      { speaker: 'scholar', emotion: '🔥', text: 'And perhaps there is another wisdom: when life gives us what we did not choose, we need not merely endure our fate. We can learn to ___ it.', answer: 'love' }
    ]
  },

  "Zen_Tea_Cup": {
    questID: "Quest Story 2",
    title: "The Overflowing Cup",
    subtitle: "A Zen story about emptiness, knowledge, and the mind.",
    conversation: [
      { speaker: 'teacher', emotion: '🍵', text: 'A learned professor travelled to a Zen master, eager to demonstrate the breadth of his ___ knowledge.', answer: 'scholarly' },
      { speaker: 'scholar', emotion: '📚', text: 'He spoke at length about philosophy, religion, and meditation, leaving scarcely a ___ for the master to speak.', answer: 'moment' },
      { speaker: 'teacher', emotion: '🧘', text: 'When tea arrived, the master began pouring. The cup soon reached the ___, yet he continued.', answer: 'brim' },
      { speaker: 'scholar', emotion: '😲', text: 'Tea spilled across the table. "Stop!" cried the professor. "The cup is already ___!"', answer: 'full' },
      { speaker: 'teacher', emotion: '🍵', text: 'The master calmly set down the pot. "Like this cup," he said, "you are full of your own ___."', answer: 'opinions' },
      { speaker: 'scholar', emotion: '🤔', text: 'The professor protested that he had come to learn, but the master asked, "How can I pour anything new into a mind that leaves no ___?"', answer: 'space' },
      { speaker: 'teacher', emotion: '🌿', text: 'The professor fell silent. For the first time that afternoon, he had nothing to ___.', answer: 'say' },
      { speaker: 'scholar', emotion: '🧘', text: 'The master smiled. "Before seeking wisdom, you must first be willing to ___ what you think you already know."', answer: 'question' },
      { speaker: 'teacher', emotion: '🌊', text: 'The professor looked at the overflowing cup and understood that knowledge without humility can become a ___ rather than a doorway.', answer: 'barrier' },
      { speaker: 'scholar', emotion: '💡', text: 'He bowed and asked, "Then what should I bring to my next lesson?" The master replied, "Bring an ___ mind."', answer: 'empty' },
      { speaker: 'teacher', emotion: '🍃', text: 'The professor smiled. He had arrived hoping to fill his mind with answers, but left with a new ___ for questions.', answer: 'appreciation' },
      { speaker: 'scholar', emotion: '✨', text: 'For sometimes wisdom begins not when we discover another answer, but when we create enough ___ to receive one.', answer: 'space' }
    ]
  },

  "Zen_Muddy_Water": {
    questID: "Quest Story 3",
    title: "The Muddy Road",
    subtitle: "A Zen story about attachment, resentment, and letting go.",
    conversation: [
      { speaker: 'teacher', emotion: '🌧️', text: 'Two monks were travelling along a muddy road when they came upon a young woman waiting beside a flooded ___.', answer: 'crossing' },
      { speaker: 'scholar', emotion: '😟', text: 'The younger monk hesitated. "She will never make it across without getting her clothes ___."', answer: 'soiled' },
      { speaker: 'teacher', emotion: '🧘', text: 'Without a word, the elder monk lifted the woman and carried her safely to the other ___.', answer: 'side' },
      { speaker: 'scholar', emotion: '😲', text: 'The woman thanked him and continued on her way. The monks walked in silence, but the younger monk became increasingly ___.', answer: 'agitated' },
      { speaker: 'teacher', emotion: '🤔', text: 'After several miles, he could bear it no longer. "We monks are forbidden to touch women. Why did you carry her?" he ___.', answer: 'demanded' },
      { speaker: 'scholar', emotion: '🌿', text: 'The elder monk looked at him with quiet amusement. "I left the woman back at the river," he said. "Why are you still ___ her?"', answer: 'carrying' },
      { speaker: 'teacher', emotion: '💭', text: 'The younger monk fell silent. He realised that although the elder had physically carried the woman for only a few moments, he had been carrying the incident in his own mind for ___ hours.', answer: 'several' },
      { speaker: 'scholar', emotion: '🍃', text: 'The elder monk continued walking. "An event may pass in an instant, but our attachment to it can ___ for years."', answer: 'linger' },
      { speaker: 'teacher', emotion: '🧘', text: 'The younger monk finally understood that letting go does not mean forgetting. It means refusing to ___ what has already passed.', answer: 'rehearse' },
      { speaker: 'scholar', emotion: '🌊', text: 'He took a deep breath and released his resentment. The road ahead was still muddy, but his mind was suddenly ___.', answer: 'lighter' },
      { speaker: 'teacher', emotion: '✨', text: 'The elder monk smiled. "The past is a place we may visit, but it is a poor place to ___."', answer: 'live' },
      { speaker: 'scholar', emotion: '🍃', text: 'And together they continued down the road, leaving the muddy crossing — and the burden of the past — ___ them.', answer: 'behind' }
    ]
  },

  "Zen_Two_Arrows": {
    questID: "Quest Story 4",
    title: "The Two Arrows",
    subtitle: "A Buddhist teaching on pain, resistance, and suffering.",
    conversation: [
      { speaker: 'teacher', emotion: '🏹', text: 'The teacher once asked his disciples: "If a person is struck by an arrow, does it ___?"', answer: 'hurt' },
      { speaker: 'scholar', emotion: '🤔', text: 'The disciples replied, "Of course. The wound brings immediate ___."', answer: 'pain' },
      { speaker: 'teacher', emotion: '🏹', text: 'The teacher then asked, "And what if that person is struck by a second ___?"', answer: 'arrow' },
      { speaker: 'scholar', emotion: '😣', text: 'They answered, "Then the suffering would be even more ___."', answer: 'intense' },
      { speaker: 'teacher', emotion: '🧘', text: 'The teacher explained: "The first arrow is the pain that life inevitably ___."', answer: 'brings' },
      { speaker: 'scholar', emotion: '🏹', text: 'The second arrow, however, is our resistance — the anger, fear, and ___ we add to what has already happened.', answer: 'resentment' },
      { speaker: 'teacher', emotion: '🌧️', text: 'We cannot always prevent the first arrow. But must we ourselves ___ the second?', answer: 'fire' },
      { speaker: 'scholar', emotion: '💭', text: 'A loss occurs. We grieve. That is the first arrow. But when we begin asking, "Why me? This should never have ___!" we may be creating another wound.', answer: 'happened' },
      { speaker: 'teacher', emotion: '🌿', text: 'The wise person does not pretend that pain is pleasant. Rather, they learn not to ___ suffering unnecessarily upon it.', answer: 'heap' },
      { speaker: 'scholar', emotion: '🧘', text: 'Pain may knock at the door of the mind. We need not invite it to ___ the house.', answer: 'occupy' },
      { speaker: 'teacher', emotion: '🏹', text: 'The first arrow may be beyond our control. The second often depends upon how we ___ to the first.', answer: 'respond' },
      { speaker: 'scholar', emotion: '✨', text: 'To see the second arrow clearly is to discover a small space between what happens to us and what we ___ from it.', answer: 'create' }
    ]
  },

  "Zen_Broken_Statue": {
    questID: "Quest Story 5",
    title: "The Broken Statue",
    subtitle: "A Zen story about impermanence, attachment, and what we choose to protect.",
    conversation: [
      { speaker: 'teacher', emotion: '🗿', text: 'A young monk was entrusted with a beautiful wooden statue. He polished it each morning and guarded it with great ___.', answer: 'care' },
      { speaker: 'scholar', emotion: '🧹', text: 'One winter evening, he noticed a small crack in the statue. He immediately became ___ that something precious had been damaged.', answer: 'distressed' },
      { speaker: 'teacher', emotion: '🌧️', text: 'He hurried to the master. "What should I do? I have failed to ___ it."', answer: 'protect' },
      { speaker: 'scholar', emotion: '🧘', text: 'The master examined the statue and said calmly, "It was never yours to ___."', answer: 'possess' },
      { speaker: 'teacher', emotion: '🤔', text: 'The monk looked puzzled. "But I was responsible for it." The master nodded. "Responsible, yes. But responsibility is not the same as ___."', answer: 'ownership' },
      { speaker: 'scholar', emotion: '🍃', text: 'The master tapped the crack gently. "Everything made of wood will one day decay. Everything built will eventually ___."', answer: 'fall' },
      { speaker: 'teacher', emotion: '🗿', text: 'The monk frowned. "Then why care for anything at all?" The master smiled. "Because impermanence does not make care ___."', answer: 'meaningless' },
      { speaker: 'scholar', emotion: '🌱', text: '"Care for what is placed in your hands," the master continued, "but do not demand that it remain ___."', answer: 'unchanged' },
      { speaker: 'teacher', emotion: '💭', text: 'The monk finally understood that his suffering had come not from the crack itself, but from his insistence that the statue should never ___ it.', answer: 'change' },
      { speaker: 'scholar', emotion: '🧘', text: 'He touched the damaged wood and bowed. For the first time, he could appreciate the statue without needing it to be ___ forever.', answer: 'perfect' },
      { speaker: 'teacher', emotion: '🌊', text: 'The master smiled. "To care without clinging, to love without possessing — this is to live in harmony with ___."', answer: 'impermanence' },
      { speaker: 'scholar', emotion: '✨', text: 'And the monk returned to his work, polishing the statue not because it would last forever, but because it was here ___ now.', answer: 'for' }
    ]
  },

  "Zen_Empty_Boat": {
    questID: "Quest Story 6",
    title: "The Empty Boat",
    subtitle: "A Zen story about anger, blame, and the stories we create.",
    conversation: [
      { speaker: 'teacher', emotion: '🚣', text: 'A man was rowing his boat across a quiet lake when another boat drifted straight toward ___.', answer: 'him' },
      { speaker: 'scholar', emotion: '😠', text: 'He shouted, "Watch where you are going!" But the boat continued toward him, completely ___.', answer: 'silent' },
      { speaker: 'teacher', emotion: '💢', text: 'As the boats collided, his anger erupted. "You careless ___! Could you not see me?"', answer: 'fool' },
      { speaker: 'scholar', emotion: '😶', text: 'Then he looked into the other boat and discovered that it was entirely ___.', answer: 'empty' },
      { speaker: 'teacher', emotion: '🌊', text: 'His anger disappeared almost as quickly as it had arisen. There was no careless sailor to ___, no insult to return.', answer: 'blame' },
      { speaker: 'scholar', emotion: '🤔', text: 'Later, his teacher asked, "What changed when you saw the empty ___?"', answer: 'boat' },
      { speaker: 'teacher', emotion: '🧘', text: 'The man thought for a moment. "I stopped telling myself that someone had deliberately ___ me."', answer: 'wronged' },
      { speaker: 'scholar', emotion: '🍃', text: 'The teacher nodded. "Often the event is small, but the story we build around it makes the anger ___."', answer: 'grow' },
      { speaker: 'teacher', emotion: '💭', text: '"When there is someone to blame, the mind begins constructing motives, intentions, and ___."', answer: 'offences' },
      { speaker: 'scholar', emotion: '🌿', text: '"But when the boat is empty, there is nothing to defend against. The anger has nowhere to ___."', answer: 'land' },
      { speaker: 'teacher', emotion: '🌊', text: 'The man watched the empty boat drift away. He realised that sometimes what disturbs us most is not what happened, but the meaning we ___ to it.', answer: 'attach' },
      { speaker: 'scholar', emotion: '✨', text: 'From that day onward, whenever anger arose, he first asked himself: "Is this boat actually ___?"', answer: 'occupied' }
    ]
  },

  "Zen_Moon_In_Water": {
    questID: "Quest Story 7",
    title: "The Moon in the Water",
    subtitle: "A Zen story about grasping, illusion, and letting go.",
    conversation: [
      { speaker: 'teacher', emotion: '🌕', text: 'One evening, a young monk saw the full moon shining ___ in the temple pond.', answer: 'beautifully' },
      { speaker: 'scholar', emotion: '🤔', text: 'He leaned over the water and thought, "How fortunate I am to have found such a perfect ___."', answer: 'reflection' },
      { speaker: 'teacher', emotion: '🌊', text: 'Wanting to hold the moon, he reached into the pond. His fingers disturbed the water, and the image began to ___.', answer: 'shatter' },
      { speaker: 'scholar', emotion: '😲', text: 'He quickly withdrew his hand, but the moon had already disappeared from the rippling ___.', answer: 'surface' },
      { speaker: 'teacher', emotion: '😔', text: 'The monk became frustrated. "I only wanted to keep something so ___."', answer: 'beautiful' },
      { speaker: 'scholar', emotion: '🧘', text: 'The master looked into the pond. "Did the moon disappear, or did your attempt to possess its ___ disappear?"', answer: 'image' },
      { speaker: 'teacher', emotion: '🌙', text: 'The monk said nothing. The water gradually became still, and the moon quietly ___ once more.', answer: 'returned' },
      { speaker: 'scholar', emotion: '💭', text: '"You disturbed the water because you wanted to grasp what could only be ___."', answer: 'seen' },
      { speaker: 'teacher', emotion: '🍃', text: 'The monk watched the reflection without reaching for it. For the first time, he could admire something without trying to ___ it.', answer: 'possess' },
      { speaker: 'scholar', emotion: '🌊', text: 'The master smiled. "Some things remain beautiful precisely because we cannot hold them ___."', answer: 'forever' },
      { speaker: 'teacher', emotion: '✨', text: 'The monk bowed, understanding that grasping can destroy the very thing we hope to ___ .', answer: 'keep' },
      { speaker: 'scholar', emotion: '🌕', text: 'The pond became still. The moon remained beyond his reach, and that was ___ enough.', answer: 'beautiful' }
    ]
  },

  "Zen_The_Broken_Bowl": {
    questID: "Quest Story 8",
    title: "The Broken Bowl",
    subtitle: "A Zen story about impermanence, attachment, and gratitude.",
    conversation: [
      { speaker: 'teacher', emotion: '🥣', text: 'A monk treasured an old clay bowl that had served him faithfully for many ___.', answer: 'years' },
      { speaker: 'scholar', emotion: '🌿', text: 'Every morning, he washed it carefully and placed it beside his mat with great ___.', answer: 'reverence' },
      { speaker: 'teacher', emotion: '😟', text: 'One morning, the bowl slipped from his hands and struck the floor. A long crack appeared across its ___.', answer: 'surface' },
      { speaker: 'scholar', emotion: '💔', text: 'The monk stared at it in silence. He was surprised by how deeply the small accident had ___ him.', answer: 'troubled' },
      { speaker: 'teacher', emotion: '🧘', text: 'His master noticed his distress. "Why are you grieving for a bowl that has already given you so much ___?"', answer: 'service' },
      { speaker: 'scholar', emotion: '🤔', text: 'The monk replied, "Because I wanted it to remain ___."', answer: 'unchanged' },
      { speaker: 'teacher', emotion: '🍂', text: 'The master nodded. "Then you were not only caring for the bowl. You were asking the ___ to stop."', answer: 'world' },
      { speaker: 'scholar', emotion: '🌧️', text: 'The monk looked again at the crack. He realised that every meal he had eaten from the bowl had been a gift that could never be ___ again.', answer: 'repeated' },
      { speaker: 'teacher', emotion: '🌱', text: 'Instead of hiding the broken bowl, he repaired it and continued to use it with renewed ___.', answer: 'gratitude' },
      { speaker: 'scholar', emotion: '✨', text: 'The master smiled. "You cannot keep a moment by keeping the thing that reminds you of ___."', answer: 'it' },
      { speaker: 'teacher', emotion: '🥣', text: 'The monk ate his evening meal from the cracked bowl, no longer wishing it were whole. He was simply grateful that it had been ___ at all.', answer: 'his' },
      { speaker: 'scholar', emotion: '🍃', text: 'And for the first time, he understood: what ends can still be ___ .', answer: 'loved' }
    ]
  },

  "Mind_Confirmation_Bias": {
    questID: "Quest Story 9",
    title: "The Evidence We Choose",
    subtitle: "A psychological story about confirmation bias.",
    conversation: [
      { speaker: 'teacher', emotion: '🔍', text: 'A student became convinced that her new teacher disliked her. She began noticing every ___ that seemed to confirm it.', answer: 'detail' },
      { speaker: 'scholar', emotion: '🤔', text: 'When the teacher praised her work, she dismissed it as politeness. When he corrected a mistake, she took it as ___ of her suspicion.', answer: 'proof' },
      { speaker: 'teacher', emotion: '🧩', text: 'Her friend asked, "What about the times he helped you?" She immediately found a reason to ___ them.', answer: 'discount' },
      { speaker: 'scholar', emotion: '😐', text: 'Soon, every neutral action seemed hostile. Every friendly action seemed ___ .', answer: 'insincere' },
      { speaker: 'teacher', emotion: '💭', text: 'The student thought she was gathering evidence, but she was actually selecting evidence that supported what she already ___.', answer: 'believed' },
      { speaker: 'scholar', emotion: '🔎', text: 'Her friend gave her a strange challenge: "Tomorrow, look only for evidence that your teacher ___ you."', answer: 'respects' },
      { speaker: 'teacher', emotion: '😲', text: 'The next day, she noticed that he remembered her name, asked about her project, and recommended a book suited to her ___.', answer: 'interests' },
      { speaker: 'scholar', emotion: '🧠', text: 'She suddenly realised that the evidence had not changed. Only the question she was asking had ___.', answer: 'changed' },
      { speaker: 'teacher', emotion: '⚖️', text: 'Our minds are excellent at finding patterns, but sometimes they become too eager to find evidence for a ___ we have already reached.', answer: 'conclusion' },
      { speaker: 'scholar', emotion: '💡', text: 'The danger is not merely being wrong. It is becoming skilled at making our ___ look right.', answer: 'beliefs' },
      { speaker: 'teacher', emotion: '🔄', text: 'A useful question is not, "What proves me right?" but, "What evidence would make me ___?"', answer: 'wrong' },
      { speaker: 'scholar', emotion: '✨', text: 'The strongest belief is not the one that resists evidence, but the one that can ___ it.', answer: 'survive' }
    ]
  },

  "Mind_Sunk_Cost": {
    questID: "Quest Story 10",
    title: "The Empty Seat",
    subtitle: "A psychological story about the sunk cost fallacy.",
    conversation: [
      { speaker: 'teacher', emotion: '🎟️', text: 'Maya bought an ___ ticket to a three-hour play she had been looking forward to for weeks.', answer: 'expensive' },
      { speaker: 'scholar', emotion: '😐', text: 'Twenty minutes into the performance, she realised she was miserable. The play was dull, and she wanted to ___ home.', answer: 'go' },
      { speaker: 'teacher', emotion: '🤔', text: 'Her friend whispered, "Then let us leave." Maya shook her head. "But I already ___ for these tickets."', answer: 'paid' },
      { speaker: 'scholar', emotion: '🎭', text: 'They stayed through the first act. During the interval, her friend asked, "Are you enjoying it now?" Maya ___ her head.', answer: 'shook' },
      { speaker: 'teacher', emotion: '⏳', text: 'Still, she returned to her seat. "We have already wasted an hour. We might as well stay for the ___."', answer: 'rest' },
      { speaker: 'scholar', emotion: '💭', text: 'Her friend smiled. "Will sitting through another two hours make the money you spent yesterday ___?"', answer: 'return' },
      { speaker: 'teacher', emotion: '😲', text: 'Maya paused. The money was gone whether she stayed or left. It was a ___ cost.', answer: 'sunk' },
      { speaker: 'scholar', emotion: '🧠', text: 'What mattered now was not what she had already lost, but what she would ___ from this moment onward.', answer: 'choose' },
      { speaker: 'teacher', emotion: '🚪', text: 'She left the theatre. For the first time that evening, she felt relieved rather than ___ .', answer: 'guilty' },
      { speaker: 'scholar', emotion: '⚖️', text: 'Her friend explained, "We often continue with something simply because stopping makes the earlier cost feel ___."', answer: 'wasted' },
      { speaker: 'teacher', emotion: '💡', text: 'But abandoning a bad decision does not waste what was spent. It prevents us from ___ more.', answer: 'wasting' },
      { speaker: 'scholar', emotion: '✨', text: 'Maya looked back at the theatre and smiled. Sometimes the wisest choice is knowing when to ___ .', answer: 'leave' }
    ]
  },

  "Mind_Dunning_Kruger": {
    questID: "Quest Story 11",
    title: "The Loudest Expert",
    subtitle: "A psychological story about confidence, competence, and the Dunning–Kruger effect.",
    conversation: [
      { speaker: 'teacher', emotion: '🎤', text: 'When the town announced a public debate, Arun volunteered immediately. He had read two articles about the subject and felt completely ___ .', answer: 'prepared' },
      { speaker: 'scholar', emotion: '😎', text: 'Before the debate began, he confidently declared, "There is nothing about this topic that I do not ___."', answer: 'understand' },
      { speaker: 'teacher', emotion: '🤔', text: 'His opponent asked a simple question about a technical detail. Arun answered quickly, but the answer was ___ .', answer: 'incorrect' },
      { speaker: 'scholar', emotion: '😏', text: 'Instead of reconsidering, Arun insisted that the question itself was ___ .', answer: 'irrelevant' },
      { speaker: 'teacher', emotion: '📚', text: 'After the debate, a researcher showed him several books on the subject. Arun was surprised by how much remained ___ to him.', answer: 'unknown' },
      { speaker: 'scholar', emotion: '😶', text: 'He spent the next month studying. The more he learned, the more ___ his earlier certainty seemed.', answer: 'embarrassing' },
      { speaker: 'teacher', emotion: '📈', text: 'He discovered that beginners often cannot see the boundaries of their own ___ .', answer: 'ignorance' },
      { speaker: 'scholar', emotion: '🧠', text: 'Without enough knowledge to recognise mistakes, confidence can become strangely ___ .', answer: 'inflated' },
      { speaker: 'teacher', emotion: '😎', text: 'Arun began replacing "I know" with "I think" and "I am certain" with "I may be ___."', answer: 'wrong' },
      { speaker: 'scholar', emotion: '🌱', text: 'Months later, he knew far more than he had known before, yet he spoke with greater ___ .', answer: 'humility' },
      { speaker: 'teacher', emotion: '⚖️', text: 'His teacher asked why. Arun replied, "Learning has shown me how much there is still to ___."', answer: 'learn' },
      { speaker: 'scholar', emotion: '✨', text: 'He finally understood: the beginning of expertise is often the moment ___ ends.', answer: 'certainty' }
    ]
  },

  "Mind_Cognitive_Dissonance": {
    questID: "Quest Story 12",
    title: "The Honest Smoker",
    subtitle: "A psychological story about cognitive dissonance.",
    conversation: [
      { speaker: 'teacher', emotion: '🚬', text: 'Ravi often told his friends that he cared deeply about his health, yet every evening he bought another ___ of cigarettes.', answer: 'packet' },
      { speaker: 'scholar', emotion: '🤔', text: 'One evening, a friend pointed out the contradiction. "If health matters so much, why do you keep doing something you know is ___?"', answer: 'harmful' },
      { speaker: 'teacher', emotion: '😏', text: 'Ravi shrugged. "My grandfather smoked every day and lived to be ninety. Perhaps the danger is ___."', answer: 'exaggerated' },
      { speaker: 'scholar', emotion: '🧠', text: 'His friend asked, "Do you really believe that, or does believing it make your habit easier to ___?"', answer: 'justify' },
      { speaker: 'teacher', emotion: '😶', text: 'Ravi fell silent. He realised he had been changing his ___ about smoking rather than changing his behaviour.', answer: 'beliefs' },
      { speaker: 'scholar', emotion: '⚖️', text: 'When our actions conflict with the person we believe ourselves to be, the mind experiences an uncomfortable inner ___.', answer: 'tension' },
      { speaker: 'teacher', emotion: '💭', text: 'We can resolve that tension in two ways: change what we do, or change the story we tell ourselves about what we ___.', answer: 'do' },
      { speaker: 'scholar', emotion: '🔄', text: 'Ravi began noticing how often he invented explanations that allowed him to remain both a "health-conscious person" and a regular ___.', answer: 'smoker' },
      { speaker: 'teacher', emotion: '🪞', text: 'The uncomfortable part was not discovering that he had been inconsistent. It was discovering how easily he could ___ the inconsistency.', answer: 'rationalise' },
      { speaker: 'scholar', emotion: '🌱', text: 'He finally stopped asking, "How can I prove that I am the person I think I am?" and began asking, "What would that person actually ___?"', answer: 'do' },
      { speaker: 'teacher', emotion: '🧩', text: 'The question changed everything. Identity was no longer a story he could merely ___; it had to be reflected in his choices.', answer: 'tell' },
      { speaker: 'scholar', emotion: '✨', text: 'He learned a difficult truth: when behaviour contradicts belief, the mind will often change the ___ before it changes the behaviour.', answer: 'story' }
    ]
  },

  "Mind_Choice_Paradox": {
    questID: "Quest Story 13",
    title: "The Hundred Doors",
    subtitle: "A psychological story about choice, freedom, and decision fatigue.",
    conversation: [
      { speaker: 'teacher', emotion: '🚪', text: 'A traveller arrived at an inn with one hundred rooms. The keeper smiled and told him, "You may choose any room you ___."', answer: 'wish' },
      { speaker: 'scholar', emotion: '🤔', text: 'The traveller was delighted. He walked down the corridor, comparing every door, every view, and every possible ___ .', answer: 'advantage' },
      { speaker: 'teacher', emotion: '🗝️', text: 'After an hour, he had inspected forty rooms but still could not ___ .', answer: 'decide' },
      { speaker: 'scholar', emotion: '😓', text: 'The keeper suggested a comfortable room near the garden. "But what if room eighty-two has a better ___?" the traveller asked.', answer: 'view' },
      { speaker: 'teacher', emotion: '🚪', text: 'He continued searching. With every new possibility, his certainty became more ___ .', answer: 'fragile' },
      { speaker: 'scholar', emotion: '💭', text: 'By evening, he had examined all one hundred rooms. Now he feared choosing the "wrong" one, because every rejected room represented a possible ___ .', answer: 'betterment' },
      { speaker: 'teacher', emotion: '🌙', text: 'The keeper finally asked, "How many rooms have you enjoyed?" The traveller looked around. "None. I have been too busy trying to ___ the best one."', answer: 'find' },
      { speaker: 'scholar', emotion: '🧠', text: 'The keeper nodded. "Freedom gives us possibilities. Too many possibilities can make us afraid of ___."', answer: 'choosing' },
      { speaker: 'teacher', emotion: '⚖️', text: 'The traveller realised that an excellent choice could feel disappointing when compared with a hundred ___ alternatives.', answer: 'imagined' },
      { speaker: 'scholar', emotion: '🌿', text: 'He finally chose the first room he had liked. It had not become better. He had simply stopped ___ it against every other possibility.', answer: 'comparing' },
      { speaker: 'teacher', emotion: '✨', text: 'As he closed the door, the keeper said, "A choice does not need to be perfect to become ___."', answer: 'good' },
      { speaker: 'scholar', emotion: '🔑', text: 'The traveller smiled. He had spent the day looking for the perfect door, only to discover that the real freedom was learning when to ___ searching.', answer: 'stop' }
    ]
  },

  "Mind_Projection": {
    questID: "Quest Story 14",
    title: "The Unanswered Message",
    subtitle: "A psychological story about projection, uncertainty, and the stories we invent.",
    conversation: [
      { speaker: 'teacher', emotion: '📱', text: 'Leena sent her colleague a message asking an important question. Hours passed without a ___.', answer: 'reply' },
      { speaker: 'scholar', emotion: '🤔', text: 'At first, she thought he was busy. Then she noticed that he had been online. A small doubt began to ___ in her mind.', answer: 'grow' },
      { speaker: 'teacher', emotion: '💭', text: '"Perhaps he is annoyed with me," she thought. "Maybe he thought my question was ___."', answer: 'foolish' },
      { speaker: 'scholar', emotion: '😟', text: 'By evening, she had constructed an elaborate explanation for his silence, despite having almost no ___ to support it.', answer: 'evidence' },
      { speaker: 'teacher', emotion: '🪞', text: 'Her friend asked, "What makes you think he is angry?" Leena listed everything she had been feeling as though it were ___ about him.', answer: 'evidence' },
      { speaker: 'scholar', emotion: '🧠', text: 'The friend pointed out that Leena might be placing her own fears onto someone else. She was turning uncertainty into a ___ .', answer: 'story' },
      { speaker: 'teacher', emotion: '🌫️', text: 'Leena objected. "But what else could his silence ___?"', answer: 'mean' },
      { speaker: 'scholar', emotion: '🌿', text: 'Her friend replied, "That is precisely the problem. You are asking what it means before knowing what actually ___."', answer: 'happened' },
      { speaker: 'teacher', emotion: '📱', text: 'The next morning, the colleague finally replied. His phone had broken, and he had been unable to access his ___ .', answer: 'messages' },
      { speaker: 'scholar', emotion: '😶', text: 'Leena laughed at herself. Her mind had filled a blank space with a story that felt convincing because it matched her own ___ .', answer: 'fears' },
      { speaker: 'teacher', emotion: '🔍', text: 'She learned to separate what she knew from what she merely ___.', answer: 'imagined' },
      { speaker: 'scholar', emotion: '✨', text: 'When the facts are missing, the mind supplies a story. The wise question is: "Is it ___?"', answer: 'true' }
    ]
  },

  "Mind_Anchoring": {
    questID: "Quest Story 15",
    title: "The First Number",
    subtitle: "A psychological story about anchoring and the hidden power of first impressions.",
    conversation: [
      { speaker: 'teacher', emotion: '🏷️', text: 'A shopkeeper placed an old vase in his window with a price tag of ₹10,000. A passer-by stopped to ___ it.', answer: 'admire' },
      { speaker: 'scholar', emotion: '🤔', text: 'The shopkeeper later offered the vase for ₹4,000. The buyer immediately thought, "That is an excellent ___."', answer: 'bargain' },
      { speaker: 'teacher', emotion: '🏺', text: 'The buyer did not know that the vase was worth only ₹1,500. Yet the first price had already become an ___ in his mind.', answer: 'anchor' },
      { speaker: 'scholar', emotion: '🧠', text: 'Because ₹10,000 was the first number he saw, every later price seemed cheap by ___ .', answer: 'comparison' },
      { speaker: 'teacher', emotion: '💭', text: 'The shopkeeper had not merely shown him a price. He had given his mind a starting ___ from which to judge everything else.', answer: 'point' },
      { speaker: 'scholar', emotion: '🔢', text: 'Later that day, the buyer learned the vase was worth far less. He was surprised by how strongly the original number had ___ his judgment.', answer: 'influenced' },
      { speaker: 'teacher', emotion: '⚖️', text: 'The same effect can appear outside shops. The first salary offered can shape what seems like a fair ___ later.', answer: 'salary' },
      { speaker: 'scholar', emotion: '👤', text: 'The first impression of a person can also become an anchor, making every later action seem to ___ the original impression.', answer: 'confirm' },
      { speaker: 'teacher', emotion: '🔍', text: 'The danger is subtle: we may believe we are making a fresh judgment when we are actually adjusting around a number or idea that arrived ___ .', answer: 'first' },
      { speaker: 'scholar', emotion: '🧩', text: 'To think clearly, we sometimes need to step back and ask, "If I had never seen that first number, what would I ___ now?"', answer: 'choose' },
      { speaker: 'teacher', emotion: '💡', text: 'The buyer returned to the shop. This time, he asked the price only after deciding what the vase was actually ___ to him.', answer: 'worth' },
      { speaker: 'scholar', emotion: '✨', text: 'The first number feels like a starting point. But a starting point is not the ___ .', answer: 'truth' }
    ]
  },

  "Mind_Loss_Aversion": {
    questID: "Quest Story 16",
    title: "The Lost Coin",
    subtitle: "A psychological story about loss aversion and the weight of what we already have.",
    conversation: [
      { speaker: 'teacher', emotion: '🪙', text: 'Mira found a ₹500 note on the pavement. She smiled and slipped it into her ___.', answer: 'pocket' },
      { speaker: 'scholar', emotion: '🎲', text: 'That evening, a friend invited her to a simple game. "Heads, you win ₹500. Tails, you lose ₹500." Mira immediately ___ .', answer: 'declined' },
      { speaker: 'teacher', emotion: '🤔', text: 'Her friend laughed. "But the chances are equal." Mira replied, "Perhaps. But losing ₹500 would feel far worse than gaining another ₹500 would feel ___."', answer: 'good' },
      { speaker: 'scholar', emotion: '🪙', text: 'Her friend pointed to the note she had found. "You did not have that money this morning. Why are you now so afraid to ___ it?"', answer: 'lose' },
      { speaker: 'teacher', emotion: '💭', text: 'Mira realised that once the money became hers, losing it felt like a personal ___ rather than simply returning to where she had started.', answer: 'setback' },
      { speaker: 'scholar', emotion: '⚖️', text: 'What we possess often acquires greater psychological value simply because it is ___ .', answer: 'ours' },
      { speaker: 'teacher', emotion: '🧠', text: 'This is why people sometimes refuse a fair gamble, hold on to failing investments, or avoid abandoning familiar choices. The pain of loss can ___ the attraction of gain.', answer: 'outweigh' },
      { speaker: 'scholar', emotion: '📉', text: 'Mira remembered an old investment she had kept for years. She had refused to sell because selling would make the loss feel ___ .', answer: 'real' },
      { speaker: 'teacher', emotion: '🔍', text: 'But the loss had already happened. Keeping the investment could not ___ it.', answer: 'reverse' },
      { speaker: 'scholar', emotion: '🌿', text: 'She began asking a different question: "If I did not already own this, would I choose to ___ it today?"', answer: 'buy' },
      { speaker: 'teacher', emotion: '💡', text: 'The question separated the future decision from the emotional weight of the ___ .', answer: 'past' },
      { speaker: 'scholar', emotion: '✨', text: 'Mira finally understood that what we fear losing can become more valuable than what we could ___ .', answer: 'gain' }
    ]
  },

  "Mind_Attribution_Error": {
    questID: "Quest Story 17",
    title: "The Late Student",
    subtitle: "A psychological story about the fundamental attribution error.",
    conversation: [
      { speaker: 'teacher', emotion: '⏰', text: 'Every morning, Ravi arrived at class before everyone else. One day, he arrived twenty minutes ___ .', answer: 'late' },
      { speaker: 'scholar', emotion: '😒', text: 'His teacher frowned. "He is becoming careless. Some people simply have no ___."', answer: 'discipline' },
      { speaker: 'teacher', emotion: '🚗', text: 'After class, the teacher saw Ravi standing beside his broken-down car, waiting for a mechanic to ___ it.', answer: 'repair' },
      { speaker: 'scholar', emotion: '😶', text: 'The teacher felt embarrassed. One late arrival had seemed to reveal Ravi\'s ___, when in fact it had revealed almost nothing about him.', answer: 'character' },
      { speaker: 'teacher', emotion: '🧠', text: 'The following week, another student arrived late. This time, the teacher immediately wondered what might have ___ .', answer: 'happened' },
      { speaker: 'scholar', emotion: '🤔', text: 'He had begun noticing a common habit: when others behave badly, we often blame their ___ .', answer: 'personality' },
      { speaker: 'teacher', emotion: '🪞', text: 'But when we behave badly ourselves, we are quick to point toward our ___ .', answer: 'circumstances' },
      { speaker: 'scholar', emotion: '⚖️', text: 'A driver cuts us off: "What an arrogant person." We cut someone off: "I had no ___."', answer: 'choice' },
      { speaker: 'teacher', emotion: '🔍', text: 'The same action can therefore produce two different explanations depending on whether we are judging ___ or ourselves.', answer: 'others' },
      { speaker: 'scholar', emotion: '🌿', text: 'The teacher began practising a small pause before judging: "What do I know about this person, and what am I merely ___?"', answer: 'assuming' },
      { speaker: 'teacher', emotion: '💭', text: 'He discovered that behaviour is visible, but the causes behind behaviour are often ___ .', answer: 'hidden' },
      { speaker: 'scholar', emotion: '✨', text: 'A single action may tell you what someone did. It rarely tells you who they ___.', answer: 'are' }
    ]
  },

  "Mind_Hedonic_Adaptation": {
    questID: "Quest Story 18",
    title: "The New House",
    subtitle: "A psychological story about hedonic adaptation and the fading thrill of possessions.",
    conversation: [
      { speaker: 'teacher', emotion: '🏠', text: 'After years of saving, Arjun finally bought the house he had always dreamed ___.', answer: 'of' },
      { speaker: 'scholar', emotion: '🎉', text: 'For the first few weeks, he noticed everything: the sunlight through the windows, the quiet garden, and the feeling of finally being ___.', answer: 'home' },
      { speaker: 'teacher', emotion: '😊', text: 'Whenever friends visited, Arjun proudly gave them a tour. "I cannot believe this is finally ___!"', answer: 'mine' },
      { speaker: 'scholar', emotion: '📅', text: 'Six months later, he barely noticed the garden. The beautiful windows had become part of the ordinary ___.', answer: 'background' },
      { speaker: 'teacher', emotion: '🤔', text: 'One evening, Arjun caught himself thinking, "Perhaps I would be happier with a larger ___."', answer: 'house' },
      { speaker: 'scholar', emotion: '🏡', text: 'He began imagining a bigger kitchen, another bedroom, and a better view. The happiness he once expected from his current home had ___ .', answer: 'faded' },
      { speaker: 'teacher', emotion: '🧠', text: 'His friend asked, "Do you remember how badly you wanted this house?" Arjun laughed. "Of course. But now it just feels ___."', answer: 'normal' },
      { speaker: 'scholar', emotion: '🔄', text: 'The friend explained that the mind is remarkably good at adapting to changes in our circumstances. What once felt extraordinary can become ___ .', answer: 'ordinary' },
      { speaker: 'teacher', emotion: '🌱', text: 'Arjun decided not to chase the next upgrade immediately. Instead, he began deliberately noticing things he had stopped ___ .', answer: 'appreciating' },
      { speaker: 'scholar', emotion: '☀️', text: 'He sat in the garden again. The sunlight had not changed. His attention ___ .', answer: 'had' },
      { speaker: 'teacher', emotion: '💭', text: 'He realised that sometimes happiness does not disappear because life becomes worse. We simply become ___ to what is good.', answer: 'accustomed' },
      { speaker: 'scholar', emotion: '✨', text: 'The next morning, Arjun opened the same door and smiled. Nothing new had arrived. He had simply learned to ___ what was already there.', answer: 'notice' }
    ]
  },

  "Mind_The_Town": {
    questID: "Quest Story 19",
    title: "The Town",
    subtitle: "A story about perception, projection, and the world we carry with us.",
    conversation: [
      { speaker: 'teacher', emotion: '🏘️', text: 'Two travellers visited a wise old man. The first asked, "I am thinking of moving here. What is the town ___?"', answer: 'like' },
      { speaker: 'scholar', emotion: '🤔', text: 'The old man asked, "What was your old town ___?"', answer: 'like' },
      { speaker: 'teacher', emotion: '🌧️', text: 'The traveller frowned. "It was dreadful. Everyone was hateful, and I could not ___ them."', answer: 'stand' },
      { speaker: 'scholar', emotion: '🧘', text: 'The old man nodded. "You will probably find this town much the ___."', answer: 'same' },
      { speaker: 'teacher', emotion: '🚶', text: 'The traveller left, disappointed. A little later, another traveller arrived and asked the ___ question.', answer: 'same' },
      { speaker: 'scholar', emotion: '🌿', text: '"What was your old town like?" the old man asked ___ .', answer: 'again' },
      { speaker: 'teacher', emotion: '☀️', text: 'The second traveller smiled. "Wonderful. The people were kind, the streets were lively, and I was very ___."', answer: 'happy' },
      { speaker: 'scholar', emotion: '🏘️', text: '"I simply feel ready for a ___."', answer: 'change' },
      { speaker: 'teacher', emotion: '😊', text: 'The old man smiled. "Then you will probably find this town much the ___."', answer: 'same' },
      { speaker: 'scholar', emotion: '❓', text: 'After both travellers had gone, a young student asked, "How can the same town be dreadful for one person and wonderful for ___?"', answer: 'another' },
      { speaker: 'teacher', emotion: '🪞', text: 'The old man replied, "People often carry their ___ with them."', answer: 'world' },
      { speaker: 'scholar', emotion: '✨', text: '"We do not always see the world as it is. We often see it as we ___."', answer: 'are' }
    ]
  }
};
