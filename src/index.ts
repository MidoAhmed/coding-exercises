import { Command } from "./command.enum";
import { distributeBoxesAcrossStacks } from "./distributeBoxesAcrossStacks";

/**
 * Solves the box-stacking puzzle and returns the next command for the claw.
 * @param {number} clawPos - The current position of the claw.
 * @param {number[]} boxes - An array representing the number of boxes in each stack.
 * @param {boolean} boxInClaw - A boolean indicating whether the claw is currently holding a box.
 * @returns {string} The next command for the claw.
 */
export function solve(clawPos: number, boxes: number[], boxInClaw: boolean): string {
  let totalBoxes = boxes.reduce((sum, count) => sum + count, boxInClaw ? 1 : 0);
  const totalStacks = boxes.length;
  const avgBoxesPerStack = totalBoxes / totalStacks;

  if (totalBoxes % totalStacks === 0) {
    //case of the result should be an equal number of boxes on each stack
    if (boxInClaw) {
      if (boxes[clawPos] < avgBoxesPerStack) {
        return Command.PLACE;
      }
      const indexNonCompleteStack = boxes.findIndex((item) => item < avgBoxesPerStack);
      return indexNonCompleteStack > clawPos ? Command.RIGHT : Command.LEFT;
    } else {
      if (boxes[clawPos] > avgBoxesPerStack) {
        return Command.PICK;
      }
      const indexExcessedStack = boxes.findIndex((item) => item > avgBoxesPerStack);
      return indexExcessedStack > clawPos ? Command.RIGHT : Command.LEFT;
    }
  } else {
    //case of distribute boxes as evenly as possible among the stacks from left to right
    const result = distributeBoxesAcrossStacks(totalBoxes, totalStacks);
    if (boxInClaw) {
      if (boxes[clawPos] < result[clawPos]) {
        return Command.PLACE;
      }
      const indexNonCompleteStack = boxes.findIndex((item, index) => item < result[index]);
      return indexNonCompleteStack > clawPos ? Command.RIGHT : Command.LEFT;
    } else {
      if (boxes[clawPos] > result[clawPos]) {
        return Command.PICK;
      }
      const indexExcessedStack = boxes.findIndex((item, index) => item > result[index]);
      return indexExcessedStack > clawPos ? Command.RIGHT : Command.LEFT;
    }
  }
}
