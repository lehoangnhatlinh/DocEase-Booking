import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    const [formData, setFormData] = useState({
        email: '', 
        password: ''
    })

    const handleInputChange = (event) => {
        setFormData({...formData, [event.target.name]:event.target.value})
    }

  return (
    <section className="banner_section p-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-lg md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello! <span className="text-primaryColor">Welcome</span> Back 🎉🎉
        </h3>

        <form className="py-4 lg:py-8">
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border-b border-solid border-slate-300 px-3 py-3 
              focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor
              placeholder:text-textColor rounded-md cursor-pointer"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full border-b border-solid border-slate-300 px-3 py-3 
              focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor
              placeholder:text-textColor rounded-md cursor-pointer"
              required
            />
          </div>
          <div className="mt-7">
            <button
              type="submit"
              className="py-[10px] px-4 w-full bg-primaryColor text-white leading-[30px] text-[18px] rounded-lg"
            >
              Login
            </button>
          </div>

          <p className="text-[18px] text-center mt-5 text-textColor">
            Don&apos;t have an account?
            <Link to='/register' className='ml-2 text-primaryColor cursor-pointer'>Register</Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login