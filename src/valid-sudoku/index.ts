/**
 * Determines if a given Sudoku board is valid.
 * @param {string[][]} board - The Sudoku board to check.
 * @returns {boolean} True if the board is valid, false otherwise.
 */
export function isValidSudoku(board: string[][]): boolean {
  const rows = Array.from({ length: board.length }, () => new Set());
  const columns = Array.from({ length: board.length }, () => new Set());
  const boxes = Array.from({ length: board.length }, () => new Set());

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const cell = board[i][j];
      const boxNum = 3 * Math.floor(i / 3) + Math.floor(j / 3);
      if (cell === ".") continue;
      if (rows[i].has(cell) || columns[j].has(cell) || boxes[boxNum].has(cell))
        return false;

      rows[i].add(cell);
      columns[j].add(cell);
      boxes[boxNum].add(cell);
    }
  }

  return true;
}
