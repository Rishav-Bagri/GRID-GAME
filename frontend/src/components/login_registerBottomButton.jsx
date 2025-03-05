import { Navigate, useNavigate } from "react-router"

export const BottomButton=({message,to,placeholder})=>{
    const navigate=useNavigate()
    return <div className="flex space-x-2 text-white">
        {message} 
        <div> </div>
        <div onClick={() => navigate(to)} 
        className=" cursor-pointer underline"
        >
            {placeholder}
        </div>
    </div>
}