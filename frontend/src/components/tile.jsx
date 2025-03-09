import { useState } from "react";
import { snakePos } from "../algorithms/snakeMovement";

export const Tile=({index,player,setPlayer,snake1,snake2,setSnake1,setSnake2})=>{
    const obstacleMatrix = [
        ['t', 't', 'o', 't', 't', 't', 't', 'o', 't', 't', 't', 't', 't', 'o', 't'],
        ['t', 't', 't', 'o', 't', 't', 'o', 't', 't', 't', 'o', 't', 't', 't', 't'],
        ['o', 't', 't', 't', 't', 'o', 't', 't', 'o', 't', 't', 't', 't', 'o', 't'],
        ['t', 'o', 't', 't', 'o', 't', 't', 't', 't', 't', 'o', 't', 'o', 't', 't'],
        ['t', 't', 'o', 't', 't', 't', 'o', 't', 't', 't', 't', 't', 't', 't', 'o'],
        ['t', 'o', 't', 't', 't', 't', 't', 'o', 't', 'o', 't', 't', 't', 'o', 't'],
        ['t', 't', 't', 'o', 't', 't', 'o', 't', 't', 't', 'o', 't', 't', 't', 't'],
        ['o', 't', 't', 't', 't', 'o', 't', 't', 'o', 't', 't', 't', 't', 'o', 't'],
        ['t', 'o', 't', 't', 'o', 't', 't', 't', 't', 't', 'o', 't', 'o', 't', 't'],
        ['t', 't', 'o', 't', 't', 't', 'o', 't', 't', 't', 't', 't', 't', 't', 'o'],
        ['t', 'o', 't', 't', 't', 't', 't', 'o', 't', 'o', 't', 't', 't', 'o', 't'],
        ['t', 't', 't', 'o', 't', 't', 'o', 't', 't', 't', 'o', 't', 't', 't', 't'],
        ['o', 't', 't', 't', 't', 'o', 't', 't', 'o', 't', 't', 't', 't', 'o', 't'],
        ['t', 'o', 't', 't', 'o', 't', 't', 't', 't', 't', 'o', 't', 'o', 't', 't'],
        ['t', 't', 'o', 't', 't', 't', 'o', 't', 't', 't', 't', 't', 't', 't', 'o'],
        ['t', 'o', 't', 't', 't', 't', 't', 't', 't', 'o', 't', 't', 't', 'o', 't'],
    ];
    const fn=(index)=>{
        if(obstacleMatrix[Math.floor(index / 15)][index % 15]=='t')return "bg-gray-400"
        return "bg-yellow-800"
    }
    return <div onClick={()=>{
        let r=Math.floor(index / 15)
        let c=index % 15
        if(obstacleMatrix[r][c]=='t'&&Math.abs(r-player[0])+Math.abs(c-player[1])==1){
            setPlayer([r,c])
            setSnake1(snakePos(obstacleMatrix,snake1,player))
            setSnake2(snakePos(obstacleMatrix,snake2,player))
            
            console.log(player)
        }
    }} key={index} className={`w-10 h-10 border rounded relative border-gray-700 ${fn(index)}`}>
        {/* Snake 1 Image */}
        {Math.floor(index / 15) == snake1[0] && index % 15 == snake1[1] && (
            <img
                src="/snake-removebg-preview.png"
                className="absolute top-0 left-0 w-full h-full object-cover"
                alt="Snake"
            />
        )}

        {/* Snake 2 Image */}
        {Math.floor(index / 15) == snake2[0] && index % 15 == snake2[1] && (
            <img
                src="/snake-removebg-preview.png"
                className="absolute top-0 left-0 w-full h-full object-cover"
                alt="Snake"
            />
        )}
        {/* Snake 2 Image */}
        {Math.floor(index / 15) == player[0] && index % 15 == player[1] && (
            <img
                src="player.png"
                className="absolute top-0 left-0 w-full h-full object-cover"
                alt="Snake"
            />
        )}
    </div>  
    
}