import React from 'react';
import Board from './components/board';


const App:React.FC = () => {
    return (
      <div className = "w-full h-screen" id = "body-bg">
      <Board/>
      </div>
    )
  }
  
export default App;
