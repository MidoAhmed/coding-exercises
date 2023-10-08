import { sumOfDigits } from "../sumOfDigits";

describe("sumOfDigits", () => {
  // Should return 0 for input 0
  it("should return 0 when input is 0", () => {
    expect(sumOfDigits(0)).toBe(0);
  });

  // Should return 1 for input 10
  it("should return 1 when input is 10", () => {
    expect(sumOfDigits(10)).toBe(1);
  });

  // Should return 6 for input 123
  it("should return 6 when input is 123", () => {
    expect(sumOfDigits(123)).toBe(6);
  });

  it("should return 16 when input is 3049", () => {
    expect(sumOfDigits(3049)).toBe(16);
  });
});
