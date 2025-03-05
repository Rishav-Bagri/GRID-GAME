import { Background } from "./background"

export const LevelBox = ({ level, onClick }) => {
    return (


        
            <div 
                className="flex justify-center items-center text-gray-300 hover:text-white cursor-pointer hover:scale-105 transition duration-300 mt-6 text-4xl font-arvo drop-shadow-lg border-2 border-gray-500 px-6 py-4 rounded-lg bg-black/50 hover:bg-black/70"
                onClick={onClick}
            >
                LEVEL {level}
            </div>

        
    );
};