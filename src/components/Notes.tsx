import React from "react";
import {motion,AnimatePresence} from 'framer-motion'
import {RiEditBoxLine,RiDeleteBin6Line} from 'react-icons/ri'

const Notes:React.FC<Notes> = ({title,description,removeNote,editNote}) => {
    return (
            <motion.div 
            initial = {{x:'100vw'}}
            animate ={{x:0}}
            transition ={{type: 'spring',duration:1,bounce:0.2,delay:0.3}}
            className = "font-tertiary text-xl w-[10.5rem] h-[10.5rem] p-1 md:w-52 md:h-52 bg-[#F3F369] space-2 z-10 drop-shadow-xl " id = "note">
                <h3 className = 'mt-2 ml-2 font-bold text-lg md:text-xl overflow-ellipsis w-[10.2rem] md:w-[12.6rem] whitespace-pre-line overflow-x-hidden'>{title}</h3>
                <p className = 'text-sm md:text-base ml-2 overflow-ellipsis overflow-x-hidden whitespace-pre-line w-[9.8rem] md:w-[12.6rem]'>{description}</p>
                <div className = 'absolute bottom-1 left-1 flex gap-x-1 '>
                    <RiEditBoxLine className = 'cursor-pointer' size={'1.2rem'} onClick = {editNote}/>
                    <RiDeleteBin6Line className = 'cursor-pointer' size={'1.2rem'} onClick = {removeNote}/>
                </div>
            </motion.div>
    )
} 
export default Notes