import { useNavigate } from "react-router";
import Popup from 'reactjs-popup';
export const checkCollision = (player, snake,navigate) => {
    const [pr, pc] = player;
    const [sr, sc] = snake;

    
    const directions = [
        [0, 0],  [0, 1],  [0, -1], 
        [1, 0],[-1,0]
    ]

    for (const [dr, dc] of directions) {
        if (pr === sr + dr && pc === sc + dc) {
            
            return true;
        }
    }
    return false
     // No collision
};