/**
 * Helper function to calculate the sum of digits of a number
 * @param num number whose sum of digits is to be calculated
 * @returns sum of digits of the number
 */
export function sumOfDigits(num: number): number {
  return num
    .toString()
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit), 0);
}
