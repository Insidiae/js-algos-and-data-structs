function depthFirstSearch2D(grid, startRow = 0, startCol = 0) {
  //  Define the directions we can traverse through the grid
  //? Prioritize going through the directions in the ff. order:
  //? 1. up
  //? 2. right
  //? 3. down
  //? 4. left
  const directions = {
    up: {
      row: -1,
      col: 0,
    },
    right: {
      row: 0,
      col: 1,
    },
    down: {
      row: 1,
      col: 0,
    },
    left: {
      row: 0,
      col: -1,
    },
  };

  //  Initialize an array to keep track of the visited items
  const visited = Array.from({ length: grid.length }, () =>
    new Array(grid[0].length).fill(false)
  );

  //  Initialize an array to store the visited values
  const values = [];

  //  Create a recursive helper function to
  //  traverse through the 2d array
  function traverseDepthFirst(row, col) {
    //  Immediately exit if row or col is out of bounds,
    //  or if curent item has already been visited
    if (
      row < 0 ||
      row >= grid.length ||
      col < 0 ||
      col >= grid[0].length ||
      visited[row][col]
    ) {
      return;
    }
    //  Otherwise:
    //  Push the current item into the values array
    values.push(grid[row][col]);
    //  Mark the current item as seen
    visited[row][col] = true;

    //* Traverse through the directions in order:
    // Go up
    traverseDepthFirst(row + directions.up.row, col + directions.up.col);
    // Go right
    traverseDepthFirst(row + directions.right.row, col + directions.right.col);
    // Go down
    traverseDepthFirst(row + directions.down.row, col + directions.down.col);
    // Go left
    traverseDepthFirst(row + directions.left.row, col + directions.left.col);

    //? Or, you can just loop over the directions like so:
    // for (let direction of Object.values(directions)) {
    //   traverseDepthFirst(row + direction.row, col + direction.col);
    // }
  }

  //  Invoke the recursive helper function
  traverseDepthFirst(startRow, startCol);

  //  Return the array of visited values
  return values;
}

function breadthFirstSearch2D(grid, startRow = 0, startCol = 0) {
  //  Define the directions we can traverse through the grid
  //? Prioritize going through the directions in the ff. order:
  //? 1. up
  //? 2. right
  //? 3. down
  //? 4. left
  const directions = {
    up: {
      row: -1,
      col: 0,
    },
    right: {
      row: 0,
      col: 1,
    },
    down: {
      row: 1,
      col: 0,
    },
    left: {
      row: 0,
      col: -1,
    },
  };

  //  Initialize an array to keep track of the visited items
  const visited = Array.from({ length: grid.length }, () =>
    new Array(grid[0].length).fill(false)
  );

  //  Initialize an array to store the visited values
  const values = [];

  //  Initialize a queue to store the next elements to visit
  const toVisit = [{ row: startRow, col: startCol }];

  while (toVisit.length) {
    //  Get the indices of the next element to visit
    const { row, col } = toVisit.shift();

    //  If we get a valid non-visited item:
    if (
      row >= 0 &&
      row < grid.length &&
      col >= 0 &&
      col < grid[0].length &&
      !visited[row][col]
    ) {
      //  Push the current item into the values array
      values.push(grid[row][col]);
      //  Mark the current item as seen
      visited[row][col] = true;

      //* Traverse through the directions in order:
      // // Go up
      // toVisit.push({
      //   row: row + directions.up.row,
      //   col: col + directions.up.col,
      // });
      // // Go right
      // toVisit.push({
      //   row: row + directions.right.row,
      //   col: col + directions.right.col,
      // });
      // // Go down
      // toVisit.push({
      //   row: row + directions.down.row,
      //   col: col + directions.down.col,
      // });
      // // Go left
      // toVisit.push({
      //   row: row + directions.left.row,
      //   col: col + directions.left.col,
      // });

      //? Or, you can just loop over the directions like so:
      for (let direction of Object.values(directions)) {
        toVisit.push({ row: row + direction.row, col: col + direction.col });
      }
    }
  }

  //  Return the array of visited values
  return values;
}
