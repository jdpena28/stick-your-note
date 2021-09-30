import React from "react"
import {CgClose} from 'react-icons/cg'
const Modal:React.FC<modal|null> = ({children,trigger,click}) => {
    return trigger? (
      <div className = 'bg-white w-80 h-96 mx-auto rounded-[2rem] relative'>
        <CgClose className = 'cursor-pointer pt-4 ml-2 w-6 h-auto fill-current text-red-800 absolute right-4'
        onClick = {click}/>
        {children}
      </div>
    ):<></>
} 
export default Modal