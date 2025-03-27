import { Background } from "../components/background";
import { Grid } from "../components/grid";

export const Game = () => {
    let row = 16;
    let col = 15;

    return (
        <Background>
            <div className="flex justify-center items-center mt-10">
                <div className="w-[800px] h-[85vh] bg-gray-900 p-6 rounded-lg shadow-lg text-white flex flex-col items-center">
                    <div className="mb-4 text-xl font-bold">MOVES</div>
                    <Grid row={row} col={col} />
                </div>
            </div>
        </Background>
    );
};
