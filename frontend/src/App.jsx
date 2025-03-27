import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { Home } from "./pages/Home";
import { Game } from "./pages/Game";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Level } from "./pages/Level";
import { HowToPlay } from "./pages/HowToPlay";

function App() {
    
    return <div>

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to={"/home"} />} />
                <Route path="/home" element={<Home/>} />
                <Route path="/game" element={<Game/>} />
                <Route path="/level" element={<Level/>} />
                <Route path="/how-to-play" element={<HowToPlay/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
            </Routes>
        </BrowserRouter>
    </div>
}

export default App
