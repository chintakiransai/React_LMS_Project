import './App.css'

import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import {Route,Routes} from 'react-router-dom'

import Home from './pages/Home'

function App() {
  useEffect(()=>{
    toast.success("hello")
  })

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>    
    </Routes>
    )
}

export default App
