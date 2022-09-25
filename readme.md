```
const seedBoard =
[
  [0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1]
];
```

# Approach

This Cartesian (i,j) grid is 0-indexed, starting at the top left: i grows positively across the page, j grows positively down the page.
the element or 'square' (i,j) of the grid is accessed through Board[i][j].

so for 'square' [i][j], we're checking Neighbourhood of 8 neighbours:
[i-1][j-1], [i][j-1], [i+1][j-1],
[i-1][j], [i+1][j],
[i-1][j+1], [i][j+1], [i+1][j+1]

we take the sum of the contents of these neighbours, and apply Conway's rules to the sum to determine() the fate of square [i][j]

We iterate over the board, mapping the results to a new board to generate the next turn of the game

say we're going into (4,3). So the global board generation it's map: start mapping through first row array: within that, map through that row and determine() each one.

so we've called determine(). That now needs to access the neighbiurhood score of the 8 squares that make up the neighbourhood.

We'll use a different class to calculate the sum of the neighbours. We'll load a board into the neighbourhood class.
Then a `new Neighbourhood(i,j)` instance can be created for any square. Then a neighbourhood score board is generated

Then

# Tests

'Neighbours' off the edge of the board are not functioning neighbours  
A square has a neighbourhood score

Game
A single square turns off
A blinker blinks
