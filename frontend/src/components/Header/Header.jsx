import {useEffect, useRef} from 'react'
import logo from '../../assets/images/logo.png'
import { NavLink, Link } from 'react-router-dom'

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
              <h2 className='line-through'>Hihi</h2>
            </div>

            {/* ========= menu  ========= */}
            <div className="navigation">
              <ul className="menu flex items-center gap-[2.7rem]">
                {navLink.map((item, index) => 
                  <li key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) => {
                        navClass.isActive
                          ? "text-primaryColor text-[16px] leading-7 font-[600]"
                          : "text-textColor text-[16px] leading-7 font-[500]";
                      }}
                    >
                      {item.display}
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header