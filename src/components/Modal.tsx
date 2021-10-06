import React from "react"
import {CgClose} from 'react-icons/cg'

 
const Modal:React.FC<modal|null> = ({refTitle,refDesc,trigger,click,handleSubmit,titleChange,descChange,titleValue,descValue,submitBtnTxt}) => {
    return trigger?(
      <div className = 'bg-white w-80 h-96 mx-auto rounded-[2rem] absolute left-0 right-0 mx-auto z-50'>
        <CgClose className = 'cursor-pointer pt-4 ml-2 w-6 h-auto fill-current text-red-800 absolute right-4'
        onClick = {click}/>
        <form onSubmit = {handleSubmit} className = 'w-80 h-96 flex flex-col gap-y-3 align-center items-center justify-center'>
          <input type="text" ref = {refTitle} onChange = {titleChange} value = {titleValue} name = 'text' id ='title' placeholder = 'Title' className ='w-[95%] border-[1px] border-gray-600 rounded-md p-1 mt-3' />
          <textarea name="description" ref = {refDesc}  onChange = {descChange} value = {descValue} id="desc" className = 'border-[1px] border-gray-600 rounded-md p-1' cols = {40} rows = {8} placeholder = 'Description'></textarea>
          <button type = 'submit' className = 'w-20 rounded-md block font-semibold bg-gradient-to-r from-green-400 to-blue-500'>{submitBtnTxt}</button>
        </form>
      </div>
    ):<></>
} 
export default Modal