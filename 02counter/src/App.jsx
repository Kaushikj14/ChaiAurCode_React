import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)

  // let counter = 5;
  const addValue = ()=>{
    counter=counter+1;
    if(counter>20) {  
      counter=counter;
      alert("Value reached to max limit")
      
    }
    else {setCounter(counter)};
  }

  const removeValue = ()=>{
    if (counter>0) 
    {
      counter = counter-1 ; 
      setCounter(counter)
    }
    else{
      alert("counter reached to its minimum value")
    }
  }

  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button> 
      <br />
      <button onClick={removeValue}>remove value</button>     
    </>
  )
}

export default App
