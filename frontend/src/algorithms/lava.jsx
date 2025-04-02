import { manhattanDistance } from "./manhattonDistance";

export const lava = (arr, grid, setGrid, player, snake1, snake2) => {
    let narr = [...arr];  // Copy lava positions
    let ngrid = [...grid.map(row => [...row])]; // Deep copy of grid
    let r = 0, c = 0;

    if (narr.length === 5) {
        let index = narr[0];
        let oldR = Math.floor(index / grid.length);
        let oldC = index % grid.length;
        ngrid[oldR][oldC] = 't';  // Reset old lava to 't'
        narr.shift();
    }

    let index;
    do {
        index = Math.floor(Math.random() * (grid.length * grid[0].length));
        r = Math.floor(index / grid.length);
        c = index % grid.length;
    } while (
        !(ngrid[r][c] === 't' && 
          manhattanDistance(player, [r, c]) > 1 && 
          manhattanDistance(snake1, [r, c]) > 1 && 
          manhattanDistance(snake2, [r, c]) > 1)
    );
    
    ngrid[r][c] = 'l';  // Place new lava
    setGrid(ngrid);  
    narr.push(index);

    return narr;
};
