/**
 * Distributes the boxes as evenly as possible among the stacks from left to right
 * @param {number} totalBoxes - The total number of boxes to distribute.
 * @param {number} totalStacks - The total number of stacks to distribute the boxes across.
 * @returns {number[]} An array representing the number of boxes in each stack.
 */
export function distributeBoxesEvenly(totalBoxes: number, totalStacks: number): number[] {
    // Calculate the number of boxes per stack (quotient) and the remainder
    const boxesPerStack = Math.floor(totalBoxes / totalStacks);
    const remainder = totalBoxes % totalStacks;
  
    // Initialize an array to represent the number of boxes per stack
    const boxesInStacks = [];
  
    // Distribute boxes evenly
    for (let i = 0; i < totalStacks; i++) {
      if (i < remainder) {
        boxesInStacks.push(boxesPerStack + 1);
      } else {
        boxesInStacks.push(boxesPerStack);
      }
    }
  
    return boxesInStacks;
  }