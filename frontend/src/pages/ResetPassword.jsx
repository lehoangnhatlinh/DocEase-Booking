import {useState} from 'react'

const ResetPassword = () => {
    const [formData, setFormData] = useState({
        newPass : '', 
        confirmPass : ''
    }); 

    const handleChangeInput = (event) => {
        setFormData ({... formData, [event.target.name]: event.target.value}); 
    }

  return (
    <section className="banner_section p-5 lg:px-0">
      <div className="w-full max-w-[500px] mx-auto rounded-lg shadow-lg md:p-10">
        <h3 className="text-headingColor text-[28px] text-center leading-9 font-bold mb-10">
          Reset Password
        </h3>

        <form className="py-2 lg:py-4">
          <div className="mb-4">
            <input
              type="password"
              placeholder="New password"
              name="newPass"
              value={formData.fullName}
              onChange={handleChangeInput}
              className="w-full border-b border-solid border-slate-300 px-3 py-3 md:ml-5
                  focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor
                placeholder:text-textColor rounded-md cursor-pointer"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              placeholder="Confirm password"
              name="confirmPass"
              value={formData.fullName}
              onChange={handleChangeInput}
              className="w-full border-b border-solid border-slate-300 px-3 py-3 md:ml-5
                  focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor
                placeholder:text-textColor rounded-md cursor-pointer"
              required
            />
          </div>
          <div className="mt-7 flex items-center justify-center">
            <button type='submit' className="py-[10px] px-4 w-[50%] bg-primaryColor text-white leading-[30px] text-[18px] rounded-lg">
                Reset Password
            </button>
               
          </div>
        </form>
      </div>
    </section>
  );
}

export default ResetPassword