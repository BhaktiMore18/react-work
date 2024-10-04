import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

function App() {
     
  const [color, setColor] = useState('olive')

  // function changeColor(color){
  //          setColor(color)
  // }

  return (
    <div className='w-full h-screen duration-200 bg-black' style = {{backgroundColor: color }}> 
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button 
          // onClick = {changeColor} //passing callback is important , this wont work
          // onClick = {() => changeColor('green')} //instead of using other function we can directly use setColor function in state
          onClick = {() => setColor('green')}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black' 
          style={{backgroundColor : 'Green'}}
          >Green</button>
          <button 
          onClick = {() => setColor('purple')}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
          style={{backgroundColor: 'purple'} }
          >Purple</button>
           
          <button 
          onClick = {() => setColor('orange')}
          className = 'outline-none px-4 py-1 rounded-full shadow-lg text-black'
          style = {{backgroundColor: 'orange'}}
          >Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App
