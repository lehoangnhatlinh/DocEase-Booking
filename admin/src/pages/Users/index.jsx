import React, {useState, useEffect} from 'react';
import DashboardHeader from '../../components/DashboardHeader';

import {calculateRange, sliceData} from '../../utils/table-pagination';
import all_patients from '../../constants/patients';

import './patient.style.css';
import DoneIcon from '../../assets/icons/done.svg';
import CancelIcon from '../../assets/icons/cancel.svg';
import RefundedIcon from '../../assets/icons/refunded.svg';
import BlockIcon from '../../assets/icons/icons8-block.svg'


function Users () {
    const [search, setSearch] = useState('');
    const [patients, setPatients] = useState(all_patients);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);

    // useEffect(() => {
    //     setPagination(calculateRange(all_patients, 5));
    //     setPatients(sliceData(all_patients, page, 5));
    // }, []);

    // Search
    const __handleSearch = (event) => {
        setSearch(event.target.value);
        if (event.target.value !== '') {
            let search_results = patients.filter((item) =>
                item.first_name.toLowerCase().includes(search.toLowerCase()) ||
                item.last_name.toLowerCase().includes(search.toLowerCase()) ||
                item.product.toLowerCase().includes(search.toLowerCase())
            );
            setPatients(search_results);
        }
        else {
            // __handleChangePage(1);
        }
    };

    // Change Page 
    // const __handleChangePage = (new_page) => {
    //     setPage(new_page);
    //     setPatients(sliceData(all_patients, new_page, 5));
    // }

    return (
      // <div className='dashboard-content'>
      //     <DashboardHeader
      //         btnText="Create Doctor"  />

      //     <div className='dashboard-content-container'>
      //         <div className='dashboard-content-header'>
      //             <h2>Patients List</h2>
      //             <div className='dashboard-content-search'>
      //                 <input
      //                     type='text'
      //                     value={search}
      //                     placeholder='Search..'
      //                     className='dashboard-content-input'
      //                     onChange={e => __handleSearch(e)} />
      //             </div>
      //         </div>

      //         <table>
      //             <thead>
      //                 <th>ID</th>
      //                 <th>COSTUMER</th>
      //                 <th>SPECIALIZATION</th>
      //                 <th>EMAIL</th>
      //                 <th>STATUS</th>
      //                 <th>ACTIONS</th>
      //             </thead>

      //             {patients.length !== 0 ?
      //                 <tbody>
      //                     {patients.map((patient, index) => (
      //                         <tr key={index}>
      //                         <td>{patient.id}</td>
      //                         <td>
      //                                 <div>
      //                                     <img
      //                                         src={patient.avatar}
      //                                         className='dashboard-content-avatar'
      //                                         alt={patient.name} />
      //                                     <span>{patient.name}</span>
      //                                 </div>
      //                             </td>
      //                             <td>{patient.specialization}</td>
      //                             <td>{patient.email}</td>

      //                             <td>
      //                                 <div>
      //                                     {patient.status === 'Approved' ?
      //                                         <img
      //                                             src={DoneIcon}
      //                                             alt='paid-icon'
      //                                             className='dashboard-content-icon' />
      //                                     : patient.status === 'Canceled' ?
      //                                         <img
      //                                             src={CancelIcon}
      //                                             alt='canceled-icon'
      //                                             className='dashboard-content-icon' />
      //                                     : patient.status === 'Pendding' ?
      //                                         <img
      //                                             src={RefundedIcon}
      //                                             alt='refunded-icon'
      //                                             className='dashboard-content-icon' />
      //                                     : null}
      //                                     <span>{patient.status}</span>
      //                                 </div>
      //                             </td>

      //                             <td>
      //                                 <img  src={BlockIcon} alt='block-icon' className='dashboard-content-block' />
      //                             </td>
      //                         </tr>
      //                     ))}
      //                 </tbody>
      //             : null}
      //         </table>

      //         {patients.length !== 0 ?
      //             <div className='dashboard-content-footer'>
      //                 {pagination.map((item, index) => (
      //                     <span
      //                         key={index}
      //                         className={item === page ? 'active-pagination' : 'pagination'}
      //                         onClick={() => __handleChangePage(item)}>
      //                             {item}
      //                     </span>
      //                 ))}
      //             </div>
      //         :
      //             <div className='dashboard-content-footer'>
      //                 <span className='empty-table'>No data</span>
      //             </div>
      //         }
      //     </div>
      // </div>

      <div className="dashboard-content">
        <DashboardHeader btnText="Create Doctor" />

        <div className="container">
          <div className="dashboard-content-header">
            <h2>Patients List</h2>
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

          <div className="card-container">
            {patients.map((patient, index) => (
              <div key={index} className="card">
                <div className="card-header">
                  <img
                    src={patient.photo}
                    className="dashboard-content-avatar"
                    alt={patient.name}
                  />
                  <div className="info">
                    <span>{patient.name}</span>
                    <p>{patient.email}</p>
                  </div>
                </div>
                <div className="card-body">
                  <div className="action-block">
                    <div className="action-block">
                      <p>Action:</p>
                      <img src={BlockIcon} alt="block-icon" className="" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {patients.length !== 0 ? (
            <div className="dashboard-content-footer">
              {pagination.map((item, index) => (
                <span
                  key={index}
                  className={item === page ? "active-pagination" : "pagination"}
                //   onClick={() => __handleChangePage(item)}
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

export default Users;