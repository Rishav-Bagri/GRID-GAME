import { useEffect, useState } from "react";
import { Background } from "../components/background";
import { Grid } from "../components/grid";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { gridAtom, levelAtom } from "../atoms/atom";
import { useLoadLevel } from "../algorithms/loadLevel";

export const Game = () => {
    const [level,setLevel]=useRecoilState(levelAtom)
    const loadLevel = useLoadLevel()
    const grid = useRecoilValue(gridAtom)

    const [steps,setSteps]= useState(30)
    useEffect(() => {
        loadLevel(level)
        setSteps(30)
    }, [level])

    let row = 16;
    let col = 15;
    if (!grid || grid[0].length === 0) return <div>loading</div>

    return (
        <Background>
            
                <div className="flex justify-center items-center mt-10">
                    <div className="w-[800px] h-[85vh] bg-gray-900 p-6 rounded-lg shadow-lg text-white flex flex-col items-center">
                        <div className="mb-4 text-xl font-bold">Moves : {steps}</div>
                        <Grid steps={steps} setSteps={setSteps} row={row} col={col} />
                    </div>
                </div>
            
        </Background>
    );
};
