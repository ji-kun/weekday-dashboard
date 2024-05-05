import React from 'react'

import AboutSection from './AboutSection';
import CardButtons from './CardButtons';
import CardHeader from './CardHeader';
import '../styles/card.css'

const Card = ({job}) => {
  return (
    <div className='card'>
      <div className='posted-at'>
        ⏳ Posted 4 days ago
      </div>
      <CardHeader job={job} />
      <div className='salary'>
        Estimated Salary: ₹
        {job.minJdSalary ? <>{job.minJdSalary} - </>: null}
        {job.maxJdSalary} LPA ✅
      </div>
      <AboutSection jobDetailsFromCompany={job.jobDetailsFromCompany} jdLink={job.jdLink} />
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
      <CardButtons jdLink={job.jdLink} />
    </div>
  )
}

export default Card