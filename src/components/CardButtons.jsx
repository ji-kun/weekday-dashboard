import React from 'react'

import BlurImage from '../images/blur-image.webp'
import '../styles/card-buttons.css'

const CardButtons = ({jdLink}) => {
  return (
    <div className='buttons-container'>
      <button href={jdLink} className='buttons apply-button'>
        ⚡ Easy Apply
      </button>
      <div className='buttons referral-button'>
        <img src={BlurImage} alt="locked-icon" className='referral-icon' />
        Unlock referral asks
      </div>
    </div>
  )
}

export default CardButtons