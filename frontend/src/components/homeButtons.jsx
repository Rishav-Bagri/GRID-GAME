
export const HomeButton=({text,onClick})=>{
    return <div 
    onClick={onClick} 
    className="flex justify-center text-gray-300 hover:text-white hover:scale-110 transition duration-300 mt-12 text-5xl font-arvo drop-shadow-lg cursor-pointer">
        {text}
    </div>
}