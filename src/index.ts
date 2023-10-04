import { distributeBoxesEvenly } from "./distributeBoxesEvenly";

/**
 * 
 * @param clawPos 
 * @param boxes 
 * @param boxInClaw 
 * @returns 
 */
export function solve(
  clawPos: number,
  boxes: number[],
  boxInClaw: boolean
): string {
  let totalBoxes = boxes.reduce((sum, count) => sum + count, 0);
  totalBoxes = boxInClaw ? totalBoxes + 1 : totalBoxes;
  const totalStacks = boxes.length;
  const avgBoxesPerStack = totalBoxes / totalStacks;

  if (totalBoxes % totalStacks === 0) {
    //case of the result should be an equal number of boxes on each stack

    if (boxInClaw) {
      if (boxes[clawPos] < avgBoxesPerStack) {
        return "PLACE";
      } else {
        const indexNonCompleteStack = boxes.findIndex(
          (item) => item < avgBoxesPerStack
        );
        if (indexNonCompleteStack > clawPos) {
          return "RIGHT";
        } else if (indexNonCompleteStack < clawPos) {
          return "LEFT";
        }
      }
    } else {
      if (boxes[clawPos] > avgBoxesPerStack) {
        return "PICK";
      } else {
        const indexExcessedStack = boxes.findIndex(
          (item) => item > avgBoxesPerStack
        );
        if (indexExcessedStack > clawPos) {
          return "RIGHT";
        } else if (indexExcessedStack < clawPos) {
          return "LEFT";
        }
      }
    }
  } else {
    //case of distribute boxes as evenly as possible among the stacks from left to right 

    const result = distributeBoxesEvenly(totalBoxes, totalStacks);
    if (boxInClaw) {
      if (boxes[clawPos] < result[clawPos]) {
        return "PLACE";
      } else {
        const indexNonCompleteStack = boxes.findIndex(
          (item, index) => item < result[index]
        );
        if (indexNonCompleteStack > clawPos) {
          return "RIGHT";
        } else if (indexNonCompleteStack < clawPos) {
          return "LEFT";
        }
      }
    } else {
      if (boxes[clawPos] > result[clawPos]) {
        return "PICK";
      } else {
        const indexExcessedStack = boxes.findIndex(
          (item, index) => item > result[index]
        );
        if (indexExcessedStack > clawPos) {
          return "RIGHT";
        } else if (indexExcessedStack < clawPos) {
          return "LEFT";
        }
      }
    }
  }

  return "";
}
