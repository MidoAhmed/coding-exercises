# Eat what you can. Pay what you want.

## Statement:

To attract tourists, a Las Vegas casino offers an all-you-can-eat buffet where each person pays what they want to pay.

Knowing what each tourist is willing to pay, you are asked to calculate the restaurant's gains for the day:

- At the beginning of the day, the restaurant is empty.
- A tourist arrives, is seated, eats, pays, and leaves.
- There are only nbSeats available seats. A tourist can eat and pay only if they can be seated.
- If a tourist arrives at the restaurant when there are no more available seats:
   - either they wait their turn until a seat becomes available
   - or they wait for a while and leave before a seat becomes available
- A tourist can come several times during the day, in which case they pay at most once.


Implement the function **computeDayGains(nbSeats:number, payingGuests:number[],guestMovements:number[]):number** which returns the gains for the day:

- The **payingGuests** array contains what each tourist is willing to pay. For example, if payingGuests[5] is 25, it means that the tourist with ID 5 is willing to pay $25 for the buffet.
- The **guestMovements** array gives the order of arrivals and departures of tourists. The first time you find an ID in the array, it is an arrival. The second time, it is a departure. An arrival is always followed by a departure during the day.


> Constraints:
>
> - 
> - 
