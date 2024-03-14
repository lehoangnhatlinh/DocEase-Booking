import { useState } from "react";
// import Loading from "../../components/Loader/Loading";
// import Error from "../../components/Error/Error";
import useGetProfile from "./../../hooks/useFetchData";
import { BASE_URL } from "../../../config"
import Tabs from "./Tabs";
import userImg from "../../assets/images/doctor-img02.png";
import starIcon from "../../assets/images/Star.png";
import DoctorAbout from "../../pages/Doctors/DoctorAbout";
import Profile from "./Profile";
import Appointments from "./Appointments";

const Dashboard = () => {
  const { data } = useGetProfile(
    `${BASE_URL}/doctors/profile/me`
  );
  const [tab, setTab] = useState("overview");
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {/* {loading && !error && <Loading></Loading>}
        {error && !loading && <Error></Error>} */}

        {/* {!loading && !error && ( */}
          <div className="grid md:grid-cols-3 gap-[30px] lg:gap-[50px]">
          <Tabs tab={tab} setTab={setTab}></Tabs>
          <div className="lg:col-span-2">
            {data.isApproved == "pending" && (
              <div className="flex p-4 mb-4 text-yellow-800 bg-yellow-50 rounded-lg">
                <span className="sr-only">Info</span>
                <div className="ml-3 text-sm font-medium">
                  To get approval please complete your profile. We will review
                  manually and approve within 3days.
                </div>
              </div>
            )}

            <div className="mt-8">
              {tab == "overview" && (
                <div>
                  <div className="flex items-center gap-4 mb-10">
                    <figure className="max-w-[200px] max-h-[200px]">
                      <img src={userImg} alt="" className="w-full"></img>
                    </figure>
                    <div>
                      <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-4 lg:py-2 lg: px-6 rounded text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold">
                        {data.specialization}
                      </span>
                      <h3 className="text-[22px] leading-9 font-bold text-headingColor mt">
                        {data.name}
                      </h3>
                      <div className="flex items-center gap-[6px]">
                        <span className="flex items-center gap-[6px] text-headingColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold">
                          <img src={starIcon} alt=""></img>
                          {data.averageRating}
                        </span>
                        <span className="text-textColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold">
                          ({data.totalRating})
                        </span>
                      </div>
                      <p className="text__para font-[15px] lg:max-w-[390px] leading-6">
                        {data?.bio}
                      </p>
                    </div>
                  </div>
                  <DoctorAbout
                    name={data.name}
                    about={data.about}
                    qualifications={data.qualifications}
                    experiences={data.experiences}
                  ></DoctorAbout>
                </div>
              )}
              {tab == "appointments" && (
                <Appointments appointments={data.appointments}></Appointments>
              )}
              {tab == "settings" && <Profile doctorData={data}></Profile>}
            </div>
          </div>
        </div>
        {/* )} */}

        
      </div>
    </section>
  );
};

export default Dashboard;
