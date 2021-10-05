import React, {useState, useRef} from 'react'
import Button  from './components/Button'
import Modal from './components/Modal'
import Notes from './components/Notes'


const App: React.FC = () => {
  const [num,setNum] = useState<number>(2)
  const [id,setID] = useState<number | null>()
  const [titleValue,setTitleValue] = useState<string>()
  const [descValue,setDescValue] = useState<string>()
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
    if(id === null) {
      setNum((num) => num = num+1)
      const title = refTitle.current.value
      const desc = refDesc.current.value
      const newNotes = [...notes,{id:num,title,desc}]
      setNotes(newNotes)
  }
  else {
    notes.map(e => {
      if (e.id === id) {
        e.title = titleValue
        e.desc = descValue
      }
    })
  }
  setID(null)
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
    <div className = "relative w-screen h-screen pb-24 font-sans bg-gradient-to-r from-green-400 to-blue-500 space-y-3">
      <div className = "pt-3 text-center space-y-4">
        <h1 className = "text-white text-4xl mx-auto bg-gray-500 w-max p-2 rounded-xl bg-opacity-80">📃Stick Your Note📃</h1>
        <Button addNotes = {addNotes} btnTxt = "ADD NOTE"/>
      </div>
      <Modal trigger = {popUp} click = {close} handleSubmit = {handleSubmit} 
      refTitle = {refTitle} refDesc = {refDesc} titleChange = {(e:any)=> {titleChange(e)}}
      descChange = {(e:any) => {descChange(e)}} titleValue = {titleValue} descValue = {descValue}/>
      {/* Notes Container*/}
      <div id='board' className = "container w-full mx-auto">
        <div className = 'flex flex-wrap justify-center md:grid-cols-3 lg:grid-cols-6 gap-3 '>
          {notes.map((e)=> {
            return <Notes key = {e.id} title = {e.title} description = {e.desc}
            removeNote = {() => {removeID(e.id)}} editNote = {()=>addNotes(e.id,e.title,e.desc)}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
