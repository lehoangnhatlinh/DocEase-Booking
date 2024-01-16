import Home from '../pages/Home'
import Services from '../pages/Services'
import AboutUs from '../pages/Aboutus'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Doctors from '../pages/Doctors/Doctor'
import DoctorDetails from '../pages/Doctors/DoctorDetails'
import Profile from '../pages/Profile'
import ForgotPassword from '../pages/ForgotPassword'

import { Route, Routes } from 'react-router-dom'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/doctors' element={<Doctors/>} />
      <Route path='/doctor/:id' element={<DoctorDetails/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/forgotpass' element={<ForgotPassword/>} />
      <Route path='/register' element={<Signup/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/aboutus' element={<AboutUs/>} />
      <Route path='/services' element={<Services/>} />
    </Routes>
  )
}

export default Routers