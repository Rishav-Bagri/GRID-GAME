import { atom } from "recoil"

export const gridAtom = atom({
    key: "gridAtom",
    default: [[]]  // empty for now
  })
  
  export const playerAtom = atom({
    key: "playerAtom",
    default: []
  })
  
  export const snakeAtom1 = atom({
    key: "snakeAtom1",
    default: []
  })
  
  export const snakeAtom2 = atom({
    key: "snakeAtom2",
    default: []
  })
  
  export const lavaArrayAtom = atom({
    key: "lavaArrayAtom",
    default: []
  })
  
  export const levelAtom = atom({
    key: "levelAtom",
    default: 0
  })
  