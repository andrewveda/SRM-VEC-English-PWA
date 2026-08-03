const QUESTIONS = [
  {
    "type": "Subject-Verb Agreement",
    "icon": "🤝",
    "toggle": {
      "title": "The Stable at Night",
      "options": [
        "Singular guard",
        "Plural guards"
      ],
      "sentences": {
        "Singular guard": "The stable lad <b>keeps</b> watch alone.",
        "Plural guards": "The stable lads <b>keep</b> watch in shifts."
      },
      "notes": {
        "Singular guard": "Singular subject → singular verb (+s).",
        "Plural guards": "Plural subject → plural verb (no +s)."
      }
    },
    "before": "Neither the trainer nor the stable boys",
    "after": "certain what happened to Silver Blaze.",
    "answer": "are",
    "choices": [
      "is",
      "are",
      "was",
      "were"
    ],
    "explain": "With \"neither...nor\", the verb agrees with the nearer subject. \"Boys\" is plural, so \"are\" is correct."
  },
  {
    "type": "Subject-Verb Agreement",
    "icon": "🤝",
    "toggle": {
      "title": "The Horse as a Unit",
      "options": [
        "The horse alone",
        "The horse and jockey"
      ],
      "sentences": {
        "The horse alone": "Silver Blaze <b>is</b> the favourite for the Wessex Cup.",
        "The horse and jockey": "Silver Blaze and his jockey <b>are</b> favourites for the Cup."
      },
      "notes": {
        "The horse alone": "One subject = singular verb.",
        "The horse and jockey": "Two subjects joined by \"and\" = plural verb."
      }
    },
    "before": "The famous racehorse, together with his trainer,",
    "after": "missing from the stable.",
    "answer": "is",
    "choices": [
      "is",
      "are",
      "was",
      "were"
    ],
    "explain": "When subjects are joined by \"together with\", the verb agrees with the first subject. \"Racehorse\" is singular → \"is\"."
  },
  {
    "type": "Subject-Verb Agreement",
    "icon": "🤝",
    "toggle": {
      "title": "The Curious Incident",
      "options": [
        "The dog barks",
        "The dog is silent"
      ],
      "sentences": {
        "The dog barks": "The watchdog <b>barks</b> at strangers.",
        "The dog is silent": "The watchdog <b>remains</b> silent at familiar footsteps."
      },
      "notes": {
        "The dog barks": "A normal reaction — singular verb.",
        "The dog is silent": "The silence is singular — one remarkable fact."
      }
    },
    "before": "Each of the footprints in the soft ground",
    "after": "been examined by Inspector Gregory.",
    "answer": "has",
    "choices": [
      "have",
      "has",
      "had",
      "were"
    ],
    "explain": "\"Each\" is always singular. The subject is \"each\", not \"footprints\", so use \"has\"."
  },
  {
    "type": "Subject-Verb Agreement",
    "icon": "🤝",
    "toggle": {
      "title": "There is / There are",
      "options": [
        "One clue",
        "Many clues"
      ],
      "sentences": {
        "One clue": "There <b>is</b> a cravat in the heather.",
        "Many clues": "There <b>are</b> three sets of footprints near the gate."
      },
      "notes": {
        "One clue": "Use \"is\" when the following noun is singular.",
        "Many clues": "Use \"are\" when the following noun is plural."
      }
    },
    "before": "There",
    "after": "a candle and a box of matches beside the dead man.",
    "answer": "is",
    "choices": [
      "are",
      "is",
      "were",
      "have been"
    ],
    "explain": "With \"there\", the verb agrees with the first subject. \"A candle\" is singular, so use \"is\" (proximity rule)."
  },
  {
    "type": "Subject-Verb Agreement",
    "icon": "🤝",
    "toggle": {
      "title": "Money and Distance",
      "options": [
        "A sum as one unit",
        "Coins as separate items"
      ],
      "sentences": {
        "A sum as one unit": "Five pounds <b>is</b> the reward offered.",
        "Coins as separate items": "The five pound coins <b>were</b> scattered on the table."
      },
      "notes": {
        "A sum as one unit": "Sums of money treated as one amount → singular.",
        "Coins as separate items": "Individual items → plural."
      }
    },
    "before": "Twenty miles",
    "after": "a long ride across Dartmoor in the dark.",
    "answer": "is",
    "choices": [
      "are",
      "were",
      "is",
      "have been"
    ],
    "explain": "When a distance is treated as a single unit, it takes a singular verb: 'is'."
  },
  {
    "type": "Articles",
    "icon": "📰",
    "toggle": {
      "title": "Definite vs Indefinite",
      "options": [
        "Known suspect",
        "Unknown suspect"
      ],
      "sentences": {
        "Known suspect": "<b>The</b> stranger in the purple coat was seen lurking.",
        "Unknown suspect": "<b>A</b> stranger was seen near the stables at midnight."
      },
      "notes": {
        "Known suspect": "\"The\" = specific, already mentioned, unique.",
        "Unknown suspect": "\"A\" = any one of a kind, first mention."
      }
    },
    "before": "Colonel Ross offered",
    "after": "reward of one thousand pounds for the return of his horse.",
    "answer": "a",
    "choices": [
      "a",
      "an",
      "the",
      "—"
    ],
    "explain": "First mention of the reward. \"Reward\" begins with a consonant sound, so use \"a\"."
  },
  {
    "type": "Articles",
    "icon": "📰",
    "toggle": {
      "title": "Geographic Names",
      "options": [
        "With the",
        "Without the"
      ],
      "sentences": {
        "With the": "<b>The</b> Dartmoor heath stretches for miles.",
        "Without the": "— Dartmoor is wild and desolate."
      },
      "notes": {
        "With the": "Unique geographical features often take \"the\".",
        "Without the": "Proper names of places usually take no article."
      }
    },
    "before": "",
    "after": "Wessex Cup is the most important race of the season.",
    "answer": "The",
    "choices": [
      "A",
      "An",
      "The",
      "—"
    ],
    "explain": "Names of cups, trophies, and unique events take 'the': the Wessex Cup, the Derby."
  },
  {
    "type": "Articles",
    "icon": "📰",
    "toggle": {
      "title": "Abstract vs Concrete",
      "options": [
        "General truth",
        "Specific instance"
      ],
      "sentences": {
        "General truth": "— Silence is the hallmark of a guilty conscience.",
        "Specific instance": "The silence <b>of the dog</b> puzzled Holmes deeply."
      },
      "notes": {
        "General truth": "Abstract nouns used generally take zero article.",
        "Specific instance": "When specified or particularized, use \"the\"."
      }
    },
    "before": "",
    "after": "bravery of the trainer in defending the horse was beyond doubt.",
    "answer": "The",
    "choices": [
      "A",
      "An",
      "The",
      "—"
    ],
    "explain": "\"Bravery\" is specified here (of the trainer), so use \"the\"."
  },
  {
    "type": "Articles",
    "icon": "📰",
    "toggle": {
      "title": "The Stranger's Cravat",
      "options": [
        "With the",
        "Without the"
      ],
      "sentences": {
        "With the": "<b>The</b> cravat found at the scene belonged to Fitzroy Simpson.",
        "Without the": "— Strangers should not wander near racing stables."
      },
      "notes": {
        "With the": "Specific items already identified take \"the\".",
        "Without the": "General statements about categories take no article."
      }
    },
    "before": "Holmes examined",
    "after": "cravat with the initials H.B. embroidered upon it.",
    "answer": "the",
    "choices": [
      "a",
      "an",
      "the",
      "—"
    ],
    "explain": "The cravat has already been mentioned as evidence, so use 'the' for specificity."
  },
  {
    "type": "Articles",
    "icon": "📰",
    "toggle": {
      "title": "Superlatives",
      "options": [
        "With the",
        "Without the"
      ],
      "sentences": {
        "With the": "Silver Blaze is <b>the</b> fastest horse in England.",
        "Without the": "— Most racehorses train daily."
      },
      "notes": {
        "With the": "Superlatives always take \"the\".",
        "Without the": "\"Most\" meaning \"majority\" takes no article."
      }
    },
    "before": "This is",
    "after": "most curious incident I have ever investigated, Watson.",
    "answer": "the",
    "choices": [
      "a",
      "an",
      "the",
      "—"
    ],
    "explain": "Superlatives (most curious) always take 'the'. Holmes is speaking of a unique case."
  },
  {
    "type": "Prepositions",
    "icon": "🧭",
    "toggle": {
      "title": "Time of the Crime",
      "options": [
        "At",
        "On",
        "In"
      ],
      "sentences": {
        "At": "The crime occurred <b>at</b> midnight.",
        "On": "It happened <b>on</b> Monday night.",
        "In": "It happened <b>in</b> September."
      },
      "notes": {
        "At": "Precise times: midnight, noon, dawn.",
        "On": "Days and dates.",
        "In": "Months, seasons, years."
      }
    },
    "before": "The stable lad was found drugged",
    "after": "midnight.",
    "answer": "at",
    "choices": [
      "at",
      "on",
      "in",
      "by"
    ],
    "explain": "Specific times (midnight) use 'at'."
  },
  {
    "type": "Prepositions",
    "icon": "🧭",
    "toggle": {
      "title": "Places on Dartmoor",
      "options": [
        "At",
        "On",
        "In"
      ],
      "sentences": {
        "At": "The body was found <b>at</b> the edge of the heath.",
        "On": "The horse was hidden <b>on</b> a neighbouring farm.",
        "In": "The suspect waited <b>in</b> the shadows of the stable."
      },
      "notes": {
        "At": "Exact points: the gate, the door, the heath's edge.",
        "On": "Surfaces and specific locations: the farm, the moor.",
        "In": "Enclosed spaces: the stable, the room, the house."
      }
    },
    "before": "The candle was lying",
    "after": "the ground near the trainer's body.",
    "answer": "on",
    "choices": [
      "at",
      "on",
      "in",
      "over"
    ],
    "explain": "The candle rests on a surface (the ground), so use 'on'."
  },
  {
    "type": "Prepositions",
    "icon": "🧭",
    "toggle": {
      "title": "Movement",
      "options": [
        "To",
        "Into",
        "Towards"
      ],
      "sentences": {
        "To": "The stranger came <b>to</b> the stable door.",
        "Into": "He crept <b>into</b> the yard.",
        "Towards": "He walked <b>towards</b> the stall where Silver Blaze slept."
      },
      "notes": {
        "To": "Movement to a destination.",
        "Into": "Movement from outside to inside.",
        "Towards": "Movement in a direction, not necessarily arriving."
      }
    },
    "before": "Someone had forced their way",
    "after": "the locked stable.",
    "answer": "into",
    "choices": [
      "to",
      "into",
      "towards",
      "onto"
    ],
    "explain": "\"Into\" indicates movement from outside to inside an enclosed space (the stable)."
  },
  {
    "type": "Prepositions",
    "icon": "🧭",
    "toggle": {
      "title": "Travel to the Scene",
      "options": [
        "By",
        "On",
        "In"
      ],
      "sentences": {
        "By": "Watson and Holmes travelled <b>by</b> train to Tavistock.",
        "On": "They rode <b>on</b> horseback across the moor.",
        "In": "They sat <b>in</b> a carriage discussing the case."
      },
      "notes": {
        "By": "General mode of transport without article.",
        "On": "Large/public transport or animals you mount.",
        "In": "Small/private vehicles you sit inside."
      }
    },
    "before": "Inspector Gregory arrived",
    "after": "train from Exeter.",
    "answer": "by",
    "choices": [
      "by",
      "on",
      "in",
      "with"
    ],
    "explain": "\"By\" + transport (no article) for general mode of travel."
  },
  {
    "type": "Prepositions",
    "icon": "🧭",
    "toggle": {
      "title": "Holmes's Skills",
      "options": [
        "Good at",
        "Fond of",
        "Worried about"
      ],
      "sentences": {
        "Good at": "Holmes is <b>good at</b> reading footprints.",
        "Fond of": "He is <b>fond of</b> a difficult problem.",
        "Worried about": "He is never <b>worried about</b> the obvious."
      },
      "notes": {
        "Good at": "Skills and abilities.",
        "Fond of": "Likes and preferences.",
        "Worried about": "Concerns and anxieties."
      }
    },
    "before": "Holmes is remarkably good",
    "after": "noticing what others overlook.",
    "answer": "at",
    "choices": [
      "in",
      "at",
      "with",
      "for"
    ],
    "explain": "\"Good at\" is the fixed collocation for skills and abilities. Holmes excels at observation."
  },
  {
    "type": "Tenses",
    "icon": "⏳",
    "toggle": {
      "title": "The Night of the Crime",
      "options": [
        "Past",
        "Present",
        "Future"
      ],
      "sentences": {
        "Past": "The stable lad <b>ate</b> his supper and <b>fell</b> asleep.",
        "Present": "He <b>eats</b> supper at nine every evening.",
        "Future": "He <b>will eat</b> supper before taking his post."
      },
      "notes": {
        "Past": "Completed actions at a specific time.",
        "Present": "Habits and routines.",
        "Future": "Predictions and planned actions."
      }
    },
    "before": "By the time Holmes arrived, the horse",
    "after": ".",
    "answer": "had already vanished",
    "choices": [
      "already vanished",
      "has already vanished",
      "had already vanished",
      "was already vanishing"
    ],
    "explain": "Past Perfect is used for an action completed before another past action. The horse had vanished before Holmes arrived."
  },
  {
    "type": "Tenses",
    "icon": "⏳",
    "toggle": {
      "title": "The Night of the Crime",
      "options": [
        "Past",
        "Present",
        "Future"
      ],
      "sentences": {
        "Past": "The dog <b>did nothing</b> in the night-time.",
        "Present": "The dog <b>does nothing</b> when it knows the visitor.",
        "Future": "The dog <b>will do nothing</b> if the intruder is familiar."
      },
      "notes": {
        "Past": "Completed action — the famous curious incident.",
        "Present": "General truth about dogs.",
        "Future": "Prediction about behaviour."
      }
    },
    "before": "Look! The stable lad",
    "after": "on the floor, insensible from the opium.",
    "answer": "is lying",
    "choices": [
      "lies",
      "is lying",
      "was lying",
      "has lain"
    ],
    "explain": "\"Look!\" signals an action happening at the moment of discovery → Present Continuous."
  },
  {
    "type": "Tenses",
    "icon": "⏳",
    "toggle": {
      "title": "The Night of the Crime",
      "options": [
        "Past",
        "Present",
        "Future"
      ],
      "sentences": {
        "Past": "Straker <b>had carried</b> a candle into the pit.",
        "Present": "He <b>has carried</b> the candle to examine the horse.",
        "Future": "He <b>will have carried</b> the candle to the stable by midnight."
      },
      "notes": {
        "Past": "Action completed before another past moment.",
        "Present": "Action with present relevance.",
        "Future": "Action completed before a specific future time."
      }
    },
    "before": "Watson",
    "after": "the case notes three times already.",
    "answer": "has read",
    "choices": [
      "read",
      "has read",
      "had read",
      "is reading"
    ],
    "explain": "\"Already\" with an unfinished time period → Present Perfect. Watson has read the notes up to now."
  },
  {
    "type": "Tenses",
    "icon": "⏳",
    "toggle": {
      "title": "The Night of the Crime",
      "options": [
        "Past",
        "Present",
        "Future"
      ],
      "sentences": {
        "Past": "Straker <b>used to train</b> horses at King's Pyland.",
        "Present": "He <b>trains</b> horses there now.",
        "Future": "He <b>will train</b> Silver Blaze for the Cup."
      },
      "notes": {
        "Past": "\"Used to\" = past habit (tragically, he is now dead).",
        "Present": "Current habit.",
        "Future": "Planned future action."
      }
    },
    "before": "When Straker was alive, he",
    "after": "to the heath every evening to exercise the horses.",
    "answer": "used to go",
    "choices": [
      "go",
      "used to go",
      "would go",
      "Both B and C"
    ],
    "explain": "Both \"used to go\" and \"would go\" express past habits. \"Would\" cannot be used with stative verbs, but \"go\" is an action verb."
  },
  {
    "type": "Tenses",
    "icon": "⏳",
    "toggle": {
      "title": "The Night of the Crime",
      "options": [
        "Past",
        "Present",
        "Future"
      ],
      "sentences": {
        "Past": "The race <b>was run</b> at Winchester.",
        "Present": "The race <b>is run</b> at Winchester every year.",
        "Future": "The race <b>will be run</b> next Tuesday."
      },
      "notes": {
        "Past": "Simple past for completed past events.",
        "Present": "Simple present for fixed schedules.",
        "Future": "\"Will\" for predictions."
      }
    },
    "before": "The Wessex Cup",
    "after": "at Winchester next Tuesday.",
    "answer": "is run",
    "choices": [
      "is run",
      "is being run",
      "will be run",
      "All of the above"
    ],
    "explain": "For future schedules and timetables, the present simple is standard. 'Is run' is the most natural choice."
  },
  {
    "type": "Tenses",
    "icon": "⏳",
    "toggle": {
      "title": "The Night of the Crime",
      "options": [
        "Past",
        "Present",
        "Future"
      ],
      "sentences": {
        "Past": "While Straker <b>was examining</b> the horse, the intruder struck.",
        "Present": "While he <b>is examining</b> the horse, the lad sleeps.",
        "Future": "While he <b>will be examining</b> the horse, the race approaches."
      },
      "notes": {
        "Past": "Past Continuous for longer background action interrupted by simple past.",
        "Present": "Present Continuous for ongoing background.",
        "Future": "Future Continuous for future background."
      }
    },
    "before": "Straker",
    "after": "the horse's lameness for nearly an hour before he was killed.",
    "answer": "had been examining",
    "choices": [
      "examines",
      "has examined",
      "had been examining",
      "was examining"
    ],
    "explain": "Past Perfect Continuous emphasizes duration before another past action. \"For nearly an hour\" + \"before he was killed\" → had been examining."
  },
  {
    "type": "Tenses",
    "icon": "⏳",
    "toggle": {
      "title": "The Night of the Crime",
      "options": [
        "Past",
        "Present",
        "Future"
      ],
      "sentences": {
        "Past": "I <b>wish I had noticed</b> the candle wax.",
        "Present": "I <b>wish I knew</b> the answer.",
        "Future": "I <b>wish I would know</b> the truth."
      },
      "notes": {
        "Past": "\"Wish + past perfect\" = regret about the past.",
        "Present": "\"Wish + simple past\" = desire for a different present.",
        "Future": "\"Wish + would\" = desire for someone else to change."
      }
    },
    "before": "Watson wished he",
    "after": "the significance of the dog's silence earlier.",
    "answer": "had understood",
    "choices": [
      "understood",
      "had understood",
      "would understand",
      "has understood"
    ],
    "explain": "\"Wish\" + Past Perfect expresses regret about a past situation that cannot be changed. Watson regrets not seeing it sooner."
  },
  {
    "type": "Tenses",
    "icon": "⏳",
    "toggle": {
      "title": "The Night of the Crime",
      "options": [
        "Past",
        "Present",
        "Future"
      ],
      "sentences": {
        "Past": "Holmes said he <b>was</b> certain of the truth.",
        "Present": "Holmes says he <b>is</b> certain.",
        "Future": "Holmes said he <b>would be</b> certain by morning."
      },
      "notes": {
        "Past": "In reported speech, tenses usually shift back one step.",
        "Present": "When the reporting verb is present, no backshift.",
        "Future": "\"Will\" becomes \"would\" in reported speech."
      }
    },
    "before": "\"I am following a definite line of inquiry,\" Holmes said. → Holmes said that he",
    "after": "a definite line of inquiry.",
    "answer": "was following",
    "choices": [
      "is following",
      "was following",
      "followed",
      "has followed"
    ],
    "explain": "Present Continuous in direct speech → Past Continuous in reported speech (backshift)."
  },
  {
    "type": "Active-Passive Voice",
    "icon": "🔄",
    "toggle": {
      "title": "Who Did What?",
      "options": [
        "Active",
        "Passive"
      ],
      "sentences": {
        "Active": "Fitzroy Simpson <b>drugged</b> the stable lad's curry.",
        "Passive": "The stable lad's curry <b>was drugged</b> with powdered opium."
      },
      "notes": {
        "Active": "Subject performs the action.",
        "Passive": "Subject receives the action. Use when agent is unknown or unimportant."
      }
    },
    "before": "Silver Blaze",
    "after": "from the stable by someone who knew the grounds intimately.",
    "answer": "was stolen",
    "choices": [
      "stole",
      "was stolen",
      "had stolen",
      "steals"
    ],
    "explain": "The horse receives the action (it does not steal itself), so passive voice 'was stolen' is correct."
  },
  {
    "type": "Active-Passive Voice",
    "icon": "🔄",
    "toggle": {
      "title": "Who Did What?",
      "options": [
        "Active",
        "Passive"
      ],
      "sentences": {
        "Active": "Someone <b>has hidden</b> Silver Blaze in a neighbouring stable.",
        "Passive": "Silver Blaze <b>has been hidden</b> in a neighbouring stable by Silas Brown."
      },
      "notes": {
        "Active": "Use when the doer is important or known.",
        "Passive": "Use when the doer is unknown, obvious, or unimportant."
      }
    },
    "before": "The famous racehorse",
    "after": "in the Mapleton stables by Silas Brown.",
    "answer": "was found",
    "choices": [
      "found",
      "was found",
      "had found",
      "is finding"
    ],
    "explain": "Passive voice: the horse is found, not finding. 'Was found' shows the horse as the receiver of the discovery."
  },
  {
    "type": "Active-Passive Voice",
    "icon": "🔄",
    "toggle": {
      "title": "Who Did What?",
      "options": [
        "Active",
        "Passive"
      ],
      "sentences": {
        "Active": "Ned Hunter <b>is eating</b> his curried mutton.",
        "Passive": "The curried mutton <b>is being eaten</b> by Ned Hunter."
      },
      "notes": {
        "Active": "Present Continuous: am/is/are + V-ing.",
        "Passive": "Present Continuous Passive: am/is/are + being + past participle."
      }
    },
    "before": "The curry",
    "after": "by someone who wished to render the stable lad insensible.",
    "answer": "was being prepared",
    "choices": [
      "was preparing",
      "was being prepared",
      "prepared",
      "has prepared"
    ],
    "explain": "Past Continuous Passive: \"was being prepared\". The curry was prepared by an unseen hand — passive voice needed."
  },
  {
    "type": "Active-Passive Voice",
    "icon": "🔄",
    "toggle": {
      "title": "Who Did What?",
      "options": [
        "Active",
        "Passive"
      ],
      "sentences": {
        "Active": "People <b>believe</b> that Silver Blaze is dead.",
        "Passive": "Silver Blaze <b>is believed to be</b> dead. (Subject + be + past participle + to-infinitive)"
      },
      "notes": {
        "Active": "Standard active construction.",
        "Passive": "\"Subject is believed to...\" for reporting opinions."
      }
    },
    "before": "Straker",
    "after": "to have carried a candle into the pit to examine the horse's lameness.",
    "answer": "is known",
    "choices": [
      "is known",
      "knows",
      "knew",
      "has known"
    ],
    "explain": "\"Is known to have carried\" = passive reporting structure: subject + be + past participle + perfect infinitive."
  },
  {
    "type": "Active-Passive Voice",
    "icon": "🔄",
    "toggle": {
      "title": "Who Did What?",
      "options": [
        "Active",
        "Passive"
      ],
      "sentences": {
        "Active": "Someone <b>must have drugged</b> the stable lad.",
        "Passive": "The stable lad <b>must have been drugged</b>. (Modal passive)"
      },
      "notes": {
        "Active": "Modal perfect active for deduction.",
        "Passive": "Modal perfect passive: modal + have been + past participle."
      }
    },
    "before": "The truth",
    "after": "before the race, or Colonel Ross would never have entered his horse.",
    "answer": "must be revealed",
    "choices": [
      "must reveal",
      "must be revealed",
      "must revealed",
      "must have revealed"
    ],
    "explain": "Modal passive: 'must be + past participle'. The truth is revealed by someone — the truth itself cannot reveal."
  },
  {
    "type": "Reported Speech",
    "icon": "📢",
    "toggle": {
      "title": "Witness Testimony",
      "options": [
        "Direct",
        "Reported"
      ],
      "sentences": {
        "Direct": "Ned Hunter said, \"<b>I am</b> feeling unwell after supper.\"",
        "Reported": "Ned Hunter said (that) he <b>was</b> feeling unwell after supper."
      },
      "notes": {
        "Direct": "Exact words in quotation marks. Present tense.",
        "Reported": "Backshift of tenses, pronouns, and time expressions."
      }
    },
    "before": "\"I will find the horse,\" Holmes declared. → Holmes declared that he",
    "after": "the horse.",
    "answer": "would find",
    "choices": [
      "will find",
      "would find",
      "finds",
      "found"
    ],
    "explain": "\"Will\" in direct speech becomes \"would\" in reported speech (backshift of modal)."
  },
  {
    "type": "Reported Speech",
    "icon": "📢",
    "toggle": {
      "title": "Witness Testimony",
      "options": [
        "Direct",
        "Reported"
      ],
      "sentences": {
        "Direct": "\"<b>Did you</b> see anyone near the stable?\" Gregory asked.",
        "Reported": "Gregory asked <b>if he had seen</b> anyone near the stable."
      },
      "notes": {
        "Direct": "Yes/no questions use auxiliary verb at the start.",
        "Reported": "Use \"if\" or \"whether\" + statement word order."
      }
    },
    "before": "\"Did you drug the curry?\" Holmes asked Simpson. → Holmes asked Simpson",
    "after": "he had drugged the curry.",
    "answer": "if",
    "choices": [
      "if",
      "did",
      "that",
      "whether"
    ],
    "explain": "Yes/no questions in reported speech use 'if/whether' + statement word order + backshifted tense."
  },
  {
    "type": "Reported Speech",
    "icon": "📢",
    "toggle": {
      "title": "Witness Testimony",
      "options": [
        "Direct",
        "Reported"
      ],
      "sentences": {
        "Direct": "\"<b>Tell me</b> the truth,\" Holmes demanded.",
        "Reported": "Holmes <b>demanded that he tell</b> the truth."
      },
      "notes": {
        "Direct": "Imperatives use base verb form.",
        "Reported": "\"Tell/ask/order + object + to-infinitive\" for commands."
      }
    },
    "before": "\"Please examine the cravat carefully,\" Watson said. → Watson asked Holmes",
    "after": "the cravat carefully.",
    "answer": "to examine",
    "choices": [
      "examine",
      "to examine",
      "examining",
      "examined"
    ],
    "explain": "Reported requests use \"asked + object + to-infinitive\": \"asked Holmes to examine\"."
  },
  {
    "type": "Reported Speech",
    "icon": "📢",
    "toggle": {
      "title": "Witness Testimony",
      "options": [
        "Direct",
        "Reported"
      ],
      "sentences": {
        "Direct": "\"I <b>have never seen</b> the cravat before,\" Simpson claimed.",
        "Reported": "Simpson claimed he <b>had never seen</b> the cravat before."
      },
      "notes": {
        "Direct": "Present Perfect in direct speech.",
        "Reported": "Present Perfect → Past Perfect in reported speech."
      }
    },
    "before": "\"I have heard nothing unusual,\" the maid said. → The maid said that she",
    "after": "nothing unusual.",
    "answer": "had heard",
    "choices": [
      "has heard",
      "had heard",
      "have heard",
      "would hear"
    ],
    "explain": "Present Perfect (have heard) → Past Perfect (had heard) in reported speech."
  },
  {
    "type": "Reported Speech",
    "icon": "📢",
    "toggle": {
      "title": "Witness Testimony",
      "options": [
        "Direct",
        "Reported"
      ],
      "sentences": {
        "Direct": "\"<b>What were</b> you doing at midnight?\" Holmes asked.",
        "Reported": "Holmes asked <b>what he had been</b> doing at midnight."
      },
      "notes": {
        "Direct": "Wh-questions keep the question word.",
        "Reported": "Wh-questions become statements with the wh-word as a conjunction."
      }
    },
    "before": "\"Where did you hide the horse?\" Holmes asked Brown. → Holmes asked Brown where",
    "after": "the horse.",
    "answer": "he had hidden",
    "choices": [
      "did he hide",
      "he hid",
      "he had hidden",
      "he hides"
    ],
    "explain": "Past Simple → Past Perfect in reported speech when the hiding occurred before the questioning. 'He had hidden' is the most precise."
  },
  {
    "type": "Conditionals",
    "icon": "🔀",
    "toggle": {
      "title": "Holmes's Deductions",
      "options": [
        "Type 0",
        "Type 1",
        "Type 2",
        "Type 3"
      ],
      "sentences": {
        "Type 0": "If a dog <b>hears</b> a stranger, it <b>barks</b>. (General truth)",
        "Type 1": "If we <b>follow</b> the footprints, we <b>will find</b> the horse. (Real possibility)",
        "Type 2": "If I <b>had</b> a magnifying glass, I <b>would see</b> the fibres. (Unreal present)",
        "Type 3": "If the lad <b>had not eaten</b> the curry, he <b>would have heard</b> the intruder. (Unreal past)"
      },
      "notes": {
        "Type 0": "If + present simple, present simple. Universal truths.",
        "Type 1": "If + present simple, will + base. Real future possibilities.",
        "Type 2": "If + past simple, would + base. Imaginary present.",
        "Type 3": "If + past perfect, would have + past participle. Regret about past."
      }
    },
    "before": "If the dog had barked, the stable lad",
    "after": "the intruder.",
    "answer": "would have heard",
    "choices": [
      "will hear",
      "would hear",
      "would have heard",
      "hears"
    ],
    "explain": "Type 3 conditional: If + past perfect, would have + past participle. The dog did NOT bark, so the lad did NOT hear — unreal past."
  },
  {
    "type": "Conditionals",
    "icon": "🔀",
    "toggle": {
      "title": "Holmes's Deductions",
      "options": [
        "Type 0",
        "Type 1",
        "Type 2",
        "Type 3"
      ],
      "sentences": {
        "Type 0": "If you <b>heat</b> wax, it <b>melts</b>.",
        "Type 1": "If you <b>examine</b> the candle, you <b>will find</b> wax drippings.",
        "Type 2": "If I <b>were</b> the thief, I <b>would hide</b> the horse nearby.",
        "Type 3": "If Straker <b>had lived</b>, he <b>would have explained</b> the candle."
      },
      "notes": {
        "Type 0": "Scientific facts.",
        "Type 1": "Likely situations in the future.",
        "Type 2": "Hypothetical or unlikely present.",
        "Type 3": "Impossible situations in the past."
      }
    },
    "before": "If you drug a watchdog with opium, it",
    "after": "unconscious within the hour.",
    "answer": "falls",
    "choices": [
      "will fall",
      "would fall",
      "falls",
      "would have fallen"
    ],
    "explain": "Type 0 conditional for scientific facts/general truths: If + present simple, present simple. Opium always has this effect."
  },
  {
    "type": "Conditionals",
    "icon": "🔀",
    "toggle": {
      "title": "Holmes's Deductions",
      "options": [
        "Type 0",
        "Type 1",
        "Type 2",
        "Type 3"
      ],
      "sentences": {
        "Type 0": "If a horse <b>is frightened</b>, it <b>kicks</b>.",
        "Type 1": "If we <b>search</b> the heath, we <b>will find</b> clues.",
        "Type 2": "If the horse <b>were</b> dead, we <b>would have found</b> the body.",
        "Type 3": "If Simpson <b>had stolen</b> the horse, he <b>would have ridden</b> it away."
      },
      "notes": {
        "Type 0": "Always true.",
        "Type 1": "Real possibility.",
        "Type 2": "Hypothetical present.",
        "Type 3": "Regret about past events."
      }
    },
    "before": "If Straker had not carried a candle into the pit, he",
    "after": "alive today.",
    "answer": "would be",
    "choices": [
      "will be",
      "would be",
      "would have been",
      "is"
    ],
    "explain": "Type 2 conditional: If + past simple, would + base. The present result of an unreal present condition. (He is dead, so this is hypothetical.)"
  },
  {
    "type": "Conditionals",
    "icon": "🔀",
    "toggle": {
      "title": "Holmes's Deductions",
      "options": [
        "Type 0",
        "Type 1",
        "Type 2",
        "Type 3"
      ],
      "sentences": {
        "Type 0": "If silver <b>is exposed</b> to air, it <b>tarnishes</b>.",
        "Type 1": "If it <b>rains</b>, the footprints <b>will wash</b> away.",
        "Type 2": "If I <b>knew</b> where the horse was, I <b>would tell</b> you.",
        "Type 3": "If I <b>had known</b> sooner, I <b>would have acted</b>."
      },
      "notes": {
        "Type 0": "Zero conditional = facts.",
        "Type 1": "First conditional = real future.",
        "Type 2": "Second conditional = unreal present.",
        "Type 3": "Third conditional = unreal past."
      }
    },
    "before": "If I",
    "after": "you, Colonel, I would look for the horse among my neighbours.",
    "answer": "were",
    "choices": [
      "am",
      "were",
      "had been",
      "was"
    ],
    "explain": "In Type 2 conditionals, \"were\" is used for all persons after \"if\" (subjunctive mood): \"If I were you\" — Holmes's famous line to Colonel Ross."
  },
  {
    "type": "Conditionals",
    "icon": "🔀",
    "toggle": {
      "title": "Holmes's Deductions",
      "options": [
        "Type 0",
        "Type 1",
        "Type 2",
        "Type 3"
      ],
      "sentences": {
        "Type 0": "If you <b>press</b> a knife into soft ground, it <b>leaves</b> a mark.",
        "Type 1": "If you <b>follow</b> my advice, you <b>will find</b> your horse.",
        "Type 2": "If you <b>asked</b> Brown directly, he <b>would admit</b> it.",
        "Type 3": "If you <b>had asked</b> Brown yesterday, he <b>would have denied</b> everything."
      },
      "notes": {
        "Type 0": "Universal truth.",
        "Type 1": "Real possibility.",
        "Type 2": "Hypothetical/improbable.",
        "Type 3": "Impossible (past opportunity missed)."
      }
    },
    "before": "If we visit Mapleton stables tomorrow, we",
    "after": "Silver Blaze in the neighbouring stall.",
    "answer": "will find",
    "choices": [
      "will find",
      "would find",
      "would have found",
      "find"
    ],
    "explain": "Type 1 conditional: If + present simple, will + base. Real possibility in the future — Holmes is confident."
  },
  {
    "type": "Question Tags",
    "icon": "🏷️",
    "toggle": {
      "title": "The Interrogation",
      "options": [
        "Positive statement",
        "Negative statement"
      ],
      "sentences": {
        "Positive statement": "The dog did nothing, <b>did it</b>? (Positive → negative tag)",
        "Negative statement": "The dog didn't bark, <b>did it</b>? (Negative → positive tag)"
      },
      "notes": {
        "Positive statement": "Positive statement gets a negative question tag.",
        "Negative statement": "Negative statement gets a positive question tag."
      }
    },
    "before": "The curious incident of the dog in the nighttime is remarkable,",
    "after": "?",
    "answer": "isn't it",
    "choices": [
      "is it",
      "isn't it",
      "does it",
      "doesn't it"
    ],
    "explain": "Positive statement → negative tag. 'Is remarkable' → 'isn't it'. Holmes's most famous deduction begins with this tag."
  },
  {
    "type": "Question Tags",
    "icon": "🏷️",
    "toggle": {
      "title": "The Interrogation",
      "options": [
        "Positive statement",
        "Negative statement"
      ],
      "sentences": {
        "Positive statement": "Simpson came to the stable, <b>didn't he</b>?",
        "Negative statement": "Simpson didn't steal the horse, <b>did he</b>?"
      },
      "notes": {
        "Positive statement": "Auxiliary verb in tag is negative.",
        "Negative statement": "Auxiliary verb in tag is positive."
      }
    },
    "before": "Let us examine the candle wax together,",
    "after": "?",
    "answer": "shall we",
    "choices": [
      "shall we",
      "will we",
      "do we",
      "don't we"
    ],
    "explain": "\"Let us\" (let's) always takes \"shall we?\" as the question tag. Holmes inviting Watson to investigate."
  },
  {
    "type": "Question Tags",
    "icon": "🏷️",
    "toggle": {
      "title": "The Interrogation",
      "options": [
        "Positive statement",
        "Negative statement"
      ],
      "sentences": {
        "Positive statement": "Nobody saw the intruder, <b>did they</b>?",
        "Negative statement": "Somebody moved the horse, <b>didn't they</b>?"
      },
      "notes": {
        "Positive statement": "Negative words (nobody, never, hardly) → positive tag.",
        "Negative statement": "Positive statements with negative words need positive tags."
      }
    },
    "before": "Nobody heard the horse leave the stable,",
    "after": "?",
    "answer": "did they",
    "choices": [
      "did they",
      "didn't they",
      "did he",
      "didn't he"
    ],
    "explain": "\"Nobody\" is a negative word, so the tag is positive. \"Nobody\" is treated as plural \"they\" in tags."
  },
  {
    "type": "Question Tags",
    "icon": "🏷️",
    "toggle": {
      "title": "The Interrogation",
      "options": [
        "Positive statement",
        "Negative statement"
      ],
      "sentences": {
        "Positive statement": "I am right, <b>aren't I</b>?",
        "Negative statement": "I am not wrong, <b>am I</b>?"
      },
      "notes": {
        "Positive statement": "\"I am\" → \"aren't I\" (exception to the rule).",
        "Negative statement": "\"I am not\" → \"am I\" (follows normal pattern)."
      }
    },
    "before": "The horse used to be at King's Pyland,",
    "after": "?",
    "answer": "didn't it",
    "choices": [
      "usedn't it",
      "didn't it",
      "did it",
      "used it"
    ],
    "explain": "Both \"didn't it\" and \"usedn't it\" are acceptable for \"used to\" in question tags. \"Didn't it\" is more common in modern English."
  },
  {
    "type": "Pronouns",
    "icon": "🎭",
    "toggle": {
      "title": "The Suspects",
      "options": [
        "Subject",
        "Object",
        "Possessive"
      ],
      "sentences": {
        "Subject": "<b>He</b> drugged the curry. (does the action)",
        "Object": "Holmes suspected <b>him</b>. (receives the action)",
        "Possessive": "That is <b>his</b> cravat. (shows ownership)"
      },
      "notes": {
        "Subject": "I, he, she, we, they — doer of the action.",
        "Object": "Me, him, her, us, them — receiver of the action.",
        "Possessive": "My, his, her, our, their — show possession."
      }
    },
    "before": "Between you and",
    "after": ", Watson, I believe the case is nearly solved.",
    "answer": "me",
    "choices": [
      "I",
      "me",
      "myself",
      "mine"
    ],
    "explain": "\"Between\" is a preposition, so it takes the object pronoun \"me\". \"Between you and me\" is correct — Holmes confiding in Watson."
  },
  {
    "type": "Pronouns",
    "icon": "🎭",
    "toggle": {
      "title": "The Suspects",
      "options": [
        "Subject",
        "Object",
        "Possessive"
      ],
      "sentences": {
        "Subject": "<b>Who</b> killed Straker? (subject question)",
        "Object": "<b>Whom</b> did Holmes suspect? (object question)",
        "Possessive": "<b>Whose</b> knife was found at the scene? (possession question)"
      },
      "notes": {
        "Subject": "\"Who\" = subject pronoun (does the action).",
        "Object": "\"Whom\" = object pronoun (receives the action).",
        "Possessive": "\"Whose\" = shows ownership."
      }
    },
    "before": "To",
    "after": "did Straker send the letter about the horse's condition?",
    "answer": "whom",
    "choices": [
      "who",
      "whom",
      "whose",
      "which"
    ],
    "explain": "After the preposition \"to\", use the object pronoun \"whom\". Formal English requires \"whom\" here — Holmes would insist upon it."
  },
  {
    "type": "Pronouns",
    "icon": "🎭",
    "toggle": {
      "title": "The Suspects",
      "options": [
        "Reflexive",
        "Emphatic"
      ],
      "sentences": {
        "Reflexive": "Straker cut <b>himself</b> with the surgical knife. (object = subject)",
        "Emphatic": "Holmes <b>himself</b> examined the footprints. (emphasizes the subject)"
      },
      "notes": {
        "Reflexive": "The action reflects back on the subject. Object position.",
        "Emphatic": "Adds emphasis to the subject. Usually placed after the subject."
      }
    },
    "before": "Silas Brown hid the horse by",
    "after": ", without any help from his grooms.",
    "answer": "himself",
    "choices": [
      "him",
      "himself",
      "his",
      "he"
    ],
    "explain": "\"By oneself\" = alone, without help. Reflexive pronoun \"himself\" is required. Brown acted alone."
  },
  {
    "type": "Pronouns",
    "icon": "🎭",
    "toggle": {
      "title": "The Suspects",
      "options": [
        "Who",
        "Which",
        "That"
      ],
      "sentences": {
        "Who": "The man <b>who</b> called was Fitzroy Simpson. (people)",
        "Which": "The knife <b>which</b> was found was a surgical instrument. (things)",
        "That": "The horse <b>that</b> vanished was Silver Blaze. (people or things)"
      },
      "notes": {
        "Who": "Refers to people. Can be subject or object.",
        "Which": "Refers to things and animals. Can be subject or object.",
        "That": "Refers to people or things. More informal. Cannot follow a preposition."
      }
    },
    "before": "The trainer",
    "after": "wife was in London at the time of the murder had no motive to flee.",
    "answer": "whose",
    "choices": [
      "who",
      "which",
      "whose",
      "that"
    ],
    "explain": "\"Whose\" is the possessive relative pronoun. It shows the wife belongs to the trainer."
  },
  {
    "type": "Punctuation",
    "icon": "✏️",
    "toggle": {
      "title": "Holmes's Dramatic Style",
      "options": [
        "Statement",
        "Question",
        "Exclamation"
      ],
      "sentences": {
        "Statement": "The case is solved<b>.</b> (declarative)",
        "Question": "Is the case solved<b>?</b> (interrogative)",
        "Exclamation": "What a singular case this is<b>!</b> (exclamatory)"
      },
      "notes": {
        "Statement": "Ends with a period/full stop. States a fact.",
        "Question": "Ends with a question mark. Asks for information.",
        "Exclamation": "Ends with an exclamation mark. Shows strong emotion."
      }
    },
    "before": "What a remarkable chain of deductions",
    "after": "",
    "answer": "!",
    "choices": [
      ".",
      "?",
      "!",
      "—"
    ],
    "explain": "\"What a remarkable chain of deductions!\" is an exclamatory sentence expressing Holmes's admiration for his own logic."
  },
  {
    "type": "Punctuation",
    "icon": "✏️",
    "toggle": {
      "title": "Holmes's Dramatic Style",
      "options": [
        "Comma",
        "Semicolon",
        "Colon"
      ],
      "sentences": {
        "Comma": "The evidence was clear<b>,</b> obvious, and undeniable. (list separator)",
        "Semicolon": "The dog did nothing<b>;</b> that was the curious incident. (joins related clauses)",
        "Colon": "Holmes made one demand<b>:</b> search the neighbour's stables. (introduces explanation/list)"
      },
      "notes": {
        "Comma": "Separates items in a list, clauses, or introductory elements.",
        "Semicolon": "Joins two closely related independent clauses.",
        "Colon": "Introduces a list, explanation, or quotation."
      }
    },
    "before": "Holmes listed the suspects",
    "after": "Simpson, the maid, the stable boys, and Silas Brown.",
    "answer": ":",
    "choices": [
      ",",
      ";",
      ":",
      "—"
    ],
    "explain": "A colon introduces a list that follows. 'The suspects:' introduces the list of names."
  },
  {
    "type": "Punctuation",
    "icon": "✏️",
    "toggle": {
      "title": "Holmes's Dramatic Style",
      "options": [
        "Possession",
        "Contraction",
        "Plural"
      ],
      "sentences": {
        "Possession": "The trainer<b>'s</b> candle was found at the scene. (belongs to the trainer)",
        "Contraction": "It<b>'s</b> elementary, my dear Watson. (it is)",
        "Plural": "The 1880<b>s</b> were a golden age for detection. (decades — no apostrophe)"
      },
      "notes": {
        "Possession": "'s = belongs to someone/something.",
        "Contraction": "Apostrophe replaces missing letters.",
        "Plural": "Do NOT use apostrophes for plurals."
      }
    },
    "before": "The",
    "after": "footprints led directly to the pit where Straker died.",
    "answer": "trainer's",
    "choices": [
      "trainers",
      "trainer's",
      "trainers'",
      "trainer"
    ],
    "explain": "Singular possessive: 'trainer's footprints' — the footprints belong to the trainer (Straker)."
  },
  {
    "type": "Punctuation",
    "icon": "✏️",
    "toggle": {
      "title": "Holmes's Dramatic Style",
      "options": [
        "Double quotes",
        "Single quotes"
      ],
      "sentences": {
        "Double quotes": "Holmes said, \"<b>The dog did nothing in the night-time.</b>\" (American style)",
        "Single quotes": "Holmes said, '<b>The dog did nothing in the night-time.</b>' (British style)"
      },
      "notes": {
        "Double quotes": "American English: double quotes for direct speech.",
        "Single quotes": "British English: single quotes for direct speech; double quotes for quotes within quotes."
      }
    },
    "before": "Holmes turned to Colonel Ross and said,",
    "after": "I have every hope that you will see your horse run at the Wessex Cup.",
    "answer": "\"",
    "choices": [
      "'",
      "\"",
      ":",
      "—"
    ],
    "explain": "Direct speech begins with opening quotation marks. Holmes is speaking directly to Colonel Ross."
  }
];

export default QUESTIONS;
