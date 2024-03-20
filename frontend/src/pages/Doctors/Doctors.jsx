<<<<<<< Updated upstream
import { doctors } from "../../assets/data/doctor";
import DoctorCard from "../../components/Doctors/DoctorCard";
=======
import DoctorCard from "./../../components/Doctors/DoctorCard";
import { BASE_URL } from "../../../config";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import { useEffect, useState } from "react";
>>>>>>> Stashed changes

const Doctors = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedQuery(query.trim());
    }, 700);

    return () => clearTimeout(timeout);
  }, [query]);

  const { data: doctors, loading, error } = useFetchData(
    `${BASE_URL}/doctors?search=${debouncedQuery}`
  );

  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Find a Doctor</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center-justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-non cursor-pointer placeholder:text-textColor"
              placeholder="Search doctor by name or specification"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="btn mt-0 rounded-[0px] rounded-r-md"
              onClick={() => setQuery(query.trim())}
            >
              Search
            </button>
          </div>
        </div>
      </section>
      {loading && <Loader />}
      {error && <Error />}
      {!loading && !error && (
        <section>
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {doctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Doctors;
