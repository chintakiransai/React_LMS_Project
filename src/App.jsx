import './App.css'

import {Route,Routes} from 'react-router-dom'

import RequireAuth from './components/Auth/RequireAuth'
import Aboutus from './pages/Aboutus'
import Contact from './pages/Contact'
import CourseDescription from './pages/Course/CourseDescription'
import CourseList from './pages/Course/CourseList'
import CreateCourse from './pages/Course/CreateCourse'
import Denied from './pages/Denied'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Checkout from './pages/Payment/Checkout'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import ChangePassword from './pages/User/ChangePassword'
import EditProfile from './pages/User/EditProfile'
import ForgotPassword from './pages/User/Forgotpassword'
import ResetPassword from './pages/User/ResetPassword'
import UserProfile from './pages/User/UserProfile'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/aboutus" element={<Aboutus/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/denied" element={<Denied/>}/>
      <Route element={<RequireAuth allowedRoles={["ADMIN","USER"]}/>} >
        <Route path="/profile" element={<UserProfile/>}/>
        <Route path="/editProfile" element={<EditProfile/>}/>
        <Route path='/payment/checkout' element={<Checkout/>}/>
      </Route>
      <Route path="/changePassword" element={<ChangePassword/>}/>
      <Route path="/forgotPassword" element={<ForgotPassword/>}/>
      <Route path="/resetPassword/:resetToken" element={<ResetPassword/>}/>
      <Route path="/courses" element={<CourseList/>}/>
      <Route path="/courses/description" element={<CourseDescription/>}/>
      <Route element={<RequireAuth allowedRoles={["ADMIN"]}/>} >
        <Route path="/courses/create" element={<CreateCourse/>}/>
      </Route>
      <Route path="*" element={<NotFound/>}/>

    </Routes>
    )
}

export default App
