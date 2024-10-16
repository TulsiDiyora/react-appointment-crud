import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NotData from '../../assets/notdata.avif';
import './View.css';

function View({ storage, handleEditData }) {
    const [filterStatus, setFilterStatus] = useState('all'); 
    const navigate = useNavigate();

    const backButton = () => {
        navigate('/'); 
    };

    const EditData = (id) => {
        const updatedRec = storage.find((rec) => rec.id === id);
        handleEditData(updatedRec); 
    };

    const filteredStorage = storage.filter((rec) => {
        if (filterStatus === 'all') {
            return true;
        }
        return rec.status === filterStatus;
    });

    return (
       <>
            <h1 className="text-center fw-bold py-4">View</h1>

            <div className="full-width">
                {filteredStorage.length === 0 ? (
                    <div className='no-data text-center'>
                        <p>
                            <img src={NotData} alt="No Data Available" />
                        </p>
                    </div>
                ) : (
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Patient Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Date</th>
                                <th scope="col">Time</th>
                                <th scope="col">Doctor Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Symptoms</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Action</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredStorage.map((data, index) => (
                                <tr key={data.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{data.pname}</td>
                                    <td>{data.email}</td>
                                    <td>{data.contact}</td>
                                    <td>{data.date}</td>
                                    <td>{data.time}</td>
                                    <td>{data.dname}</td>
                                    <td>{data.address}</td>
                                    <td>{data.symptoms}</td>
                                    <td>{data.gender}</td>
                                    <td>
                                        <button className='btn btn-primary' onClick={() => EditData(data.id)}>Edit</button>
                                    </td>
                                    <td>{data.status}</td> 
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            <div className='text-center mt-5'>
                <button className='btn btn-primary' onClick={backButton}>
                    Back to Appointment Form
                </button>
            </div>
       </>
    );
}

export default View;
