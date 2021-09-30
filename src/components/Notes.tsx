import React from "react";

const Notes:React.FC<Notes> = ({title,description}) => {
    return (
        <div className = "w-52 h-52 bg-yellow-300 rounded-3xl space-x-2 space-y-2">
            <h3 className = 'text-center mt-1 font-semibold'>{title}</h3>
            <p>{description}</p>
        </div>
    )
} 
export default Notes