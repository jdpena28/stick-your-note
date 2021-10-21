import React, {useState, useRef} from 'react'
import {useLocalStorage} from 'usehooks-ts'
import notepad from '../public/notepad.png'
import Button  from './components/Button'
import Footer from './components/Footer'
import Modal from './components/Modal'
import Notes from './components/Notes'


const App: React.FC = () => {
  const [num,setNum] = useState<number>(3)
  const [id,setID] = useState<number|undefined>(0)
  const [titleValue,setTitleValue] = useState<string>()
  const [descValue,setDescValue] = useState<string>()
  const [popUp,setPopUp] = useState<boolean>(false)

  const [notes,setNotes] = useLocalStorage<note[]>('notes',[
    {
    id: 1,
    title: 'How to add Notes?',
    desc: 'Click ADD NOTE button and type the title and description for your notes'
    },
    {
      id: 2,
      title: 'How to edit Notes?',
      desc: 'Click the edit icon to edit text content'
    }
])
  const addNotes = (id?:number,title?:string,desc?:string) => {
    setPopUp(true)
    setID(id)
    setTitleValue(title)
    setDescValue(desc)
  }
  const close = () => {
    setPopUp(false)
  }

  const handleSubmit = (e:any) => {
    e.preventDefault()
    console.log(id)
    if(id === 0) {
      setNum((num) => num = num+1)
      const title = refTitle.current.value
      const desc = refDesc.current.value
      const newNotes = [...notes,{id:num,title,desc}]
      setNotes(newNotes)
      setPopUp(false)
  }
  else {
   notes.map(e => {
      if (e.id === id) {
        e.title = titleValue
        e.desc = descValue
        setPopUp(false)
      }
    })
    setNotes(notes)   
  }
  setID(0)
}
  const removeID = (id:number|undefined) => {
    const removeID = notes.filter(element => {
      return element.id !== id
    })
    setNotes(removeID)
  }
  
  const refTitle = useRef<any>()
  const refDesc = useRef<any>() 

  const titleChange = (e:any) => {
    setTitleValue(e.target.value)
  }

  const descChange = (e:any) => {
    setDescValue(e.target.value)
  }


  return (
    <div className = "relative w-screen min-h-screen space-y-3 bg-container pb-20">
      <div className = "pt-3 text-center space-y-4">
        <h1 className = "font-secondary text-4xl mx-auto" id = 'h1title'>Stick Your Note <img className = 'inline pb-2' src = {notepad} alt="notepad icon" width = {36} /></h1>
        <Button addNotes = {()=>{addNotes(0)}} btnTxt = "ADD NOTE"/>
      </div>
      <Modal trigger = {popUp} click = {close} handleSubmit = {handleSubmit} 
      refTitle = {refTitle} refDesc = {refDesc} titleChange = {(e:any)=> {titleChange(e)}}
      descChange = {(e:any) => {descChange(e)}} titleValue = {titleValue} 
      descValue = {descValue} submitBtnTxt = {!id ? 'Add':'Edit'}/>
      {/* Notes Container*/}
      <div id='board' className = "container w-full mx-auto">
        <div className = 'flex flex-wrap justify-center md:grid-cols-3 lg:grid-cols-6 gap-3'>
          {notes.map(e => {
            return <Notes key = {e.id} title = {e.title} description = {e.desc}
            removeNote = {() => {removeID(e.id)}} editNote = {()=>addNotes(e.id,e.title,e.desc)}/>
          })}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default App
