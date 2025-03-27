
export const Background=({children})=>{
    return <div className="relative min-h-screen bg-[url('/3d-fantasy-scene.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-lg"></div>
        <div className="relative z-10 w-full px-10 py-10">{children}</div>
            
    </div>
}
