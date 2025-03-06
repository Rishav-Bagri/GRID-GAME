import { useState } from "react";

export const Tile=({index,player,setPlayer})=>{
    const obstacleMatrix = [
        ['g', 't', 'o', 't', 't', 't', 't', 'o', 't', 't', 't', 't', 't', 'o', 't'],
        ['t', 't', 't', 'o', 't', 't', 'o', 't', 't', 't', 'o', 't', 't', 't', 't'],
        ['o', 't', 't', 't', 't', 'o', 't', 't', 'o', 't', 't', 't', 't', 'o', 't'],
        ['t', 'o', 't', 't', 'o', 't', 'g', 't', 't', 't', 'o', 't', 'o', 't', 't'],
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
    // const [player,setPlayer]=useState([15,7])
    const fn=(index)=>{
        if(Math.floor(index / 15)==player[0]&&index % 15==player[1])return "bg-blue-700"
        if(obstacleMatrix[Math.floor(index / 15)][index % 15]=='o')return "bg-gray-700"
        if(obstacleMatrix[Math.floor(index / 15)][index % 15]=='g')return "bg-green-400"
        return "bg-yellow-800"
    }
    return <div onClick={()=>{
        let r=Math.floor(index / 15)
        let c=index % 15
        if(obstacleMatrix[r][c]=='t'&&Math.abs(r-player[0])+Math.abs(c-player[1])==1){
            setPlayer([r,c])
            console.log(player)
        }
    }} key={index} className={`w-10 h-10 border rounded border-gray-700 ${fn(index)}`}>
        {index}
    </div>  
    
}