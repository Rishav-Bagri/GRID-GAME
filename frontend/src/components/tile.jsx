import { useRecoilState } from "recoil";
import { snakePos } from "../algorithms/snakeMovement";
import { lava } from "../algorithms/lava";
import {
  playerAtom,
  snakeAtom1,
  snakeAtom2,
  lavaArrayAtom,
  gridAtom,
} from "../atoms/atom";

export const Tile = ({ steps, setSteps, index }) => {
  const [player, setPlayer] = useRecoilState(playerAtom);
  const [snake1, setSnake1] = useRecoilState(snakeAtom1);
  const [snake2, setSnake2] = useRecoilState(snakeAtom2);
  const [lavaArr, setLavaArr] = useRecoilState(lavaArrayAtom);
  const [obstacleMatrix, setObstacleMatrix] = useRecoilState(gridAtom);

  const row = Math.floor(index / 15);
  const col = index % 15;

  const getTileClass = () => {
    const tile = obstacleMatrix[row][col];
    if (tile === "t") return "bg-stone-500 border border-gray-600 shadow-sm";
    if (tile === "e") return "bg-stone-400 border border-yellow-400 shadow-lg glow-effect";
    if (tile === "l") return "bg-red-700 border border-red-900 shadow-xl";
    return "bg-yellow-900 border border-yellow-700 shadow-md";
  };

  const handleOnClick = () => {
    const isAdjacent = Math.abs(row - player[0]) + Math.abs(col - player[1]) === 1;
    const tileType = obstacleMatrix[row][col];

    if ((tileType === "t" || tileType === "e") && isAdjacent) {
      const newPlayer = [row, col];
      const newSnake1 = snakePos(obstacleMatrix, snake1, player);
      const newSnake2 = snakePos(obstacleMatrix, snake2, player);
      const newLava = lava(lavaArr, obstacleMatrix, setObstacleMatrix, newPlayer, newSnake1, newSnake2);

      setPlayer(newPlayer);
      setSnake1(newSnake1);
      setSnake2(newSnake2);
      setLavaArr(newLava);
      setSteps(steps - 1);
    }
  };

  const isSnake1 = row === snake1[0] && col === snake1[1];
  const isSnake2 = row === snake2[0] && col === snake2[1];
  const isPlayer = row === player[0] && col === player[1];

  return (
    <div onClick={handleOnClick} className={`w-10 h-10 border rounded relative ${getTileClass()}`}>
      {isSnake1 && (
        <img src="/snake-removebg-preview.png" className="absolute top-0 left-0 w-full h-full object-cover" alt="Snake" />
      )}
      {isSnake2 && (
        <img src="/snake-removebg-preview.png" className="absolute top-0 left-0 w-full h-full object-cover" alt="Snake" />
      )}
      {isPlayer && (
        <img src="player.png" className="absolute top-0 left-0 w-full h-full object-cover" alt="Player" />
      )}
    </div>
  );
};
