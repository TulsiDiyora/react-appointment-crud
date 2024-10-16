import React from 'react';
import { useNavigate } from 'react-router-dom';
import NotData from '../../assets/notdata.avif';

function Pending({ storage }) {

    const navigate = useNavigate();

    const backButton = () => {
        navigate('/'); 
    };

    return (
        <>
            <h1 className="text-center fw-bold py-4">Pending Appointments</h1>
            <div>
                {
                    storage.length === 0 ? (
                        <div className='no-data text-center'>
                            <p>
                                <img src={NotData}  />
                            </p>
                        </div>
                    ) : (
                    <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Patient Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Doctor Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Symptoms</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            storage.filter(data => data.status === 'pending').map((data, index) => (
                                <tr key={data.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{data.pname}</td>
                                    <td>{data.email}</td>
                                    <td>{data.contact}</td>
                                    <td>{data.date}</td>
                                    <td>{data.time}</td>
                                    <td>{data.gender}</td>
                                    <td>{data.dname}</td>
                                    <td>{data.address}</td>
                                    <td>{data.symptoms}</td>
                                </tr>
                            ))
                        }
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

export default Pending;
