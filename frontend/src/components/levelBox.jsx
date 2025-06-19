import { useState } from "react";

export const LevelBox = ({ level, onClick }) => {
    const unlocked = localStorage["unlockedLevel"]|0;
    const selectable = level <= unlocked+1;
    
    const [showMsg, setShowMsg] = useState(false);

    const handleClick = () => {
        if (selectable) {
            onClick();
        } else {
            setShowMsg(true);
            setTimeout(() => setShowMsg(false), 1500); // Hide message after 1.5s
        }
    };

    return (
        <div
            className={`flex justify-center items-center text-gray-300
                ${selectable ? "hover:text-white cursor-pointer hover:scale-105" : "opacity-40 cursor-not-allowed"}
                transition duration-300 mt-6 text-4xl font-arvo drop-shadow-lg border-2 border-gray-500 px-6 py-4 rounded-lg bg-black/50
                ${selectable ? "hover:bg-black/70" : ""}
            `}
            onClick={handleClick}
        >
            LEVEL {level}
            {!selectable && showMsg && (
                <span className="absolute mt-20 text-sm text-red-400 bg-black/80 px-2 py-1 rounded">
                    Clear previous level first!
                </span>
            )}
        </div>
    );
};