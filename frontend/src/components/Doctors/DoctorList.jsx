import React from "react";
import DoctorCard from "./DoctorCard";
import { BASE_URL } from "../../../config";
import uesFetchData from "../../hooks/useFetchData";
import Loader from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

const DoctorList = () => {
  const {data:doctors, loading, error} = uesFetchData(`${BASE_URL}/doctors`)

  return (
    <>
    {loading && <Loader/>}
    {error && <Error/> }
    {!loading && !error &&
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {doctors.map((doctor) => (
        <DoctorCard doctor={doctor} key={doctor._id} />
      ))}
    </div>}
    </>
  );
};

export default DoctorList;
