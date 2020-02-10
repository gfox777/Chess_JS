var BRD_SQ_NUM = 120;
var COLOURS = { WHITE: 0, BLACK: 1, BOTH: 2 };
var BOOL = { FALSE: 0, TRUE: 1 };
var FilesBrd = new Array(BRD_SQ_NUM);
var RanksBrd = new Array(BRD_SQ_NUM);

function FR2SQ(f, r) {
  return 21 + f + r * 10;
}

var PIECES = {
  EMPTY: 0,
  wP: 1,
  wN: 2,
  wB: 3,
  wR: 4,
  wQ: 5,
  wK: 6,
  bP: 7,
  bN: 8,
  bB: 9,
  bR: 10,
  bQ: 11,
  bK: 12
};

var FILES = {
  FILE_A: 0,
  FILE_B: 1,
  FILE_C: 2,
  FILE_D: 3,
  FILE_E: 4,
  FILE_F: 5,
  FILE_G: 6,
  FILE_H: 7,
  FILE_NONE: 8
};
var RANKS = {
  RANKS_1: 0,
  RANKS_2: 1,
  RANKS_3: 2,
  RANKS_4: 3,
  RANKS_5: 4,
  RANKS_6: 5,
  RANKS_7: 6,
  RANKS_8: 7,
  RANKS_NONE: 8
};

var SQUARES = {
  A1: 21,
  B1: 22,
  C1: 23,
  D1: 24,
  E1: 25,
  F1: 26,
  G1: 27,
  H1: 28,
  A8: 91,
  B8: 92,
  C8: 93,
  D8: 94,
  E8: 95,
  F8: 96,
  G8: 97,
  H8: 98,
  NO_SQ: 99,
  OFFBOARD: 100
};
