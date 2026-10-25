import { useState } from 'react'
import './App.css'

function App() {

const [addCounter, setAddCounter] = useState(15)
const [removeCounter, setRemoveCounter] = useState(15)

  // let counter = 15

  const addValue = () =>{
    // console.log("Clicked",counter);
    //counter = counter + 1
    if(addCounter < 20){
    setAddCounter(addCounter + 1)
    }
  }

  const removeValue = () =>{
    // console.log("clicked",counter)
    if (removeCounter >0){
    setRemoveCounter(removeCounter - 1)
  }
}

  return (
    <>
    <h1>Chai aur react </h1>
    <h2>Counter value: {addValue} </h2>
    <br />
    <button onClick={addValue}>Add value: {addCounter}</button>
    <br />
    <button onClick={removeValue}>Remove value: {removeCounter} </button>
    <p>Footer Add: {addCounter}</p>
    <p>Footer Remove: {removeCounter}</p>
    </>
  )
}

export default App
