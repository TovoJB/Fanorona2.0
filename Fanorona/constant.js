const DIRECTIONS1 = [
    { x: -1, y: -1 }, // Nord-ouest
    { x: -1, y: 0 }, // Ouest
    { x: -1, y: 1 }, // Sud-ouest
    { x: 0, y: 1 }, // Sud
    { x: 1, y: 1 }, // Sud-est
    { x: 1, y: 0 }, // Est
    { x: 1, y: -1 }, // Nord-est
    { x: 0, y: -1 }, // Nord
  ];
  const DIRECTIONS2 = [
    { x: -1, y: 0 }, // Ouest
    { x: 0, y: 1 }, // Sud
    { x: 1, y: 0 }, // Est
    { x: 0, y: -1 }, // Nord
  ];

  
  const MAX_SIMPLE_JUMP_DISTANCE = 1;
  const MAX_DOUBLE_JUMP_DISTANCE = 2;
  const NUM_PIECES_PER_PLAYER = 22;  
  const ROWS = 9;
  const COLS = 5;
  const PLAYER_1_COLOR = "#fff"; // Blanc
  const PLAYER_2_COLOR = "#000"; // Noir
  const MIN_DEFAULT_VAL =1000
  const MAX_DEP_PIECE =168.2;