# Robotic leveling


## Goal
Rearrange the boxes in the factory to form stacks of equal height.

## Rules
You work in an automated factory. 
The factory uses a simple robotic arm to move boxes around. The arm is capable of picking a box from a stack, and placing it on another stack.
All boxes are on one of a given number of stacks. 
Your objective is to rearrange the stacks in order to have an equal number of boxes on each stack. 
If this is not possible, any excess box must be stacked from left to right.
Your code will periodically receive the current state of the arm and the number of boxes on each stack.

In order to succeed, your function must return one command per turn up until the boxes are correctly positioned. The available commands are:

    RIGHT: the arm moves one stack to the right.
    LEFT: the arm moves one stack to the left.
    PICK: the arm grabs a box from the stack directly below it.
    PLACE: the arm places a box onto the stack directly below it.

> Warning, you may execute a maximum of 200 commands, but it is not necessary to minimize the amount of instructions.

## Implementation
Implement the function **solve(clawPos, boxes, boxInClaw)** that takes as arguments: 

- An integer **clawPos** for the index of the stack the arm is currently above. 
- **boxes** an array of integers for the size of each stack. 
- The integer **boxInClaw** which will be equal to 1 if the arm is carrying a box, 0 otherwise.
 
> Victory Conditions 
> - All stacks have been smoothed from left to right.
 
> Lose Conditions
> - Your function returns an incorrect command.
> - The stacks still aren't smoothed after 200 turns.

> Constraints
> - 2 ≤ number of stacks ≤ 8
> - 1 ≤ number of boxes ≤ 16


## Example Preview
![Example](game-preview.png)
