// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// Time Complexity : O(n^2)

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const cols = new Map();
  const rows = new Map();
  const squares = new Map();

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] === ".") {
        continue;
      }
      const squareKey = `${Math.floor(r / 3)}, ${Math.floor(c / 3)}`;

      if (
        (rows.get(r) && rows.get(r).has(board[r][c])) ||
        (cols.get(c) && cols.get(c).has(board[r][c])) ||
        (squares.get(squareKey) && squares.get(squareKey).has(board[r][c]))
      ) {
        return false;
      }

      if (!rows.has(r)) {
        rows.set(r, new Set());
      }
      if (!cols.has(c)) {
        cols.set(c, new Set());
      }
      if (!squares.has(squareKey)) {
        squares.set(squareKey, new Set());
      }
      rows.get(r).add(board[r][c]);
      cols.get(c).add(board[r][c]);
      squares.get(squareKey).add(board[r][c]);
    }
  }
  return true;
};
