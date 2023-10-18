/**
 * Computes the total gains for a day given the number of seats, paying guests, and guest movements.
 * @param {number} nbSeats - The number of seats available.
 * @param {number[]} payingGuests - An array of the amount paid by each guest.
 * @param {number[]} guestMovements - An array of guest IDs representing their movements.
 * @returns {number} The total gains for the day.
 */
export function computeDayGains(
  nbSeats: number,
  payingGuests: number[],
  guestMovements: number[]
): number {
  let totalGains = 0;
  let seatsAvailable = nbSeats;
  let servedGuests = new Set();
  let guestsOnSeats = new Set();

  guestMovements.forEach((gestId) => {
    let amount = payingGuests[gestId];
    if (guestsOnSeats.has(gestId)) {
      if (!servedGuests.has(gestId)) {
        totalGains += amount;
        servedGuests.add(gestId);
      }
      seatsAvailable++;
      guestsOnSeats.delete(gestId);
    } else if (seatsAvailable > 0) {
      seatsAvailable--;
      guestsOnSeats.add(gestId);
    }
  });

  return totalGains;
}
