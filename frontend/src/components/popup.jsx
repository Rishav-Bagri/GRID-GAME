
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useLoadLevel } from "../algorithms/loadLevel";
import { useRecoilState } from "recoil";
import { levelAtom } from "../atoms/atom";
export const GamePopup=({win,isCollision,setIsCollision,navigate})=>{
    const [level,setLevel]=useRecoilState(levelAtom) 
    return <Popup 
        open={1} 
        modal 
        closeOnDocumentClick={false} 
        overlayStyle={{ background: "rgba(0,0,0,0.5)" }}
        contentStyle={{ width: "300px", padding: "20px", borderRadius: "10px", textAlign: "center" }}
    >
        <div className="flex flex-col items-center">
            <h2 className="text-lg font-bold mb-4 text-red-600">{(win==false)?<div> Game Over!</div>:<div>Escapped Successfully!</div>}</h2>
            <button 
                onClick={() => { setIsCollision(false); window. location. reload() }} 
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full mb-2"
            >
                Retry
            </button>
            <button 
                onClick={() => navigate("/")} 
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded w-full mb-2"
            >
                Home
            </button>
            {win==true && 
                <button 
                    onClick={() => {
                        
                        setLevel(level+1)
                        navigate("/game")
                        
                    }} 
                    className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded w-full"
                >
                    Next
                </button>
            }
        </div>
    </Popup>
}