import { useState } from "react";
import { useNavigate } from "react-router";
import { BottomButton } from "../components/login_registerBottomButton";
import { LoginInput } from "../components/loginInput";

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:5000/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });
        const data = await res.json();
        if (data.token) {
            localStorage.setItem("token", data.token);
        }
        const token = localStorage.getItem("token");
        const resp = await fetch("http://localhost:5000/api/progress", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        if (resp.ok) {
            const data = await resp.json();
            console.log(data);
            
            localStorage.setItem("unlockedLevel", data.__v);
        }
    };

    return (
        <div className="relative min-h-screen bg-[url('/3d-fantasy-scene.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-lg"></div>
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
                <div onClick={() => { navigate("/home"); }} className="text-red-500 text-6xl font-nosifer drop-shadow-[0_0_20px_#ff0000] mb-10 cursor-pointer">
                    Dungeon Escape
                </div>
                <div className="bg-black/50 backdrop-blur-md p-10 rounded-2xl shadow-xl w-96">
                    <h2 className="text-gray-300 text-3xl font-arvo text-center mb-6">Login</h2>
                    <form onSubmit={handleLogin}>
                        <LoginInput type={"text"} placeholder={"email"} value={username} onChange={e => setUsername(e.target.value)} />
                        <LoginInput type={"password"} placeholder={"password"} value={password} onChange={e => setPassword(e.target.value)} />
                        <button className="w-full py-3 bg-red-600 text-white text-xl font-arvo rounded-lg hover:bg-red-500 transition duration-300 cursor-pointer">
                            Login
                        </button>
                    </form>
                    <BottomButton to={"/register"} placeholder={" register"} message={"Don't have an account? go to  "} /> 
                </div>
            </div>
        </div>
    );
};