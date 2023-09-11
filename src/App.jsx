import './App.css'

import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
function App() {
  useEffect(()=>{
    toast.success("Success")
  })

  return (
    <h1 className="text-3xl font-bold underline">
      APP
    </h1>
    )
}

export default App
