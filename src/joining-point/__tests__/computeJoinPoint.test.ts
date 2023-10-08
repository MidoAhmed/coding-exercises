import { computeJoinPoint } from "..";

describe("sumOfDigits", () => {
  it("should compute join point for two positive integers", () => {
    expect(computeJoinPoint(123, 456)).toBe(519);
  });

  // Computes join point for two zeros
  it("should compute join point for two zeros", () => {
    expect(computeJoinPoint(0, 0)).toBe(0);
  });

  it("should not join ", () => {
    expect(computeJoinPoint(9999999999, 8888888888)).toBe(undefined);
  });

  it("should not join ", () => {
    expect(computeJoinPoint(123, 4567)).toBe(undefined);
  });

  // s1>s2
  it("should compute join point for s1>s2", () => {
    expect(computeJoinPoint(11, 7)).toBe(620);
  });

  // s1<s2
  it("should compute join point for s1<s2", () => {
    expect(computeJoinPoint(57, 78)).toBe(111);
  });

  it("Immediate join", () => {
    expect(computeJoinPoint(32, 47)).toBe(47);
  });

  // large join
  it("large join", () => {
    expect(computeJoinPoint(1158, 2085)).toBe(2103);
  });

  // Asymmetrical join
  it("Asymmetrical join", () => {
    expect(computeJoinPoint(14689, 13)).toBe(20014);
  });

  // primer numbers
  it("primer numbers", () => {
    expect(computeJoinPoint(991, 997)).toBe(1118);
  });

  // large numbers
  it("large numbers", () => {
    expect(computeJoinPoint(15485863, 15215260)).toBe(15490633);
  });
});
