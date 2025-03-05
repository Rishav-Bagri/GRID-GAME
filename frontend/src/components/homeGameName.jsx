import { useNavigate } from "react-router"

export const HomeGameName=({text,onClick})=>{
    const navigate=useNavigate()
    return <div 
    onClick={onClick}
    className="flex justify-center text-red-500 mt-25 mb-40 text-8xl font-nosifer drop-shadow-[0_0_20px_#ff0000]">
        {text}
    </div>
}