import { Background } from "../components/background";
import { useNavigate } from "react-router";

export const HowToPlay = () => {
    const navigate = useNavigate();

    return (
        <Background>
            <div className="relative z-10 flex flex-col items-center text-white px-8 py-4">
                <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">How to Play</h1>

                <div className="max-w-3xl text-base space-y-4 bg-black/50 p-4 rounded-xl shadow-lg">
                    <p>
                        You are trapped in a deadly dungeon! Your goal is to <strong>move from the first row to the last row</strong> of the grid while avoiding obstacles and enemies.
                    </p>

                    <h2 className="text-2xl font-semibold text-red-400">🕹️ Movement</h2>
                    <p>
                        Click on an adjacent tile to move <strong>one step</strong> in any direction (up, down, left, or right). Plan your moves carefully!
                    </p>

                    <h2 className="text-2xl font-semibold text-yellow-400">🔥 Obstacles</h2>
                    <ul className="list-disc pl-4 space-y-1">
                        <li><strong>Permanent obstacles</strong> block movement and cannot be destroyed.</li>
                        <li><strong>Lava</strong> appears randomly and disappears after a few seconds—stepping on it is fatal!</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-green-400">🐍 The Snake Enemy</h2>
                    <ul className="list-disc pl-4 space-y-1">
                        <li>The snake moves <strong>randomly</strong> unless you are <strong>few tiles away</strong>.</li>
                        <li>If you're close, it switches to <strong>greedy movement</strong>, chasing you aggressively.</li>
                        <li>Outsmart the snake by predicting its movement and using obstacles to block its path!</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-blue-400">🏆 Winning</h2>
                    <p>Reach the last row to <strong>complete the stage</strong>. Survive, strategize, and escape the dungeon!</p>
                </div>

                <button 
                    onClick={() => navigate("/")}
                    className="mt-4 text-yellow-400 hover:text-yellow-300 text-xl font-semibold transition duration-300 cursor-pointer"
                >
                    Back to Home
                </button>
            </div>
        </Background>
    );
};
