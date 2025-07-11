import { useState } from 'react'
import viteLogo from '/vite.svg'

function App() {

  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img src={viteLogo} className="w-24 h-24 mb-4" alt="Vite Logo" />
      <h1 className="text-3xl font-bold text-blue-600">Hello from Tailwind + React</h1>
      <p className="text-gray-700 mt-2">You're running Vite successfully!</p>
    </div>
  )
}

export default App
