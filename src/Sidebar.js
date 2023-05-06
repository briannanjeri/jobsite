import { AiOutlineGlobal } from 'react-icons/ai';
import { BiBuildingHouse } from 'react-icons/bi';
import { FaRegCalendarAlt, FaStar, FaMoneyBill, FaBriefcase } from 'react-icons/fa';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { FaChevronRight } from 'react-icons/fa';

function Sidebar() {
  

  return (
    <div>
      <div className='sideNav'>
        <ul>
          <li>
            <button className="sidebar-item">
              <i><AiOutlineGlobal/></i>
              <span>Remote</span>
              <i className="arrow-icon"><FaChevronRight/></i>
            </button>
          </li>
          <li>
            <button className="sidebar-item">
              <i><BiBuildingHouse/></i>
              <span>Hybrid</span>
              <i className="arrow-icon"><FaChevronRight/></i>
            </button>
          </li>
          <li>
            <button className="sidebar-item">
              <i><FaRegCalendarAlt/></i>
              <span>Events and Webinars</span>
              <i className="arrow-icon"><FaChevronRight/></i>
            </button>
          </li>
          <li>
            <button className="sidebar-item">
              <i><BiMessageRoundedDots/></i>
              <span>Career Advice</span>
              <i className="arrow-icon"><FaChevronRight/></i>
            </button>
            <button className="sidebar-item">
              <i><FaStar/></i>
              <span>Company Reviews and Ratings</span>
              <i className="arrow-icon"><FaChevronRight/></i>
            </button>
            <button className="sidebar-item">
              <i><FaMoneyBill/></i>
              <span>Salary Estimator</span>
              <i className="arrow-icon"><FaChevronRight/></i>
            </button>
            <button className="sidebar-item">
              <i><FaBriefcase/></i>
              <span>Popular Job Categories</span>
              <i className="arrow-icon"><FaChevronRight/></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Sidebar