import React from "react"
const Button:React.FC<Button> = ({btnTxt,addNotes}) => {
    return (
        <button onClick = {addNotes} className = "text-white leading-9 font-primary w-32 h-8 rounded-xl bg-[#9A882C] opacity-70">{btnTxt}</button>
    )
} 
export default Button