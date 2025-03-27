import { useNavigate } from "react-router"
import { Background } from "../components/background"
import { LevelBox } from "../components/levelBox"

export const Level = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const navigate=useNavigate()
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
                        //set level
                        
                        navigate("/home")
                    }}
                />
            ))}
        </div>

    </Background>

}