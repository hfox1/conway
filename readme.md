# Requirements

npm install prompt-sync

# Gameplay

Run game.js in Node

# Approach

## The type of board this game is played on:

```
[
  [0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1]
];
```

## Coordinates

This Cartesian (i,j) grid is 0-indexed, starting at the top left: i grows positively across the page, j grows positively down the page.
The element or 'square' (i,j) of the grid is accessed through Board[j][i].

Along the way, for 'square' (i, j) or board[j][i], we'll be checking a Neighbourhood of 8 neighbours:
[j-1][i-1], [j-1][i], [j-1][i+1],
[j][i-1], ----------- [j][i+1],
[j+1][i-1], [j+1][i], [j+1][i+1]

## Starting board

```
new Board(x, y)
```

generates a empty board of width x and height y. For now, a user can supply their own array.

## Neighbourhoods

The evolution of a square depends on the state of its 8 adjacent squares, or 'Neighbourhood'. The neighbourhoodConstructor class methods generate and score the neighbourhood of a source square, counting how many adjacent squares are activated and determining the fate of the source square.

## Turns

Each turn, we iterate over the board, determining the evolution of each square and mapping the results to a new board, generating the next turn of the game.
