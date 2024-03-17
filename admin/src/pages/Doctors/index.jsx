import React, {useState, useEffect} from 'react';
import DashboardHeader from '../../components/DashboardHeader';

import {calculateRange, sliceData} from '../../utils/table-pagination';
import all_doctors from '../../constants/doctors';

import '../styles.css';
import DoneIcon from '../../assets/icons/done.svg';
import CancelIcon from '../../assets/icons/cancel.svg';
import RefundedIcon from '../../assets/icons/refunded.svg';
import BlockIcon from '../../assets/icons/icons8-block.svg'
import DoctorForm from '../../components/Form/DoctorForm';

function Doctors ({btnText}) {
    const [search, setSearch] = useState('');
    const [doctors, setDoctors] = useState(all_doctors);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);

    useEffect(() => {
        setPagination(calculateRange(all_doctors, 5));
        setDoctors(sliceData(all_doctors, page, 5));
    }, []);

    // Search
    const __handleSearch = (event) => {
        setSearch(event.target.value);
        if (event.target.value !== '') {
            let search_results = doctors.filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase()) ||
                item.specialization.toLowerCase().includes(search.toLowerCase())
            );
            setDoctors(search_results);
        }
        else {
            __handleChangePage(1);
        }
    };

    // Change Page 
    const __handleChangePage = (new_page) => {
        setPage(new_page);
        setDoctors(sliceData(all_doctors, new_page, 5));
    }

    return (
      <div className="dashboard-content">
        <DashboardHeader />

        <div>
          <button className="dashbord-content-btn">CREATE DOCTOR</button>
        </div>
        <div className="dashboard-content-container">
          <div className="dashboard-content-header">
            <h2>Doctor List</h2>
            <div className="dashboard-content-search">
              <input
                type="text"
                value={search}
                placeholder="Search.."
                className="dashboard-content-input"
                onChange={(e) => __handleSearch(e)}
              />
            </div>
          </div>

          <table>
            <thead>
              <th>ID</th>
              <th>COSTUMER</th>
              <th>SPECIALIZATION</th>
              <th>EMAIL</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </thead>

            {doctors.length !== 0 ? (
              <tbody>
                {doctors.map((doctor, index) => (
                  <tr key={index}>
                    <td>{doctor.id}</td>
                    <td>
                      <div>
                        <img
                          src={doctor.avatar}
                          className="dashboard-content-avatar"
                          alt={doctor.name}
                        />
                        <span>{doctor.name}</span>
                      </div>
                    </td>
                    <td>{doctor.specialization}</td>
                    <td>{doctor.email}</td>

                    <td>
                      <div>
                        {doctor.status === "Approved" ? (
                          <img
                            src={DoneIcon}
                            alt="paid-icon"
                            className="dashboard-content-icon"
                          />
                        ) : doctor.status === "Canceled" ? (
                          <img
                            src={CancelIcon}
                            alt="canceled-icon"
                            className="dashboard-content-icon"
                          />
                        ) : doctor.status === "Pendding" ? (
                          <img
                            src={RefundedIcon}
                            alt="refunded-icon"
                            className="dashboard-content-icon"
                          />
                        ) : null}
                        <span>{doctor.status}</span>
                      </div>
                    </td>

                    <td>
                      <img
                        src={BlockIcon}
                        alt="block-icon"
                        className="dashboard-content-block"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : null}
          </table>

          {doctors.length !== 0 ? (
            <div className="dashboard-content-footer">
              {pagination.map((item, index) => (
                <span
                  key={index}
                  className={item === page ? "active-pagination" : "pagination"}
                  onClick={() => __handleChangePage(item)}
                >
                  {item}
                </span>
              ))}
            </div>
          ) : (
            <div className="dashboard-content-footer">
              <span className="empty-table">No data</span>
            </div>
          )}
        </div>
      </div>
    );
}

export default Doctors;