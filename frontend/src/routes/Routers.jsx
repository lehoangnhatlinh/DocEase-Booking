import Home from '../pages/Home'
import Services from '../pages/Services'
import AboutUs from '../pages/AboutUs'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Doctors from '../pages/Doctors.jsx/Doctor'
import DoctorDetails from '../pages/Doctors.jsx/DoctorDetails'

import { Route, Routes } from 'react-router-dom'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/doctors' element={<Doctors/>} />
      <Route path='/doctor/:id' element={<DoctorDetails/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Signup/>} />
      <Route path='/aboutus' element={<AboutUs/>} />
      <Route path='/services' element={<Services/>} />
    </Routes>
  )
}

export default Routers