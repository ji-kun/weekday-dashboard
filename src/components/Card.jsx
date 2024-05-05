import React, { useCallback } from 'react'

import BlurImage from '../images/blur-image.webp'
import '../styles/card.css'

const Card = ({job}) => {
  const capitalize = useCallback((string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }, [])

  return (
    <div className='card'>
      <div className='posted-at'>
        ⏳ Posted 4 days ago
      </div>
      <div className='card-header'>
        <img src={job.logoUrl} alt="company-logo" className='header-image' />
        <div className='header-texts'>
          <div className='header-title'>
            {job.companyName}
          </div>
          <div className='header-subtitle'>
            {capitalize(job.jobRole)}
          </div>
          <div className='header-subtext'>
            {capitalize(job.location)} 
            {job.minExp || job.maxExp
              ? <> | Exp: {job.minExp ? <>{job.minExp} - </>: null}{job.maxExp} years</>
              : null
            }
          </div>
        </div>
      </div>
      <div className='salary'>
        Estimated Salary: ₹
        {job.minJdSalary ? <>{job.minJdSalary} - </>: null}
        {job.maxJdSalary} LPA ✅
      </div>
      <div className='about-company'>
        About Company:
      </div>
      <div className='about-container'>
        <div className='about-title'>
          About us
        </div>
        <div className='about-description'>
          {job.jobDetailsFromCompany}
        </div>
        <div className='view-job-container'>
          <a href={job.jdLink} target='_blank' rel='noreferrer' className='view-job'>
            View job
          </a>
        </div>
      </div>
      {
        job.minExp
        ?
        <div className='info-container'>
          <div className='info-title'>
           Minimum Experience
          </div>
          <div className='info-subtitle'>
            {job.minExp} years
          </div>
        </div>
        : null
      }
        <div className='buttons-container'>
          <button href={job.jdLink} className='buttons apply-button'>
            ⚡ Easy Apply
          </button>
          <div className='buttons referral-button'>
            <img src={BlurImage} alt="locked-icon" className='referral-icon' />
            Unlock referral asks
          </div>
        </div>
    </div>
  )
}

export default Card