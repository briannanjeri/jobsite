import React from 'react'
import { RiMenu3Line } from 'react-icons/ri';


const Nav = () => {
  return (
    <div>
        <nav className='top-navbar'>
        <div className="logo">
          <span className="letter-rm">RM</span>
          <span>Recruit</span>
          <span>M</span>

        </div>
        <div><RiMenu3Line/>RECRUITM</div>
          <div className='login'>
         <div><a href='#'>Login</a></div>
           <a href='#'>Sign up</a>
           </div>
        </nav>
    </div>
  )
}

export default Nav