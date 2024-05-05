import React, { useCallback } from 'react'

import '../styles/card-header.css'

const CardHeader = ({job}) => {
  const capitalize = useCallback((string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }, [])

  return (
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
  )
}

export default CardHeader