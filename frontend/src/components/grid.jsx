import { useState } from "react";
import { Tile } from "./tile";

export const Grid = ({ row, col }) => {
    const [player,setPlayer]=useState([15,7])
    const [snake1,setSnake1]=useState([10,10])
    const [snake2,setSnake2]=useState([7,4])
    return (
        <div className="grid" style={{ display: "grid", gridTemplateColumns: `repeat(${col}, 1fr)`, gap: "0px" }}>
            {Array.from({ length: row * col }).map((_, index) => (
                <Tile player={player} setPlayer={setPlayer} snake1={snake1} setSnake1={setSnake1} snake2={snake2} setSnake2={setSnake2} index={index} />
            ))}
        </div>
    );
};
