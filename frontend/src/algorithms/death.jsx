import { useNavigate } from "react-router";

export const checkCollision = (player, snake,navigate) => {
    const [pr, pc] = player; // Player's row and column
    const [sr, sc] = snake; // Snake's row and column

    
    const directions = [
        [0, 0],  [0, 1],  [0, -1], 
        [1, 0],  [1, 1],  [1, -1], 
        [-1, 0], [-1, 1], [-1, -1] 
    ];

    for (const [dr, dc] of directions) {
        if (pr === sr + dr && pc === sc + dc) {
            alert("You Died! 💀");
            navigate("/")
        }
    }
    return false; // No collision
};