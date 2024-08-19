import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Again = () => {
  return (
    <div>
      <div className='box_again'>
         <FontAwesomeIcon icon={faArrowLeft} /> 
         <Link to="/" className='Page_again'>Quay lại</Link>
         </div>
    </div>
  )
}

export default Again
