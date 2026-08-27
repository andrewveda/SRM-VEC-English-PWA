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
  }
];