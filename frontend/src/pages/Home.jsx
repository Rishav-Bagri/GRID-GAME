import { useState } from "react";
import { HomeButton } from "../components/homeButtons";
import {HomeGameName} from "../components/homeGameName";
import { useNavigate } from "react-router";

export const Home = () => {
    const [loggined,setloggined]=useState(false)
    const navigate=useNavigate()

    return (
        <div className="relative min-h-screen bg-[url('/3d-fantasy-scene.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-lg"></div>
            <div className="relative z-10 w-full px-40 py-10">
                <HomeGameName  text={"Dungeon Escape"} />
                <HomeButton text={"Start" } />
                <HomeButton text={"Level"} />
                <HomeButton text={"How To Play"} />
                <HomeButton text={"Credits"} />
                <HomeButton onClick={()=>{
                    navigate("/login")
                }} text={"Login/Register"} />
            </div>
        </div>
    );
};