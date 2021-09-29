import React from "react"


const Button:React.FC<Button> = ({btnTxt}) => {
    return (
        <button className = "font-bold w-32 h-8 rounded-xl bg-white">{btnTxt}</button>
    )
} 
export default Button