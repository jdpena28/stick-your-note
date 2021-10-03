import React, {useState, useRef,useEffect} from 'react'
import Button  from './components/Button'
import Modal from './components/Modal'
import Notes from './components/Notes'


const App: React.FC = () => {
  const [num,setNum] = useState<number>(2)
  const [popUp,setPopUp] = useState<boolean>(false)
  const [notes,setNotes] = useState<note[]>([
    {
    id: 0,
    title: 'How to add Notes?',
    desc: 'Click ADD NOTE button and type the title and description for your notes'
    },
    {
      id: 1,
      title: 'How to edit Notes?',
      desc: 'Double Click the edit icon to edit text content'
    }
])
  
  const addNotes = () => {
    setPopUp(true)
  }
  const close = () => {
    setPopUp(false)
  }

  const handleSubmit = (e:any) => {
    e.preventDefault()
    setNum((num) => num = num+1)
    const txtTitle = e.target.text.value
    const txtDesc = e.target.description.value
    const newNotes = [...notes,{id:num,title:txtTitle,desc:txtDesc}]
    setNotes(newNotes)
  }

  const removeID = (id:number|undefined) => {
    const removeID = notes.filter(element => {
      return element.id !== id
    })
    setNotes(removeID)
  }
  const refTitle = useRef<any>()
  const refDesc = useRef<any>() 

 const editNote = (title:string,desc:string) => {
    setPopUp(true)
    refTitle.current.value = title
    refDesc.current.value = desc
  }

 

  return (
    <div className = "relative w-screen h-full pb-24 font-sans bg-gradient-to-r from-green-400 to-blue-500 space-y-3">
      <div className = "pt-3 text-center space-y-4">
        <h1 className = "text-white text-4xl mx-auto bg-gray-500 w-max p-2 rounded-xl bg-opacity-80">📃Stick Your Note📃</h1>
        <Button addNotes = {addNotes} btnTxt = "ADD NOTE"/>
      </div>
      <Modal trigger = {popUp} click = {close} handleSubmit = {handleSubmit} refTitle = {refTitle} refDesc = {refDesc}/>
      {/* Notes Container*/}
      <div id='board' className = "container w-full mx-auto">
        <div className = 'flex flex-wrap justify-center md:grid-cols-3 lg:grid-cols-6 gap-3 '>
          {notes.map((e)=> {
            return <Notes key = {e.id} title = {e.title} description = {e.desc}
            removeNote = {() => {removeID(e.id)}} editNote = {() => editNote(e.title,e.desc)}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
