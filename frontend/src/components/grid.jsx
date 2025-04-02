import { useState, useEffect } from "react";
import { Tile } from "./tile";
import { checkCollision } from "../algorithms/death";
import { useNavigate } from "react-router";
import { GamePopup } from "./popup";

export const Grid = ({steps,setSteps, row, col }) => {
    const [player, setPlayer] = useState([15, 7]);
    const [snake1, setSnake1] = useState([10, 10]);
    const [snake2, setSnake2] = useState([7, 4]);
    const [arr, setArr] = useState([]);
    const navigate = useNavigate();
    const [isCollision, setIsCollision] = useState(false);


    const [obstacleMatrix,setObstacleMatrix] = useState([
        ['t', 'e', 'o', 't', 'e', 't', 't', 'o', 't', 't', 't', 't', 't', 'o', 'e'],
        ['t', 't', 't', 'o', 't', 't', 'o', 't', 't', 't', 'o', 't', 't', 't', 't'],
        ['o', 't', 't', 't', 't', 'o', 't', 't', 'o', 't', 't', 't', 't', 'o', 't'],
        ['t', 'o', 't', 't', 'o', 't', 't', 't', 't', 't', 'o', 't', 'o', 't', 't'],
        ['e', 't', 'o', 't', 't', 't', 'o', 't', 't', 't', 't', 't', 't', 't', 'o'],
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
    ]);



    useEffect(() => {
        if (checkCollision(player, snake1) || checkCollision(player, snake2)) {
            setIsCollision(true);
        }
    }, [player, snake1, snake2]); // Check for collision on movement change

    return (
        <div className="grid" style={{ display: "grid", gridTemplateColumns: `repeat(${col}, 1fr)`, gap: "0px" }}>
            {Array.from({ length: row * col }).map((_, index) => (
                <Tile key={index} steps={steps} setSteps={setSteps} obstacleMatrix={obstacleMatrix} setObstacleMatrix={setObstacleMatrix} lavaArr={arr} setLavaArr={setArr} player={player} setPlayer={setPlayer} snake1={snake1} setSnake1={setSnake1} snake2={snake2} setSnake2={setSnake2} index={index} />
            ))}
            {(obstacleMatrix[player[0]][player[1]]=='e' && <GamePopup win={true} isCollision={isCollision} setIsCollision={setIsCollision} navigate={navigate} /> )||
            ((steps==0||isCollision)&&<GamePopup win={false} isCollision={isCollision} setIsCollision={setIsCollision} navigate={navigate} />)}
        </div>
    );
};
