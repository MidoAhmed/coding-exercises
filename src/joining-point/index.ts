import { sumOfDigits } from "./sumOfDigits";
/**
 * Computes the join point of two sequences of numbers.
 * @param {number} s1 - The first number in the sequence.
 * @param {number} s2 - The second number in the sequence.
 * @returns {number|undefined} The join point of the sequences, or undefined if there is no join point after 10000 iterations.
 */ export function computeJoinPoint(
  s1: number,
  s2: number
): number | undefined {
  const maxIterations = 10000; // To avoid infinite loops
  let s1Sequence = new Set([s1]);
  let s2Sequence = new Set([s2]);

  for (let iterations = 0; iterations < maxIterations; iterations++) {
    if (s1Sequence.has(s2)) {
      return s2;
    }
    if (s2Sequence.has(s1)) {
      return s1;
    }

    s1 += sumOfDigits(s1);
    s2 += sumOfDigits(s2);

    s1Sequence.add(s1);
    s2Sequence.add(s2);
  }

  return undefined;
}
