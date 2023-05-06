import { useState } from 'react';
import { AiOutlineGlobal } from 'react-icons/ai';
import { BiBuildingHouse } from 'react-icons/bi';
import { FaRegCalendarAlt, FaStar, FaMoneyBill, FaBriefcase } from 'react-icons/fa';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { FaChevronRight } from 'react-icons/fa';

function Sidebar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleIconClick = () => {
    setShowLinks(!showLinks);
  }

  return (
    <div>
      <div className='sideNav'>
      
        <ul>
          <li>
            <a href='#' className="sidebar-item">
            <i><AiOutlineGlobal/></i>
             <span> Remote </span><i className="arrow-icon"><FaChevronRight/></i>
            </a>
          </li>
          <li>
            <a href='#' className="sidebar-item">
            <i><BiBuildingHouse/></i>
              <span>Hybrid</span> <i className="arrow-icon"><FaChevronRight/></i>
             
            </a>
          </li>
          <li>
            <a href='#' className="sidebar-item">
            <i><FaRegCalendarAlt/></i>
              <span>events and webinars</span> <i className="arrow-icon"><FaChevronRight/></i>
        
            </a>
          </li>
          <li>
            <a href='#' className="sidebar-item">
            <i><BiMessageRoundedDots/></i>
              <span>career advice</span> <i className="arrow-icon"><FaChevronRight/></i>
             
            </a>
           
           <a href='#' className="sidebar-item">
            <i><FaStar/></i>
            <span>Company reviews and ratings</span> <i className="arrow-icon"><FaChevronRight/></i>
            </a>

            <a href='#' className="sidebar-item">
            <i><FaMoneyBill/></i>
            <span>Salary estimator</span>  <i className="arrow-icon"><FaChevronRight/></i>
            </a>
            <a href='#' className="sidebar-item">
            <i><FaBriefcase /> </i>
           <span> Popular job categories</span> <i className="arrow-icon"><FaChevronRight/></i>
            </a>
          </li>
        </ul>

      </div>
    </div>
  )
}
export default Sidebar