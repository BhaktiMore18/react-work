import { useState } from 'react' 

import './App.css'
//now if we increment the counter it will be printed on the console but wont update on web page
//as the control is not going on each place we are calling variable counter right?
//here is when state comes in the picture

//any change in the state will re-render the page  

function App() {
  // let counter = 0;
  //we can give any name instead of counter and setCounter

  const [counter, setCounter]= useState(0) 

  //inside useState you will give the value of variable counter, be it any value or of any type according to the requirements
  //useState returns you an array, so we have to store it in array like structure and 
  //first we are passing variable on which we are operating and then function (for operation)


  // const addValue = () => {
  //   counter = counter+1
  //   console.log(counter) 
  // } //now this wont work while using state bacause it returns an object
  //so we can do somthing like this 
  const addValue = () => {
    //if you try to run this, assumption is value will be updated for 4 times but there is concept 
    //called batchng in react , if you are taking same value and performing same operation on it , it wont support that lines, and will
    //perform the operation one time only 

    //but to avoid batching we use callback functions , it takes prev value of the variable and performs operation on it
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)

    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)

  }
  
  const removeValue = () => {
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>Counter Application using React + Vite</h1>
      <h2>Counter value : {counter}</h2>
      <button
       onClick = {addValue}>
        Add Value
        </button> {" "}
      <button
      onClick = {removeValue}>
        remove Value
        </button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
