import React from "react";
import {RiEditBoxLine,RiDeleteBin6Line} from 'react-icons/ri'

const Notes:React.FC<Notes> = ({title,description,removeNote,editNote}) => {
    return (
        <div className = "relative font-primary text-xl w-48 h-48 p-1 md:w-52 md:h-52 bg-yellow-300 rounded-3xl space-x-2 space-y-2 z-10">
            <h3 className = 'mt-2 ml-2 font-bold text-lg md:text-xl'>{title}</h3>
            <p className = 'text-base md:text-xl'>{description}</p>
            <div className = 'absolute bottom-2 right-3 flex gap-x-1'>
                <RiEditBoxLine className = 'cursor-pointer' onClick = {editNote}/>
                <RiDeleteBin6Line className = 'cursor-pointer' onClick = {removeNote}/>
            </div>
        </div>
    )
} 
export default Notes