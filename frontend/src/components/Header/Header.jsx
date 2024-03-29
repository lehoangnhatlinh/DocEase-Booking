import {useEffect, useRef, useContext} from 'react'
import logo from '../../assets/images/logo4.png'
import { NavLink, Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa';
import { authContext } from '../../context/AuthContext.jsx';

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
    path: '/aboutus',
    display: 'About'
  },

  {
    path: '/contact',
    display: 'Contact'
  },
]

const Header = () => {

  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(authContext);
  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky_header')
      } else {  
        headerRef.current.classList.remove('sticky_header')
      }
    })
  }

  useEffect (() => {
    handleStickyHeader()
    return() => window.removeEventListener('scroll', handleStickyHeader)
  }, [])

  const toggleMenu = () => menuRef.current.classList.toggle('show_menu')

  return (
    <header>
      <div className="header flex items-center" ref={headerRef}>
        <div className="container">
          <div className="flex justify-between items-center">
            {/* ========= logo  ========= */}
            <div className="flex">
              <img src={logo} alt="" />
            </div>

            {/* ========= menu  ========= */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
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
            <div className="flex items-center gap-4">
              {token && user ? (
                <div>
                  <Link to={`${role === 'doctor' ? '/doctors/profile/me' : 'users/profile/me' }`}>
                    <figure className="w-[45px] h-[45px] rounded-full cursor-pointer">
                      <img
                        src={user?.photo}
                        className="w-full rounded-full w-[45px] h-[45px] "
                        alt=""
                      />
                    </figure>

                    <h2 className='p-2'>{user?.name}</h2>
                  </Link>
                </div>
              ) : (
                <Link to="/login">
                  <button className="btn btn-primary my-3 py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                    Login
                  </button>
                </Link>
              )}

              <span className="md:hidden" onClick={toggleMenu}>
                <FaBars className="w-6 h-6 cursor-pointer" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header