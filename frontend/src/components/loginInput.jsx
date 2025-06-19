export const LoginInput=({type, placeholder,onChange})=>{
    return <input 
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full p-3 mb-6 bg-black/30 text-gray-200 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
    />
}