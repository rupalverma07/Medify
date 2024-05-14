import React from 'react'
import Carausel from '../Carausel/Carausel'
import {drSpecialist} from '../../constant/data'
import './Specialist.css'

const Specialist = () => {
  return (
    <div className='drContainer'>
        <Carausel allData={drSpecialist} type='specialist' />
      
    </div>
  )
}

export default Specialist
