import React from 'react'

import BlurImage from '../images/blur-image.webp'
import '../styles/card.css'

const Card = ({showSkills = true}) => {
  return (
    <div className='card'>
      <div className='posted-at'>
        ⏳ Posted 4 days ago
      </div>
      <div className='card-header'>
        <div className='header-image'>
          4
        </div>
        <div className='header-texts'>
          <div className='header-title'>
            FlexWash Technologies
          </div>
          <div className='header-subtitle'>
            Senior Engineer
          </div>
          <div className='header-subtext'>
            India | Exp: 5-5 years
          </div>
        </div>
      </div>
      <div className='salary'>
        Estimated Salary: ₹30 - 60 LPA ✅
      </div>
      <div className='about-company'>
        About Company:
      </div>
      <div className='about-container'>
        <div className='about-title'>
          About us
        </div>
        <div className='about-description'>
          Trumio is the world's first University Projects Ecosystem platform enabling global clients to harness students, professors, and institutional capabilities to speed priority project execution for their business. Next-generation talent organized as teams with diverse skills, find and deliver impactful outcomes working within a secure project environment on Trumio. With AI- assistance built into each process step - Trumio makes it easy for clients and teams to stay on track, collaborate, and achieve desired project outcomes. Beyond achieving project goals, clients, students, and universities benefit from deeper engagement, a positive reputation, and nurturing a vibrant future talent pipeline. Overall, Trumio's mission is to build an equitable future of work, where client and talent engagement and access are truly democratized.
        </div>
        <div className='view-job-container'>
          <a href="#" className='view-job'>
            View job
          </a>
        </div>
      </div>
      {showSkills
        ?
        <div className='info-container'>
            <div className='info-title'>
              Skills
            </div>
            <div className='skill-chips'>
              <div className='skill-chip'>
                Senior Engineer
              </div>
              <div className='skill-chip'>
                Senior Engineer
              </div>
              <div className='skill-chip'>
                Senior Engineer
              </div>
            </div>
          </div>
        : null
      }
        <div className='info-container'>
          <div className='info-title'>
           Minimum Experience
          </div>
          <div className='info-subtitle'>
            3 years
          </div>
        </div>
        <div className='buttons-container'>
          <button className='buttons apply-button'>
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