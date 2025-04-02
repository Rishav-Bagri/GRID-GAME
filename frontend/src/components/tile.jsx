import { useEffect, useState } from "react";
import { snakePos } from "../algorithms/snakeMovement";
import { checkCollision } from "../algorithms/death";
import { useNavigate } from "react-router";
import { lava } from "../algorithms/lava";
export const Tile=({obstacleMatrix,setObstacleMatrix,lavaArr,setLavaArr,index,player,setPlayer,snake1,snake2,setSnake1,setSnake2})=>{
    
    
    
    const fn = (index) => {
        const row = Math.floor(index / 15);
        if (obstacleMatrix[row][index % 15] === 't') {
            return row === 0 ? "bg-gray-400 glow-effect" : "bg-gray-400"; 
        }else if(obstacleMatrix[row][index % 15] === 'l')return "bg-red-700";
        return "bg-yellow-800";
    };
    
    

    const handleOnClick = () => {
        let r = Math.floor(index / 15);
        let c = index % 15;
    
        if (obstacleMatrix[r][c] === 't' && Math.abs(r - player[0]) + Math.abs(c - player[1]) === 1) {
            const newPlayer = [r, c];
            const newSnake1 = snakePos(obstacleMatrix, snake1, player);
            const newSnake2 = snakePos(obstacleMatrix, snake2, player);
            const newLava = lava(lavaArr, obstacleMatrix,setObstacleMatrix, newPlayer, newSnake1, newSnake2);

            
            setPlayer(newPlayer);
            setSnake1(newSnake1);
            setSnake2(newSnake2);
            
            setLavaArr(newLava);    
        }
    };
    
    const navigate= useNavigate()
    return <div onClick={handleOnClick} key={index} className={`w-10 h-10 border rounded relative border-gray-700 ${fn(index)}`}>

        {Math.floor(index / 15) == snake1[0] && index % 15 == snake1[1] && (
            <img
            src="/snake-removebg-preview.png"
            className="absolute top-0 left-0 w-full h-full object-cover"
            alt="Snake"
            />
        )}


        {Math.floor(index / 15) == snake2[0] && index % 15 == snake2[1] && (
            <img
            src="/snake-removebg-preview.png"
            className="absolute top-0 left-0 w-full h-full object-cover"
            alt="Snake"
            />
        )}

        {Math.floor(index / 15) == player[0] && index % 15 == player[1] && (
            <img
            src="player.png"
            className="absolute top-0 left-0 w-full h-full object-cover"
            alt="Snake"
            />
        )}
    </div>  
    
}