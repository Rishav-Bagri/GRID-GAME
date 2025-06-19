import { useState } from "react";
import { useNavigate } from "react-router";
import { BottomButton } from "../components/login_registerBottomButton";
import { LoginInput } from "../components/loginInput";

export const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        console.log(username+password);
        
        const response=await fetch("http://localhost:5000/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });
        localStorage["token"]=response.token
    };

    return (
        <div className="relative min-h-screen bg-[url('/3d-fantasy-scene.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-lg"></div>
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
                <h1 onClick={() => { navigate("/home"); }} className="text-red-500 text-6xl font-nosifer drop-shadow-[0_0_20px_#ff0000] mb-10 cursor-pointer">
                    Dungeon Escape
                </h1>
                <div className="bg-black/50 backdrop-blur-md p-10 rounded-2xl shadow-xl w-96">
                    <h2 className="text-gray-300 text-3xl font-arvo text-center mb-6">Register</h2>
                    <form onSubmit={handleRegister}>
                        <LoginInput type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)} />
                        <LoginInput type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
                        <button className="w-full py-3 bg-red-600 text-white text-xl font-arvo rounded-lg hover:bg-red-500 transition duration-300 cursor-pointer">
                            Register
                        </button>
                    </form>
                    <BottomButton to="/login" placeholder=" login" message="Already have an account? go to" /> 
                </div>
            </div>
        </div>
    );
};