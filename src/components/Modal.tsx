import React from "react"
import {CgClose} from 'react-icons/cg'
const Modal:React.FC<modal|null> = ({children,trigger,click}) => {
    return trigger? (
      <div className = 'bg-white w-80 h-96 mx-auto rounded-[2rem]'>
        <CgClose className = 'cursor-pointer pt-4 ml-2 w-7 h-auto fill-current text-red-800'
        onClick = {click}/>
        {children}
      </div>
    ):<></>
} 
export default Modal