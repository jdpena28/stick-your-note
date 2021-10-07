import React from "react";
import {RiEditBoxLine,RiDeleteBin6Line} from 'react-icons/ri'

const Notes:React.FC<Notes> = ({title,description,removeNote,editNote}) => {
    return (
        <div className = "relative font-tertiary text-xl w-[10.5rem] h-[10.5rem] p-1 md:w-52 md:h-52 bg-[#F3F369] space-2 z-10 drop-shadow-xl " id = "note">
            <h3 className = 'mt-2 ml-2 font-bold text-lg md:text-xl'>{title}</h3>
            <p className = 'text-base md:text-xl ml-2'>{description}</p>
            <div className = 'absolute bottom-2 left-1 flex gap-x-1'>
                <RiEditBoxLine className = 'cursor-pointer' onClick = {editNote}/>
                <RiDeleteBin6Line className = 'cursor-pointer' onClick = {removeNote}/>
            </div>
        </div>
    )
} 
export default Notes