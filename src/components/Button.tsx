import React from "react"
const Button:React.FC<Button> = ({btnTxt,addNotes}) => {
    return (
        <button onClick = {addNotes} className = "font-bold w-32 h-8 rounded-xl bg-white">{btnTxt}</button>
    )
} 
export default Button