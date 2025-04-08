import { manhattanDistance } from "./manhattonDistance";

export const snakePos = (grid, snake, player) => {
    const sr = snake[0];
    const sc = snake[1];
    const pr = player[0];
    const pc = player[1];

    let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let queue = [[sr, sc]];
    let visited = new Set();
    let parent = new Map();

    visited.add(`${sr},${sc}`);

    // Only perform BFS if the player is within 6 tiles
    if (manhattanDistance(snake, player) <= 6) {
        while (queue.length > 0) {
            let [r, c] = queue.shift();

            if (r === pr && c === pc) break; // Player reached

            for (let [dr, dc] of directions) {
                let nr = r + dr;
                let nc = c + dc;

                if (nr >= 0 && nr < grid.length && nc >= 0 && nc < grid[0].length && 
                    grid[nr][nc] === 't' && !visited.has(`${nr},${nc}`)) {
                    
                    queue.push([nr, nc]);
                    visited.add(`${nr},${nc}`);
                    parent.set(`${nr},${nc}`, [r, c]); // Track previous position
                }
            }
        }

        // Backtrack from player to snake
        let move = [sr, sc];
        let current = [pr, pc];

        if (parent.has(`${pr},${pc}`)) {
            while (parent.has(`${current[0]},${current[1]}`)) {
                let prev = parent.get(`${current[0]},${current[1]}`);
                if (prev[0] === sr && prev[1] === sc) {
                    move = current;
                    break;
                }
                current = prev;
            }
            return move; // Return the best move toward the player
        }
    }

    let validMoves = [];
    for (let [dr, dc] of directions) {
        let nr = sr + dr;
        let nc = sc + dc;
        if (nr >= 0 && nr < grid.length && nc >= 0 && nc < grid[0].length && grid[nr][nc] === 't') {
            validMoves.push([nr, nc]);
        }
    }

    return validMoves.length > 0 ? validMoves[Math.floor(Math.random() * validMoves.length)] : [sr, sc];
};
