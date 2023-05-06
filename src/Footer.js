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
          <button>About us</button>
          <button>Our Team</button>
          <button>career</button>
          <button>Partners</button>
          <button>Press</button>
          <button>Investors</button>
        </div>

        <div className='connect'>
          <h2>Connect with us</h2>
          <button><FaPinterest/></button>
          <button><FaInstagram/></button>
          <button><FaTwitter/></button>
          <button><FaFacebook/></button>
          <button><FaLinkedin/></button>
        </div>

        <div className='help'>
          <h2>Help Center</h2>
          <button>Account</button>
          <button>Technical Support</button>
          <button>Troubleshooting</button>
          <button>User Guides</button>
          <button>FAQs</button>
          <button>Billing</button>
        </div>

        <div className='jobseekers'>
          <h2>Job Hunters</h2>
          <button>Job search tips and strategies</button>
          <button>Resume and cover letter writing tips</button>
          <button>Interview preparation and practice</button>
          <button>Salary negotiation advice</button>
          <button>Career development and advancement resources</button>
          <button>Skills and training resources</button>
          <button>Job seeker success stories and testimonials</button>
          <button>Industry-specific job trends and insights</button>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
