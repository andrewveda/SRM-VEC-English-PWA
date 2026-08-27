const TESTS = [
  // ═══ BEGINNER - LONG ═══
  {
    id: "beg_long_1", questId: "Quest Video Chess 1", category: "Beginner - long", difficulty: "Long",
    title: "How To Play Chess: Learn All The Rules Of The Royal Game", youtubeId: "ej_fnsdsksA", durationHint: 1187,
    description: "A comprehensive foundation covering how pieces move, castling, and basic checkmates.",
    questions: [
      { 
        at: 0, tier: 1, 
        q: "Which piece is the only one that can hop over other pieces on the board?", 
        options: ["A. The Bishop", "B. The Rook", "C. The Knight", "D. The Queen"], 
        correct: 2 
      }
    ]
  },
  
  // ═══ ADVANCED - LONG ═══
  {
    id: "adv_long_1", questId: "Quest Video Chess 2", category: "Advanced - long", difficulty: "Long",
    title: "LEARN TO ATTACK WITH HIKARU NAKAMURA!!", youtubeId: "emZGqqemsq8", durationHint: 3542,
    description: "Grandmaster insights into attacking structures, open files, and high-level concepts.",
    questions: [
      { 
        at: 0, tier: 1, 
        q: "What is GM Hikaru's general advice for pushing pawns in the opening?", 
        options: ["A. Push the A and H pawns to the edges", "B. Focus on C5 or E5 to challenge the center", "C. Never push pawns until the endgame", "D. Push all pawns immediately"], 
        correct: 1 
      }
    ]
  },

  // ═══ BEGINNER - SHORT ═══
  {
    id: "beg_short_1", questId: "Quest Video Chess 3", category: "Beginner - short", difficulty: "Short",
    title: "Learn How to Play Chess for Beginners", youtubeId: "IU6k-4rKf-g", durationHint: 446,
    description: "A quick, animated overview of the board, the pieces, and how they move.",
    questions: [
      { 
        at: 0, tier: 1, 
        q: "What is the ultimate goal in a game of chess?", 
        options: ["A. Capture all opponent pieces", "B. Checkmate the opponent's King", "C. Promote all your pawns to Queens", "D. Control the four corner squares"], 
        correct: 1 
      }
    ]
  },
  {
    id: "beg_short_2", questId: "Quest Video Chess 4", category: "Beginner - short", difficulty: "Short",
    title: "10 Chess Tips Every Beginner Should Know", youtubeId: "aavP_NnrXS8", durationHint: 551,
    description: "Essential opening principles and middle-game concepts to stop blundering.",
    questions: [
      { 
        at: 0, tier: 1, 
        q: "In the opening phase, which part of the board should you focus on controlling first?", 
        options: ["A. The edges of the board", "B. The center squares", "C. The opponent's back rank", "D. Your own back corners"], 
        correct: 1 
      }
    ]
  },

  // ═══ COMMENTARY - SHORT ═══
  {
    id: "comm_short_1", questId: "Quest Video Chess 5", category: "Commentary - short", difficulty: "Short",
    title: "The Unknown Immortal!", youtubeId: "4x0ctVP2fOs", durationHint: 623,
    description: "A thrilling, fast-paced breakdown of a brilliant tactical game by agadmator.",
    questions: [
      { 
        at: 0, tier: 1, 
        q: "In famous 'immortal' chess games, what is typically sacrificed to secure a spectacular checkmate?", 
        options: ["A. Time on the clock", "B. High-value material like a Queen or Rook", "C. The King", "D. The center pawns"], 
        correct: 1 
      }
    ]
  },
  {
    id: "comm_short_2", questId: "Quest Video Chess 6", category: "Commentary - short", difficulty: "Short",
    title: "10 Minutes of GothamChess in Titled Tuesday", youtubeId: "qVIH7JdO-80", durationHint: 631,
    description: "Entertaining, high-energy commentary analyzing chaotic blitz chess situations.",
    questions: [
      { 
        at: 0, tier: 1, 
        q: "What makes online blitz tournaments like Titled Tuesday so chaotic?", 
        options: ["A. Players are given 2 hours per move", "B. It involves fast time controls and highly aggressive play", "C. There are no pawns allowed on the board", "D. Players must move completely blindfolded"], 
        correct: 1 
      }
    ]
  },

  // ═══ ENTERTAINMENT - TRAILERS ═══
  {
    id: "ent_trail_1", questId: "Quest Video Cinema 1", category: "Entertainment - Trailers", difficulty: "Short",
    title: "The Queen's Gambit | Official Trailer", youtubeId: "oZn3qSgmLqI", durationHint: 153,
    description: "The thrilling trailer for the hit limited series about a chess prodigy's rise to the top.",
    questions: [
      { 
        at: 0, tier: 1, 
        q: "What is the name of the main character in The Queen's Gambit?", 
        options: ["A. Judit Polgar", "B. Beth Harmon", "C. Vera Menchik", "D. Anya Taylor-Joy"], 
        correct: 1 
      }
    ]
  },
  {
    id: "ent_trail_2", questId: "Quest Video Cinema 2", category: "Entertainment - Trailers", difficulty: "Short",
    title: "Pawn Sacrifice | Official Trailer", youtubeId: "xF3fMJamH_s", durationHint: 147,
    description: "Tobey Maguire stars as Bobby Fischer in the gripping true story of the 1972 World Chess Championship.",
    questions: [
      { 
        at: 0, tier: 1, 
        q: "Which country is Bobby Fischer's rival, Boris Spassky, representing in the trailer?", 
        options: ["A. The United States", "B. Great Britain", "C. The Soviet Union", "D. Germany"], 
        correct: 2 
      }
    ]
  },
  {
    id: "ent_trail_3", questId: "Quest Video Cinema 3", category: "Entertainment - Trailers", difficulty: "Short",
    title: "Queen of Katwe | Official Trailer", youtubeId: "z4l3-_yub5A", durationHint: 148,
    description: "The inspiring true story of a young girl from rural Uganda whose world changes when she is introduced to the game of chess.",
    questions: [
      { 
        at: 0, tier: 1, 
        q: "According to the trailer, what can chess help the children of Katwe do?", 
        options: ["A. Win money for their village", "B. Learn to plan, focus, and see a life beyond their current struggles", "C. Travel to the United States immediately", "D. Become famous actors"], 
        correct: 1 
      }
    ]
  },
  {
    id: "ent_trail_4", questId: "Quest Video Cinema 4", category: "Entertainment - Trailers", difficulty: "Short",
    title: "Searching for Bobby Fischer | Trailer", youtubeId: "FztEwJ9nL-A", durationHint: 122,
    description: "The classic 1993 film about a young chess prodigy whose father is determined to see him become a champion.",
    questions: [
      { 
        at: 0, tier: 1, 
        q: "What does the young boy in the movie refuse to do that causes conflict with his instructor?", 
        options: ["A. Learn how the Knight moves", "B. Play chess in the park with hustlers", "C. Play aggressively to crush his opponents", "D. Use a chess clock"], 
        correct: 2 
      }
    ]
  },
  {
    id: "ent_trail_5", questId: "Quest Video Cinema 5", category: "Entertainment - Trailers", difficulty: "Short",
    title: "Magnus | Official Documentary Trailer", youtubeId: "f0Q09oE2oGk", durationHint: 121,
    description: "A look into the mind of Magnus Carlsen, the highest-rated chess player in the history of the game.",
    questions: [
      { 
        at: 0, tier: 1, 
        q: "Magnus Carlsen is often referred to as the 'Mozart' of what?", 
        options: ["A. Mathematics", "B. Chess", "C. Music", "D. Memory"], 
        correct: 1 
      }
    ]
  },

  // ═══ ENTERTAINMENT - CLIPS ═══
  {
    id: "ent_clip_1", questId: "Quest Video Cinema 6", category: "Entertainment - Clips", difficulty: "Short",
    title: "The Queen's Gambit: Beth vs. Borgov Final Match", youtubeId: "81z3wWv0Niw", durationHint: 334,
    description: "The tense, climactic final game from the hit series. Watch the intense calculation and drama.",
    questions: [
      { 
        at: 0, tier: 1, 
        q: "During the match, what happens that pauses the game temporarily?", 
        options: ["A. Beth resigns", "B. Borgov asks for an adjournment", "C. The power goes out", "D. A piece is broken"], 
        correct: 1 
      }
    ]
  },
  {
    id: "ent_clip_2", questId: "Quest Video Cinema 7", category: "Entertainment - Clips", difficulty: "Short",
    title: "Harry Potter and the Sorcerer's Stone - Wizard's Chess", youtubeId: "XQx9n49Gk5s", durationHint: 257,
    description: "The iconic, magical, and highly destructive game of giant chess from the first Harry Potter film.",
    questions: [
      { 
        at: 0, tier: 1, 
        q: "Which character plays the role of the Knight and sacrifices himself so they can win the game?", 
        options: ["A. Harry Potter", "B. Hermione Granger", "C. Ron Weasley", "D. Neville Longbottom"], 
        correct: 2 
      }
    ]
  }
];
