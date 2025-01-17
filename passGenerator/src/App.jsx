import { useState , useCallback, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)

  const[numberAllowed, setNumberAllowed] = useState(false)

  const[charAllowed, setCharAllowed] = useState(false)

  const[password, setPassword] = useState('')

  const passwordRef = useRef(null) 

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }


  const generatePassword = useCallback(() =>{
              let pass = ""
              let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcjefghijklmnopqrstuvwxyz"

              if(numberAllowed) str+= "0123456789"
              if(charAllowed) str+= "!@#$%^&*()_+"

              for(let i=0;i<length;i++){
               const char = Math.floor(Math.random() * str.length + 1)
               pass += str.charAt(char)
              }

              setPassword(pass)
  },[length, charAllowed, numberAllowed])

  useEffect(()=>{
    generatePassword()
  },[length, numberAllowed,charAllowed]) //when you change the dependecy array then this callback wont run perfectly





  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'> 
        <h1 className='text-white text-center my-3'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input type="text"
           value = {password}
           className='outline-none w-full py-1 px-3'
           placeholder='Password'
           readOnly
           ref = {passwordRef}
          />
          <button 
          className = 'outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipboard}
          >
            copy
          </button>
        </div>
        <div className='flex text-sm gap-x-5'>
        <div className='flex items-center gap-x-1'>
          <input type="range" 
          min = {6}
          max = {100}
          value = {length} //min and max should be defined
          className="cursor-pointer" 
          onChange = {(e) => setLength(e.target.value)}
          name = ""
          id=""/>
          <label htmlFor="length">Length : {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked = {numberAllowed}
          onChange = {() => {
            setNumberAllowed((prevValue) => !prevValue) //when the checkbox is clicked we are going to reverse the state of previous number allowed variable
            //whenever we are changing previous value, and we want quick results we use callbacks just how we used it here
          }}
          name = ""
          id= ""/>
          <label htmlFor="Number">Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked = {charAllowed}
          onChange = {() => {
            setCharAllowed((prevValue) => !prevValue) //when the checkbox is clicked we are going to reverse the state of previous number allowed variable
            //whenever we are changing previous value, and we want quick results we use callbacks just how we used it here
          }}
          name = ""
          id= ""/>
          <label htmlFor="Characters">Characters</label>
        </div>
        </div>
        
    </div>
  )
}

export default App
