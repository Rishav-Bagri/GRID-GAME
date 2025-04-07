import { useRecoilCallback } from "recoil"
import { gridAtom, playerAtom, snakeAtom1, snakeAtom2, lavaArrayAtom, levelAtom } from "../atoms/atom"
import { levels } from "../data/level"

export const useLoadLevel = () => {
  return useRecoilCallback(({ set }) => (levelIndex) => {
    const level = levels[levelIndex]
    if (!level) return

    set(levelAtom, levelIndex)
    set(gridAtom, level.grid)
    set(playerAtom, level.player)
    set(snakeAtom1, level.snake1)
    set(snakeAtom2, level.snake2)
    set(lavaArrayAtom, level.lava)
  }, [])
}
