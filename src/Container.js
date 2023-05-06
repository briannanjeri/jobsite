import React from 'react'
import jobs from './images/jobs.jpg'

const Container = () => {
  return (
    <div className='container'>
    
    <div className='why-choose'>
    <h2>Why Choose Us?</h2>

    <p>At our job site, we are dedicated to helping jobseekers find their dream job.
         We offer access to thousands of job opportunities across various industries, all in one convenient place.
          Plus, we provide regular updates on the latest job openings in your preferred locations.
            Our team of experts also offers advice and tips to help you ace your job search and interviews.
             Choose us and take the first step towards your dream career!</p>

    <ul>
        <li>Access to thousands of job opportunities across various industries</li>
        <li>User-friendly interface to simplify your job search</li>
        <li>Advanced job search options to help you find your dream job</li>
        <li>Regular updates on the latest job openings in your preferred locations</li>
        <li>Expert advice and tips to help you ace your job search and interviews</li>
    </ul>
    </div>

    <div className="image-container">
        <img src={jobs} alt='why-choose'></img>
      </div>
    </div>
  )
}

export default Container