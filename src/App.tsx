import React from 'react'
import Button  from './components/Button'
import Notes from './components/Notes'
const App: React.FC<note> = ({id,title,desc}) => {
  const addNotes = () => {
    alert('hello')
  }

  return (
    <div className = "w-[100vw] h-screen mx-auto font-sans bg-gradient-to-r from-green-400 to-blue-500 space-y-3">
      <div className = "pt-3 text-center space-y-4">
        <h1 className = "text-white text-4xl mx-auto bg-gray-500 w-max p-2 rounded-xl bg-opacity-80">📃Stick Your Note📃</h1>
        <Button addNotes = {addNotes} btnTxt = "ADD NOTE"/>
      </div>
      {/* Notes Container*/}
      <div id='board' className = "flex flex-wrap gap-4 justify-center container w-full mx-6 border-2 p-2 border-white">
       <Notes/> 
       <Notes/> 
       <Notes/> 
       <Notes/> 
       <Notes/> 
       <Notes/> 
       <Notes/> 
       <Notes/> 
       <Notes/> 
      </div>
      </div>
  )
}

export default App
