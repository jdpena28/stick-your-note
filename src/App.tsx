import React, {useState} from 'react'
import Button  from './components/Button'
import Modal from './components/Modal'
import Notes from './components/Notes'

const App: React.FC = () => {
  const [popUp,setPopUp] = useState(false);
  
  const addNotes = () => {
    setPopUp(true)
  }
  const close = () => {
    setPopUp(false)
  }

  return (
    <div className = "w-[100vw] h-screen mx-auto font-sans bg-gradient-to-r from-green-400 to-blue-500 space-y-3">
      <div className = "pt-3 text-center space-y-4">
        <h1 className = "text-white text-4xl mx-auto bg-gray-500 w-max p-2 rounded-xl bg-opacity-80">📃Stick Your Note📃</h1>
        <Button addNotes = {addNotes} btnTxt = "ADD NOTE"/>
      </div>
      <Modal trigger = {popUp} click = {close}>
       <form className = 'w-80 h-96 flex flex-col gap-y-3 align-center items-center justify-center'>
         <input type="text" id ='title' placeholder = 'Title' className ='w-[93%] border-[1px] border-gray-600' />
         <textarea name="description" id="desc" className = 'border-[1px] border-gray-600' cols = '40' rows = "8" placeholder = 'Description'></textarea>
         <button type = 'submit' className = 'w-20 rounded-md block font-semibold bg-gradient-to-r from-green-400 to-blue-500'>Add</button>
       </form>
      </Modal>
      {/* Notes Container*/}
      <div id='board' className = "flex flex-wrap gap-4 container w-full mx-6 p-2">
      </div>
      </div>
  )
}

export default App
