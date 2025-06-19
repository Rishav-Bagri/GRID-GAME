import { useNavigate } from "react-router"
import { Background } from "../components/background"
import { LevelBox } from "../components/levelBox"
import { useRecoilState } from "recoil"
import { levelAtom } from "../atoms/atom"

export const Level = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const navigate = useNavigate()
    const [level, setLevel] = useRecoilState(levelAtom)
    return <Background>
        <div className="text-white text-4xl font-nosifer text-center mb-6">
            Select Your Level
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {arr.map((elem) => (
                <LevelBox
                    key={elem}
                    level={elem}
                    onClick={() => {
                        localStorage["currentLevel"] = elem - 1
                        setLevel(elem - 1)
                        navigate("/home")
                    }}
                />
            ))}
        </div>
        <div
            onClick={() => navigate("/")}
            className="flex justify-center mt-4 text-yellow-400 hover:text-yellow-300 text-xl font-semibold transition duration-300 cursor-pointer"
        >
            Back to Home
        </div>

    </Background>

}