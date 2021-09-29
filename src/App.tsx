import React from 'react'
import Button  from './components/Button'
import Notes from './components/Notes'
const App: React.FC = () => {
  return (
    <div className = "w-[100vw] h-screen mx-auto font-sans bg-gradient-to-r from-green-400 to-blue-500">
      <div className = "pt-3 text-center space-y-4">
        <h1 className = "text-white text-4xl mx-auto bg-gray-500 w-max p-2 rounded-xl bg-opacity-80">📃Stick Your Note📃</h1>
        <Button btnTxt = "ADD NOTE"/>
      </div>
      <Notes/>
     </div>
  )
}

export default App
