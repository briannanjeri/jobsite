import React from 'react'
import mohit from './images/mohit.png'
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';



const Testimonial = () => {
  return (
    <section id="Tribute">
    <div class="title-text">
        <p>Tribute</p>
        <h1>What client says</h1>
    </div>
    <div class="testimonial-row">
        <div class="testimonial-colm">
            <div class="user">
                <img src={mohit} alt="why-choose"/>

                <div class="user-info">
                    <h4>mohit joshi<i class="fa fa-Pinterest"><FaPinterest/></i> </h4>
                    <small>@mohit joshi</small>
    
                </div>

            </div>
            
            <p>The regular job updates were really helpful in keeping me up-to-date on the latest openings in my field. 
                I would definitely recommend this site to other jobseekers.
            </p>
        </div>
        <div class="testimonial-colm">
            <div class="user">
            <img src={mohit} alt="why-choose"/>

                <div class="user-info">
                    <h4>mohit joshi<i class="fa fa-instagram"><FaInstagram/></i> </h4>
                    <small>@mohit joshi</small>
    
                </div>

            </div>
            <p>I was skeptical at first, but this site exceeded my expectations. 
                I got multiple job offers in my preferred location within just a few weeks of signing up
            </p>
        </div>
        <div class="testimonial-colm">
            <div class="user">
            <img src={mohit} alt="why-choose"/>

                <div class="user-info">
                    <h4>mohit joshi<i class="fa fa-twitter"><FaTwitter/></i> </h4>
                    <small>@mohit joshi</small>
    
                </div>

            </div>
            <p>I found my dream job thanks to this website! 
                The job search was so easy and the expert advice really helped me ace the interview
            </p>
        </div>
        
    </div>
</section>

  )
}

export default Testimonial