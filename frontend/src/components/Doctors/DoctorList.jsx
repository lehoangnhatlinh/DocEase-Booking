import React from 'react'
import {doctors} from '../../assets/data/doctor'
import DoctorCard from './DoctorCard'

const DoctorList = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
            doctors.map((doctor) => (<DoctorCard doctor={doctor} key={doctor.id}/>))
        }
    </div>
  )
}

export default DoctorList