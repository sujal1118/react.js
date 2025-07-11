import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username: "sujal verma",
    age: 21
  }
  let myarr = [1,3,5,6,3]

  return (
    <>
     <h1 className = 'bg-green-400 text-black p-4 roundeed-xl'> tailwind tag</h1>
     <Card username = "chaiaurcode" btnText = "click me"/>
     <Card username = "sujalverma"  />
    </>
  )
}

export default App
