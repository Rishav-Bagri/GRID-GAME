import { manhattanDistance } from "./manhattonDistance"

export const snakePos=(grid,snake,player)=>{
    const sr=snake[0]
    const sc=snake[1]

    
        console.log("hi");
        
        let dir=[[1,0],[-1,0],[0,1],[0,-1]]
        let ans=[]
        for (let i = 0; i < 4; i++) {
            let newRow = sr + dir[i][0];
            let newCol = sc + dir[i][1];
        
            // Check if newRow and newCol are within the grid boundaries
            if (newRow >= 0 && newRow < grid.length && newCol >= 0 && newCol < grid[0].length) {
                if (grid[newRow][newCol] === 't') {
                    ans.push([newRow, newCol]);
                    console.log(`${newRow} | ${newCol}`);
                }
            }
        }
        let res=[];
        let len=100
        if(manhattanDistance(player,snake)<=6){
            for(let i=0;i<ans.length;i++){
                let temp=manhattanDistance(player,ans[i])
                if(len>temp){
                    res=ans[i];
                    len=temp;
                }
            }
            return res;
        }
        let i=Math.floor(Math.random() * ans.length)
        console.log(i+"      "+ans[i]);
        return ans[i]
    
}