import { distributeBoxesAcrossStacks } from "./distributeBoxesAcrossStacks";

describe("distributeBoxesAcrossStacks", () => {
  // Distributes boxes evenly among stacks with equal number of boxes and stacks
  it("should distribute boxes evenly among stacks with equal number of boxes and stacks", () => {
    const totalBoxes = 10;
    const totalStacks = 5;
    const expected = [2, 2, 2, 2, 2];
    const result = distributeBoxesAcrossStacks(totalBoxes, totalStacks);
    expect(result).toEqual(expected);
  });

  // Distributes boxes evenly among stacks with more boxes than stacks
  it("should distribute boxes evenly among stacks with more boxes than stacks #1", () => {
    const totalBoxes = 7;
    const totalStacks = 6;
    const expected = [2, 1, 1, 1, 1, 1];
    const result = distributeBoxesAcrossStacks(totalBoxes, totalStacks);
    expect(result).toEqual(expected);
  });

  // Distributes boxes evenly among stacks with more boxes than stacks
  it("should distribute boxes evenly among stacks with more boxes than stacks #2", () => {
    const totalBoxes = 10;
    const totalStacks = 3;
    const expected = [4, 3, 3];
    const result = distributeBoxesAcrossStacks(totalBoxes, totalStacks);
    expect(result).toEqual(expected);
  });

  // Distributes boxes evenly among stacks with more boxes than stacks
  it("should distribute boxes evenly among stacks with more boxes than stacks #3", () => {
    const totalBoxes = 5;
    const totalStacks = 2;
    const expected = [3, 2];
    const result = distributeBoxesAcrossStacks(totalBoxes, totalStacks);
    expect(result).toEqual(expected);
  });

  // Distributes boxes evenly among stacks with more stacks than boxes
  it("should distribute boxes evenly among stacks with more stacks than boxes #1", () => {
    const totalBoxes = 4;
    const totalStacks = 6;
    const expected = [1, 1, 1, 1, 0, 0];
    const result = distributeBoxesAcrossStacks(totalBoxes, totalStacks);
    expect(result).toEqual(expected);
  });

  // Distributes boxes evenly among stacks with more stacks than boxes
  it("should distribute boxes evenly among stacks with more stacks than boxes #2", () => {
    const totalBoxes = 5;
    const totalStacks = 8;
    const expected = [1, 1, 1, 1, 1, 0, 0, 0];
    const result = distributeBoxesAcrossStacks(totalBoxes, totalStacks);
    expect(result).toEqual(expected);
  });

  // Distributes boxes evenly among stacks with more stacks than boxes
  it("should distribute boxes evenly among stacks with more stacks than boxes #3", () => {
    const totalBoxes = 1;
    const totalStacks = 6;
    const expected = [1, 0, 0, 0, 0, 0];
    const result = distributeBoxesAcrossStacks(totalBoxes, totalStacks);
    expect(result).toEqual(expected);
  });

  // Distributes boxes evenly among stacks with more stacks than boxes
  it("should distribute boxes evenly among stacks with more stacks than boxes #4", () => {
    const totalBoxes = 2;
    const totalStacks = 3;
    const expected = [1, 1, 0];
    const result = distributeBoxesAcrossStacks(totalBoxes, totalStacks);
    expect(result).toEqual(expected);
  });

  // Distributes boxes evenly among one stack
  it("should distribute boxes evenly among one stack", () => {
    const totalBoxes = 10;
    const totalStacks = 1;
    const expected = [10];
    const result = distributeBoxesAcrossStacks(totalBoxes, totalStacks);
    expect(result).toEqual(expected);
  });

  // Distributes boxes evenly among zero stacks
  it("should distribute boxes evenly among zero stacks", () => {
    const totalBoxes = 10;
    const totalStacks = 0;
    const expected: number[] = [];
    const result = distributeBoxesAcrossStacks(totalBoxes, totalStacks);
    expect(result).toEqual(expected);
  });

  // Distributes zero boxes evenly among stacks
  it("should distribute zero boxes evenly among stacks", () => {
    const totalBoxes = 0;
    const totalStacks = 5;
    const expected = [0, 0, 0, 0, 0];
    const result = distributeBoxesAcrossStacks(totalBoxes, totalStacks);
    expect(result).toEqual(expected);
  });

  // Distributes boxes evenly among negative number of stacks
  it("should distribute zero boxes evenly among negative number of stacks", () => {
    const totalBoxes = 0;
    const totalStacks = -5;
    const expected: number[] = [];
    const result = distributeBoxesAcrossStacks(totalBoxes, totalStacks);
    expect(result).toEqual(expected);
  });

  // Distributes boxes evenly among negative number of boxes
  it("should distribute zero boxes evenly among negative number of stacks", () => {
    const totalBoxes = 0;
    const totalStacks = -5;
    const expected: number[] = [];
    const result = distributeBoxesAcrossStacks(totalBoxes, totalStacks);
    expect(result).toEqual(expected);
  });

  // Distributes boxes evenly among an odd number of stacks
  it("should distribute boxes evenly among an odd number of stacks", () => {
    const totalBoxes = 9;
    const totalStacks = 3;
    const expected = [3, 3, 3];
    const result = distributeBoxesAcrossStacks(totalBoxes, totalStacks);
    expect(result).toEqual(expected);
  });

  // Distributes boxes evenly among an even number of stacks
  it("should distribute boxes evenly among stacks with equal number of boxes and stacks", () => {
    const totalBoxes = 10;
    const totalStacks = 5;
    const expected = [2, 2, 2, 2, 2];
    const result = distributeBoxesAcrossStacks(totalBoxes, totalStacks);
    expect(result).toEqual(expected);
  });

  // Distributes boxes evenly among a large number of boxes and stacks
  it("should distribute boxes evenly among a large number of boxes and stacks", () => {
    const totalBoxes = 1000000;
    const totalStacks = 1000;
    const expected = Array(1000).fill(1000);
    const result = distributeBoxesAcrossStacks(totalBoxes, totalStacks);
    expect(result).toEqual(expected);
  });

  // Returns an array of correct length
  it("should distribute boxes evenly among stacks with equal number of boxes and stacks", () => {
    const totalBoxes = 10;
    const totalStacks = 5;
    const expected = [2, 2, 2, 2, 2];
    const result = distributeBoxesAcrossStacks(totalBoxes, totalStacks);
    expect(result).toEqual(expected);
  });

  // Returns an array of integers
  it("should distribute boxes evenly among stacks with more boxes than stacks", () => {
    const totalBoxes = 10;
    const totalStacks = 3;
    const expected = [4, 3, 3];
    const result = distributeBoxesAcrossStacks(totalBoxes, totalStacks);
    expect(result).toEqual(expected);
  });
});
