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
       <form action="">
         <input type="text" id ='title' placeholder = 'Title' className ='border-[1px] border-black' />
         <input type="text" id ='title' placeholder = 'Description' />
       </form>
      </Modal>
      {/* Notes Container*/}
      <div id='board' className = "flex flex-wrap gap-4 container w-full mx-6 p-2">
      </div>
      </div>
  )
}

export default App
