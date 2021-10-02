import React from "react";
import {RiEditBoxLine,RiDeleteBin6Line} from 'react-icons/ri'

const Notes:React.FC<Notes> = ({title,description}) => {
    return (
        <div className = "relative font-primary text-xl w-52 h-52 bg-yellow-300 rounded-3xl space-x-2 space-y-2 z-10">
            <h3 className = 'mt-2 ml-2 font-bold'>{title}</h3>
            <p>{description}</p>
            <div className = 'absolute bottom-2 right-3 flex gap-x-1'>
                <RiEditBoxLine/>
                <RiDeleteBin6Line/>
            </div>
        </div>
    )
} 
export default Notes