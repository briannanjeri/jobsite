import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';


const Footer = () => {
  return (

    <div>
    <div className="newsletter-form">
   <h3>Subscribe to Our Newsletter</h3>
   <form>
     <input type="email" placeholder="Enter your email" />
     <button type="submit">Subscribe</button>
   </form>
 </div>

 <div className="resume-form">
   <h3>Submit Your Resume</h3>
   <form>
     <input type="text" placeholder="Enter your name" />
     <input type="email" placeholder="Enter your email" />
     <input type="file" />
     <button type="submit">Submit</button>
   </form>
 </div>
    <footer className='footer'>

        <div className='company'>
         <h2>Who We Are</h2>
         <a href='#'>About us</a>
         <a href='#'>Our Team</a>
         <a href='#'>career</a>
         <a href='#'>Partners</a>
         <a href='#'>Press</a>
         <a href='#'>Investors</a>

        </div>
      <div className='connect'>
        <h2>Connect with us</h2>
        <a href='#'><i class="fa fa-Pinterest"><FaPinterest/></i></a>
        <a href='#'><i class="fa fa-instagram"><FaInstagram/></i></a>
        <a href='#'><i class="fa fa-twitter"><FaTwitter/></i> </a>
        <a href='#'><i class="FaFacebook"><FaFacebook/></i> </a>  
        <a href='#'><i class="<FaLinkedin />"><FaLinkedin /></i> </a> 
      </div>

      <div className='help'>
        <h2>Help Center</h2>
        <a href='#'>Account</a>
        <a href='#'>Technical Support</a>
        <a href='#'>Troubleshooting</a>
        <a href='#'>User Guides</a>
        <a href='#'>FAQs</a>
        <a href='#'>Billing</a>


      </div>

     <div className='jobseekers'>
        <h2>Job Hunters</h2>
        <a href='#'>Job search tips and strategies</a>
        <a href='#'>Resume and cover letter writing tips</a>
        <a href='#'>Interview preparation and practice</a>
        <a href='#'>Salary negotiation advice</a>
        <a href='#'>Career development and advancement resources</a>
        <a href='#'>Skills and training resources</a>
        <a href='#'>Job seeker success stories and testimonials</a>
        <a href='#'>Industry-specific job trends and insights</a>

     </div>

    </footer>
    </div>

  )
}

export default Footer