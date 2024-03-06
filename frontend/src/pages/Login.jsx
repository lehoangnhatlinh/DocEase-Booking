import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { BASE_URL } from "../../config";
import { toast } from "react-toastify"
import {authContext} from '../context/AuthContext.jsx'; 
import HashLoader from "react-spinners/HashLoader.js";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();
  const {dispatch} = useContext(authContext);
  const [error, setError] = useState({}); 

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // const submitHandle = async event => {
  //   event.preventDefault()
  //   setError(LoginValidation(formData)); 
  // }

  const submitHandle = async event => {
    event.preventDefault()
    setLoading(true)

    try {
      const res = await fetch (`${BASE_URL}/auth/login`, {
        method: 'post', 
        headers: {
          'Content-Type':'application/json'
        }, 
        body: JSON.stringify(formData)
      })

      const result = await res.json()

      if(!res.ok) {
        throw new Error(result.message)
      }

      dispatch({
        type: 'LOGIN_SUCCESS', 
        payload: {
          user: result.data, 
          token: result.token, 
          role: result.role
        }
      })

      console.log(result, "login data")

      setLoading(false)
      toast.success(result.message)
      navigate('/home')
      console.log(result.message)
    } catch (error) {
      toast.error(error.message)
      setLoading(false)
    }
  }


  

  return (
    <section className="banner_section p-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-lg md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello! <span className="text-primaryColor">Welcome</span> Back 🎉🎉
        </h3>

        <form onSubmit={submitHandle} className="py-4 lg:py-8">
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
            {error.email && <span className="text-red-600">{error.email}</span>}
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
              {loading ? <HashLoader size={30} color='#fff'/> : 'Login'}
            </button>
          </div>

          <div className="mt-3">
            <Link
              to="/forgotpass"
              className="ml-2 text-primaryColor cursor-pointer mt- text-[18px]"
            >
              Forgotten password?
            </Link>
          </div>

          <p className="text-[18px] mt-5 text-center text-textColor">
            Don&apos;t have an account?
            <Link
              to="/register"
              className="ml-2 text-primaryColor cursor-pointer"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
