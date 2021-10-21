import React from "react"
import {CgClose} from 'react-icons/cg'

 
const Modal:React.FC<modal|null> = ({refTitle,refDesc,trigger,click,handleSubmit,titleChange,descChange,titleValue,descValue,submitBtnTxt}) => {
    return trigger?(
      <div className = 'bg-[#C0C0C0] bg-opacity-95 w-80 h-96 rounded-[2rem] absolute left-0 right-0 mx-auto z-50'>
        <CgClose className = 'cursor-pointer pt-4 ml-2 w-6 h-auto fill-current text-black absolute right-4'
        onClick = {click}/>
        <form onSubmit = {handleSubmit} className = 'font-tertiary text-lg w-80 h-96 flex flex-col gap-y-3 align-center items-center justify-center'>
          <input type="text" ref = {refTitle} onChange = {titleChange} value = {titleValue} name = 'text' id ='title' placeholder = 'Title' className ='w-[93%] rounded-md p-1 mt-8' required />
          <textarea name="description" ref = {refDesc}  onChange = {descChange} value = {descValue} id="desc" className = 'rounded-md p-1 w-[93%]'  cols = {20} rows = {8} placeholder = 'Description' required></textarea>
          <button type = 'submit' className = 'text-white bg-[#373736] opacity-7 font-primary w-20 rounded-md block font-semibold'>{submitBtnTxt}</button>
        </form>
      </div>
    ):<></>
} 
export default Modal