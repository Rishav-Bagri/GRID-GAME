import { manhattanDistance } from "./manhattonDistance";

export const lava=(arr,grid,player,snake1,snake2)=>{

    let narr=[...arr];

    let r=0,c=0
    if(narr.length==5)narr.shift()
    let index
    do{
        index=Math.floor(Math.random()*(grid.length*grid[0].length))
        
        r=Math.floor(index/grid.length)
        c=Math.floor(index%grid[0].length)

        
    }while(
        !(grid[r][c]=='t' && 
        manhattanDistance(player,[r,c]) >1 && 
        manhattanDistance(snake1,[r,c])>1 && 
        manhattanDistance(snake2,[r,c])>1)
    )
    narr.push(index)
    // console.log("narr-"+" "+narr);
    
    return narr
}