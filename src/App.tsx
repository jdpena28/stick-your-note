import React, {useState} from 'react'
import Button  from './components/Button'
import Modal from './components/Modal'
import Notes from './components/Notes'

const App: React.FC = () => {
  let num = 0 ;
  const [popUp,setPopUp] = useState<boolean>(false)
  
  const [notes,setNotes] = useState<note[]>([{
    id: 1,
    title: 'How to add Notes?',
    desc: 'Click ADD NOTE button and type the title and description for your notes'
  }])
  
  const addNotes = () => {
    setPopUp(true)
  }
  const close = () => {
    setPopUp(false)
  }

  const handleSubmit = (e:any) => {
    e.preventDefault()
    const txtTitle = e.target.text.value
    const txtDesc = e.target.description.value
    const newNotes = [...notes,{id:num++,title:txtTitle,desc:txtDesc}]
    setNotes(newNotes)
  }
  return (
    <div className = "relative w-[100vw] h-screen mx-auto font-sans bg-gradient-to-r from-green-400 to-blue-500 space-y-3">
      <div className = "pt-3 text-center space-y-4">
        <h1 className = "text-white text-4xl mx-auto bg-gray-500 w-max p-2 rounded-xl bg-opacity-80">📃Stick Your Note📃</h1>
        <Button addNotes = {addNotes} btnTxt = "ADD NOTE"/>
      </div>
      <Modal trigger = {popUp} click = {close} handleSubmit = {handleSubmit}/>
      {/* Notes Container*/}
      <div id='board' className = "flex mx-auto flex-wrap gap-4 container w-full mx-6 p-2">
        {notes.map((e)=> {
          return <Notes key = {e.id} title = {e.title} description = {e.desc}/>
        })}
      </div>
    </div>
  )
}

export default App
