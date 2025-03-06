import { useState } from "react";
import { Tile } from "./tile";

export const Grid = ({ row, col }) => {
    const [player,setPlayer]=useState([15,7])
    return (
        <div className="grid" style={{ display: "grid", gridTemplateColumns: `repeat(${col}, 1fr)`, gap: "0px" }}>
            {Array.from({ length: row * col }).map((_, index) => (
                <Tile player={player} setPlayer={setPlayer} index={index} />
            ))}
        </div>
    );
};
