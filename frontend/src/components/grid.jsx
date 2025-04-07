import { useState, useEffect } from "react";
import { Tile } from "./tile";
import { checkCollision } from "../algorithms/death";
import { useNavigate } from "react-router";
import { GamePopup } from "./popup";
import { useRecoilState } from "recoil";
import { gridAtom, lavaArrayAtom, playerAtom, snakeAtom1, snakeAtom2 } from "../atoms/atom";

export const Grid = ({steps,setSteps, row, col }) => {

    const [player, setPlayer] =  useRecoilState(playerAtom)
    const [snake1, setSnake1] = useRecoilState(snakeAtom1);
    const [snake2, setSnake2] = useRecoilState(snakeAtom2)
    const [arr, setArr] =  useRecoilState(lavaArrayAtom)
    const navigate = useNavigate();
    const [isCollision, setIsCollision] = useState(false);


    const [obstacleMatrix,setObstacleMatrix] = useRecoilState(gridAtom)



    useEffect(() => {
        if (checkCollision(player, snake1) || checkCollision(player, snake2)) {
            setIsCollision(true);
        }
    }, [player, snake1, snake2]);
    console.log(obstacleMatrix);
    
    return (
        <div className="grid" style={{ display: "grid", gridTemplateColumns: `repeat(${col}, 1fr)`, gap: "0px" }}>
            {Array.from({ length: row * col }).map((_, index) => (
                <Tile key={index} steps={steps} setSteps={setSteps}  index={index} />
            ))}
            {(obstacleMatrix[player[0]][player[1]]=='e' && <GamePopup win={true} isCollision={isCollision} setIsCollision={setIsCollision} navigate={navigate} /> )||
            ((steps==0||isCollision)&&<GamePopup win={false} isCollision={isCollision} setIsCollision={setIsCollision} navigate={navigate} />)}
        </div>
    );
};
