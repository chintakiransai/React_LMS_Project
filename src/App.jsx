import './App.css'

import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import {Route,Routes} from 'react-router-dom'

import Aboutus from './pages/Aboutus'
import Home from './pages/Home'

function App() {
  useEffect(()=>{
    toast.success("hello")
  })

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/aboutus" element={<Aboutus/>}/>      
    </Routes>
    )
}

export default App
