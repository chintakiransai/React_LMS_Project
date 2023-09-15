import './App.css'

import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import {Route,Routes} from 'react-router-dom'

import Aboutus from './pages/Aboutus'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Signin from './pages/signin'
import Signup from './pages/Signup'

function App() {
  useEffect(()=>{
    toast.success("hello")
  })

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/aboutus" element={<Aboutus/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="*" element={<NotFound/>}/>      
    </Routes>
    )
}

export default App
