import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import { toast } from "react-toastify";
import { BASE_URL } from "../../config";
import signupImg from "../assets/images/signup01.png";
import uploadImageToCloudinary from "../utils/uploadCloudinary";

const Signup = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    photo: selectedFile,
    password: "",
    gender: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const data = await uploadImageToCloudinary(file);

    setPreviewURL(data.url);
    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };

  const submitHandle = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }

      setLoading(false);
      toast.success(message);
      navigate("/login");
      console.log(message);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <section className="px-5 xl:px-0 ">
      <div className="w-[80%] lg:w-[70%] mx-auto rounded-lg border border-solid border-slate-50">
        <div className="rounded bg-light-100 grid grid-cols-1 lg:grid-cols-2">
          <div className="lg:block rounded-l-lg">
            <figure className=" rounded-l-lg">
              <img
                src={signupImg}
                alt=""
                className="w-[90%] h-[650px] rounded-l-lg"
              />
            </figure>
          </div>

          <div className="ml-[-50px] rounded-l-lg lg:pl-16 px-10">
            <h2 className="text-headingColor text-[30px] leading-9 font-bold my-8 text-center">
              Create an <span className="text-primaryColor">account</span>
            </h2>

            <form onSubmit={submitHandle} className="py-4 md:py-8">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border-b border-solid border-slate-300 px-3 py-3 md:ml-5
                  focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor
                placeholder:text-textColor rounded-md cursor-pointer"
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border-b border-solid border-slate-300 px-3 py-3  md:ml-5 
                  focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor
                placeholder:text-textColor rounded-md cursor-pointer"
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full border-b border-solid border-slate-300 px-3 py-3 md:ml-5 
                  focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor
                placeholder:text-textColor rounded-md cursor-pointer"
                  required
                />
              </div>

              <div className="flex justify-between items-center">
                <div className="mb-4 flex items-center gap-2">
                  {selectedFile && (
                    <figure
                      className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor 
                  flex items-center justify-center md:ml-5"
                    >
                      <img
                        src={previewURL}
                        alt=""
                        className="w-full rounded-full w-[60px] h-[60px]"
                      />
                    </figure>
                  )}
                  <div className="relative w-[130px] h-[50px]">
                    <input
                      type="file"
                      name="photo"
                      id="customFile"
                      onChange={handleFileInputChange}
                      accept=".jpg, .png"
                      className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                    />

                    <label
                      htmlFor="customFile"
                      className="absolute top-0 left-0 w-full h-full flex items-center ml-6 px-3 py-[0.375rem] text-[16px] leading-6 
                    overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
                    >
                      Upload photo
                    </label>
                  </div>
                </div>

                <div className="mt-[-20px]">
                  <label className="text-headingColor font-bold text-[16px] leading-7">
                    Gender:
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="text-textColor font-semibold text-[15px] leading-7 px-3 py-3 focus:outline-none"
                    >
                      <option value="select">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </label>
                </div>
              </div>

              <div className="mt-7">
                <button
                  disabled={loading && true}
                  type="submit"
                  className="py-[10px] px-4 w-full bg-primaryColor text-white leading-[30px] text-[18px] rounded-lg md:ml-5 ms:ml-5"
                >
                  {loading ? (
                    <HashLoader size={35} color="#ffffff" />
                  ) : (
                    "Register"
                  )}
                </button>
              </div>

              <p className="mt-5 text-[18px] text-textColor text-center">
                Already have an account?
                <Link
                  to="/login"
                  className="text-primaryColor ml-2 font-medium"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
