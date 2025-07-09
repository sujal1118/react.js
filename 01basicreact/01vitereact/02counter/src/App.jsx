import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Counter, setCounter] = useState(15)

//let counter =5; 
const addValue = () => {
 Counter =Counter +1;
 setCounter(Counter)
console.log("clicked",Counter);
}
const removeValue = ()=>{
  setCounter(Counter -1);

}
  return (
    <>
      <h1> chai aur madarchod</h1>
      <h2> counter value:{Counter}</h2>  
    
      <button onClick={addValue}> add value</button>
      <br />
      <button
      onClick = {removeValue}> remove value</button>
      <p> footer: {Counter}</p>

    </>
  )
}

export default App
