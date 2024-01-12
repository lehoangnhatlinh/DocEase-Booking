import logo from '../../assets/images/logo.png'
import userImg from '../../assets/images/avatar-icon.png'
import { NavLink, Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa"

const navLink = [
  {
    path: '/home',
    display: 'Home'
  },

  {
    path: '/doctors',
    display: 'Find a Doctor'
  },

  {
    path: '/services',
    display: 'Services'
  },

  {
    path: '/contact',
    display: 'Contact'
  },
]

const Header = () => {
  return (
    <header>
      <div className="header flex items-center">
        <div className="container">
          <div className="flex justify-between items-center">
            {/* ========= logo  ========= */}
            <div>
              <img src={logo} alt="" />
            </div>

            {/* ========= menu  ========= */}
            <div className="navigation">
              <ul className="menu flex items-center gap-[2.7rem]">
                {navLink.map((items, index) => (
                  <li key={index}>
                    <NavLink
                      to={items.path}
                      className={({ isActive }) =>
                        isActive
                          ? "text-primaryColor text-[16px] leading-7 font-[600]"
                          : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                      }
                    >
                      {items.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* ========= nav right  ========= */}
            <div className='flex items-center gap-4'>
              <div className='hidden'>
                <Link to="/">
                  <figure className='w-[35px] h-[35px] rounded-full'>
                    <img src={userImg} className='w-full rounded-full' alt="" />
                  </figure>
                </Link>
              </div>

              <Link to="/login">
                 <button className='btn my-3 py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>
                    Login
                  </button>     
              </Link> 

              <span className='md:hidden'>
                <FaBars className='w-6 h-6 cursor-pointer' />
              </span>       
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header