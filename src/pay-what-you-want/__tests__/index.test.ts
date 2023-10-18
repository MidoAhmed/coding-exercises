import { computeDayGains } from "..";

describe("computeDayGains", () => {
  it("should compute total gains when all guests are served and there are no seats left", () => {
    const nbSeats = 5;
    const payingGuests = [10, 20, 30, 40, 50];
    const guestMovements = [1, 1, 1, 1];
    const result = computeDayGains(nbSeats, payingGuests, guestMovements);
    expect(result).toBe(20);
  });

  it("enough seats ", () => {
    const nbSeats = 4;
    const payingGuests = [10, 20, 30];
    const guestMovements = [2, 1, 2, 1];
    const result = computeDayGains(nbSeats, payingGuests, guestMovements);
    expect(result).toBe(50);
  });

  it("not enough seats", () => {
    const nbSeats = 1;
    const payingGuests = [10, 20, 30];
    const guestMovements = [2, 1, 2, 1];
    const result = computeDayGains(nbSeats, payingGuests, guestMovements);
    expect(result).toBe(30);
  });

  
  it("the tourists come back later in the day", () => {
    const nbSeats = 3;
    const payingGuests = [10, 20, 30];
    const guestMovements = [1, 1, 2, 2, 1, 1, 2, 2];
    const result = computeDayGains(nbSeats, payingGuests, guestMovements);
    expect(result).toBe(50);
  });

  it("should compute total gains when there are no guests and no seats", () => {
    const nbSeats = 0;
    const payingGuests: number[] = [];
    const guestMovements: number[] = [];
    const result = computeDayGains(nbSeats, payingGuests, guestMovements);
    expect(result).toBe(0);
  });

  it("should compute total gains when there are no guests but there are seats available", () => {
    const nbSeats = 5;
    const payingGuests: number[] = [];
    const guestMovements: number[] = [];
    const result = computeDayGains(nbSeats, payingGuests, guestMovements);
    expect(result).toBe(0);
  });
});
