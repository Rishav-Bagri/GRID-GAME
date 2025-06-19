import { useEffect, useState } from "react";
import { Background } from "../components/background";
import { Grid } from "../components/grid";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { gridAtom, levelAtom } from "../atoms/atom";
import { useLoadLevel } from "../algorithms/loadLevel";
import { useNavigate } from "react-router";

export const Game = () => {
    const [level, setLevel] = useRecoilState(levelAtom)
    const loadLevel = useLoadLevel()
    const grid = useRecoilValue(gridAtom)
    const [steps, setSteps] = useState(30)
    const navigate=useNavigate()
    useEffect(() => {

        console.log(level);

        loadLevel(level)
        setSteps(30)
    }, [level])

    let row = 16;
    let col = 15;
    if (!grid || grid[0].length === 0) return <div>loading</div>

    return (
        <Background>

            <div className="flex justify-center items-center mt-10">
                <div className="p-6 w-[700px] h-[750px] bg-gray-900  rounded-lg shadow-lg text-white flex flex-col">
                    <div className="flex items-center justify-between px-4 py-2 w-full text-white relative">
                        <div onClick={() => navigate("/")} className="p-3 rounded hover:bg-white/10 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l9-9 9 9M4 10v10h5v-6h6v6h5V10" />
                            </svg>
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2 text-yellow-400 text-lg font-semibold">
                            Moves: {steps}
                        </div>
                        <div onClick={() => { window. location. reload() }}  className="p-3 rounded hover:bg-white/10 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582M4 4a9 9 0 11-3.418 6.417M20 20v-5h-.582M20 20a9 9 0 003.418-6.417" />
                            </svg>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <Grid steps={steps} setSteps={setSteps} row={row} col={col} />
                    </div>
                </div>
            </div>

        </Background>
    );
};
