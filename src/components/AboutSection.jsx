import React from 'react'

import '../styles/about-section.css'

const AboutSection = ({jobDetailsFromCompany, jdLink}) => {
  return (
    <>
      <div className='about-company'>
        About Company:
      </div>
      <div className='about-container'>
        <div className='about-title'>
          About us
        </div>
        <div className='about-description'>
          {jobDetailsFromCompany}
        </div>
        <div className='view-job-container'>
          <a href={jdLink} target='_blank' rel='noreferrer' className='view-job'>
            View job
          </a>
        </div>
      </div>
    </>
  )
}

export default AboutSection