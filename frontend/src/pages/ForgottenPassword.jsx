import { Link } from "react-router-dom";

const ForgottenPassword = () => {
  return (
    <section className="banner_section p-5 lg:px-0">
      <div className="w-full max-w-[500px] mx-auto rounded-lg shadow-lg md:p-10">
        <h3 className="text-headingColor text-[28px] text-center leading-9 font-bold mb-10">
          Get OTP
        </h3>

        <form className="py-2 lg:py-4">
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="w-full border border-solid border-slate-300 px-3 py-3 focus:border-primaryColor
                text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer
                focus:outline-none transition duration-300 ease-in-out"
              //required
            />
          </div>
          <div className="mt-7 flex items-center justify-center">
            {/* <button
              type="submit"
              className="py-[10px] px-4 w-[40%] bg-primaryColor text-white leading-[30px] text-[18px] rounded-lg"
            >
              <Link to='/otp'>Send</Link>
            </button> */}

            <Link type="submit" to='/otp' className="btn py-[10px] px-4 w-[40%] bg-primaryColor hover:bg-primaryColor text-white leading-[30px] text-[18px] rounded-lg">
              Send
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ForgottenPassword;
