/* ══════════════════════════════════════════════════════════════
   QUEST DATA DATABASE
   Add, remove, or modify your quests and dialogues here easily.
   ══════════════════════════════════════════════════════════════ */
const QuestDatabase = {
  "Zen_Old_Man": {
    questID: "Quest Story 1",
    title: "The Old Man’s Horse",
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
      { speaker: 'scholar', emotion: '😶', text: 'The teacher felt embarrassed. One late arrival had seemed to reveal Ravi’s ___, when in fact it had revealed almost nothing about him.', answer: 'character' },
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
  },

  "Zen_Two_Wolves": {
    questID: "Quest Story 100",
    title: "The Two Wolves",
    subtitle: "A parable about the inner conflict between our better and worse instincts.",
    conversation: [
      { speaker: 'teacher', emotion: '🐺', text: 'An old man told his grandson, "Inside every person, two wolves are constantly at ___."', answer: 'war' },
      { speaker: 'scholar', emotion: '🤔', text: '"One wolf is anger, envy, and resentment. The other is patience, kindness, and ___."', answer: 'gratitude' },
      { speaker: 'teacher', emotion: '😟', text: 'The boy thought for a moment. "Which wolf ___ ?" he finally asked.', answer: 'wins' },
      { speaker: 'scholar', emotion: '🧘', text: 'The old man smiled and answered simply, "Whichever one you ___."', answer: 'feed' },
      { speaker: 'teacher', emotion: '💭', text: 'The boy frowned. "But the angry wolf feels so strong. It seems to arrive without being ___."', answer: 'invited' },
      { speaker: 'scholar', emotion: '🌿', text: '"That is true," the old man said. "You cannot stop the wolf from ___ ; you can only choose what you place in its bowl."', answer: 'appearing' },
      { speaker: 'teacher', emotion: '🍽️', text: 'Every harsh word repeated in the mind, every grievance replayed, was a small ___ set before the angry wolf.', answer: 'meal' },
      { speaker: 'scholar', emotion: '🌱', text: 'Every act of patience, every moment of gratitude, quietly ___ the gentler wolf instead.', answer: 'strengthened' },
      { speaker: 'teacher', emotion: '⚖️', text: 'The boy asked, "So the wolves are not fighting to see who is stronger by ___ ?" ', answer: 'nature' },
      { speaker: 'scholar', emotion: '🔄', text: '"No," said the old man. "They grow strong through ___ , not through nature alone."', answer: 'habit' },
      { speaker: 'teacher', emotion: '💡', text: 'The boy understood that character was not something decided once, but something ___ daily, meal by meal.', answer: 'built' },
      { speaker: 'scholar', emotion: '✨', text: 'From then on, whenever he felt the angry wolf stirring, he simply asked himself, "Which one am I about to ___ ?"', answer: 'feed' }
    ]
  },

  "Zen_Farmers_Well": {
    questID: "Quest Story 101",
    title: "The Farmer’s Well",
    subtitle: "A Zen story about depth, patience, and the danger of scattered effort.",
    conversation: [
      { speaker: 'teacher', emotion: '⛏️', text: 'A farmer needed water and began digging a well in a promising ___.', answer: 'spot' },
      { speaker: 'scholar', emotion: '😤', text: 'After digging for a day without success, he abandoned the hole and began a ___ one nearby.', answer: 'new' },
      { speaker: 'teacher', emotion: '⛏️', text: 'That hole, too, yielded no water. Frustrated, he moved again, leaving behind a field of shallow ___.', answer: 'holes' },
      { speaker: 'scholar', emotion: '😩', text: 'By evening, he had dug six holes, each one abandoned just before it might have reached the water ___.', answer: 'table' },
      { speaker: 'teacher', emotion: '🧘', text: 'An old neighbour watching him asked, "Why do you keep starting somewhere ___?"', answer: 'new' },
      { speaker: 'scholar', emotion: '😓', text: 'The farmer answered, "Because nothing seems to be ___ ." ', answer: 'working' },
      { speaker: 'teacher', emotion: '🌱', text: 'The neighbour pointed to the deepest hole. "That one was closest. You simply could not ___ that."', answer: 'see' },
      { speaker: 'scholar', emotion: '💭', text: 'The farmer realised that six shallow attempts had cost him more effort than one ___ one.', answer: 'deep' },
      { speaker: 'teacher', emotion: '⛏️', text: 'The next morning, he chose a single spot and resolved not to ___ until he had gone far deeper than before.', answer: 'move' },
      { speaker: 'scholar', emotion: '💧', text: 'Hours later, water finally rose through the soil. The well had not needed a better location — only more ___.', answer: 'depth' },
      { speaker: 'teacher', emotion: '⚖️', text: 'The neighbour smiled. "Progress is often invisible right before it becomes ___."', answer: 'visible' },
      { speaker: 'scholar', emotion: '✨', text: 'The farmer learned that switching paths at the first sign of difficulty rarely finds water; it only ___ more holes.', answer: 'digs' }
    ]
  },

  "Zen_Bent_Bamboo": {
    questID: "Quest Story 22",
    title: "The Bending Bamboo",
    subtitle: "A Zen story about flexibility, resilience, and the strength found in yielding.",
    conversation: [
      { speaker: 'teacher', emotion: '🎋', text: 'In a mountain garden grew a tall oak and a slender stalk of ___.', answer: 'bamboo' },
      { speaker: 'scholar', emotion: '🌬️', text: 'One night, a fierce storm swept across the valley, testing every plant\'s ___.', answer: 'strength' },
      { speaker: 'teacher', emotion: '🌳', text: 'The oak stood rigid, refusing to bend, proud of how firmly it could ___ against the wind.', answer: 'resist' },
      { speaker: 'scholar', emotion: '💨', text: 'The bamboo, by contrast, bent low with every gust, bowing almost to the ___.', answer: 'ground' },
      { speaker: 'teacher', emotion: '⚡', text: 'By midnight, the wind grew stronger still. With a sudden crack, the unyielding oak ___.', answer: 'split' },
      { speaker: 'scholar', emotion: '😲', text: 'The bamboo, meanwhile, simply straightened again once the wind had ___.', answer: 'passed' },
      { speaker: 'teacher', emotion: '🧘', text: 'The next morning, a monk walking through the garden asked, "Which plant was truly ___?"', answer: 'stronger' },
      { speaker: 'scholar', emotion: '🤔', text: 'A student pointed to the fallen oak. "Surely the one that never ___ ."', answer: 'bent' },
      { speaker: 'teacher', emotion: '🌿', text: 'The monk shook his head. "The oak mistook rigidity for strength. The bamboo knew that strength includes the willingness to ___."', answer: 'bend' },
      { speaker: 'scholar', emotion: '💭', text: 'The student considered this. "So resilience is not about refusing to ___ ?"', answer: 'move' },
      { speaker: 'teacher', emotion: '⚖️', text: 'The monk nodded. "What breaks is often what refuses to ___. What survives is often what learns to yield without losing its roots."', answer: 'adapt' },
      { speaker: 'scholar', emotion: '✨', text: 'The student looked at the swaying bamboo and understood: sometimes the strongest thing you can do is ___ .', answer: 'bend' }
    ]
  },

  "Zen_Empty_Room": {
    questID: "Quest Story 23",
    title: "The Empty Room",
    subtitle: "A Zen story about clutter, clarity, and the value of open space.",
    conversation: [
      { speaker: 'teacher', emotion: '🏠', text: 'A wealthy merchant visited a monastery and was surprised to find the master\'s room almost completely ___.', answer: 'empty' },
      { speaker: 'scholar', emotion: '🤔', text: 'No paintings, no furniture, only a single mat and a small ___.', answer: 'cushion' },
      { speaker: 'teacher', emotion: '😕', text: 'The merchant asked, "Where are your possessions? Where are your ___?"', answer: 'belongings' },
      { speaker: 'scholar', emotion: '🧘', text: 'The master smiled. "Where are yours?" The merchant proudly began listing his many ___.', answer: 'treasures' },
      { speaker: 'teacher', emotion: '🚪', text: 'The master asked one more question: "And when you are travelling, who is watching over all of ___?"', answer: 'them' },
      { speaker: 'scholar', emotion: '😟', text: 'The merchant admitted that he often worried about theft, damage, or losing what he had spent years trying to ___.', answer: 'acquire' },
      { speaker: 'teacher', emotion: '💭', text: 'The master gestured around his bare room. "I own very little, so very little owns my ___."', answer: 'attention' },
      { speaker: 'scholar', emotion: '🌬️', text: 'The merchant looked at the open space and felt, oddly, a sense of ___ he rarely experienced at home.', answer: 'calm' },
      { speaker: 'teacher', emotion: '🌿', text: 'The master explained, "A room filled with objects has no space left to ___ in."', answer: 'breathe' },
      { speaker: 'scholar', emotion: '🧠', text: 'The merchant realised the same might be true of a mind crowded with worries, plans, and ___.', answer: 'possessions' },
      { speaker: 'teacher', emotion: '🕊️', text: 'The master said gently, "Emptiness is not lack. It is ___ for what matters most."', answer: 'room' },
      { speaker: 'scholar', emotion: '✨', text: 'The merchant returned home and, for the first time, began asking not what to acquire, but what he could ___ .', answer: 'release' }
    ]
  },

  "Zen_River_Rock": {
    questID: "Quest Story 24",
    title: "The River and the Rock",
    subtitle: "A Zen story about persistence, softness, and how gentle effort outlasts force.",
    conversation: [
      { speaker: 'teacher', emotion: '🪨', text: 'A great boulder sat in the middle of a river, certain that nothing could ever move something so ___.', answer: 'solid' },
      { speaker: 'scholar', emotion: '🌊', text: 'Each day, the water flowed around it, never striking with ___ or force.', answer: 'anger' },
      { speaker: 'teacher', emotion: '😏', text: 'The rock scoffed at the water. "You are soft. I am hard. Surely I will ___ long after you have moved on."', answer: 'remain' },
      { speaker: 'scholar', emotion: '🕰️', text: 'The water made no argument. It simply continued flowing, patient and ___.', answer: 'unbothered' },
      { speaker: 'teacher', emotion: '📆', text: 'Years passed. The rock noticed nothing changing, and grew even more confident in its own ___.', answer: 'permanence' },
      { speaker: 'scholar', emotion: '🌊', text: 'Decades passed. Grain by grain, the water carried away what the rock never felt it ___.', answer: 'losing' },
      { speaker: 'teacher', emotion: '😲', text: 'A century later, travellers noticed that the once-mighty boulder had become smooth, rounded, and much ___.', answer: 'smaller' },
      { speaker: 'scholar', emotion: '💧', text: 'The water had never fought the rock directly. It had simply kept ___.', answer: 'flowing' },
      { speaker: 'teacher', emotion: '⚖️', text: 'A traveller remarked, "The rock was harder. Yet the river was more ___."', answer: 'persistent' },
      { speaker: 'scholar', emotion: '🌱', text: 'True strength, the old boatman explained, is not always the loudest force. Often it is the quiet one that never stops ___.', answer: 'moving' },
      { speaker: 'teacher', emotion: '💭', text: 'What resists change through sheer stubbornness may eventually be reshaped anyway. What flows gently may shape everything ___ it.', answer: 'around' },
      { speaker: 'scholar', emotion: '✨', text: 'The traveller smiled and continued downstream, understanding that softness applied over time can outlast ___.', answer: 'hardness' }
    ]
  },

  "Zen_Gateless_Gate": {
    questID: "Quest Story 25",
    title: "The Gate Without a Gate",
    subtitle: "A Zen story about the barriers we build in our own minds.",
    conversation: [
      { speaker: 'teacher', emotion: '🚪', text: 'A traveller arrived at a monastery and found a tall gate standing alone in an open ___, with no wall on either side.', answer: 'field' },
      { speaker: 'scholar', emotion: '🤔', text: 'He could simply walk around it, yet he stood before the gate, waiting for someone to ___ it.', answer: 'open' },
      { speaker: 'teacher', emotion: '🧘', text: 'A monk passing by asked why he did not simply walk around the ___ frame.', answer: 'open' },
      { speaker: 'scholar', emotion: '😳', text: 'The traveller laughed nervously. "It seemed important to go ___ the gate, not around it."', answer: 'through' },
      { speaker: 'teacher', emotion: '💭', text: 'The monk smiled. "Many gates in life are like this one — they block nothing except what we believe ___ us."', answer: 'stops' },
      { speaker: 'scholar', emotion: '🌫️', text: 'The traveller thought of the many rules and limits he had accepted without ever asking whether they were truly ___.', answer: 'real' },
      { speaker: 'teacher', emotion: '🚶', text: 'The monk gestured toward the open field. "Some barriers exist only because we agree to stand before them and ___."', answer: 'wait' },
      { speaker: 'scholar', emotion: '🔍', text: 'The traveller studied the gate again, noticing for the first time how little it actually ___.', answer: 'enclosed' },
      { speaker: 'teacher', emotion: '🌿', text: '"A gate can mark a threshold," the monk said, "but it cannot force you to treat it as a ___."', answer: 'wall' },
      { speaker: 'scholar', emotion: '👣', text: 'The traveller finally stepped sideways, walking freely around the frame and into the ___ beyond.', answer: 'monastery' },
      { speaker: 'teacher', emotion: '⚖️', text: 'The monk called after him, "Notice how many other gates in your life have no walls attached to ___ either."', answer: 'them' },
      { speaker: 'scholar', emotion: '✨', text: 'The traveller walked on, wondering how many limits he carried were simply gates he had never thought to ___.', answer: 'question' }
    ]
  },

  "Zen_Sweeping_Monk": {
    questID: "Quest Story 26",
    title: "The Monk Who Swept Twice",
    subtitle: "A Zen story about presence, repetition, and finding meaning in ordinary tasks.",
    conversation: [
      { speaker: 'teacher', emotion: '🧹', text: 'A young monk was assigned the daily task of sweeping the temple ___.', answer: 'courtyard' },
      { speaker: 'scholar', emotion: '😩', text: 'Each morning, wind scattered leaves across the stones just as soon as he had finished ___.', answer: 'sweeping' },
      { speaker: 'teacher', emotion: '😤', text: 'After weeks of this, the monk complained to his teacher. "No matter how carefully I sweep, the leaves simply ___ again."', answer: 'return' },
      { speaker: 'scholar', emotion: '🧘', text: 'The teacher asked, "Do you sweep in order to keep the courtyard permanently clean, or in order to ___ it now?"', answer: 'clean' },
      { speaker: 'teacher', emotion: '🍂', text: 'The monk paused. He had assumed the goal was a courtyard that would stay clean ___.', answer: 'forever' },
      { speaker: 'scholar', emotion: '💭', text: 'The teacher shook his head. "The leaves will always fall. Your task was never to make them ___ falling."', answer: 'stop' },
      { speaker: 'teacher', emotion: '🌿', text: 'The monk considered this. "Then each morning\'s sweeping is not failing — it is simply ___?"', answer: 'complete' },
      { speaker: 'scholar', emotion: '🧹', text: 'The next day, he swept without frustration, no longer measuring the task against a permanence it was never meant to ___.', answer: 'have' },
      { speaker: 'teacher', emotion: '🍃', text: 'He noticed the sound of the broom, the pattern the leaves made, the coolness of the morning ___.', answer: 'air' },
      { speaker: 'scholar', emotion: '🌊', text: 'What had once felt like a repeating failure now felt like a quiet ___.', answer: 'ritual' },
      { speaker: 'teacher', emotion: '⚖️', text: 'His teacher observed him and said, "Many tasks in life resemble sweeping leaves. Their value lies in the doing, not in some final ___."', answer: 'ending' },
      { speaker: 'scholar', emotion: '✨', text: 'The monk bowed, understanding that some work is not meant to be finished — only ___.', answer: 'returned' }
    ]
  },

  "Zen_Painted_Cakes": {
    questID: "Quest Story 27",
    title: "Painted Rice Cakes",
    subtitle: "A Zen story about the difference between imagining and actually doing.",
    conversation: [
      { speaker: 'teacher', emotion: '🎨', text: 'A student spent hours reading about meditation, describing its benefits with great ___.', answer: 'enthusiasm' },
      { speaker: 'scholar', emotion: '📖', text: 'He could quote a dozen texts, yet had never once actually sat down to ___.', answer: 'meditate' },
      { speaker: 'teacher', emotion: '🍚', text: 'His master handed him a beautifully painted picture of a rice cake and said, "Eat ___."', answer: 'this' },
      { speaker: 'scholar', emotion: '😕', text: 'The student laughed. "But it is only a painting. It cannot satisfy real ___."', answer: 'hunger' },
      { speaker: 'teacher', emotion: '🧘', text: 'The master nodded slowly. "And a description of meditation, however detailed, cannot satisfy a mind\'s need for real ___."', answer: 'practice' },
      { speaker: 'scholar', emotion: '💭', text: 'The student realised he had been admiring painted cakes for years, mistaking the image for the ___.', answer: 'meal' },
      { speaker: 'teacher', emotion: '📚', text: 'Words about a path can describe its shape, but they cannot carry a traveller a single ___ forward.', answer: 'step' },
      { speaker: 'scholar', emotion: '🌱', text: 'The student set his books aside and sat quietly for the first time, noticing how different actual practice felt from merely reading ___ it.', answer: 'about' },
      { speaker: 'teacher', emotion: '🍚', text: 'Weeks later, his understanding had grown deeper through minutes of sitting than through years of ___.', answer: 'reading' },
      { speaker: 'scholar', emotion: '⚖️', text: 'His master asked, "Which taught you more — the painted cake, or the ___ one?"', answer: 'real' },
      { speaker: 'teacher', emotion: '🌿', text: 'The student smiled. "The real one, though I needed the painted one to notice the ___ ."', answer: 'difference' },
      { speaker: 'scholar', emotion: '✨', text: 'From then on, whenever he only read or planned without acting, he reminded himself: knowledge alone cannot ___ hunger.', answer: 'satisfy' }
    ]
  },

  "Zen_Silence_Contest": {
    questID: "Quest Story 28",
    title: "The Silence Contest",
    subtitle: "A Zen story about ego, pride, and the trap of trying to win at stillness.",
    conversation: [
      { speaker: 'teacher', emotion: '🤫', text: 'Four monks agreed to sit in silence for seven days, each proud of his own ___.', answer: 'discipline' },
      { speaker: 'scholar', emotion: '🕯️', text: 'On the first night, a lamp began to flicker and threatened to ___ out.', answer: 'go' },
      { speaker: 'teacher', emotion: '😳', text: 'The youngest monk forgot himself and cried, "Quick, the lamp is ___!"', answer: 'dying' },
      { speaker: 'scholar', emotion: '😠', text: 'The second monk turned and scolded him. "We are meant to be ___! You have spoken!"', answer: 'silent' },
      { speaker: 'teacher', emotion: '😤', text: 'The third monk shook his head at them both. "You have both broken the silence. Only I have remained ___."', answer: 'quiet' },
      { speaker: 'scholar', emotion: '😶', text: 'The fourth monk, who had said nothing at all, finally sighed loudly and muttered, "I am the only one who has not ___ ."', answer: 'spoken' },
      { speaker: 'teacher', emotion: '🌿', text: 'Their master, listening from the doorway, walked in quietly and asked what had ___ .', answer: 'happened' },
      { speaker: 'scholar', emotion: '😅', text: 'Each monk, eager to prove his superior discipline, immediately began explaining who had ___ first.', answer: 'spoken' },
      { speaker: 'teacher', emotion: '🧘', text: 'The master laughed gently. "You did not break silence because a lamp flickered. You broke it while trying to prove who was more ___."', answer: 'silent' },
      { speaker: 'scholar', emotion: '💭', text: 'The monks fell quiet, realising that true stillness had never been the ___ of the exercise.', answer: 'point' },
      { speaker: 'teacher', emotion: '⚖️', text: 'The master said, "Silence pursued for its own sake settles the mind. Silence pursued to be seen as silent only feeds the ___."', answer: 'ego' },
      { speaker: 'scholar', emotion: '✨', text: 'From then on, the monks practised without keeping score, understanding that stillness cannot be ___.', answer: 'won' }
    ]
  },

  "Zen_Finger_Moon": {
    questID: "Quest Story 29",
    title: "The Finger and the Moon",
    subtitle: "A Zen story about mistaking a teaching for the truth it points toward.",
    conversation: [
      { speaker: 'teacher', emotion: '🌙', text: 'A master stood beside a river at night and raised his finger toward the bright ___ overhead.', answer: 'moon' },
      { speaker: 'scholar', emotion: '👉', text: '"Look," he told his student, pointing carefully so the young man would notice the moon\'s ___.', answer: 'light' },
      { speaker: 'teacher', emotion: '🤔', text: 'The student studied the master\'s hand closely, examining every angle of the pointing ___.', answer: 'finger' },
      { speaker: 'scholar', emotion: '😕', text: 'Days later, the student proudly declared that he now understood the finger\'s exact shape and ___.', answer: 'position' },
      { speaker: 'teacher', emotion: '🌕', text: 'The master sighed. "And what of the moon I was showing ___?"', answer: 'you' },
      { speaker: 'scholar', emotion: '😳', text: 'The student admitted he had never actually looked ___ from the finger.', answer: 'up' },
      { speaker: 'teacher', emotion: '📚', text: 'The master explained gently that teachings, words, and rituals are only fingers pointing toward a deeper ___.', answer: 'truth' },
      { speaker: 'scholar', emotion: '💭', text: 'Mistaking the finger for the moon means memorising instructions while missing the very thing they were meant to ___.', answer: 'reveal' },
      { speaker: 'teacher', emotion: '🌙', text: 'The student finally raised his eyes and, for the first time, truly ___ the moon\'s light.', answer: 'saw' },
      { speaker: 'scholar', emotion: '✨', text: '"The finger did its job," the master said, "the moment you stopped studying it and started ___."', answer: 'looking' },
      { speaker: 'teacher', emotion: '🌊', text: 'The student realised how often he had clung to methods and words instead of the understanding they were meant to ___ toward.', answer: 'point' },
      { speaker: 'scholar', emotion: '🌿', text: 'From then on, whenever he studied a teaching, he first asked himself, "Where is this finger actually ___?"', answer: 'pointing' }
    ]
  },

  "Zen_Thirsty_Fish": {
    questID: "Quest Story 30",
    title: "The Fish in Water",
    subtitle: "A Zen story about searching for what we already possess.",
    conversation: [
      { speaker: 'teacher', emotion: '🐟', text: 'A young fish swam anxiously through the sea, asking every creature it met, "Where can I find the great ___ I keep hearing about?"', answer: 'ocean' },
      { speaker: 'scholar', emotion: '🐢', text: 'An old turtle looked at the fish with quiet amusement and asked what it thought it was swimming ___.', answer: 'through' },
      { speaker: 'teacher', emotion: '😕', text: 'The fish glanced around. "This? This is just ___ around me. I am searching for the ocean itself."', answer: 'water' },
      { speaker: 'scholar', emotion: '🌊', text: 'The turtle laughed gently. "You have never once left the ocean. It is not somewhere ahead — it is what surrounds you ___."', answer: 'now' },
      { speaker: 'teacher', emotion: '😲', text: 'The fish paused, feeling foolish, yet also strangely ___.', answer: 'relieved' },
      { speaker: 'scholar', emotion: '💭', text: 'It had spent so much energy searching for something it had never actually ___.', answer: 'lost' },
      { speaker: 'teacher', emotion: '🐠', text: 'The turtle explained, "Sometimes what we seek is not distant. It is simply too close and too constant to ___."', answer: 'notice' },
      { speaker: 'scholar', emotion: '🧘', text: 'The fish thought of the many creatures still swimming frantically, convinced that peace or belonging lay somewhere ___.', answer: 'else' },
      { speaker: 'teacher', emotion: '🌿', text: 'The turtle added, "The searching itself can become the thing that keeps us from ___ what is already here."', answer: 'seeing' },
      { speaker: 'scholar', emotion: '💡', text: 'The fish slowed its frantic swimming and simply let the current move ___ it.', answer: 'through' },
      { speaker: 'teacher', emotion: '🌊', text: 'For the first time, it noticed the coolness of the water, the light filtering from above, the quiet hum of ___.', answer: 'life' },
      { speaker: 'scholar', emotion: '✨', text: 'It understood at last that some things cannot be found by searching, only ___ by settling.', answer: 'noticed' }
    ]
  },

  "Zen_Travelers_Pack": {
    questID: "Quest Story 31",
    title: "The Traveller’s Pack",
    subtitle: "A Zen story about the weight of what we choose to carry.",
    conversation: [
      { speaker: 'teacher', emotion: '🎒', text: 'A young traveller set out on a long journey, filling his pack with everything he thought he might ___.', answer: 'need' },
      { speaker: 'scholar', emotion: '😓', text: 'By the second day, his shoulders ached, and every hill felt steeper than it should ___.', answer: 'have' },
      { speaker: 'teacher', emotion: '🧘', text: 'He met an old pilgrim walking with only a small bundle and asked how he travelled so ___.', answer: 'lightly' },
      { speaker: 'scholar', emotion: '🎒', text: 'The pilgrim smiled. "I once carried a heavier pack too, filled with things I feared I might ___."', answer: 'need' },
      { speaker: 'teacher', emotion: '💭', text: 'The young man asked what had changed. The pilgrim said, "I began asking, before each mile, what I was truly carrying it ___."', answer: 'for' },
      { speaker: 'scholar', emotion: '🔍', text: 'Together they opened the young man\'s pack. Many items had been packed out of fear rather than actual ___.', answer: 'need' },
      { speaker: 'teacher', emotion: '🌧️', text: 'A coat for weather that rarely came. Tools for tasks he would likely never ___.', answer: 'perform' },
      { speaker: 'scholar', emotion: '⚖️', text: 'The pilgrim said, "Each unnecessary item feels light alone, but together they become a burden that slows every ___."', answer: 'step' },
      { speaker: 'teacher', emotion: '🌿', text: 'The young man began removing what he no longer needed, keeping only what served the journey ___.', answer: 'ahead' },
      { speaker: 'scholar', emotion: '🎒', text: 'His pack grew lighter, and strangely, his steps grew ___.', answer: 'faster' },
      { speaker: 'teacher', emotion: '💡', text: 'The pilgrim explained, "We rarely regret what we chose to carry out of love. We almost always regret what we carried out of ___."', answer: 'fear' },
      { speaker: 'scholar', emotion: '✨', text: 'The young man walked on, understanding that travelling well means learning what to ___ behind.', answer: 'leave' }
    ]
  },

  "Zen_Perfect_Stroke": {
    questID: "Quest Story 32",
    title: "The Perfect Stroke",
    subtitle: "A Zen story about mastery, effort, and the freedom found beyond perfectionism.",
    conversation: [
      { speaker: 'teacher', emotion: '🖌️', text: 'A calligrapher spent thirty years trying to paint a single circle with perfect ___.', answer: 'symmetry' },
      { speaker: 'scholar', emotion: '😤', text: 'Each attempt fell slightly short, and he tore the paper apart in ___.', answer: 'frustration' },
      { speaker: 'teacher', emotion: '🧘', text: 'His master watched him destroy another sheet and asked what he was truly ___ for.', answer: 'searching' },
      { speaker: 'scholar', emotion: '💭', text: 'The calligrapher said, "A circle with no flaw, drawn in a single, unbroken ___."', answer: 'motion' },
      { speaker: 'teacher', emotion: '🌊', text: 'The master picked up the brush himself and drew a circle slightly uneven at one ___.', answer: 'edge' },
      { speaker: 'scholar', emotion: '😲', text: 'The calligrapher frowned. "But it is not ___."', answer: 'perfect' },
      { speaker: 'teacher', emotion: '🍃', text: 'The master smiled. "It is complete. There is a difference between flawless and ___."', answer: 'alive' },
      { speaker: 'scholar', emotion: '🖌️', text: 'He explained that a stroke made without hesitation carries the artist\'s presence, even if it is not perfectly ___.', answer: 'symmetrical' },
      { speaker: 'teacher', emotion: '💡', text: 'The calligrapher realised he had spent thirty years trying to erase every trace of his own hand, chasing an ideal instead of expressing ___.', answer: 'himself' },
      { speaker: 'scholar', emotion: '🌿', text: 'The master added, "Perfection has no breath in it. A living stroke always carries a small ___."', answer: 'flaw' },
      { speaker: 'teacher', emotion: '🖋️', text: 'The calligrapher picked up his brush once more, and this time drew without pausing to ___ himself.', answer: 'correct' },
      { speaker: 'scholar', emotion: '✨', text: 'The circle he produced was imperfect, unrepeatable, and for the first time in thirty years, truly ___.', answer: 'his' }
    ]
  },

  "Zen_Sound_of_Bell": {
    questID: "Quest Story 33",
    title: "The Sound of the Bell",
    subtitle: "A Zen story about presence, attention, and hearing what is already there.",
    conversation: [
      { speaker: 'teacher', emotion: '🔔', text: 'A monastery bell rang each evening, but most monks were too busy with their thoughts to actually ___ it.', answer: 'hear' },
      { speaker: 'scholar', emotion: '💭', text: 'One young monk asked his teacher, "How can I learn to hear the bell ___?"', answer: 'fully' },
      { speaker: 'teacher', emotion: '🧘', text: 'The teacher replied, "Listen to the silence just before it ___."', answer: 'rings' },
      { speaker: 'scholar', emotion: '🤔', text: 'The monk was puzzled, but that evening he sat quietly, waiting, ___ .', answer: 'attentive' },
      { speaker: 'teacher', emotion: '🔔', text: 'When the bell finally rang, its sound seemed to fill the whole temple, though nothing about the bell itself had ___.', answer: 'changed' },
      { speaker: 'scholar', emotion: '😲', text: 'He realised the difference had not been in the bell, but in his own ___.', answer: 'attention' },
      { speaker: 'teacher', emotion: '🌊', text: 'Every other evening, his mind had been elsewhere — reviewing the day, rehearsing tomorrow, missing the sound ___ in front of him.', answer: 'happening' },
      { speaker: 'scholar', emotion: '🍃', text: 'This time, having waited in stillness, the single tone felt vast, as if it carried the whole ___ .', answer: 'moment' },
      { speaker: 'teacher', emotion: '💡', text: 'His teacher asked, "Was the bell louder tonight?" The monk shook his head. "No. I was simply more ___."', answer: 'present' },
      { speaker: 'scholar', emotion: '🌿', text: 'The teacher nodded. "Most sounds in life are like this. They are always ringing. We are rarely ___."', answer: 'listening' },
      { speaker: 'teacher', emotion: '🔔', text: 'From then on, the monk began treating ordinary sounds — footsteps, rain, breath — as bells worth ___ .', answer: 'hearing' },
      { speaker: 'scholar', emotion: '✨', text: 'He understood that attention itself can turn an ordinary moment into something worth ___.', answer: 'remembering' }
    ]
  },

  "Stoic_Dichotomy_Control": {
    questID: "Quest Story 34",
    title: "What Is Ours",
    subtitle: "A Stoic story about separating what we control from what we do not.",
    conversation: [
      { speaker: 'teacher', emotion: '📜', text: 'A young student came to a philosopher, troubled by things he could not ___.', answer: 'control' },
      { speaker: 'scholar', emotion: '😟', text: 'He worried about the weather, other people\'s opinions, and the outcome of events not yet ___.', answer: 'decided' },
      { speaker: 'teacher', emotion: '🧠', text: 'The philosopher asked him to sort his worries into two lists: things within his power, and things ___.', answer: 'outside' },
      { speaker: 'scholar', emotion: '📋', text: 'The student realised almost everything he feared belonged to the second ___.', answer: 'list' },
      { speaker: 'teacher', emotion: '⚖️', text: 'The philosopher explained, "Your judgments, choices, and effort are yours. Outcomes, others\' opinions, and chance are ___."', answer: 'not' },
      { speaker: 'scholar', emotion: '💭', text: 'The student asked, "Then should I stop caring about outcomes ___?"', answer: 'entirely' },
      { speaker: 'teacher', emotion: '🌿', text: 'The philosopher shook his head. "Care about doing your part well. Release your grip on what happens ___."', answer: 'after' },
      { speaker: 'scholar', emotion: '🎯', text: 'The student began applying this daily, aiming his effort only at what he could actually ___.', answer: 'influence' },
      { speaker: 'teacher', emotion: '🌊', text: 'His anxiety did not vanish overnight, but it grew quieter as he stopped fighting things beyond his ___.', answer: 'reach' },
      { speaker: 'scholar', emotion: '💡', text: 'He noticed that most suffering came not from events themselves, but from demanding that uncontrollable things ___ differently.', answer: 'behave' },
      { speaker: 'teacher', emotion: '🧘', text: 'The philosopher said, "Freedom begins the moment you stop asking the world to obey your ___."', answer: 'wishes' },
      { speaker: 'scholar', emotion: '✨', text: 'The student finally understood: peace is not the absence of difficulty, but clarity about what is truly ___.', answer: 'ours' }
    ]
  },

  "Stoic_The_Obstacle": {
    questID: "Quest Story 35",
    title: "The Obstacle Becomes the Way",
    subtitle: "A Stoic story about turning setbacks into material for growth.",
    conversation: [
      { speaker: 'teacher', emotion: '🚧', text: 'A young general planned a swift march, but a fallen bridge blocked the only ___.', answer: 'path' },
      { speaker: 'scholar', emotion: '😤', text: 'His officers cursed their misfortune, certain the delay would ruin the entire ___.', answer: 'campaign' },
      { speaker: 'teacher', emotion: '🧠', text: 'The general studied the wreckage instead of the ___.', answer: 'schedule' },
      { speaker: 'scholar', emotion: '🔍', text: 'He noticed that the broken timbers could be repurposed to build a stronger crossing than the original ___.', answer: 'bridge' },
      { speaker: 'teacher', emotion: '🛠️', text: 'Within two days, his soldiers had constructed a sturdier path, using the very wood that had once seemed like a ___.', answer: 'disaster' },
      { speaker: 'scholar', emotion: '💭', text: 'An officer remarked, "The obstacle nearly stopped us." The general replied, "The obstacle became the ___."', answer: 'solution' },
      { speaker: 'teacher', emotion: '⚖️', text: 'He explained that every difficulty carries within it the raw material for some ___.', answer: 'advantage' },
      { speaker: 'scholar', emotion: '🌊', text: 'What blocks one kind of progress often opens the way for a different ___ .', answer: 'kind' },
      { speaker: 'teacher', emotion: '🔥', text: 'The general said, "The mind that only sees blockage looks for someone to blame. The mind that sees material looks for something to ___."', answer: 'build' },
      { speaker: 'scholar', emotion: '🌱', text: 'His officers began treating setbacks as prompts rather than ___.', answer: 'punishments' },
      { speaker: 'teacher', emotion: '💡', text: 'By the campaign\'s end, the army had grown more resourceful specifically because of the difficulties it had been forced to ___.', answer: 'overcome' },
      { speaker: 'scholar', emotion: '✨', text: 'The general\'s final lesson: what stands in the way of the action can often become the ___ itself.', answer: 'action' }
    ]
  },

  "Stoic_Weight_of_Insult": {
    questID: "Quest Story 36",
    title: "The Weight of an Insult",
    subtitle: "A Stoic story about how much power we hand to the words of others.",
    conversation: [
      { speaker: 'teacher', emotion: '🗣️', text: 'A man approached a philosopher and said, "Someone in the market called you a ___."', answer: 'fool' },
      { speaker: 'scholar', emotion: '😌', text: 'The philosopher smiled and continued walking, entirely ___.', answer: 'unbothered' },
      { speaker: 'teacher', emotion: '😲', text: 'The messenger, surprised, asked, "Does it not trouble you to be ___?"', answer: 'insulted' },
      { speaker: 'scholar', emotion: '🧘', text: 'The philosopher replied, "If a stranger threw a stone that missed me entirely, would I feel ___?"', answer: 'struck' },
      { speaker: 'teacher', emotion: '💭', text: 'The messenger shook his head. "No, because it never actually ___ you."', answer: 'hit' },
      { speaker: 'scholar', emotion: '🌿', text: 'The philosopher nodded. "A word only wounds me if I choose to let it ___."', answer: 'land' },
      { speaker: 'teacher', emotion: '⚖️', text: 'He explained that an insult is only an opinion offered by another, and opinions carry no weight unless we agree to ___ them.', answer: 'carry' },
      { speaker: 'scholar', emotion: '🌊', text: 'The messenger asked, "So you feel nothing at all?" The philosopher said, "I notice it, but I do not have to ___ it."', answer: 'accept' },
      { speaker: 'teacher', emotion: '💡', text: 'What disturbs most people is not the insult itself, but their own judgment that it must be ___.', answer: 'true' },
      { speaker: 'scholar', emotion: '🔍', text: 'The philosopher added, "Ask instead: is there truth in what was said? If so, correct it. If not, why should I ___ it?"', answer: 'keep' },
      { speaker: 'teacher', emotion: '🌱', text: 'The messenger began practising this himself, noticing how much lighter he felt when he stopped ___ every remark aimed at him.', answer: 'catching' },
      { speaker: 'scholar', emotion: '✨', text: 'He finally understood: we are rarely hurt by words alone. We are hurt by the meaning we choose to ___ upon them.', answer: 'place' }
    ]
  },

  "Stoic_Premeditation": {
    questID: "Quest Story 37",
    title: "Rehearsing Misfortune",
    subtitle: "A Stoic story about preparing the mind for hardship before it arrives.",
    conversation: [
      { speaker: 'teacher', emotion: '🌅', text: 'Each morning, an old philosopher spent a few quiet minutes imagining everything that could possibly go ___ that day.', answer: 'wrong' },
      { speaker: 'scholar', emotion: '😟', text: 'A young visitor thought this seemed like a strange way to invite ___.', answer: 'worry' },
      { speaker: 'teacher', emotion: '🧘', text: 'The philosopher explained, "I am not inviting misfortune. I am simply refusing to be ___ by it."', answer: 'surprised' },
      { speaker: 'scholar', emotion: '🤔', text: 'The visitor asked, "But does imagining bad things not make you more ___?"', answer: 'anxious' },
      { speaker: 'teacher', emotion: '💭', text: 'The philosopher shook his head. "It is not fear I am practising. It is ___."', answer: 'readiness' },
      { speaker: 'scholar', emotion: '⚖️', text: 'He explained that people who assume nothing will ever go wrong are shattered the moment something ___.', answer: 'does' },
      { speaker: 'teacher', emotion: '🌊', text: 'Those who have already considered hardship calmly, in advance, meet it with far less ___.', answer: 'panic' },
      { speaker: 'scholar', emotion: '🔍', text: 'The visitor tried the exercise himself, imagining the loss of comfort, money, and even loved ___.', answer: 'ones' },
      { speaker: 'teacher', emotion: '💡', text: 'To his surprise, he did not feel more afraid. He felt strangely more ___.', answer: 'grateful' },
      { speaker: 'scholar', emotion: '🌿', text: 'The philosopher smiled. "When you rehearse loss gently, you often notice what you still ___."', answer: 'have' },
      { speaker: 'teacher', emotion: '🌤️', text: 'The visitor began the practice daily, finding that his ordinary mornings felt less ___ than before.', answer: 'fragile' },
      { speaker: 'scholar', emotion: '✨', text: 'He realised the point was never to expect the worst, but to remove the shock of being ___.', answer: 'unprepared' }
    ]
  },

  "Stoic_The_Actor": {
    questID: "Quest Story 38",
    title: "Playing the Role Given",
    subtitle: "A Stoic story about accepting our circumstances while acting them out well.",
    conversation: [
      { speaker: 'teacher', emotion: '🎭', text: 'A philosopher compared life to a play in which each of us is handed a ___ we did not write.', answer: 'role' },
      { speaker: 'scholar', emotion: '😟', text: 'A student complained that he had been given a small, unremarkable ___.', answer: 'part' },
      { speaker: 'teacher', emotion: '🤔', text: 'The philosopher asked, "Did you choose to be born a beggar or a ___?"', answer: 'king' },
      { speaker: 'scholar', emotion: '💭', text: 'The student admitted that no one chooses their beginning ___.', answer: 'role' },
      { speaker: 'teacher', emotion: '🎬', text: 'The philosopher explained, "Whether your role is grand or modest was decided by the ___."', answer: 'author' },
      { speaker: 'scholar', emotion: '⚖️', text: 'What remains entirely yours is not the size of the role, but how well you ___ it.', answer: 'play' },
      { speaker: 'teacher', emotion: '🌿', text: 'A great actor given a minor role does not sulk; he brings his full skill to every ___.', answer: 'line' },
      { speaker: 'scholar', emotion: '💡', text: 'The student asked, "So I should never seek a larger part?" The philosopher said, "Seek it, if it comes honestly. But do not despise the one you already ___."', answer: 'have' },
      { speaker: 'teacher', emotion: '🎭', text: 'He continued, "A beggar\'s role, played with dignity, can be more admirable than a king\'s role played ___."', answer: 'poorly' },
      { speaker: 'scholar', emotion: '🌊', text: 'The student began focusing less on the size of his circumstances and more on the quality of his ___.', answer: 'response' },
      { speaker: 'teacher', emotion: '🌱', text: 'Over time, he noticed his frustration fading, replaced by a quiet pride in playing his part ___.', answer: 'well' },
      { speaker: 'scholar', emotion: '✨', text: 'The philosopher\'s final words stayed with him: "You did not choose the role. You always choose the ___."', answer: 'performance' }
    ]
  },

  "Stoic_View_From_Above": {
    questID: "Quest Story 39",
    title: "The View from Above",
    subtitle: "A Stoic story about gaining perspective by imagining ourselves from a distance.",
    conversation: [
      { speaker: 'teacher', emotion: '🏔️', text: 'A young officer, consumed by a quarrel with a colleague, sought advice from an older ___.', answer: 'mentor' },
      { speaker: 'scholar', emotion: '😤', text: 'He described the argument in great detail, certain it was the most important matter in the entire ___.', answer: 'world' },
      { speaker: 'teacher', emotion: '🧘', text: 'The mentor asked him to imagine looking down at the city from high above, as if seen from a passing ___.', answer: 'cloud' },
      { speaker: 'scholar', emotion: '🌍', text: 'From that height, he imagined the busy streets shrinking into tiny lines, the shouting reduced to ___.', answer: 'silence' },
      { speaker: 'teacher', emotion: '🌌', text: 'The mentor then asked him to imagine the view rising further, past the clouds, past the ___.', answer: 'sky' },
      { speaker: 'scholar', emotion: '✨', text: 'From that vast distance, entire nations appeared no larger than a single grain of ___.', answer: 'sand' },
      { speaker: 'teacher', emotion: '💭', text: 'The officer opened his eyes, quiet for a long moment, his earlier fury feeling suddenly ___.', answer: 'small' },
      { speaker: 'scholar', emotion: '🌱', text: 'The mentor explained, "This is not to say your feelings do not matter. It is to remind you how much ___ your view usually is."', answer: 'narrower' },
      { speaker: 'teacher', emotion: '⚖️', text: 'Most quarrels feel enormous only because we stand too close to ___ them clearly.', answer: 'see' },
      { speaker: 'scholar', emotion: '🌊', text: 'The officer asked whether this meant nothing truly mattered. The mentor shook his head. "It means fewer things deserve the ___ we give them."', answer: 'weight' },
      { speaker: 'teacher', emotion: '🏔️', text: 'From then on, whenever anger rose in him, the officer paused and briefly imagined the view from ___.', answer: 'above' },
      { speaker: 'scholar', emotion: '✨', text: 'It did not erase his problems, but it reliably reminded him which ones were worth carrying and which were worth setting ___.', answer: 'down' }
    ]
  },

  "Stoic_Borrowed_Cloak": {
    questID: "Quest Story 40",
    title: "What Is Only Lent",
    subtitle: "A Stoic story about holding possessions and people with an open hand.",
    conversation: [
      { speaker: 'teacher', emotion: '🧥', text: 'A wealthy man wept bitterly when his finest cloak was stolen while he ___.', answer: 'travelled' },
      { speaker: 'scholar', emotion: '🧘', text: 'A philosopher travelling with him asked gently, "Was the cloak ever truly ___?"', answer: 'yours' },
      { speaker: 'teacher', emotion: '😤', text: 'The man insisted, "I paid for it. I wore it. Of course it was ___."', answer: 'mine' },
      { speaker: 'scholar', emotion: '💭', text: 'The philosopher replied, "Everything we hold is only lent to us for a ___."', answer: 'time' },
      { speaker: 'teacher', emotion: '⏳', text: 'Wealth, health, even the people we love, are borrowed, never permanently ___.', answer: 'owned' },
      { speaker: 'scholar', emotion: '🌿', text: 'The wealthy man frowned. "Then should I feel nothing when something is ___ from me?"', answer: 'taken' },
      { speaker: 'teacher', emotion: '⚖️', text: 'The philosopher said, "Feel what is natural. But do not act shocked, as though the world owed you ___ possession."', answer: 'permanent' },
      { speaker: 'scholar', emotion: '🌊', text: 'He explained that grief becomes suffering when it insists that borrowed things should have remained ___ forever.', answer: 'ours' },
      { speaker: 'teacher', emotion: '💡', text: 'The wealthy man considered this. "So gratitude, not ownership, should be my starting ___?"', answer: 'point' },
      { speaker: 'scholar', emotion: '🌱', text: 'The philosopher nodded. "Say of every good thing: it was given for a while. Now it has been ___."', answer: 'returned' },
      { speaker: 'teacher', emotion: '🧥', text: 'The man arrived home still saddened by the loss, but no longer feeling ___ by it.', answer: 'betrayed' },
      { speaker: 'scholar', emotion: '✨', text: 'He began treating every possession, and every person in his life, as a guest rather than a permanent ___.', answer: 'fixture' }
    ]
  },

  "Stoic_Dog_and_Cart": {
    questID: "Quest Story 41",
    title: "The Dog Tied to the Cart",
    subtitle: "A Stoic story about accepting what will happen regardless of our resistance.",
    conversation: [
      { speaker: 'teacher', emotion: '🐕', text: 'A dog was tied by a rope to a cart that was slowly beginning to ___ forward.', answer: 'move' },
      { speaker: 'scholar', emotion: '😤', text: 'One dog dug in its paws, straining fiercely against the ___.', answer: 'rope' },
      { speaker: 'teacher', emotion: '😩', text: 'It was dragged along anyway, scraped and exhausted, arriving at the same destination ___.', answer: 'anyway' },
      { speaker: 'scholar', emotion: '🐾', text: 'Another dog, tied to the same cart, simply trotted alongside, matching its ___.', answer: 'pace' },
      { speaker: 'teacher', emotion: '🌊', text: 'It arrived at the identical destination, but calm, unharmed, and largely ___.', answer: 'unbothered' },
      { speaker: 'scholar', emotion: '⚖️', text: 'A philosopher watching this remarked that fate resembles the moving ___.', answer: 'cart' },
      { speaker: 'teacher', emotion: '💭', text: 'We are all tied to certain events by circumstances beyond our ___.', answer: 'control' },
      { speaker: 'scholar', emotion: '🐕', text: 'We may resist, exhausting ourselves in the process, or we may walk willingly, arriving at the same place with far less ___.', answer: 'suffering' },
      { speaker: 'teacher', emotion: '🔍', text: 'The philosopher clarified, "This does not mean we should never act. It means once the cart begins moving, refusal changes only how ___ the ride is."', answer: 'painful' },
      { speaker: 'scholar', emotion: '🌿', text: 'A student asked, "Is walking alongside the cart the same as approving of everything that happens?" The philosopher said, "No. It is choosing not to ___ against what you cannot change."', answer: 'fight' },
      { speaker: 'teacher', emotion: '💡', text: 'The student realised acceptance was not passivity, but the refusal to waste strength on what could not be ___.', answer: 'altered' },
      { speaker: 'scholar', emotion: '✨', text: 'From then on, whenever life pulled him somewhere he had not chosen, he tried to walk rather than be ___.', answer: 'dragged' }
    ]
  },

  "Stoic_Storm_at_Sea": {
    questID: "Quest Story 42",
    title: "The Ship in the Storm",
    subtitle: "A Stoic story about steady judgment amid circumstances we cannot control.",
    conversation: [
      { speaker: 'teacher', emotion: '⛵', text: 'A ship sailed calmly across the sea until dark clouds signalled an approaching ___.', answer: 'storm' },
      { speaker: 'scholar', emotion: '😨', text: 'Most passengers below deck panicked, certain they were about to ___.', answer: 'drown' },
      { speaker: 'teacher', emotion: '🧭', text: 'The captain, however, moved calmly between the sails, adjusting the ropes with steady ___.', answer: 'hands' },
      { speaker: 'scholar', emotion: '😲', text: 'A frightened passenger asked, "How can you remain so calm during such ___?"', answer: 'danger' },
      { speaker: 'teacher', emotion: '⚓', text: 'The captain replied, "Panic will not calm the sea. It will only worsen my ___."', answer: 'judgment' },
      { speaker: 'scholar', emotion: '💭', text: 'He explained that the storm itself was beyond anyone\'s control, but his response to it was entirely ___.', answer: 'his' },
      { speaker: 'teacher', emotion: '🌊', text: 'Fear would not steady the ropes; it would only make his hands ___.', answer: 'shake' },
      { speaker: 'scholar', emotion: '⚖️', text: 'The passenger asked, "But is fear not a natural response to real ___?"', answer: 'danger' },
      { speaker: 'teacher', emotion: '🌿', text: 'The captain nodded. "Natural, yes. Useful, rarely. My task is to act well, not to feel ___."', answer: 'nothing' },
      { speaker: 'scholar', emotion: '💡', text: 'By dawn, the storm passed, and the ship, guided by a captain who had refused to let fear steer, remained ___.', answer: 'intact' },
      { speaker: 'teacher', emotion: '🌅', text: 'The passenger thanked him and asked what had kept him so composed. The captain said simply, "I decided in advance which parts were mine to ___."', answer: 'handle' },
      { speaker: 'scholar', emotion: '✨', text: 'From that voyage on, the passenger remembered that a steady mind is often more valuable than calm ___.', answer: 'weather' }
    ]
  },

  "Stoic_Morning_Preparation": {
    questID: "Quest Story 43",
    title: "Preparing for Difficult People",
    subtitle: "A Stoic story about facing others' unkindness without losing our own composure.",
    conversation: [
      { speaker: 'teacher', emotion: '🌅', text: 'Each morning, a philosopher reminded himself that he would likely meet people who were rude, ungrateful, or ___.', answer: 'dishonest' },
      { speaker: 'scholar', emotion: '🤔', text: 'A student asked why he began every day expecting such ___ behaviour.', answer: 'unpleasant' },
      { speaker: 'teacher', emotion: '💭', text: 'The philosopher explained, "Not to expect the worst from people, but to avoid being ___ by ordinary difficulty."', answer: 'shocked' },
      { speaker: 'scholar', emotion: '⚖️', text: 'He continued, "If I imagine only kindness, one rude remark will feel like a personal ___."', answer: 'betrayal' },
      { speaker: 'teacher', emotion: '🌿', text: 'But if I remember that people act from confusion, pride, or fear, their unkindness becomes less ___.', answer: 'surprising' },
      { speaker: 'scholar', emotion: '🧘', text: 'The student asked, "Does this mean you excuse cruelty ___?"', answer: 'entirely' },
      { speaker: 'teacher', emotion: '💡', text: 'The philosopher shook his head. "No. I may still respond firmly. But I will not lose my own peace over someone else\'s ___."', answer: 'flaws' },
      { speaker: 'scholar', emotion: '🌊', text: 'That afternoon, a stranger insulted the philosopher publicly, but he responded with calm, measured ___.', answer: 'words' },
      { speaker: 'teacher', emotion: '😲', text: 'The student, watching, realised the philosopher had not been caught ___.', answer: 'unprepared' },
      { speaker: 'scholar', emotion: '🌱', text: 'He asked, "Is that why you rehearse this every morning?" The philosopher nodded. "A mind that expects difficulty rarely needs to ___ from it."', answer: 'recover' },
      { speaker: 'teacher', emotion: '⚔️', text: 'The student began his own mornings the same way, reminding himself that other people\'s behaviour was not something he needed to ___.', answer: 'control' },
      { speaker: 'scholar', emotion: '✨', text: 'Over time, he noticed that little truly ___ him anymore.', answer: 'shocked' }
    ]
  },

  "Stoic_Archers_Aim": {
    questID: "Quest Story 44",
    title: "The Archer’s Aim",
    subtitle: "A Stoic story about focusing on effort rather than uncontrollable outcomes.",
    conversation: [
      { speaker: 'teacher', emotion: '🏹', text: 'An archer trained for years to hit the centre of the ___.', answer: 'target' },
      { speaker: 'scholar', emotion: '💨', text: 'On the day of the contest, a sudden gust of wind shifted his arrow just before it struck the ___.', answer: 'target' },
      { speaker: 'teacher', emotion: '😞', text: 'He missed by a hair\'s width and felt a wave of ___ wash over him.', answer: 'disappointment' },
      { speaker: 'scholar', emotion: '🧘', text: 'His teacher approached and asked, "Did you aim carelessly, or did you aim as well as you ___?"', answer: 'could' },
      { speaker: 'teacher', emotion: '💭', text: 'The archer admitted his form, breath, and release had all been ___.', answer: 'correct' },
      { speaker: 'scholar', emotion: '🌬️', text: 'The teacher said, "Then the wind, not your skill, decided the ___."', answer: 'result' },
      { speaker: 'teacher', emotion: '⚖️', text: 'The archer\'s job was to aim well. Whether the wind cooperated was never within his ___.', answer: 'control' },
      { speaker: 'scholar', emotion: '🎯', text: 'The teacher explained, "Judge your effort by your form, not by a wind you never chose to ___."', answer: 'invite' },
      { speaker: 'teacher', emotion: '🌿', text: 'The archer nodded slowly. "So even a missed shot, aimed correctly, can still be considered a success ___?"', answer: 'internally' },
      { speaker: 'scholar', emotion: '💡', text: 'The teacher agreed. "External success depends on many things outside you. Internal success depends only on ___."', answer: 'you' },
      { speaker: 'teacher', emotion: '🏹', text: 'The archer picked up his next arrow, focusing entirely on his stance, breath, and ___.', answer: 'release' },
      { speaker: 'scholar', emotion: '✨', text: 'Whatever the wind decided next was, at last, no longer his to ___.', answer: 'carry' }
    ]
  },

  "Stoic_Habit_of_Complaint": {
    questID: "Quest Story 45",
    title: "The Habit of Complaint",
    subtitle: "A Stoic story about the quiet cost of constant grumbling.",
    conversation: [
      { speaker: 'teacher', emotion: '🌧️', text: 'A merchant complained daily about the weather, his customers, and his aching ___.', answer: 'back' },
      { speaker: 'scholar', emotion: '👂', text: 'A philosopher who shared his stall listened patiently, though he rarely offered a single ___.', answer: 'complaint' },
      { speaker: 'teacher', emotion: '🤔', text: 'One day, the merchant asked, "Does nothing ever trouble ___?"', answer: 'you' },
      { speaker: 'scholar', emotion: '🧘', text: 'The philosopher smiled. "Many things trouble me. I simply choose not to ___ them daily."', answer: 'announce' },
      { speaker: 'teacher', emotion: '💭', text: 'The merchant asked why. The philosopher explained, "Each complaint I speak, I also ___ again in my own mind."', answer: 'relive' },
      { speaker: 'scholar', emotion: '🌊', text: 'Voicing a grievance repeatedly does not release it; it often ___ it.', answer: 'rehearses' },
      { speaker: 'teacher', emotion: '⚖️', text: 'The merchant frowned. "Surely speaking about troubles helps us ___ them?"', answer: 'process' },
      { speaker: 'scholar', emotion: '🌿', text: 'The philosopher agreed that honest reflection has value, but constant complaint is different — it becomes a habit that trains the mind to notice only what is ___.', answer: 'wrong' },
      { speaker: 'teacher', emotion: '🔍', text: 'The merchant began paying attention to how often his words focused on what displeased him, versus what he actually ___.', answer: 'appreciated' },
      { speaker: 'scholar', emotion: '🌱', text: 'He tried an experiment: for one week, he would voice difficulties only once, then redirect his attention toward what remained ___.', answer: 'good' },
      { speaker: 'teacher', emotion: '💡', text: 'By the week\'s end, his back still ached, and customers were still difficult, yet his days somehow felt less ___.', answer: 'heavy' },
      { speaker: 'scholar', emotion: '✨', text: 'He realised complaint had never actually solved anything. It had only kept the difficulty freshly ___.', answer: 'alive' }
    ]
  },

  "Stoic_It_Was_Breakable": {
    questID: "Quest Story 46",
    title: "It Was Always Breakable",
    subtitle: "A Stoic story about accepting the fragile nature of what we own and love.",
    conversation: [
      { speaker: 'teacher', emotion: '🏺', text: 'A philosopher owned a favourite clay cup that he used every ___.', answer: 'morning' },
      { speaker: 'scholar', emotion: '💔', text: 'One day, a servant accidentally dropped it, and it shattered on the stone ___.', answer: 'floor' },
      { speaker: 'teacher', emotion: '😟', text: 'The servant braced for anger, but the philosopher only sighed and remarked that it had been merely a ___ thing.', answer: 'breakable' },
      { speaker: 'scholar', emotion: '🤔', text: 'A student asked, "Did the loss not upset you ___?"', answer: 'at' },
      { speaker: 'teacher', emotion: '🧘', text: 'The philosopher replied, "I already knew, the day I bought it, that clay ___."', answer: 'breaks' },
      { speaker: 'scholar', emotion: '💭', text: 'He explained that grief becomes far greater when we forget the true nature of the things we ___.', answer: 'hold' },
      { speaker: 'teacher', emotion: '⚖️', text: 'Anything made of clay was always capable of shattering. That truth had not changed the moment it ___.', answer: 'fell' },
      { speaker: 'scholar', emotion: '🌊', text: 'The student asked whether this applied only to objects. The philosopher shook his head. "It applies to health, to relationships, even to ___."', answer: 'life' },
      { speaker: 'teacher', emotion: '🌿', text: 'Remembering the fragile nature of what we love does not stop us from loving it. It simply prevents us from being blindsided by its ___.', answer: 'ending' },
      { speaker: 'scholar', emotion: '💡', text: 'The student began saying quietly to himself each morning, "What I hold today was never promised to be ___."', answer: 'permanent' },
      { speaker: 'teacher', emotion: '🍃', text: 'Rather than making him distant, this practice made him more ___ of ordinary moments.', answer: 'appreciative' },
      { speaker: 'scholar', emotion: '✨', text: 'The philosopher smiled. "The cup was never less precious for being breakable. It was simply always ___."', answer: 'temporary' }
    ]
  },

  "Stoic_Retreat_No_Defeat": {
    questID: "Quest Story 47",
    title: "Retreat Without Defeat",
    subtitle: "A Stoic story about the courage found in a wise withdrawal.",
    conversation: [
      { speaker: 'teacher', emotion: '⚔️', text: 'A young captain, outnumbered on the battlefield, considered ordering a ___.', answer: 'retreat' },
      { speaker: 'scholar', emotion: '😤', text: 'His pride whispered that retreating would make him look ___.', answer: 'weak' },
      { speaker: 'teacher', emotion: '🧠', text: 'An older general reminded him, "Courage is not the refusal to withdraw. It is the refusal to be ruled by ___."', answer: 'fear' },
      { speaker: 'scholar', emotion: '💭', text: 'The captain paused. He realised he had confused stubbornness with actual ___.', answer: 'bravery' },
      { speaker: 'teacher', emotion: '🗺️', text: 'The general explained that a well-timed retreat could save the army to fight another ___.', answer: 'day' },
      { speaker: 'scholar', emotion: '⚖️', text: 'Pressing forward simply to appear strong could instead lead to needless ___.', answer: 'loss' },
      { speaker: 'teacher', emotion: '🌿', text: 'The captain asked, "How do I know if I am retreating wisely, or merely running from ___?"', answer: 'fear' },
      { speaker: 'scholar', emotion: '🔍', text: 'The general replied, "Ask what serves the larger goal, not what protects your immediate ___."', answer: 'pride' },
      { speaker: 'teacher', emotion: '🛡️', text: 'The captain ordered a disciplined withdrawal, saving most of his ___.', answer: 'soldiers' },
      { speaker: 'scholar', emotion: '💡', text: 'Weeks later, with a stronger position and fresh troops, he returned and won the battle he had once nearly lost by ___.', answer: 'pride' },
      { speaker: 'teacher', emotion: '🏆', text: 'His mentor reminded him, "History remembers those who chose wisely, not merely those who refused to ___."', answer: 'move' },
      { speaker: 'scholar', emotion: '✨', text: 'The captain finally understood that stepping back is sometimes the bravest way to move ___.', answer: 'forward' }
    ]
  },

  "Stoic_Old_Soldier": {
    questID: "Quest Story 48",
    title: "Fear of Death",
    subtitle: "A Stoic story about facing mortality without being ruled by dread.",
    conversation: [
      { speaker: 'teacher', emotion: '🕯️', text: 'An old soldier confessed to a philosopher that, despite years of battle, he still feared ___.', answer: 'death' },
      { speaker: 'scholar', emotion: '🤔', text: 'The philosopher asked, "What exactly do you fear about ___?"', answer: 'it' },
      { speaker: 'teacher', emotion: '💭', text: 'The soldier thought for a long while. "I suppose I fear the ___ of it, and everything I will leave behind."', answer: 'unknown' },
      { speaker: 'scholar', emotion: '🧘', text: 'The philosopher asked, "Did you fear the years before you were born, when you did not yet ___?"', answer: 'exist' },
      { speaker: 'teacher', emotion: '😲', text: 'The soldier shook his head. "That time troubles me ___."', answer: 'not' },
      { speaker: 'scholar', emotion: '⚖️', text: 'The philosopher said, "Death may simply be a return to that same peaceful state you never found ___."', answer: 'frightening' },
      { speaker: 'teacher', emotion: '🌿', text: 'The soldier considered this, but admitted he still felt uneasy about the loss of everything he had ___.', answer: 'built' },
      { speaker: 'scholar', emotion: '🌊', text: 'The philosopher replied, "Then let that unease sharpen your attention, not toward death, but toward how you spend the time you still ___."', answer: 'have' },
      { speaker: 'teacher', emotion: '💡', text: 'He explained that fearing death often causes us to waste the very days we are so afraid to ___.', answer: 'lose' },
      { speaker: 'scholar', emotion: '🌅', text: 'The soldier realised he had spent years dreading an ending instead of appreciating each present ___.', answer: 'day' },
      { speaker: 'teacher', emotion: '🕊️', text: 'The philosopher added, "A person who has truly lived each day well has little left to ___ when the end arrives."', answer: 'regret' },
      { speaker: 'scholar', emotion: '✨', text: 'From then on, the soldier measured his life not by its length, but by how fully he had ___ it.', answer: 'lived' }
    ]
  },

  "Stoic_Two_Handles": {
    questID: "Quest Story 49",
    title: "Every Event Has Two Handles",
    subtitle: "A Stoic story about choosing how we pick up what happens to us.",
    conversation: [
      { speaker: 'teacher', emotion: '🏺', text: 'A philosopher held up a clay jug and pointed to its two ___.', answer: 'handles' },
      { speaker: 'scholar', emotion: '🤔', text: 'One handle was smooth and easy to grip; the other was cracked and ___.', answer: 'sharp' },
      { speaker: 'teacher', emotion: '💭', text: 'He explained that every difficult event in life, like this jug, can be picked up by either ___.', answer: 'handle' },
      { speaker: 'scholar', emotion: '⚖️', text: 'A brother\'s harsh words, for example, can be grasped by the handle of ___.', answer: 'betrayal' },
      { speaker: 'teacher', emotion: '🌿', text: 'Or the very same words can be grasped by the handle of shared history and ___.', answer: 'love' },
      { speaker: 'scholar', emotion: '🔍', text: 'The philosopher asked his student, "Which handle do you usually reach for when something painful ___?"', answer: 'happens' },
      { speaker: 'teacher', emotion: '😳', text: 'The student admitted he almost always reached for the sharper ___.', answer: 'one' },
      { speaker: 'scholar', emotion: '💡', text: 'The philosopher said, "That is not the event\'s fault. It is simply a habit of ___."', answer: 'grasping' },
      { speaker: 'teacher', emotion: '🌊', text: 'He encouraged the student to pause before responding, and to consciously search for the more useful ___.', answer: 'handle' },
      { speaker: 'scholar', emotion: '🌱', text: 'The student began practising this with small frustrations first, before attempting it with larger ___.', answer: 'ones' },
      { speaker: 'teacher', emotion: '⚖️', text: 'Over time, he noticed that most events genuinely did offer more than one way to be ___.', answer: 'carried' },
      { speaker: 'scholar', emotion: '✨', text: 'The philosopher smiled. "The jug does not change. Only the hand deciding where to ___ changes."', answer: 'grip' }
    ]
  },

  "Fable_Tortoise_Hare": {
    questID: "Quest Story 50",
    title: "Slow and Steady",
    subtitle: "A fable about consistency outlasting raw talent.",
    conversation: [
      { speaker: 'teacher', emotion: '🐇', text: 'A hare boasted to every animal in the forest about how ___ he could run.', answer: 'fast' },
      { speaker: 'scholar', emotion: '🐢', text: 'A tortoise, tired of the boasting, calmly challenged him to a ___.', answer: 'race' },
      { speaker: 'teacher', emotion: '😂', text: 'The hare laughed so hard he nearly fell over, certain the race would be ___.', answer: 'easy' },
      { speaker: 'scholar', emotion: '🏁', text: 'At the starting line, the hare shot forward, quickly leaving the tortoise far ___.', answer: 'behind' },
      { speaker: 'teacher', emotion: '😴', text: 'Confident of victory, the hare decided to lie down and take a short ___.', answer: 'nap' },
      { speaker: 'scholar', emotion: '🐢', text: 'The tortoise, meanwhile, kept moving forward at a slow but ___ pace.', answer: 'steady' },
      { speaker: 'teacher', emotion: '⏰', text: 'When the hare finally woke, he was shocked to see how far he had fallen ___.', answer: 'behind' },
      { speaker: 'scholar', emotion: '🏃', text: 'He sprinted with all his strength, but it was already too ___.', answer: 'late' },
      { speaker: 'teacher', emotion: '🏆', text: 'The tortoise crossed the finish line first, to the astonishment of every animal ___.', answer: 'watching' },
      { speaker: 'scholar', emotion: '😳', text: 'The hare hung his head, realising that talent without effort had cost him the ___.', answer: 'race' },
      { speaker: 'teacher', emotion: '🌿', text: 'The tortoise said kindly, "Speed matters little if it is not paired with ___."', answer: 'persistence' },
      { speaker: 'scholar', emotion: '✨', text: 'From that day on, the hare remembered that steady effort will often outlast a burst of ___.', answer: 'talent' }
    ]
  },

  "Fable_Ant_Grasshopper": {
    questID: "Quest Story 51",
    title: "The Ant and the Grasshopper",
    subtitle: "A fable about preparation, discipline, and thinking beyond the present moment.",
    conversation: [
      { speaker: 'teacher', emotion: '🐜', text: 'All through the warm summer, an ant worked tirelessly, gathering food for the coming ___.', answer: 'winter' },
      { speaker: 'scholar', emotion: '🎶', text: 'Nearby, a grasshopper spent his days singing and playing, enjoying every sunny ___.', answer: 'afternoon' },
      { speaker: 'teacher', emotion: '🤨', text: '"Why work so hard?" the grasshopper asked. "Come dance instead of wasting the ___."', answer: 'summer' },
      { speaker: 'scholar', emotion: '🐜', text: 'The ant replied, "Winter will come whether I prepare for it or ___."', answer: 'not' },
      { speaker: 'teacher', emotion: '😏', text: 'The grasshopper laughed and continued singing, certain that tomorrow would take care of ___.', answer: 'itself' },
      { speaker: 'scholar', emotion: '❄️', text: 'Weeks later, the first snow fell, and the grasshopper found no food left ___.', answer: 'anywhere' },
      { speaker: 'teacher', emotion: '🥶', text: 'Hungry and cold, he knocked on the ant\'s door, hoping for a bit of ___.', answer: 'help' },
      { speaker: 'scholar', emotion: '🚪', text: 'The ant let him in and shared a small portion of the food he had carefully ___.', answer: 'stored' },
      { speaker: 'teacher', emotion: '💭', text: 'The grasshopper, humbled, admitted that he had mistaken preparation for wasted ___.', answer: 'time' },
      { speaker: 'scholar', emotion: '🌱', text: 'The ant said gently, "Enjoyment and effort are not enemies. But one without the other leaves you ___."', answer: 'unprepared' },
      { speaker: 'teacher', emotion: '⚖️', text: 'The grasshopper resolved that from the next spring on, he would balance his songs with some ___.', answer: 'work' },
      { speaker: 'scholar', emotion: '✨', text: 'He learned that the season of ease is often the best time to prepare for the season of ___.', answer: 'difficulty' }
    ]
  },

  "Fable_Boy_Who_Cried_Wolf": {
    questID: "Quest Story 52",
    title: "The Boy Who Cried Wolf",
    subtitle: "A fable about the fragile nature of trust once it has been broken.",
    conversation: [
      { speaker: 'teacher', emotion: '🐑', text: 'A shepherd boy grew bored watching his flock and decided to play a ___ on the villagers.', answer: 'trick' },
      { speaker: 'scholar', emotion: '😱', text: 'He shouted, "Wolf! Wolf!" and villagers rushed up the hill, only to find no wolf ___.', answer: 'present' },
      { speaker: 'teacher', emotion: '😂', text: 'The boy laughed at their panic, delighted by how easily he could fool ___.', answer: 'them' },
      { speaker: 'scholar', emotion: '🔁', text: 'A few days later, he tried the same trick again, and again the villagers came ___.', answer: 'running' },
      { speaker: 'teacher', emotion: '😤', text: 'When they found nothing once more, their patience began to visibly ___.', answer: 'thin' },
      { speaker: 'scholar', emotion: '🐺', text: 'Then, one evening, an actual wolf crept toward the flock, and the boy screamed for genuine ___.', answer: 'help' },
      { speaker: 'teacher', emotion: '🤷', text: 'The villagers, remembering the earlier tricks, decided this cry was simply another false ___.', answer: 'alarm' },
      { speaker: 'scholar', emotion: '🏃', text: 'No one came, and the wolf scattered the flock before finally ___ away.', answer: 'running' },
      { speaker: 'teacher', emotion: '😢', text: 'The boy sat among the frightened sheep, realising too late what he had ___.', answer: 'lost' },
      { speaker: 'scholar', emotion: '💭', text: 'His grandfather told him gently, "Trust is built slowly, but it can be destroyed by a single ___."', answer: 'lie' },
      { speaker: 'teacher', emotion: '🌿', text: 'The boy understood that once people learn not to believe you, even the ___ can go unanswered.', answer: 'truth' },
      { speaker: 'scholar', emotion: '✨', text: 'From then on, he guarded his words carefully, knowing that honesty, once spent carelessly, is hard to ___.', answer: 'rebuild' }
    ]
  },

  "Fable_Fox_and_Grapes": {
    questID: "Quest Story 53",
    title: "The Fox and the Grapes",
    subtitle: "A fable about dismissing what we cannot have rather than admitting defeat.",
    conversation: [
      { speaker: 'teacher', emotion: '🦊', text: 'A hungry fox wandered through a vineyard and spotted a cluster of ripe ___ hanging overhead.', answer: 'grapes' },
      { speaker: 'scholar', emotion: '👅', text: 'His mouth watered as he imagined how sweet and juicy they must ___.', answer: 'taste' },
      { speaker: 'teacher', emotion: '🦘', text: 'He leapt as high as he could, but the grapes remained just out of ___.', answer: 'reach' },
      { speaker: 'scholar', emotion: '😤', text: 'He tried again and again, each jump falling frustratingly ___.', answer: 'short' },
      { speaker: 'teacher', emotion: '😮‍💨', text: 'Exhausted, the fox finally gave up, panting and thoroughly ___.', answer: 'defeated' },
      { speaker: 'scholar', emotion: '🙄', text: 'As he walked away, he muttered that the grapes were probably sour and not worth eating ___.', answer: 'anyway' },
      { speaker: 'teacher', emotion: '🦉', text: 'An owl watching from a branch asked, "Are they truly sour, or did they simply prove too hard to ___?"', answer: 'reach' },
      { speaker: 'scholar', emotion: '😳', text: 'The fox paused, embarrassed to admit that he had never actually ___ them.', answer: 'tasted' },
      { speaker: 'teacher', emotion: '💭', text: 'The owl explained that it is often easier to insult what we want than to admit we could not ___ it.', answer: 'get' },
      { speaker: 'scholar', emotion: '🌿', text: 'The fox realised that calling the grapes sour had protected his pride, but had also kept him from being ___.', answer: 'honest' },
      { speaker: 'teacher', emotion: '⚖️', text: 'The owl added, "There is no shame in failing to reach something. The shame lies only in pretending you never ___ it."', answer: 'wanted' },
      { speaker: 'scholar', emotion: '✨', text: 'The fox walked on, resolving that next time, he would simply admit defeat rather than dismiss the ___.', answer: 'grapes' }
    ]
  },

  "Fable_Golden_Goose": {
    questID: "Quest Story 54",
    title: "The Goose That Laid Golden Eggs",
    subtitle: "A fable about greed destroying the very source of a good fortune.",
    conversation: [
      { speaker: 'teacher', emotion: '🦢', text: 'A poor farmer discovered that his goose laid a single golden egg every ___.', answer: 'morning' },
      { speaker: 'scholar', emotion: '💰', text: 'He sold each egg and slowly grew wealthier than he had ever ___ possible.', answer: 'imagined' },
      { speaker: 'teacher', emotion: '😩', text: 'But one golden egg a day soon felt too slow for his growing ___.', answer: 'greed' },
      { speaker: 'scholar', emotion: '🤔', text: 'He reasoned that if one egg lay inside the goose each day, surely many more must be ___ within.', answer: 'hidden' },
      { speaker: 'teacher', emotion: '🔪', text: 'Impatient, he decided to cut the goose open and claim all the gold at ___.', answer: 'once' },
      { speaker: 'scholar', emotion: '😱', text: 'To his horror, he found no treasure inside — only the ordinary insides of an ordinary ___.', answer: 'bird' },
      { speaker: 'teacher', emotion: '💔', text: 'The goose was dead, and with it, the daily gift he had once taken for ___.', answer: 'granted' },
      { speaker: 'scholar', emotion: '😢', text: 'The farmer sat in the empty barn, realising his greed had destroyed a steady source of ___.', answer: 'wealth' },
      { speaker: 'teacher', emotion: '💭', text: 'A neighbour who heard the story remarked, "He wanted everything at once, and so he received ___."', answer: 'nothing' },
      { speaker: 'scholar', emotion: '⚖️', text: 'The story spread through the village as a warning against exchanging steady gain for a moment of ___.', answer: 'impatience' },
      { speaker: 'teacher', emotion: '🌱', text: 'Villagers began reminding their children that some good things arrive slowly, and rushing them can ___ them entirely.', answer: 'destroy' },
      { speaker: 'scholar', emotion: '✨', text: 'The lesson endured for generations: patience can protect the very source of a fortune that greed would ___.', answer: 'ruin' }
    ]
  },

  "Fable_Wind_and_Sun": {
    questID: "Quest Story 55",
    title: "The Wind and the Sun",
    subtitle: "A fable about the difference between force and gentle persuasion.",
    conversation: [
      { speaker: 'teacher', emotion: '💨', text: 'The Wind and the Sun argued over which of them was truly ___.', answer: 'stronger' },
      { speaker: 'scholar', emotion: '🧥', text: 'They noticed a traveller walking below, wrapped in a heavy ___.', answer: 'cloak' },
      { speaker: 'teacher', emotion: '🎯', text: 'The Wind proposed a contest: whoever could make the traveller remove his cloak would be declared ___.', answer: 'stronger' },
      { speaker: 'scholar', emotion: '🌬️', text: 'The Wind went first, blowing with tremendous force, trying to tear the cloak ___.', answer: 'off' },
      { speaker: 'teacher', emotion: '🥶', text: 'But the harder the Wind blew, the tighter the traveller pulled the cloak ___ himself.', answer: 'around' },
      { speaker: 'scholar', emotion: '😤', text: 'Eventually the Wind gave up, exhausted and completely ___.', answer: 'unsuccessful' },
      { speaker: 'teacher', emotion: '☀️', text: 'Then the Sun took its turn, simply shining warmly and ___.', answer: 'gently' },
      { speaker: 'scholar', emotion: '🥵', text: 'As the warmth grew, the traveller loosened his cloak, then finally removed it ___.', answer: 'entirely' },
      { speaker: 'teacher', emotion: '🏆', text: 'The Sun had accomplished with warmth what the Wind could not achieve through ___.', answer: 'force' },
      { speaker: 'scholar', emotion: '💭', text: 'The Wind admitted grudgingly that gentleness had proven more effective than raw ___.', answer: 'strength' },
      { speaker: 'teacher', emotion: '🌿', text: 'The Sun replied kindly, "People rarely open up when pushed. They often open on their own when made to feel ___."', answer: 'safe' },
      { speaker: 'scholar', emotion: '✨', text: 'From that day, both understood that persuasion built on warmth can outlast persuasion built on ___.', answer: 'pressure' }
    ]
  },

  "Fable_Lion_and_Mouse": {
    questID: "Quest Story 56",
    title: "The Lion and the Mouse",
    subtitle: "A fable about how even the smallest creatures can offer great help.",
    conversation: [
      { speaker: 'teacher', emotion: '🦁', text: 'A sleeping lion was woken suddenly when a small mouse scurried across his ___.', answer: 'paw' },
      { speaker: 'scholar', emotion: '😠', text: 'Furious, the lion raised his massive paw, ready to crush the tiny ___.', answer: 'mouse' },
      { speaker: 'teacher', emotion: '🐭', text: 'The mouse pleaded desperately, "Please spare me, and one day I may return the ___."', answer: 'favour' },
      { speaker: 'scholar', emotion: '😂', text: 'The lion laughed at the idea that such a small creature could ever help ___.', answer: 'him' },
      { speaker: 'teacher', emotion: '🌿', text: 'Still, amused rather than convinced, he let the mouse go ___.', answer: 'free' },
      { speaker: 'scholar', emotion: '🕸️', text: 'Weeks later, the lion became trapped in a hunter\'s net, unable to ___ himself.', answer: 'free' },
      { speaker: 'teacher', emotion: '😖', text: 'He roared in frustration, but the ropes only tightened with every ___.', answer: 'struggle' },
      { speaker: 'scholar', emotion: '🐭', text: 'The little mouse, hearing the roar, rushed over and began gnawing carefully at the ___.', answer: 'ropes' },
      { speaker: 'teacher', emotion: '✂️', text: 'Bit by bit, the net loosened until the lion could finally break ___.', answer: 'free' },
      { speaker: 'scholar', emotion: '😲', text: 'The lion stared at the tiny creature who had just done what his own strength could ___.', answer: 'not' },
      { speaker: 'teacher', emotion: '💭', text: 'The mouse said softly, "You once thought me too small to be of any ___."', answer: 'use' },
      { speaker: 'scholar', emotion: '✨', text: 'The lion bowed his great head, finally understanding that kindness is never wasted, no matter how small the ___.', answer: 'recipient' }
    ]
  },

  "Fable_Crow_and_Pitcher": {
    questID: "Quest Story 57",
    title: "The Crow and the Pitcher",
    subtitle: "A fable about solving a problem through patience and clever thinking.",
    conversation: [
      { speaker: 'teacher', emotion: '🐦', text: 'A thirsty crow discovered a tall pitcher with a small amount of water at the ___.', answer: 'bottom' },
      { speaker: 'scholar', emotion: '😩', text: 'He dipped his beak in, but the water level was far too low to ___.', answer: 'reach' },
      { speaker: 'teacher', emotion: '💪', text: 'He tried tipping the pitcher over, but it was too heavy to ___.', answer: 'move' },
      { speaker: 'scholar', emotion: '🤔', text: 'Exhausted and desperate, he sat back and thought carefully about what else he might ___.', answer: 'try' },
      { speaker: 'teacher', emotion: '👀', text: 'Nearby, he noticed a small pile of loose pebbles scattered across the ___.', answer: 'ground' },
      { speaker: 'scholar', emotion: '💡', text: 'An idea began to form. He picked up a pebble and dropped it carefully into the ___.', answer: 'pitcher' },
      { speaker: 'teacher', emotion: '🪨', text: 'One by one, he dropped more pebbles in, watching the water slowly ___.', answer: 'rise' },
      { speaker: 'scholar', emotion: '⏳', text: 'It took patience and many trips, but the crow refused to ___ up.', answer: 'give' },
      { speaker: 'teacher', emotion: '💧', text: 'Eventually, the water rose high enough for his beak to finally ___ it.', answer: 'reach' },
      { speaker: 'scholar', emotion: '😌', text: 'He drank deeply, grateful that patience had solved what strength could ___.', answer: 'not' },
      { speaker: 'teacher', emotion: '🌿', text: 'A nearby sparrow asked how he had thought of such a clever ___.', answer: 'solution' },
      { speaker: 'scholar', emotion: '✨', text: 'The crow replied, "When force fails, it is worth pausing to ___ instead of pushing harder."', answer: 'think' }
    ]
  },

  "Fable_Dog_Reflection": {
    questID: "Quest Story 58",
    title: "The Dog and His Reflection",
    subtitle: "A fable about greed causing us to lose what we already have.",
    conversation: [
      { speaker: 'teacher', emotion: '🐕', text: 'A dog trotted proudly along a riverbank, carrying a juicy bone between his ___.', answer: 'teeth' },
      { speaker: 'scholar', emotion: '🌊', text: 'Crossing a narrow bridge, he glanced down and saw his own reflection in the still ___.', answer: 'water' },
      { speaker: 'teacher', emotion: '👀', text: 'Mistaking the reflection for another dog, he stared at the bone the other dog seemed to be ___.', answer: 'holding' },
      { speaker: 'scholar', emotion: '😠', text: 'Convinced the other dog\'s bone looked larger, he felt a surge of jealous ___.', answer: 'greed' },
      { speaker: 'teacher', emotion: '😤', text: 'Determined to steal it, he opened his mouth wide and gave a threatening ___.', answer: 'growl' },
      { speaker: 'scholar', emotion: '💦', text: 'The moment he opened his mouth, his own bone fell and sank beneath the ___.', answer: 'water' },
      { speaker: 'teacher', emotion: '😲', text: 'The reflection vanished instantly, and he realised there had never been a second dog ___.', answer: 'at' },
      { speaker: 'scholar', emotion: '😔', text: 'He stood on the bridge, hungry and empty-mouthed, having lost the bone he had already ___.', answer: 'possessed' },
      { speaker: 'teacher', emotion: '💭', text: 'An old farmer watching from the shore remarked, "He lost a real bone chasing an ___ one."', answer: 'imagined' },
      { speaker: 'scholar', emotion: '⚖️', text: 'The story reminded villagers that comparing what we have to what others seem to possess can cost us the good we already ___.', answer: 'hold' },
      { speaker: 'teacher', emotion: '🌿', text: 'The farmer added, "Contentment with a real bone beats envy over a ___ one."', answer: 'reflected' },
      { speaker: 'scholar', emotion: '✨', text: 'From then on, the phrase was repeated in the village whenever someone risked something real to chase something merely ___.', answer: 'imagined' }
    ]
  },

  "Fable_Scorpion_Frog": {
    questID: "Quest Story 59",
    title: "The Scorpion and the Frog",
    subtitle: "A fable about trusting actions and character over promises.",
    conversation: [
      { speaker: 'teacher', emotion: '🦂', text: 'A scorpion needed to cross a river but could not ___.', answer: 'swim' },
      { speaker: 'scholar', emotion: '🐸', text: 'He asked a frog nearby to carry him across on his ___.', answer: 'back' },
      { speaker: 'teacher', emotion: '😨', text: 'The frog hesitated. "If I carry you, you might ___ me."', answer: 'sting' },
      { speaker: 'scholar', emotion: '🤝', text: 'The scorpion reasoned, "Why would I do that? We would both ___ in the river."', answer: 'drown' },
      { speaker: 'teacher', emotion: '🐸', text: 'Convinced by the logic, the frog agreed and let the scorpion climb onto his ___.', answer: 'back' },
      { speaker: 'scholar', emotion: '🌊', text: 'Halfway across the river, the scorpion suddenly ___ the frog.', answer: 'stung' },
      { speaker: 'teacher', emotion: '😱', text: 'As poison spread through them both, the frog gasped, "Why? Now we will both ___!"', answer: 'die' },
      { speaker: 'scholar', emotion: '🦂', text: 'The scorpion replied simply, "It is my ___. I could not help it."', answer: 'nature' },
      { speaker: 'teacher', emotion: '💭', text: 'As they sank together, the frog realised too late that some promises cannot override deep ___.', answer: 'character' },
      { speaker: 'scholar', emotion: '⚖️', text: 'A heron watching from the reeds later told the story as a warning about trusting words over ___.', answer: 'nature' },
      { speaker: 'teacher', emotion: '🌿', text: 'The heron explained, "Reasonable arguments can persuade the mind, but they cannot always change someone\'s underlying ___."', answer: 'nature' },
      { speaker: 'scholar', emotion: '✨', text: 'The lesson lasted for generations: watch what someone consistently does, not merely what they logically ___.', answer: 'promise' }
    ]
  },

  "Fable_Wolf_Sheeps_Clothing": {
    questID: "Quest Story 60",
    title: "The Wolf in Sheep’s Clothing",
    subtitle: "A fable about the danger of judging by appearance alone.",
    conversation: [
      { speaker: 'teacher', emotion: '🐺', text: 'A hungry wolf grew tired of chasing sheep that always ran ___ from him.', answer: 'away' },
      { speaker: 'scholar', emotion: '🐑', text: 'He devised a plan and disguised himself in the woolly skin of a dead ___.', answer: 'sheep' },
      { speaker: 'teacher', emotion: '🚪', text: 'Wearing the disguise, he wandered calmly into the flock, entirely ___.', answer: 'unnoticed' },
      { speaker: 'scholar', emotion: '😌', text: 'The other sheep, seeing only wool, accepted him as one of their ___.', answer: 'own' },
      { speaker: 'teacher', emotion: '🌙', text: 'That night, hidden safely among the flock, he waited patiently for his chance to ___.', answer: 'strike' },
      { speaker: 'scholar', emotion: '👁️', text: 'A watchful shepherd dog, however, noticed something slightly ___ about the newest sheep\'s movements.', answer: 'unusual' },
      { speaker: 'teacher', emotion: '🐕', text: 'The dog approached quietly, sniffing beneath the wool, and quickly recognised the scent of a ___.', answer: 'wolf' },
      { speaker: 'scholar', emotion: '⚔️', text: 'Before the wolf could act, the dog alerted the shepherd, who drove the intruder ___.', answer: 'away' },
      { speaker: 'teacher', emotion: '💭', text: 'The other sheep were stunned that danger had walked among them looking exactly like ___.', answer: 'safety' },
      { speaker: 'scholar', emotion: '⚖️', text: 'The shepherd reminded his flock, "Appearances can be borrowed. Character usually cannot be ___."', answer: 'hidden' },
      { speaker: 'teacher', emotion: '🔍', text: 'From then on, the flock paid closer attention to behaviour rather than simply trusting ___.', answer: 'appearance' },
      { speaker: 'scholar', emotion: '✨', text: 'They learned that true safety comes from noticing what someone does, not merely what they seem to ___.', answer: 'be' }
    ]
  },

  "Fable_Bundle_of_Sticks": {
    questID: "Quest Story 61",
    title: "The Bundle of Sticks",
    subtitle: "A fable about the strength found in unity.",
    conversation: [
      { speaker: 'teacher', emotion: '🪵', text: 'An old farmer, worried about his quarrelling sons, gathered them together with a bundle of ___.', answer: 'sticks' },
      { speaker: 'scholar', emotion: '💪', text: 'He asked each son, in turn, to try breaking the entire bundle at ___.', answer: 'once' },
      { speaker: 'teacher', emotion: '😤', text: 'One by one, each son strained with all his strength, but the bundle refused to ___.', answer: 'break' },
      { speaker: 'scholar', emotion: '🤔', text: 'The sons looked at each other, puzzled by their father\'s strange ___.', answer: 'request' },
      { speaker: 'teacher', emotion: '🪵', text: 'The farmer then untied the bundle and handed each son a single ___.', answer: 'stick' },
      { speaker: 'scholar', emotion: '💥', text: 'This time, each stick snapped easily, with barely any ___ at all.', answer: 'effort' },
      { speaker: 'teacher', emotion: '💭', text: 'The farmer said quietly, "Alone, each of you can be broken with little ___."', answer: 'effort' },
      { speaker: 'scholar', emotion: '🤝', text: '"Together, bound by loyalty, you become nearly ___."', answer: 'unbreakable' },
      { speaker: 'teacher', emotion: '👨‍👦‍👦', text: 'The sons, ashamed of their earlier quarrels, understood the lesson their father had carefully ___.', answer: 'prepared' },
      { speaker: 'scholar', emotion: '🌿', text: 'They realised their rivalry had made each of them individually easy to ___.', answer: 'weaken' },
      { speaker: 'teacher', emotion: '⚖️', text: 'From that day, the brothers made a pact to support one another rather than compete ___.', answer: 'against' },
      { speaker: 'scholar', emotion: '✨', text: 'Years later, they remained close, remembering that unity had made them stronger than any single ___ could be.', answer: 'stick' }
    ]
  },

  "Fable_Milkmaid_Pail": {
    questID: "Quest Story 62",
    title: "The Milkmaid and Her Pail",
    subtitle: "A fable about daydreaming so far ahead that we lose the present moment.",
    conversation: [
      { speaker: 'teacher', emotion: '🥛', text: 'A milkmaid walked to market carrying a pail balanced carefully on her ___.', answer: 'head' },
      { speaker: 'scholar', emotion: '💭', text: 'As she walked, she began imagining all the money the milk would ___.', answer: 'earn' },
      { speaker: 'teacher', emotion: '🐔', text: 'With that money, she planned to buy chickens, which would soon lay plenty of ___.', answer: 'eggs' },
      { speaker: 'scholar', emotion: '💰', text: 'Selling the eggs, she imagined, would earn her enough to buy a fine new ___.', answer: 'dress' },
      { speaker: 'teacher', emotion: '💃', text: 'Wearing the dress, she pictured herself attracting many admirers at the village ___.', answer: 'fair' },
      { speaker: 'scholar', emotion: '🙅', text: 'Lost in her daydream, she imagined tossing her head proudly and refusing every suitor\'s ___.', answer: 'offer' },
      { speaker: 'teacher', emotion: '😲', text: 'Acting out the imagined moment, she tossed her head, forgetting entirely about the pail balanced ___.', answer: 'above' },
      { speaker: 'scholar', emotion: '💦', text: 'The pail tumbled to the ground, spilling every drop of milk into the ___.', answer: 'dust' },
      { speaker: 'teacher', emotion: '😭', text: 'With the milk gone, so too vanished the chickens, the dress, and the imagined ___.', answer: 'suitors' },
      { speaker: 'scholar', emotion: '💭', text: 'An old woman nearby said gently, "You built a whole future before securing the ___ you already had."', answer: 'milk' },
      { speaker: 'teacher', emotion: '🌿', text: 'The milkmaid picked up the empty pail, understanding that plans built too far ahead can distract from the ___ step.', answer: 'present' },
      { speaker: 'scholar', emotion: '✨', text: 'From then on, she carried her pail carefully, learning to dream without losing sight of what was actually in her ___.', answer: 'hands' }
    ]
  },

  "Fable_Oak_and_Reed": {
    questID: "Quest Story 63",
    title: "The Oak and the Reed",
    subtitle: "A fable about the different strengths of rigidity and flexibility.",
    conversation: [
      { speaker: 'teacher', emotion: '🌳', text: 'A mighty oak stood beside a small patch of slender reeds along a river\'s ___.', answer: 'bank' },
      { speaker: 'scholar', emotion: '😤', text: 'The oak often mocked the reeds for trembling at even the gentlest ___.', answer: 'breeze' },
      { speaker: 'teacher', emotion: '🌬️', text: '"I stand firm against every storm," the oak boasted, "while you simply ___ at the slightest wind."', answer: 'bend' },
      { speaker: 'scholar', emotion: '🎋', text: 'The reeds replied quietly, "We bend, but we rarely ___."', answer: 'break' },
      { speaker: 'teacher', emotion: '⛈️', text: 'One night, a violent storm swept through the valley, testing the strength of every living ___.', answer: 'thing' },
      { speaker: 'scholar', emotion: '💨', text: 'The reeds bowed low, again and again, letting the wind pass over them without ___.', answer: 'resistance' },
      { speaker: 'teacher', emotion: '⚡', text: 'The proud oak, refusing to yield even slightly, strained against the wind with all its ___.', answer: 'strength' },
      { speaker: 'scholar', emotion: '💥', text: 'By dawn, the mighty trunk had finally cracked, torn apart by the very force it had refused to ___.', answer: 'yield' },
      { speaker: 'teacher', emotion: '🎋', text: 'The reeds, meanwhile, stood upright once more, undamaged and quietly ___.', answer: 'unharmed' },
      { speaker: 'scholar', emotion: '💭', text: 'A passing traveller remarked that the oak had confused rigidity with ___.', answer: 'strength' },
      { speaker: 'teacher', emotion: '⚖️', text: 'He noted that survival sometimes favours those willing to ___, not merely those who refuse to move.', answer: 'adapt' },
      { speaker: 'scholar', emotion: '✨', text: 'The reeds, still standing among the fallen branches, proved that flexibility can be its own kind of ___.', answer: 'strength' }
    ]
  },

  "Fable_Belled_Cat": {
    questID: "Quest Story 64",
    title: "Belling the Cat",
    subtitle: "A fable about the gap between a clever plan and the courage to carry it out.",
    conversation: [
      { speaker: 'teacher', emotion: '🐭', text: 'A colony of mice, tired of a cat\'s constant threat, called an urgent ___.', answer: 'meeting' },
      { speaker: 'scholar', emotion: '💡', text: 'One young mouse proposed a clever idea: tying a small bell around the cat\'s ___.', answer: 'neck' },
      { speaker: 'teacher', emotion: '🔔', text: 'The bell would jingle with every step, giving the mice plenty of warning to ___.', answer: 'escape' },
      { speaker: 'scholar', emotion: '👏', text: 'The other mice cheered, thrilled by such a simple and clever ___.', answer: 'solution' },
      { speaker: 'teacher', emotion: '❓', text: 'An old mouse in the back finally asked, "And which of you will actually ___ the bell on?"', answer: 'put' },
      { speaker: 'scholar', emotion: '😶', text: 'The cheering stopped instantly, replaced by an uncomfortable ___.', answer: 'silence' },
      { speaker: 'teacher', emotion: '👀', text: 'No mouse volunteered, each one suddenly finding something interesting to look at ___.', answer: 'elsewhere' },
      { speaker: 'scholar', emotion: '😅', text: 'The young mouse who proposed the plan admitted he had not thought that far ___.', answer: 'ahead' },
      { speaker: 'teacher', emotion: '💭', text: 'The old mouse said gently, "A brilliant plan means little if no one is willing to ___ it."', answer: 'attempt' },
      { speaker: 'scholar', emotion: '⚖️', text: 'The colony realised that solving a problem on paper is very different from solving it in ___.', answer: 'practice' },
      { speaker: 'teacher', emotion: '🌿', text: 'They eventually agreed to search for a plan that was not just clever, but actually ___.', answer: 'possible' },
      { speaker: 'scholar', emotion: '✨', text: 'The old mouse\'s question was remembered for years as a reminder that ideas need someone willing to carry them ___.', answer: 'out' }
    ]
  },

  "Fable_Donkey_Salt": {
    questID: "Quest Story 65",
    title: "The Donkey Carrying Salt",
    subtitle: "A fable about learning the wrong lesson from a lucky accident.",
    conversation: [
      { speaker: 'teacher', emotion: '🫏', text: 'A merchant loaded his donkey with heavy sacks of ___ to carry to market.', answer: 'salt' },
      { speaker: 'scholar', emotion: '🌊', text: 'Crossing a shallow stream, the donkey suddenly stumbled and fell into the ___.', answer: 'water' },
      { speaker: 'teacher', emotion: '💧', text: 'By the time he stood back up, much of the salt had dissolved, making his load surprisingly ___.', answer: 'lighter' },
      { speaker: 'scholar', emotion: '😊', text: 'Delighted by his lucky discovery, the donkey resolved to repeat the trick on every future ___.', answer: 'crossing' },
      { speaker: 'teacher', emotion: '🧺', text: 'The next week, the merchant loaded him instead with sacks of soft, absorbent ___.', answer: 'wool' },
      { speaker: 'scholar', emotion: '🫏', text: 'At the stream, the donkey deliberately stumbled again, expecting the load to grow ___.', answer: 'lighter' },
      { speaker: 'teacher', emotion: '💦', text: 'Instead, the wool soaked up the water and became far heavier than ___.', answer: 'before' },
      { speaker: 'scholar', emotion: '😩', text: 'Struggling under the soaked load, the donkey barely managed to reach the far ___.', answer: 'bank' },
      { speaker: 'teacher', emotion: '💭', text: 'The merchant, watching closely, realised the donkey had learned the wrong ___ from the earlier accident.', answer: 'lesson' },
      { speaker: 'scholar', emotion: '⚖️', text: 'What worked once by chance had been mistaken for a reliable ___.', answer: 'strategy' },
      { speaker: 'teacher', emotion: '🌿', text: 'The merchant explained gently, "A single lucky outcome does not always reveal a general ___."', answer: 'rule' },
      { speaker: 'scholar', emotion: '✨', text: 'From then on, the donkey walked carefully, no longer assuming that every stumble would work in his ___.', answer: 'favour' }
    ]
  },

  "Mind_Negativity_Bias": {
    questID: "Quest Story 66",
    title: "The One Bad Review",
    subtitle: "A psychological story about negativity bias and how bad experiences outweigh good ones.",
    conversation: [
      { speaker: 'teacher', emotion: '⭐', text: 'A small restaurant received ninety-nine glowing reviews and only one harsh ___.', answer: 'complaint' },
      { speaker: 'scholar', emotion: '😟', text: 'The owner read through all the praise quickly, but lingered for an hour on the single ___ comment.', answer: 'negative' },
      { speaker: 'teacher', emotion: '🌙', text: 'That night, he could not stop replaying the harsh words in his ___.', answer: 'mind' },
      { speaker: 'scholar', emotion: '🤔', text: 'His business partner asked, "Why does one complaint outweigh ninety-nine ___ words?"', answer: 'kind' },
      { speaker: 'teacher', emotion: '🧠', text: 'A friend who studied psychology explained that human minds are wired to notice threats more strongly than ___.', answer: 'praise' },
      { speaker: 'scholar', emotion: '🦴', text: 'In ancient times, missing a danger could be fatal, while missing a compliment rarely ___ anyone.', answer: 'harmed' },
      { speaker: 'teacher', emotion: '⚖️', text: 'This ancient wiring still causes modern minds to give criticism far more weight than it may actually ___.', answer: 'deserve' },
      { speaker: 'scholar', emotion: '📊', text: 'The friend suggested writing down all ninety-nine positive comments and reading them ___ as often as the one complaint.', answer: 'aloud' },
      { speaker: 'teacher', emotion: '💭', text: 'The owner tried this exercise and noticed his focus slowly beginning to ___.', answer: 'balance' },
      { speaker: 'scholar', emotion: '🌱', text: 'He realised the complaint was worth learning from, but not worth letting it ___ everything else.', answer: 'outweigh' },
      { speaker: 'teacher', emotion: '🔍', text: 'He began asking himself deliberately, "What is the full picture, not just the loudest ___?"', answer: 'voice' },
      { speaker: 'scholar', emotion: '✨', text: 'Over time, he learned that noticing the negative quickly is natural, but staying only there is a ___.', answer: 'choice' }
    ]
  },

  "Mind_Halo_Effect": {
    questID: "Quest Story 67",
    title: "The Handsome Candidate",
    subtitle: "A psychological story about the halo effect and how one trait colours our whole impression.",
    conversation: [
      { speaker: 'teacher', emotion: '💼', text: 'A hiring committee interviewed several candidates for an important ___.', answer: 'position' },
      { speaker: 'scholar', emotion: '😃', text: 'One candidate walked in confidently, well-dressed, and immediately seemed ___.', answer: 'impressive' },
      { speaker: 'teacher', emotion: '📝', text: 'Though his answers were only average, the committee rated him highly on skills they had not even ___.', answer: 'tested' },
      { speaker: 'scholar', emotion: '🤔', text: 'A junior member of the committee asked, "Did we actually assess his technical ability, or just his ___?"', answer: 'presence' },
      { speaker: 'teacher', emotion: '💭', text: 'The senior interviewer paused, realising that the candidate\'s confidence had quietly shaped every other ___ they gave him.', answer: 'rating' },
      { speaker: 'scholar', emotion: '🧠', text: 'This tendency, where one positive trait spreads a favourable glow over everything else, is a well-known mental ___.', answer: 'shortcut' },
      { speaker: 'teacher', emotion: '⚖️', text: 'A confident smile does not guarantee competence, yet the mind often assumes the two travel ___.', answer: 'together' },
      { speaker: 'scholar', emotion: '📋', text: 'The committee decided to review the candidates\' written test scores separately, without seeing their ___ first.', answer: 'faces' },
      { speaker: 'teacher', emotion: '😲', text: 'To their surprise, a quieter candidate had scored significantly ___ on the technical portions.', answer: 'higher' },
      { speaker: 'scholar', emotion: '💡', text: 'The junior member remarked, "We nearly missed the best candidate because he did not shine in the ___ we noticed first."', answer: 'trait' },
      { speaker: 'teacher', emotion: '🌱', text: 'The committee revised their process to score each quality ___, rather than letting one impression bleed into another.', answer: 'separately' },
      { speaker: 'scholar', emotion: '✨', text: 'They learned that a single glowing trait can quietly convince us of qualities we never actually ___.', answer: 'observed' }
    ]
  },

  "Mind_Availability_Heuristic": {
    questID: "Quest Story 68",
    title: "The Fear of Flying",
    subtitle: "A psychological story about how vivid memories distort our sense of risk.",
    conversation: [
      { speaker: 'teacher', emotion: '✈️', text: 'After watching a dramatic news report about a plane crash, Neha became terrified of ___.', answer: 'flying' },
      { speaker: 'scholar', emotion: '🚗', text: 'She decided to drive to her sister\'s wedding instead, a journey of over a thousand ___.', answer: 'kilometres' },
      { speaker: 'teacher', emotion: '🤔', text: 'Her brother, a statistician, asked why she felt safer on the road than in the ___.', answer: 'air' },
      { speaker: 'scholar', emotion: '📊', text: 'He explained that statistically, road travel carries a far higher risk of accident per ___ travelled.', answer: 'kilometre' },
      { speaker: 'teacher', emotion: '📺', text: 'Neha admitted her fear had grown mostly from the vivid images she had recently ___.', answer: 'seen' },
      { speaker: 'scholar', emotion: '🧠', text: 'Her brother explained that the mind judges risk not by real data, but by how easily an example comes to ___.', answer: 'mind' },
      { speaker: 'teacher', emotion: '💭', text: 'Dramatic events, replayed often on news and social media, become far more ___ to recall than ordinary statistics.', answer: 'available' },
      { speaker: 'scholar', emotion: '🚙', text: 'Car accidents rarely make national headlines, even though they happen far more ___.', answer: 'often' },
      { speaker: 'teacher', emotion: '⚖️', text: 'Neha realised her fear had less to do with actual danger and more to do with what her memory could easily ___.', answer: 'retrieve' },
      { speaker: 'scholar', emotion: '🌱', text: 'She began asking, whenever a fear felt overwhelming, "Is this vivid because it is common, or simply because it is ___?"', answer: 'memorable' },
      { speaker: 'teacher', emotion: '✈️', text: 'She eventually booked a flight, reminding herself that a striking image is not the same as an accurate ___.', answer: 'statistic' },
      { speaker: 'scholar', emotion: '✨', text: 'She learned that what comes easily to mind is not always what is most likely to ___.', answer: 'happen' }
    ]
  },

  "Mind_Bandwagon_Effect": {
    questID: "Quest Story 69",
    title: "The Long Queue",
    subtitle: "A psychological story about following the crowd instead of our own judgment.",
    conversation: [
      { speaker: 'teacher', emotion: '🚶', text: 'While walking through the city, Deepak noticed an extremely long queue outside a small ___.', answer: 'restaurant' },
      { speaker: 'scholar', emotion: '🤔', text: 'He had never heard of the place before, yet the sheer length of the line made it seem ___.', answer: 'popular' },
      { speaker: 'teacher', emotion: '🍽️', text: 'Without checking any reviews, he joined the queue, assuming so many people could not be ___.', answer: 'wrong' },
      { speaker: 'scholar', emotion: '⏳', text: 'After waiting nearly an hour, he finally sat down, expecting a truly remarkable ___.', answer: 'meal' },
      { speaker: 'teacher', emotion: '😐', text: 'The food, however, turned out to be entirely ___.', answer: 'average' },
      { speaker: 'scholar', emotion: '🧐', text: 'Curious, he later discovered the restaurant had opened that very morning and had simply given away free ___ to attract attention.', answer: 'samples' },
      { speaker: 'teacher', emotion: '💭', text: 'The long queue had not formed because the food was excellent, but because people saw a queue and assumed it must ___.', answer: 'be' },
      { speaker: 'scholar', emotion: '🔁', text: 'Each new person joining only made the line look more convincing to the ___ arrival.', answer: 'next' },
      { speaker: 'teacher', emotion: '🧠', text: 'This pattern, where popularity itself becomes proof of quality, is a well-studied social ___.', answer: 'bias' },
      { speaker: 'scholar', emotion: '⚖️', text: 'Deepak realised he had trusted the size of the crowd more than his own independent ___.', answer: 'judgment' },
      { speaker: 'teacher', emotion: '🌱', text: 'From then on, before joining any queue, he asked himself, "Would I choose this if no one else were ___ here?"', answer: 'standing' },
      { speaker: 'scholar', emotion: '✨', text: 'He learned that a crowd can signal popularity, but popularity alone does not guarantee actual ___.', answer: 'quality' }
    ]
  },

  "Mind_Self_Serving_Bias": {
    questID: "Quest Story 70",
    title: "Whose Success Is It",
    subtitle: "A psychological story about crediting ourselves for wins and blaming circumstances for losses.",
    conversation: [
      { speaker: 'teacher', emotion: '🏆', text: 'When Priya\'s project succeeded, she proudly told everyone how her skill and effort had earned the ___.', answer: 'result' },
      { speaker: 'scholar', emotion: '😤', text: 'When a different project failed months later, she quickly explained that the deadline had been unfairly ___.', answer: 'short' },
      { speaker: 'teacher', emotion: '🤔', text: 'Her colleague noticed she rarely mentioned luck during successes, nor personal error during ___.', answer: 'failures' },
      { speaker: 'scholar', emotion: '🧠', text: 'A workshop on decision-making explained that most people naturally credit themselves for wins and blame outside factors for ___.', answer: 'losses' },
      { speaker: 'teacher', emotion: '💭', text: 'This pattern protects self-esteem, but it can also prevent honest ___.', answer: 'reflection' },
      { speaker: 'scholar', emotion: '📉', text: 'After the failed project, Priya was encouraged to list every factor within her own ___.', answer: 'control' },
      { speaker: 'teacher', emotion: '😳', text: 'To her surprise, she realised she had underestimated the task and delayed important decisions ___ .', answer: 'herself' },
      { speaker: 'scholar', emotion: '⚖️', text: 'She admitted that circumstances had played a role, but so had her own ___.', answer: 'choices' },
      { speaker: 'teacher', emotion: '🌿', text: 'A mentor told her, "Growth begins the moment you look at failure with the same honesty you use for ___."', answer: 'success' },
      { speaker: 'scholar', emotion: '🔍', text: 'Priya began asking after every outcome, "What did I actually ___ to this?"', answer: 'contribute' },
      { speaker: 'teacher', emotion: '📈', text: 'Her next few projects improved noticeably, largely because she finally examined her own ___ instead of only outside circumstances.', answer: 'part' },
      { speaker: 'scholar', emotion: '✨', text: 'She learned that fair judgment applies the same standard to both success and ___.', answer: 'failure' }
    ]
  },

  "Mind_Placebo_Effect": {
    questID: "Quest Story 71",
    title: "The Sugar Pill",
    subtitle: "A psychological story about the surprising power of belief on the body.",
    conversation: [
      { speaker: 'teacher', emotion: '💊', text: 'A researcher gave one group of patients a real medicine, and another group a harmless sugar ___.', answer: 'pill' },
      { speaker: 'scholar', emotion: '🤔', text: 'Neither group knew which pill they had ___.', answer: 'received' },
      { speaker: 'teacher', emotion: '📈', text: 'Weeks later, many patients in the sugar-pill group reported genuine improvement in their ___.', answer: 'symptoms' },
      { speaker: 'scholar', emotion: '😲', text: 'This was surprising, since the sugar pill contained no active ingredient ___.', answer: 'whatsoever' },
      { speaker: 'teacher', emotion: '🧠', text: 'The researcher explained that belief itself can trigger real changes in the body\'s ___ response.', answer: 'chemical' },
      { speaker: 'scholar', emotion: '💭', text: 'Expecting relief can influence pain perception, stress hormones, and even ___ recovery.', answer: 'immune' },
      { speaker: 'teacher', emotion: '⚖️', text: 'A student asked whether this meant medicine did not matter. The researcher shook her head. "It means the mind is part of ___ too."', answer: 'medicine' },
      { speaker: 'scholar', emotion: '🌿', text: 'She explained that this did not excuse withholding real treatment, but it revealed how deeply expectation shapes ___.', answer: 'experience' },
      { speaker: 'teacher', emotion: '🔍', text: 'The study also showed the opposite: some patients who feared side effects felt them, even from the harmless ___.', answer: 'pill' },
      { speaker: 'scholar', emotion: '💡', text: 'This reminded researchers that what we expect can shape not only how we feel, but sometimes what actually ___ in the body.', answer: 'happens' },
      { speaker: 'teacher', emotion: '🌱', text: 'The findings encouraged doctors to communicate with patients in ways that fostered realistic hope rather than needless ___.', answer: 'fear' },
      { speaker: 'scholar', emotion: '✨', text: 'The researcher concluded that belief is not magic, but it is a real and measurable part of ___.', answer: 'healing' }
    ]
  },

  "Mind_Peak_End_Rule": {
    questID: "Quest Story 72",
    title: "How the Trip Is Remembered",
    subtitle: "A psychological story about the peak-end rule and how memories are shaped.",
    conversation: [
      { speaker: 'teacher', emotion: '🏖️', text: 'Two friends went on a week-long trip, enjoying most days but facing one terrible storm on day ___.', answer: 'three' },
      { speaker: 'scholar', emotion: '☀️', text: 'Their final day, however, was calm, beautiful, and thoroughly ___.', answer: 'relaxing' },
      { speaker: 'teacher', emotion: '💭', text: 'A month later, when asked about the trip, both friends described it as one of the best they had ever ___.', answer: 'taken' },
      { speaker: 'scholar', emotion: '🤔', text: 'A psychologist friend pointed out that the storm had actually made up nearly one full day of ___.', answer: 'misery' },
      { speaker: 'teacher', emotion: '🧠', text: 'She explained that memory does not average every moment equally; it weighs the most intense moment and the ___ most heavily.', answer: 'ending' },
      { speaker: 'scholar', emotion: '⚖️', text: 'This meant that a single storm, followed by a peaceful final day, could still leave behind a warm ___.', answer: 'impression' },
      { speaker: 'teacher', emotion: '📉', text: 'She contrasted this with another trip that had been consistently pleasant but ended on a stressful, rushed ___.', answer: 'departure' },
      { speaker: 'scholar', emotion: '😕', text: 'Despite far fewer bad moments overall, that trip was often remembered ___.', answer: 'negatively' },
      { speaker: 'teacher', emotion: '💡', text: 'The friends realised that how an experience ends can shape memory more than how long it actually ___.', answer: 'lasted' },
      { speaker: 'scholar', emotion: '🌱', text: 'They began planning future trips with special attention to the final day, understanding it would colour how the whole journey was ___.', answer: 'remembered' },
      { speaker: 'teacher', emotion: '🌊', text: 'The psychologist added that this pattern applies not just to trips, but to conversations, workdays, and even entire ___.', answer: 'relationships' },
      { speaker: 'scholar', emotion: '✨', text: 'She said, "Endings deserve care, because they often decide how the whole story is ___."', answer: 'told' }
    ]
  },

  "Mind_Illusory_Correlation": {
    questID: "Quest Story 73",
    title: "The Lucky Socks",
    subtitle: "A psychological story about mistaking coincidence for cause and effect.",
    conversation: [
      { speaker: 'teacher', emotion: '🧦', text: 'A young athlete wore a particular pair of socks during one unusually strong ___.', answer: 'game' },
      { speaker: 'scholar', emotion: '🏆', text: 'His team won decisively, and he immediately credited the socks for the surprising ___.', answer: 'victory' },
      { speaker: 'teacher', emotion: '🔁', text: 'From then on, he insisted on wearing the same socks before every single ___.', answer: 'match' },
      { speaker: 'scholar', emotion: '🤔', text: 'A teammate pointed out that they had also lost several games while he wore the exact same ___.', answer: 'socks' },
      { speaker: 'teacher', emotion: '😅', text: 'The athlete admitted he had conveniently forgotten those particular ___.', answer: 'losses' },
      { speaker: 'scholar', emotion: '🧠', text: 'A sports psychologist explained that the mind naturally notices patterns that confirm a belief, while quietly overlooking evidence that ___ it.', answer: 'contradicts' },
      { speaker: 'teacher', emotion: '📊', text: 'When they actually reviewed every game, the socks had no meaningful connection to winning or ___ at all.', answer: 'losing' },
      { speaker: 'scholar', emotion: '💭', text: 'The athlete realised he had built an entire ritual around a pattern that existed mostly in his own selective ___.', answer: 'memory' },
      { speaker: 'teacher', emotion: '⚖️', text: 'The psychologist explained that this illusion often forms because a few striking coincidences feel more convincing than ordinary, unremarkable ___.', answer: 'data' },
      { speaker: 'scholar', emotion: '🌿', text: 'The athlete began focusing his rituals instead on habits with genuine effects, like proper sleep and ___.', answer: 'practice' },
      { speaker: 'teacher', emotion: '🌱', text: 'He kept the socks for comfort, but stopped believing they controlled the ___.', answer: 'outcome' },
      { speaker: 'scholar', emotion: '✨', text: 'He learned that a compelling story is not the same as a proven ___.', answer: 'cause' }
    ]
  },

  "Mind_Framing_Effect": {
    questID: "Quest Story 74",
    title: "Ninety Percent Survival",
    subtitle: "A psychological story about how the same facts can feel different depending on their framing.",
    conversation: [
      { speaker: 'teacher', emotion: '🏥', text: 'A doctor explained a surgery to two separate patients using two different sets of ___.', answer: 'words' },
      { speaker: 'scholar', emotion: '📋', text: 'To the first patient, she said the surgery had a ninety percent ___ rate.', answer: 'survival' },
      { speaker: 'teacher', emotion: '😨', text: 'To the second patient, she said the surgery carried a ten percent ___ rate.', answer: 'mortality' },
      { speaker: 'scholar', emotion: '🤔', text: 'Both statements described the exact same statistical ___.', answer: 'outcome' },
      { speaker: 'teacher', emotion: '😊', text: 'Yet the first patient felt hopeful and quickly agreed to the ___.', answer: 'surgery' },
      { speaker: 'scholar', emotion: '😟', text: 'The second patient felt anxious and asked for several more days to ___.', answer: 'decide' },
      { speaker: 'teacher', emotion: '🧠', text: 'A colleague later explained that identical information can feel entirely different depending on how it is ___.', answer: 'framed' },
      { speaker: 'scholar', emotion: '⚖️', text: 'Emphasising survival highlighted what would likely go right; emphasising mortality highlighted what could go ___.', answer: 'wrong' },
      { speaker: 'teacher', emotion: '💭', text: 'Neither framing was dishonest, yet each quietly nudged patients toward a different emotional ___.', answer: 'response' },
      { speaker: 'scholar', emotion: '🌿', text: 'The doctor began presenting both framings together, allowing patients to see the full picture rather than just one ___.', answer: 'angle' },
      { speaker: 'teacher', emotion: '💡', text: 'She realised that responsible communication meant noticing how wording could shape decisions, not just what facts it ___.', answer: 'contained' },
      { speaker: 'scholar', emotion: '✨', text: 'She reminded her students, "The truth can be told in many ways. Choose the framing that informs, not the one that only ___."', answer: 'persuades' }
    ]
  },

  "Mind_Overconfidence_Bias": {
    questID: "Quest Story 75",
    title: "The Weather Forecaster",
    subtitle: "A psychological story about the gap between confidence and accuracy.",
    conversation: [
      { speaker: 'teacher', emotion: '🌦️', text: 'A young forecaster predicted sunny skies with complete ___ for the weekend festival.', answer: 'confidence' },
      { speaker: 'scholar', emotion: '🌧️', text: 'By midday Saturday, unexpected rain had already begun ___ down.', answer: 'pouring' },
      { speaker: 'teacher', emotion: '😳', text: 'Embarrassed, he reviewed his notes and realised he had ignored a small chance of ___ shown in the data.', answer: 'rain' },
      { speaker: 'scholar', emotion: '🤔', text: 'A senior colleague asked, "Why did you present such certainty about something inherently ___?"', answer: 'uncertain' },
      { speaker: 'teacher', emotion: '💭', text: 'The young forecaster admitted he had wanted to sound decisive rather than ___.', answer: 'cautious' },
      { speaker: 'scholar', emotion: '🧠', text: 'His colleague explained that confidence often feels more persuasive than accuracy, even when the two are entirely ___.', answer: 'unrelated' },
      { speaker: 'teacher', emotion: '📊', text: 'People tend to trust a forecaster who sounds certain, even if a less certain forecaster is actually more ___.', answer: 'accurate' },
      { speaker: 'scholar', emotion: '⚖️', text: 'The senior forecaster encouraged him to report probabilities honestly, even when it felt less ___.', answer: 'impressive' },
      { speaker: 'teacher', emotion: '🌱', text: 'The young man began saying "seventy percent chance" instead of pretending to ___ the outcome.', answer: 'know' },
      { speaker: 'scholar', emotion: '💡', text: 'Over time, his forecasts became more useful, precisely because they reflected real ___ rather than false certainty.', answer: 'uncertainty' },
      { speaker: 'teacher', emotion: '🌿', text: 'He realised that admitting the limits of his knowledge made him more trustworthy, not ___.', answer: 'less' },
      { speaker: 'scholar', emotion: '✨', text: 'He learned that true expertise sometimes sounds less confident than ignorance ___.', answer: 'does' }
    ]
  },

  "Mind_Status_Quo_Bias": {
    questID: "Quest Story 76",
    title: "The Same Old Chair",
    subtitle: "A psychological story about our tendency to prefer things simply because they are familiar.",
    conversation: [
      { speaker: 'teacher', emotion: '🪑', text: 'For years, an office kept the same uncomfortable chairs, even though better ones were readily ___.', answer: 'available' },
      { speaker: 'scholar', emotion: '🤔', text: 'When a new manager suggested replacing them, several employees resisted the idea ___.', answer: 'immediately' },
      { speaker: 'teacher', emotion: '😕', text: 'One employee admitted, "I do not love these chairs, but changing them feels ___."', answer: 'risky' },
      { speaker: 'scholar', emotion: '🧠', text: 'The manager explained that people often prefer the current situation simply because it is ___.', answer: 'familiar' },
      { speaker: 'teacher', emotion: '⚖️', text: 'Even when an alternative is clearly better, change itself can feel like a ___.', answer: 'loss' },
      { speaker: 'scholar', emotion: '💭', text: 'This tendency, called status quo bias, can quietly prevent improvements that would otherwise be obviously ___.', answer: 'beneficial' },
      { speaker: 'teacher', emotion: '🪑', text: 'The manager arranged a two-week trial, letting employees test the new chairs without a full ___.', answer: 'commitment' },
      { speaker: 'scholar', emotion: '😌', text: 'Within days, most employees admitted the new chairs were noticeably more ___.', answer: 'comfortable' },
      { speaker: 'teacher', emotion: '💡', text: 'The employee who had resisted change laughed and admitted his hesitation had been about comfort with the old, not actual ___.', answer: 'preference' },
      { speaker: 'scholar', emotion: '🌱', text: 'The manager began using small trial periods whenever proposing future changes, to reduce the fear tied to ___.', answer: 'uncertainty' },
      { speaker: 'teacher', emotion: '🌿', text: 'The office learned that comfort with the familiar can quietly disguise itself as genuine ___.', answer: 'preference' },
      { speaker: 'scholar', emotion: '✨', text: 'They realised the safest choice often feels safest simply because it is the one we already ___.', answer: 'know' }
    ]
  },

  "Mind_Spotlight_Effect": {
    questID: "Quest Story 77",
    title: "The Stain on the Shirt",
    subtitle: "A psychological story about overestimating how much others notice us.",
    conversation: [
      { speaker: 'teacher', emotion: '👕', text: 'Just before an important meeting, Karan noticed a small coffee stain on his ___.', answer: 'shirt' },
      { speaker: 'scholar', emotion: '😰', text: 'He spent the entire meeting convinced that everyone was silently judging his ___.', answer: 'stain' },
      { speaker: 'teacher', emotion: '😳', text: 'He barely focused on the discussion, distracted by imagining what colleagues must be ___ about him.', answer: 'thinking' },
      { speaker: 'teacher', emotion: '🤝', text: 'Afterward, a colleague casually asked how he thought the meeting had ___.', answer: 'gone' },
      { speaker: 'scholar', emotion: '😅', text: 'Karan mentioned the stain nervously, expecting sympathy or a knowing ___.', answer: 'nod' },
      { speaker: 'teacher', emotion: '❓', text: 'The colleague blinked in confusion. "What stain? I did not even ___ it."', answer: 'notice' },
      { speaker: 'scholar', emotion: '😲', text: 'Karan was stunned that something so obvious to him had gone completely ___ by others.', answer: 'unnoticed' },
      { speaker: 'teacher', emotion: '🧠', text: 'A psychologist friend later explained that people consistently overestimate how much attention others pay to their appearance and ___.', answer: 'mistakes' },
      { speaker: 'scholar', emotion: '💭', text: 'Everyone is typically too absorbed in their own concerns to closely monitor someone else\'s ___.', answer: 'flaws' },
      { speaker: 'teacher', emotion: '⚖️', text: 'This effect, sometimes called the spotlight effect, makes us feel far more ___ than we actually are.', answer: 'watched' },
      { speaker: 'scholar', emotion: '🌱', text: 'Karan began reminding himself, whenever self-conscious thoughts arose, that most people were focused on their own ___, not his.', answer: 'worries' },
      { speaker: 'teacher', emotion: '✨', text: 'He learned that the spotlight we feel is usually one we shine on ___.', answer: 'ourselves' }
    ]
  },

  "Mind_Recency_Bias": {
    questID: "Quest Story 78",
    title: "The Last Word",
    subtitle: "A psychological story about giving too much weight to the most recent information.",
    conversation: [
      { speaker: 'teacher', emotion: '📋', text: 'A manager reviewed a full year of an employee\'s work before writing a final ___.', answer: 'evaluation' },
      { speaker: 'scholar', emotion: '📅', text: 'Though the employee had performed excellently for eleven months, one difficult project occurred in the final ___.', answer: 'month' },
      { speaker: 'teacher', emotion: '😕', text: 'The manager\'s written review focused heavily on that last project, mentioning the earlier months only ___.', answer: 'briefly' },
      { speaker: 'scholar', emotion: '🤔', text: 'A colleague reviewing the draft asked, "Why does one recent setback dominate an entire year of good ___?"', answer: 'work' },
      { speaker: 'teacher', emotion: '🧠', text: 'The manager admitted that the recent project felt more vivid simply because it had happened most ___.', answer: 'recently' },
      { speaker: 'scholar', emotion: '💭', text: 'This tendency, where recent events overshadow earlier ones in memory, is known as recency ___.', answer: 'bias' },
      { speaker: 'teacher', emotion: '📊', text: 'The colleague suggested reviewing performance data from the entire year rather than relying on memory ___.', answer: 'alone' },
      { speaker: 'scholar', emotion: '😲', text: 'Once he examined the full record, the manager realised the employee\'s overall performance had been consistently ___.', answer: 'strong' },
      { speaker: 'teacher', emotion: '⚖️', text: 'He rewrote the review, giving appropriate weight to eleven strong months rather than one weak ___.', answer: 'one' },
      { speaker: 'scholar', emotion: '🌱', text: 'From then on, he began keeping monthly notes, so his final review would not rely only on what he happened to ___ most easily.', answer: 'recall' },
      { speaker: 'teacher', emotion: '💡', text: 'He explained to his team, "What happened last is not always what mattered ___."', answer: 'most' },
      { speaker: 'scholar', emotion: '✨', text: 'He learned that fair judgment requires looking at the whole record, not simply the most recent ___.', answer: 'chapter' }
    ]
  },

  "Mind_Just_World_Fallacy": {
    questID: "Quest Story 79",
    title: "It Must Be Deserved",
    subtitle: "A psychological story about the tempting but flawed belief that the world is always fair.",
    conversation: [
      { speaker: 'teacher', emotion: '💼', text: 'When a hardworking colleague lost her job during sudden layoffs, several coworkers whispered that she must have done something ___.', answer: 'wrong' },
      { speaker: 'scholar', emotion: '🤔', text: 'One employee asked directly, "Do we actually know she did anything, or are we simply ___?"', answer: 'guessing' },
      { speaker: 'teacher', emotion: '😶', text: 'No one had any real evidence, yet the assumption of fault spread ___.', answer: 'quickly' },
      { speaker: 'scholar', emotion: '🧠', text: 'A psychologist explained that people often prefer to believe the world is fundamentally ___.', answer: 'fair' },
      { speaker: 'teacher', emotion: '💭', text: 'Believing that misfortune is deserved lets us feel safer, as though bad outcomes only happen to those who ___ them.', answer: 'cause' },
      { speaker: 'scholar', emotion: '⚖️', text: 'This comforting belief, however, can lead to unfairly blaming victims of circumstances beyond their ___.', answer: 'control' },
      { speaker: 'teacher', emotion: '🔍', text: 'The truth was simpler and harder to accept: the company had faced financial trouble, and the layoffs were largely ___.', answer: 'random' },
      { speaker: 'scholar', emotion: '😔', text: 'Once this became clear, the coworkers who had gossiped felt genuinely ___.', answer: 'embarrassed' },
      { speaker: 'teacher', emotion: '🌿', text: 'The psychologist explained that the discomfort of admitting bad things can happen without reason is what fuels this kind of ___ thinking.', answer: 'blaming' },
      { speaker: 'scholar', emotion: '🌱', text: 'The team agreed to be more careful before assuming that hardship always reflects someone\'s personal ___.', answer: 'failure' },
      { speaker: 'teacher', emotion: '💡', text: 'They learned that fairness is something people must actively work toward, not something the world automatically ___.', answer: 'provides' },
      { speaker: 'scholar', emotion: '✨', text: 'The colleague, once fully understood, was welcomed back warmly when a new position finally became ___.', answer: 'available' }
    ]
  },

  "Mind_Backfire_Effect": {
    questID: "Quest Story 80",
    title: "The Stronger the Argument",
    subtitle: "A psychological story about how strong counter-evidence can sometimes deepen a mistaken belief.",
    conversation: [
      { speaker: 'teacher', emotion: '📰', text: 'Rohan firmly believed a popular myth about nutrition that he had read years ___.', answer: 'ago' },
      { speaker: 'scholar', emotion: '📊', text: 'A friend showed him solid scientific studies clearly disproving the ___.', answer: 'myth' },
      { speaker: 'teacher', emotion: '😤', text: 'Instead of reconsidering, Rohan felt oddly defensive and dismissed the studies as ___.', answer: 'biased' },
      { speaker: 'scholar', emotion: '🤔', text: 'Strangely, after seeing strong opposing evidence, he felt even more confident in his original ___.', answer: 'belief' },
      { speaker: 'teacher', emotion: '🧠', text: 'A psychologist explained that when a core belief is challenged too directly, people sometimes respond by digging in ___.', answer: 'deeper' },
      { speaker: 'scholar', emotion: '💭', text: 'This surprising reaction, called the backfire effect, happens because facing contradiction can feel like a threat to one\'s ___.', answer: 'identity' },
      { speaker: 'teacher', emotion: '⚖️', text: 'The psychologist suggested that gentle curiosity works better than blunt correction, since people rarely enjoy feeling ___.', answer: 'wrong' },
      { speaker: 'scholar', emotion: '🌿', text: 'Instead of saying "you are mistaken," the friend later tried asking, "What first led you to ___ this?"', answer: 'believe' },
      { speaker: 'teacher', emotion: '💬', text: 'This softer approach allowed Rohan to explore his own reasoning without feeling personally ___.', answer: 'attacked' },
      { speaker: 'scholar', emotion: '🌱', text: 'Over several relaxed conversations, Rohan slowly began questioning the belief on his ___ terms.', answer: 'own' },
      { speaker: 'teacher', emotion: '💡', text: 'He eventually changed his mind, not because he had been proven wrong loudly, but because he had been given room to ___ quietly.', answer: 'reconsider' },
      { speaker: 'scholar', emotion: '✨', text: 'The friend learned that changing a mind often requires patience, not just stronger and stronger ___.', answer: 'evidence' }
    ]
  },

  "Mindful_Watching_Breath": {
    questID: "Quest Story 81",
    title: "The Breath in the Room",
    subtitle: "A mindfulness story about returning attention to the present moment.",
    conversation: [
      { speaker: 'teacher', emotion: '🌬️', text: 'A student complained that her mind wandered constantly during ___.', answer: 'meditation' },
      { speaker: 'scholar', emotion: '🤔', text: 'Her teacher asked, "What happens the moment you notice your mind has ___?"', answer: 'wandered' },
      { speaker: 'teacher', emotion: '😳', text: 'The student admitted she usually felt frustrated with ___.', answer: 'herself' },
      { speaker: 'scholar', emotion: '🌿', text: 'The teacher smiled. "That noticing is not failure. It is the practice itself ___."', answer: 'working' },
      { speaker: 'teacher', emotion: '💭', text: 'He explained that the mind will always wander; the real skill lies in gently ___ it back.', answer: 'bringing' },
      { speaker: 'scholar', emotion: '🌊', text: 'Each return to the breath, however small, quietly strengthens the muscle of ___.', answer: 'attention' },
      { speaker: 'teacher', emotion: '🧘', text: 'The student asked how many times she should expect her mind to ___ in one sitting.', answer: 'wander' },
      { speaker: 'scholar', emotion: '😅', text: 'The teacher laughed. "Perhaps a hundred times. Each one is simply another chance to ___."', answer: 'return' },
      { speaker: 'teacher', emotion: '🌱', text: 'She began treating each wandering thought not as a mistake, but as a bell reminding her to come ___.', answer: 'back' },
      { speaker: 'scholar', emotion: '💡', text: 'Weeks later, she noticed her frustration had softened into simple, patient ___.', answer: 'awareness' },
      { speaker: 'teacher', emotion: '🌿', text: 'Her teacher reminded her, "The goal was never a mind that never wanders. It was a mind that notices and ___."', answer: 'returns' },
      { speaker: 'scholar', emotion: '✨', text: 'She finally understood that presence is not something achieved once, but something practised ___ .', answer: 'repeatedly' }
    ]
  },

  "Mindful_Waiting_Room": {
    questID: "Quest Story 82",
    title: "The Impatient Traveler",
    subtitle: "A mindfulness story about resisting the moment we are actually in.",
    conversation: [
      { speaker: 'teacher', emotion: '🚉', text: 'A traveller sat in a station, glancing at his watch every few ___.', answer: 'minutes' },
      { speaker: 'scholar', emotion: '😩', text: 'His train was delayed, and each passing minute made him more ___.', answer: 'restless' },
      { speaker: 'teacher', emotion: '👵', text: 'An elderly woman nearby sat calmly, watching people pass without a hint of ___.', answer: 'worry' },
      { speaker: 'scholar', emotion: '🤔', text: 'He asked her, "Does the delay not bother you at ___?"', answer: 'all' },
      { speaker: 'teacher', emotion: '🌿', text: 'She smiled. "The train will arrive when it arrives. My waiting will not make it come ___."', answer: 'sooner' },
      { speaker: 'scholar', emotion: '💭', text: 'He realised he had spent the entire wait fighting a moment that could not be ___.', answer: 'rushed' },
      { speaker: 'teacher', emotion: '👀', text: 'The woman gestured around the station. "While waiting, we could simply notice what is ___ us."', answer: 'around' },
      { speaker: 'scholar', emotion: '🌸', text: 'He looked up and noticed sunlight through the windows, quiet conversations, the smell of fresh ___.', answer: 'bread' },
      { speaker: 'teacher', emotion: '🌊', text: 'For the first time that day, his impatience began to gently ___.', answer: 'settle' },
      { speaker: 'scholar', emotion: '💡', text: 'He realised the delay itself had not changed — only his relationship to the ___ had.', answer: 'waiting' },
      { speaker: 'teacher', emotion: '🚆', text: 'When the train finally arrived, he stepped aboard feeling strangely ___ rather than drained.', answer: 'calm' },
      { speaker: 'scholar', emotion: '✨', text: 'He understood that resisting a moment rarely shortens it. It only makes the moment harder to ___.', answer: 'bear' }
    ]
  },

  "Mindful_Neighbors_Garden": {
    questID: "Quest Story 83",
    title: "The Neighbor’s Garden",
    subtitle: "A mindfulness story about the quiet cost of constant comparison.",
    conversation: [
      { speaker: 'teacher', emotion: '🌻', text: 'A gardener tended her small plot happily, until a new neighbour planted a much larger ___.', answer: 'garden' },
      { speaker: 'scholar', emotion: '😟', text: 'Every morning, she glanced over the fence, measuring her flowers against her neighbour\'s ___.', answer: 'blooms' },
      { speaker: 'teacher', emotion: '💭', text: 'Slowly, tending her own garden began to feel less like joy and more like quiet ___.', answer: 'competition' },
      { speaker: 'scholar', emotion: '🧘', text: 'An old friend visiting asked why she seemed distracted while watering her own ___.', answer: 'plants' },
      { speaker: 'teacher', emotion: '😔', text: 'She admitted, "I keep comparing mine to ___."', answer: 'his' },
      { speaker: 'scholar', emotion: '🌿', text: 'The friend asked gently, "Did you love your garden less before you noticed ___?"', answer: 'his' },
      { speaker: 'teacher', emotion: '🤔', text: 'She realised her flowers had not changed at all; only her ___ had shifted.', answer: 'attention' },
      { speaker: 'scholar', emotion: '👀', text: 'The friend suggested she try tending her garden for one week without glancing over the ___ at all.', answer: 'fence' },
      { speaker: 'teacher', emotion: '🌸', text: 'By the third day, she noticed details she had overlooked — the exact colour of a bud, the sound of bees near her ___.', answer: 'flowers' },
      { speaker: 'scholar', emotion: '💡', text: 'She realised comparison had been quietly stealing her attention from the garden she actually ___.', answer: 'had' },
      { speaker: 'teacher', emotion: '🌱', text: 'Slowly, her joy in gardening began to ___ once more.', answer: 'return' },
      { speaker: 'scholar', emotion: '✨', text: 'She understood that a garden watched with comparison rarely feels as alive as a garden watched with ___.', answer: 'attention' }
    ]
  },

  "Mindful_Racing_River": {
    questID: "Quest Story 84",
    title: "Racing the River",
    subtitle: "A mindfulness story about the exhaustion of always rushing toward what’s next.",
    conversation: [
      { speaker: 'teacher', emotion: '🛶', text: 'A young rower paddled furiously downstream, determined to reach the sea before ___.', answer: 'nightfall' },
      { speaker: 'scholar', emotion: '😤', text: 'He barely noticed the herons, the light on the water, or the sound of the current beneath his ___.', answer: 'boat' },
      { speaker: 'teacher', emotion: '🧘', text: 'An old fisherman floating nearby asked why he paddled so ___.', answer: 'hard' },
      { speaker: 'scholar', emotion: '⏰', text: 'The rower replied, "I must reach the sea. There is no time to ___."', answer: 'slow' },
      { speaker: 'teacher', emotion: '🌊', text: 'The fisherman pointed out that the river itself was already carrying him ___.', answer: 'forward' },
      { speaker: 'scholar', emotion: '😲', text: 'The rower paused, realising the current had been doing much of the work all ___.', answer: 'along' },
      { speaker: 'teacher', emotion: '🍃', text: 'He set his paddle down and let the boat drift, noticing for the first time the warmth of the sun on his ___.', answer: 'skin' },
      { speaker: 'scholar', emotion: '💭', text: 'The fisherman said gently, "You will still arrive. You may simply arrive having actually ___ the journey."', answer: 'lived' },
      { speaker: 'teacher', emotion: '⚖️', text: 'The rower realised that constant urgency had not actually made his journey ___.', answer: 'faster' },
      { speaker: 'scholar', emotion: '🌅', text: 'By evening, he reached the sea just as he had planned, but he arrived feeling refreshed rather than ___.', answer: 'depleted' },
      { speaker: 'teacher', emotion: '🌿', text: 'He understood that some goals arrive on their own current, regardless of how hard we ___.', answer: 'paddle' },
      { speaker: 'scholar', emotion: '✨', text: 'From then on, he asked himself, "Am I paddling because it is needed, or simply because I have forgotten how to ___?"', answer: 'rest' }
    ]
  },

  "Mindful_Carrying_Tomorrow": {
    questID: "Quest Story 85",
    title: "Carrying Tomorrow",
    subtitle: "A mindfulness story about the weight of worrying about a future that hasn’t arrived.",
    conversation: [
      { speaker: 'teacher', emotion: '🎒', text: 'A young farmer worried endlessly each night about next season\'s ___.', answer: 'harvest' },
      { speaker: 'scholar', emotion: '😟', text: 'Rain that had not yet fallen, prices that had not yet changed — all of it weighed on his ___.', answer: 'mind' },
      { speaker: 'teacher', emotion: '🧘', text: 'His grandmother noticed his exhaustion and asked what exactly he was carrying so ___.', answer: 'heavily' },
      { speaker: 'scholar', emotion: '💭', text: 'He listed a dozen problems that might or might not ___.', answer: 'happen' },
      { speaker: 'teacher', emotion: '🌾', text: 'She asked, "How many of these problems exist in your field right ___?"', answer: 'now' },
      { speaker: 'scholar', emotion: '😳', text: 'He admitted that, in truth, none of them had actually ___ yet.', answer: 'occurred' },
      { speaker: 'teacher', emotion: '⚖️', text: 'She explained, "Prepare wisely for tomorrow, but do not pay today\'s strength for a debt that is not yet ___."', answer: 'due' },
      { speaker: 'scholar', emotion: '🌿', text: 'He realised that worry did nothing to prevent the rain or fix the ___.', answer: 'prices' },
      { speaker: 'teacher', emotion: '🌱', text: 'It only stole energy from the actual work he could do ___.', answer: 'today' },
      { speaker: 'scholar', emotion: '💡', text: 'He began separating useful planning from repetitive worry, asking, "Is this thought helping me act, or just helping me ___?"', answer: 'suffer' },
      { speaker: 'teacher', emotion: '🌞', text: 'His work in the fields grew steadier, no longer dragged down by a future that had not yet ___.', answer: 'arrived' },
      { speaker: 'scholar', emotion: '✨', text: 'He learned that tomorrow deserves preparation, but today deserves his full ___.', answer: 'attention' }
    ]
  },

  "Mindful_Unripe_Mango": {
    questID: "Quest Story 86",
    title: "The Unripe Mango",
    subtitle: "A mindfulness story about the frustration of forcing things before their time.",
    conversation: [
      { speaker: 'teacher', emotion: '🥭', text: 'A boy plucked a mango from the tree, eager to taste its sweetness ___.', answer: 'immediately' },
      { speaker: 'scholar', emotion: '😖', text: 'He bit into it and grimaced, spitting out the sour, ___ fruit.', answer: 'unripe' },
      { speaker: 'teacher', emotion: '🌳', text: 'His grandfather chuckled and said, "That mango needed a few more days on the ___."', answer: 'branch' },
      { speaker: 'scholar', emotion: '🤔', text: 'The boy asked impatiently, "Why can it not simply be sweet ___?"', answer: 'now' },
      { speaker: 'teacher', emotion: '🌞', text: 'His grandfather explained that ripeness requires time, sunlight, and a process that cannot be ___.', answer: 'rushed' },
      { speaker: 'scholar', emotion: '💭', text: 'The boy sat under the tree, watching the remaining mangoes, wondering how long he would need to ___.', answer: 'wait' },
      { speaker: 'teacher', emotion: '🐦', text: 'His grandfather pointed to a bird resting nearby. "Notice how it does not chase the ripening. It simply ___ nearby."', answer: 'waits' },
      { speaker: 'scholar', emotion: '🌿', text: 'The boy began visiting the tree each afternoon, not to rush the fruit, but to sit and quietly ___.', answer: 'observe' },
      { speaker: 'teacher', emotion: '📅', text: 'Days passed, and he noticed the mangoes slowly deepening in ___.', answer: 'colour' },
      { speaker: 'scholar', emotion: '😋', text: 'When he finally tasted a ripened mango, its sweetness felt more rewarding because he had learned to ___.', answer: 'wait' },
      { speaker: 'teacher', emotion: '⚖️', text: 'His grandfather said, "Many good things in life ripen the same way — slowly, and only in their own ___."', answer: 'time' },
      { speaker: 'scholar', emotion: '✨', text: 'The boy understood that forcing something before its season rarely makes it ___.', answer: 'sweeter' }
    ]
  },

  "Mindful_Stillness_Market": {
    questID: "Quest Story 87",
    title: "Stillness in the Market",
    subtitle: "A mindfulness story about finding calm in the middle of noise and chaos.",
    conversation: [
      { speaker: 'teacher', emotion: '🏪', text: 'A monk walked calmly through a crowded market, weaving between shouting vendors and hurried ___.', answer: 'shoppers' },
      { speaker: 'scholar', emotion: '🤨', text: 'A merchant asked how he remained so composed amid such overwhelming ___.', answer: 'noise' },
      { speaker: 'teacher', emotion: '🧘', text: 'The monk replied, "The market is loud. My mind does not have to ___ it."', answer: 'match' },
      { speaker: 'scholar', emotion: '💭', text: 'The merchant admitted he often felt frazzled the moment the market grew ___.', answer: 'busy' },
      { speaker: 'teacher', emotion: '🌿', text: 'The monk explained that noise outside does not require noise ___.', answer: 'inside' },
      { speaker: 'scholar', emotion: '🌊', text: 'He suggested the merchant take three slow breaths whenever the shouting felt ___.', answer: 'overwhelming' },
      { speaker: 'teacher', emotion: '🔔', text: 'The merchant tried it the following morning, using each customer\'s greeting as a small reminder to stay ___.', answer: 'present' },
      { speaker: 'scholar', emotion: '😌', text: 'To his surprise, the chaos around him felt exactly the same, but his experience of it felt strangely ___.', answer: 'lighter' },
      { speaker: 'teacher', emotion: '💡', text: 'He realised he had always assumed calm required a quiet ___.', answer: 'environment' },
      { speaker: 'scholar', emotion: '⚖️', text: 'The monk said, "Calm is not the absence of noise. It is the presence of steady ___."', answer: 'attention' },
      { speaker: 'teacher', emotion: '🌱', text: 'The merchant began practising stillness in the busiest hours instead of waiting for quiet ___.', answer: 'moments' },
      { speaker: 'scholar', emotion: '✨', text: 'He learned that peace built only in silence rarely survives the return of ___.', answer: 'noise' }
    ]
  },

  "Mindful_Grateful_Beggar": {
    questID: "Quest Story 88",
    title: "The Grateful Beggar",
    subtitle: "A mindfulness story about noticing what we already have.",
    conversation: [
      { speaker: 'teacher', emotion: '🥣', text: 'A beggar sat outside the temple each morning, thanking the sky for another ___.', answer: 'day' },
      { speaker: 'scholar', emotion: '🤔', text: 'A wealthy merchant, passing by, asked why someone with so little seemed so genuinely ___.', answer: 'grateful' },
      { speaker: 'teacher', emotion: '🍚', text: 'The beggar replied, "This morning I have bread, sunlight, and breath. What else must I ___?"', answer: 'demand' },
      { speaker: 'scholar', emotion: '💭', text: 'The merchant admitted he owned houses, servants, and wealth, yet rarely felt truly ___.', answer: 'satisfied' },
      { speaker: 'teacher', emotion: '⚖️', text: 'The beggar explained, "You are measuring your life against what you lack. I am measuring mine against what I ___."', answer: 'have' },
      { speaker: 'scholar', emotion: '🌿', text: 'The merchant sat down beside him, curious how such a simple shift could change so ___.', answer: 'much' },
      { speaker: 'teacher', emotion: '🌞', text: 'The beggar pointed to the warm sunlight. "Wealth cannot buy the appreciation of a moment already ___."', answer: 'given' },
      { speaker: 'scholar', emotion: '💡', text: 'The merchant realised he had spent years chasing more, without ever pausing to notice what he already ___.', answer: 'possessed' },
      { speaker: 'teacher', emotion: '🙏', text: 'That evening, for the first time, the merchant sat quietly and named three things he felt genuinely ___ for.', answer: 'grateful' },
      { speaker: 'scholar', emotion: '🌱', text: 'The habit grew slowly, and his restlessness began to ___.', answer: 'ease' },
      { speaker: 'teacher', emotion: '🌊', text: 'He understood that gratitude was not something that required great wealth, only steady ___.', answer: 'attention' },
      { speaker: 'scholar', emotion: '✨', text: 'He returned to the beggar often, no longer to give charity, but to remember what true ___ actually looked like.', answer: 'wealth' }
    ]
  },

  "Mindful_One_Step_Time": {
    questID: "Quest Story 89",
    title: "One Step at a Time",
    subtitle: "A mindfulness story about the paralysis of thinking too far ahead.",
    conversation: [
      { speaker: 'teacher', emotion: '🏔️', text: 'A climber stood at the base of a tall mountain, overwhelmed by how far the summit seemed to ___.', answer: 'reach' },
      { speaker: 'scholar', emotion: '😰', text: 'She calculated every step of the entire climb before taking a single ___.', answer: 'one' },
      { speaker: 'teacher', emotion: '🧘', text: 'A guide beside her asked what she was currently looking ___.', answer: 'at' },
      { speaker: 'scholar', emotion: '💭', text: 'She admitted she was staring at the distant peak, still hours ___.', answer: 'away' },
      { speaker: 'teacher', emotion: '👣', text: 'The guide suggested she look only at the ground directly in front of her ___.', answer: 'feet' },
      { speaker: 'scholar', emotion: '🌿', text: 'She hesitated but followed his advice, focusing solely on the next single ___.', answer: 'step' },
      { speaker: 'teacher', emotion: '🌤️', text: 'To her surprise, the climb began to feel far more ___.', answer: 'manageable' },
      { speaker: 'scholar', emotion: '⛰️', text: 'Hours passed, and each small step slowly carried her higher, without her ever needing to solve the whole climb at ___.', answer: 'once' },
      { speaker: 'teacher', emotion: '💡', text: 'She realised her earlier exhaustion had come partly from the mountain, and partly from carrying the entire journey in her ___ too soon.', answer: 'mind' },
      { speaker: 'scholar', emotion: '🌅', text: 'When she finally reached the summit, she looked back, amazed by how far one step at a time had ___ her.', answer: 'carried' },
      { speaker: 'teacher', emotion: '⚖️', text: 'The guide said, "Great journeys are rarely completed by staring at the ___. They are completed by trusting the next step."', answer: 'distance' },
      { speaker: 'scholar', emotion: '✨', text: 'She understood that presence, not preview, is what actually moves a person ___.', answer: 'forward' }
    ]
  },

  "Mindful_Living_by_Clock": {
    questID: "Quest Story 90",
    title: "Living by the Clock",
    subtitle: "A mindfulness story about noticing life beyond constant scheduling.",
    conversation: [
      { speaker: 'teacher', emotion: '⏰', text: 'A busy executive scheduled every minute of his day, from waking to ___.', answer: 'sleeping' },
      { speaker: 'scholar', emotion: '😮‍💨', text: 'Even his short walks were timed precisely, leaving no room for anything ___.', answer: 'unplanned' },
      { speaker: 'teacher', emotion: '🧘', text: 'A retired friend asked him, "When was the last time you noticed something you had not scheduled yourself to ___?"', answer: 'notice' },
      { speaker: 'scholar', emotion: '🤔', text: 'The executive paused, unable to remember a single unplanned ___.', answer: 'moment' },
      { speaker: 'teacher', emotion: '🌸', text: 'The friend suggested he take one walk that week without any timer or ___.', answer: 'destination' },
      { speaker: 'scholar', emotion: '😳', text: 'At first, the open time felt oddly uncomfortable, almost ___.', answer: 'wasteful' },
      { speaker: 'teacher', emotion: '🍃', text: 'Slowly, he noticed birdsong, the texture of tree bark, the rhythm of his own ___.', answer: 'footsteps' },
      { speaker: 'scholar', emotion: '💭', text: 'He realised how much of daily life had been passing by unnoticed, hidden beneath rigid ___.', answer: 'scheduling' },
      { speaker: 'teacher', emotion: '⚖️', text: 'The friend explained, "Structure has value, but a life measured only in minutes leaves little room for ___."', answer: 'presence' },
      { speaker: 'scholar', emotion: '🌱', text: 'The executive began leaving small unscheduled gaps in his week, protected as carefully as any meeting ___.', answer: 'appointment' },
      { speaker: 'teacher', emotion: '🌊', text: 'Over time, those small gaps became some of the moments he valued ___.', answer: 'most' },
      { speaker: 'scholar', emotion: '✨', text: 'He learned that efficiency measures output, but presence measures something the clock cannot ___.', answer: 'capture' }
    ]
  },

  "Mindful_Empty_Hands": {
    questID: "Quest Story 91",
    title: "Arriving Empty-Handed",
    subtitle: "A mindfulness story about approaching a new experience without preloaded expectations.",
    conversation: [
      { speaker: 'teacher', emotion: '🎒', text: 'A traveller visited a foreign city carrying detailed notes on exactly what she expected to ___.', answer: 'see' },
      { speaker: 'scholar', emotion: '📖', text: 'She had read reviews, timelines, and long lists of what the trip should ___ like.', answer: 'feel' },
      { speaker: 'teacher', emotion: '😕', text: 'When the actual streets did not match her mental pictures, she felt strangely ___.', answer: 'disappointed' },
      { speaker: 'scholar', emotion: '🧘', text: 'A local guide asked gently what exactly she was comparing the city ___.', answer: 'to' },
      { speaker: 'teacher', emotion: '💭', text: 'She admitted she was measuring everything against expectations formed before she had even ___.', answer: 'arrived' },
      { speaker: 'scholar', emotion: '🌿', text: 'The guide suggested she spend one afternoon exploring with no plan and no comparison at ___.', answer: 'all' },
      { speaker: 'teacher', emotion: '🚶', text: 'Reluctantly, she set her notes aside and simply began ___.', answer: 'walking' },
      { speaker: 'scholar', emotion: '😲', text: 'Without expectations weighing on every corner, small details suddenly felt vivid and ___.', answer: 'alive' },
      { speaker: 'teacher', emotion: '💡', text: 'She realised her earlier disappointment had come not from the city, but from comparing it to an imagined ___.', answer: 'version' },
      { speaker: 'scholar', emotion: '🌱', text: 'By evening, she felt more connected to the real place than she had in the first entire ___ combined.', answer: 'day' },
      { speaker: 'teacher', emotion: '⚖️', text: 'The guide said, "Expectations are like a map drawn before the journey. They can prevent us from truly ___ the road."', answer: 'seeing' },
      { speaker: 'scholar', emotion: '✨', text: 'She understood that arriving with fewer expectations often means arriving with fuller ___.', answer: 'attention' }
    ]
  },

  "Mindful_Painters_Attention": {
    questID: "Quest Story 92",
    title: "The Painter’s Attention",
    subtitle: "A mindfulness story about the difference between looking and truly seeing.",
    conversation: [
      { speaker: 'teacher', emotion: '🎨', text: 'A young painter struggled to capture the beauty of an ordinary ___.', answer: 'tree' },
      { speaker: 'scholar', emotion: '😩', text: 'His teacher watched him glance at the tree only briefly before returning to the ___.', answer: 'canvas' },
      { speaker: 'teacher', emotion: '🧘', text: 'The teacher asked, "How long did you actually spend looking at the tree before you began ___?"', answer: 'painting' },
      { speaker: 'scholar', emotion: '😳', text: 'The student admitted, "A few seconds, perhaps, before I began ___."', answer: 'sketching' },
      { speaker: 'teacher', emotion: '👀', text: 'The teacher instructed him to spend the next hour simply looking, without touching the ___ at all.', answer: 'brush' },
      { speaker: 'scholar', emotion: '🌿', text: 'Reluctantly, the student sat and studied every branch, every shifting shadow, every subtle ___.', answer: 'colour' },
      { speaker: 'teacher', emotion: '💡', text: 'What had once seemed like a simple green blur revealed dozens of shades he had never actually ___.', answer: 'noticed' },
      { speaker: 'scholar', emotion: '😲', text: 'When he finally picked up his brush, his strokes carried a depth that had been missing ___.', answer: 'before' },
      { speaker: 'teacher', emotion: '⚖️', text: 'The teacher explained, "Most people look quickly and paint from memory. Few actually take the time to truly ___."', answer: 'see' },
      { speaker: 'scholar', emotion: '🌱', text: 'The student realised that attention itself had been the missing ___ all along.', answer: 'ingredient' },
      { speaker: 'teacher', emotion: '🖼️', text: 'From then on, he began every painting with minutes of quiet observation instead of rushing straight to ___.', answer: 'work' },
      { speaker: 'scholar', emotion: '✨', text: 'He learned that seeing clearly, not merely looking quickly, is where good work truly ___.', answer: 'begins' }
    ]
  },

  "Mindful_Seed_Season": {
    questID: "Quest Story 93",
    title: "The Seed That Would Not Wait",
    subtitle: "A mindfulness story about the discomfort of forcing growth before its time.",
    conversation: [
      { speaker: 'teacher', emotion: '🌱', text: 'A gardener planted seeds early, eager to see them sprout before the proper ___.', answer: 'season' },
      { speaker: 'scholar', emotion: '❄️', text: 'A sudden cold spell arrived, and the fragile seedlings began to visibly ___.', answer: 'struggle' },
      { speaker: 'teacher', emotion: '😟', text: 'The gardener rushed to cover them, frustrated by his own ___.', answer: 'impatience' },
      { speaker: 'scholar', emotion: '🌾', text: 'An older farmer nearby, who had planted at the usual time, watched his own seeds remain safely ___.', answer: 'dormant' },
      { speaker: 'teacher', emotion: '🤔', text: 'The gardener asked how the farmer always seemed to know exactly when to ___.', answer: 'plant' },
      { speaker: 'scholar', emotion: '🧘', text: 'The farmer smiled. "I do not force the season. I simply learn to move with its natural ___."', answer: 'rhythm' },
      { speaker: 'teacher', emotion: '💭', text: 'The gardener realised his eagerness had pushed him ahead of a timing he could not actually ___.', answer: 'control' },
      { speaker: 'scholar', emotion: '⚖️', text: 'The farmer explained, "Growth forced too early is fragile. Growth aligned with its season is ___."', answer: 'resilient' },
      { speaker: 'teacher', emotion: '🌿', text: 'The gardener began paying closer attention to natural signs, rather than his own restless ___.', answer: 'timeline' },
      { speaker: 'scholar', emotion: '🌸', text: 'The following season, planted at the right time, his seedlings grew stronger and more ___ than ever before.', answer: 'consistent' },
      { speaker: 'teacher', emotion: '🌞', text: 'He understood that patience was not a delay of growth, but a condition that made real growth ___.', answer: 'possible' },
      { speaker: 'scholar', emotion: '✨', text: 'From then on, he trusted the season\'s pace instead of forcing his own ___.', answer: 'schedule' }
    ]
  },

  "Mindful_Runner_Watched_Others": {
    questID: "Quest Story 94",
    title: "The Runner Who Watched Others",
    subtitle: "A mindfulness story about losing rhythm by constantly measuring ourselves against others.",
    conversation: [
      { speaker: 'teacher', emotion: '🏃', text: 'A runner began a long race at a steady, comfortable ___.', answer: 'pace' },
      { speaker: 'scholar', emotion: '👀', text: 'Within minutes, she started glancing sideways at every runner who passed ___.', answer: 'her' },
      { speaker: 'teacher', emotion: '😤', text: 'Each time someone overtook her, she sped up, ignoring the strain in her own ___.', answer: 'legs' },
      { speaker: 'scholar', emotion: '😩', text: 'By the halfway mark, she was exhausted, having run someone else\'s race instead of her ___.', answer: 'own' },
      { speaker: 'teacher', emotion: '🧘', text: 'An experienced runner beside her noticed her struggling and asked whose pace she was actually ___.', answer: 'following' },
      { speaker: 'scholar', emotion: '💭', text: 'She admitted she had been reacting to everyone around her instead of listening to her own ___.', answer: 'body' },
      { speaker: 'teacher', emotion: '🌿', text: 'The experienced runner suggested she focus only on her breath and her own steady ___.', answer: 'rhythm' },
      { speaker: 'scholar', emotion: '🌊', text: 'She slowed down, letting other runners pass without reacting, and gradually found her natural ___.', answer: 'pace' },
      { speaker: 'teacher', emotion: '💡', text: 'To her surprise, this steadier rhythm actually let her run ___ overall.', answer: 'farther' },
      { speaker: 'scholar', emotion: '⚖️', text: 'She realised comparison had cost her more energy than the actual distance ___.', answer: 'itself' },
      { speaker: 'teacher', emotion: '🏁', text: 'She crossed the finish line tired but proud, having finally run a race that was truly ___.', answer: 'hers' },
      { speaker: 'scholar', emotion: '✨', text: 'She learned that watching others too closely rarely improves our pace — it usually ___ it.', answer: 'disrupts' }
    ]
  },

  "Mindful_Uninvited_Guest": {
    questID: "Quest Story 95",
    title: "The Uninvited Guest",
    subtitle: "A mindfulness story about welcoming difficult emotions instead of resisting them.",
    conversation: [
      { speaker: 'teacher', emotion: '🚪', text: 'A woman described her anxiety to a teacher as an unwelcome guest who kept ___ unannounced.', answer: 'arriving' },
      { speaker: 'scholar', emotion: '😤', text: 'Each time it appeared, she tried desperately to push it ___.', answer: 'away' },
      { speaker: 'teacher', emotion: '🧘', text: 'The teacher asked, "What happens to a guest when you keep slamming the door in their ___?"', answer: 'face' },
      { speaker: 'scholar', emotion: '💭', text: 'She admitted the anxiety often seemed to grow ___ the harder she resisted it.', answer: 'louder' },
      { speaker: 'teacher', emotion: '🍵', text: 'The teacher suggested a different approach: inviting the emotion in and offering it a metaphorical seat and a cup of ___.', answer: 'tea' },
      { speaker: 'scholar', emotion: '😳', text: 'She laughed nervously, unsure how to be kind to a feeling she had spent years trying to ___.', answer: 'avoid' },
      { speaker: 'teacher', emotion: '🌿', text: 'He explained that resisting an emotion often gives it more power, while gently observing it can help it naturally ___.', answer: 'settle' },
      { speaker: 'scholar', emotion: '🌊', text: 'The next time anxiety arrived, she tried simply naming it quietly, saying "Hello, I ___ you again."', answer: 'notice' },
      { speaker: 'teacher', emotion: '💡', text: 'To her surprise, the feeling did not vanish instantly, but it no longer controlled her entire ___.', answer: 'day' },
      { speaker: 'scholar', emotion: '🌱', text: 'Over weeks, she noticed that emotions treated with curiosity tended to pass more ___ than emotions treated with resistance.', answer: 'quickly' },
      { speaker: 'teacher', emotion: '⚖️', text: 'The teacher reminded her, "You do not have to enjoy the guest\'s visit. You only need to stop fighting its ___."', answer: 'presence' },
      { speaker: 'scholar', emotion: '✨', text: 'She learned that welcoming a feeling is often the fastest way to help it eventually ___.', answer: 'leave' }
    ]
  },

  "Mindful_Steady_Wind": {
    questID: "Quest Story 96",
    title: "Steady in the Wind",
    subtitle: "A mindfulness story about maintaining inner calm amid outer disturbance.",
    conversation: [
      { speaker: 'teacher', emotion: '🕯️', text: 'A monk placed a small candle in the courtyard, protected from the surrounding evening ___.', answer: 'wind' },
      { speaker: 'scholar', emotion: '🌬️', text: 'A student asked why the flame stayed so steady despite the wind swirling ___.', answer: 'around' },
      { speaker: 'teacher', emotion: '🧘', text: 'The monk explained that a thin glass shield surrounded the flame, letting light through while blocking the ___.', answer: 'gusts' },
      { speaker: 'scholar', emotion: '💭', text: 'He compared this to the mind, saying that outer chaos need not always disturb our inner ___.', answer: 'stillness' },
      { speaker: 'teacher', emotion: '⚖️', text: 'The student asked, "But surely we cannot always control what happens around ___?"', answer: 'us' },
      { speaker: 'teacher', emotion: '🌿', text: 'The monk agreed, but explained that a steady inner practice can act like a protective glass ___.', answer: 'shield' },
      { speaker: 'scholar', emotion: '🌊', text: 'Just as wind cannot reach the flame directly, disturbance need not always reach the ___ core.', answer: 'inner' },
      { speaker: 'teacher', emotion: '💡', text: 'The student practised breathing calmly even while surrounded by noise, testing whether his own flame could remain ___.', answer: 'steady' },
      { speaker: 'scholar', emotion: '🕯️', text: 'At first, small distractions still made his attention ___.', answer: 'flicker' },
      { speaker: 'teacher', emotion: '🌱', text: 'With practice, however, his focus grew sturdier, less easily disturbed by every passing ___.', answer: 'gust' },
      { speaker: 'scholar', emotion: '🌊', text: 'The monk reminded him, "The wind will always blow. Your task is simply to build a steadier ___."', answer: 'shield' },
      { speaker: 'scholar', emotion: '✨', text: 'The student understood that calm is not the absence of wind, but the presence of a flame that has learned to ___ within it.', answer: 'stand' }
    ]
  },

  "Mindful_Broken_Umbrella": {
    questID: "Quest Story 97",
    title: "The Broken Umbrella",
    subtitle: "A mindfulness story about responding calmly to small, unavoidable annoyances.",
    conversation: [
      { speaker: 'teacher', emotion: '☔', text: 'On a rainy morning, a man\'s umbrella suddenly snapped, leaving him fully ___.', answer: 'exposed' },
      { speaker: 'scholar', emotion: '😠', text: 'He cursed loudly at the sky, the wind, and the umbrella\'s poor ___.', answer: 'quality' },
      { speaker: 'teacher', emotion: '🧘', text: 'A monk walking nearby simply pulled his hood up and continued walking ___.', answer: 'calmly' },
      { speaker: 'scholar', emotion: '🤔', text: 'The man asked how he could remain so unbothered while getting equally ___.', answer: 'wet' },
      { speaker: 'teacher', emotion: '🌿', text: 'The monk replied, "The umbrella broke. My anger will not fix the rain or the ___."', answer: 'umbrella' },
      { speaker: 'scholar', emotion: '💭', text: 'The man realised he had spent more energy resisting the situation than simply ___ through it.', answer: 'walking' },
      { speaker: 'teacher', emotion: '⚖️', text: 'The monk explained, "Small frustrations are inevitable. What is optional is how much suffering we choose to ___ on top of them."', answer: 'add' },
      { speaker: 'scholar', emotion: '🌊', text: 'The man slowed his pace, letting the rain fall without further ___.', answer: 'complaint' },
      { speaker: 'teacher', emotion: '💡', text: 'By the time he reached his destination, he was soaked but strangely more ___ than usual.', answer: 'relaxed' },
      { speaker: 'scholar', emotion: '🌱', text: 'He realised his usual mornings were filled with tiny frustrations he had never learned to simply ___ pass.', answer: 'let' },
      { speaker: 'teacher', emotion: '🌞', text: 'The monk added, "The rain does not care whether we resist it. It falls either ___."', answer: 'way' },
      { speaker: 'scholar', emotion: '✨', text: 'The man walked on, understanding that composure often costs far less energy than ___.', answer: 'resistance' }
    ]
  },

  "Mindful_Full_Cup_Coffee": {
    questID: "Quest Story 98",
    title: "The Cup You Are Drinking",
    subtitle: "A mindfulness story about being fully present in a small, ordinary ritual.",
    conversation: [
      { speaker: 'teacher', emotion: '☕', text: 'Every morning, a man drank his coffee while scrolling quickly through his ___.', answer: 'phone' },
      { speaker: 'scholar', emotion: '🤔', text: 'A friend once asked him, "What did your coffee actually taste like this ___?"', answer: 'morning' },
      { speaker: 'teacher', emotion: '😳', text: 'He paused, realising he could not honestly ___.', answer: 'remember' },
      { speaker: 'scholar', emotion: '🧘', text: 'The friend suggested he try drinking one cup, just once, without any screen ___.', answer: 'nearby' },
      { speaker: 'teacher', emotion: '☕', text: 'The next morning, he sat quietly, noticing the warmth of the cup against his ___.', answer: 'palms' },
      { speaker: 'scholar', emotion: '👃', text: 'He noticed the rich smell rising before he even took the first ___.', answer: 'sip' },
      { speaker: 'teacher', emotion: '😲', text: 'The familiar drink suddenly tasted more complex than he remembered, almost entirely ___.', answer: 'new' },
      { speaker: 'scholar', emotion: '💭', text: 'He realised he had been drinking the same coffee every day without actually ___ it.', answer: 'experiencing' },
      { speaker: 'teacher', emotion: '⚖️', text: 'His friend explained, "Most of life passes the same way — present in the room, absent in the ___."', answer: 'mind' },
      { speaker: 'scholar', emotion: '🌱', text: 'The man began keeping this single cup each morning as a small ritual of full ___.', answer: 'presence' },
      { speaker: 'teacher', emotion: '🌊', text: 'It became a quiet reminder that ordinary moments deepen the instant we actually ___ them.', answer: 'notice' },
      { speaker: 'scholar', emotion: '✨', text: 'He understood that presence does not require special moments — only attention brought to the ordinary ___.', answer: 'ones' }
    ]
  },

  "Mindful_Silent_Walk": {
    questID: "Quest Story 99",
    title: "The Walk Without a Destination",
    subtitle: "A mindfulness story about the value of movement without a fixed purpose.",
    conversation: [
      { speaker: 'teacher', emotion: '🚶', text: 'A student asked her teacher for a walking meditation to help clear her cluttered ___.', answer: 'mind' },
      { speaker: 'scholar', emotion: '🗺️', text: 'The teacher told her to walk for thirty minutes with absolutely no fixed ___.', answer: 'destination' },
      { speaker: 'teacher', emotion: '😕', text: 'She hesitated, admitting she had never walked anywhere without a clear ___ before.', answer: 'purpose' },
      { speaker: 'scholar', emotion: '🌿', text: 'The teacher smiled. "That is precisely why the exercise will feel unfamiliar at ___."', answer: 'first' },
      { speaker: 'teacher', emotion: '👣', text: 'She set out slowly, noticing how strange it felt to walk without checking a ___.', answer: 'map' },
      { speaker: 'scholar', emotion: '🌸', text: 'Within minutes, she found herself noticing small details — a crack in the pavement, the smell of nearby ___.', answer: 'flowers' },
      { speaker: 'teacher', emotion: '💭', text: 'Her usual mental chatter about tasks and deadlines slowly began to ___.', answer: 'quiet' },
      { speaker: 'scholar', emotion: '😲', text: 'She realised how rarely she moved through the world without rushing toward the next ___.', answer: 'thing' },
      { speaker: 'teacher', emotion: '⚖️', text: 'When she returned, her teacher asked what she had learned. She said, "That my mind is usually walking somewhere I am ___."', answer: 'not' },
      { speaker: 'scholar', emotion: '🌱', text: 'The teacher nodded. "Movement without destination often reveals how much of life we spend arriving instead of ___."', answer: 'being' },
      { speaker: 'teacher', emotion: '🌊', text: 'She began taking short aimless walks weekly, treating them as practice for staying present ___ else.', answer: 'everywhere' },
      { speaker: 'scholar', emotion: '✨', text: 'She learned that sometimes the most valuable journey is the one that leads absolutely ___.', answer: 'nowhere' }
    ]
  }
};
