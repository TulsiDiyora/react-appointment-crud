import React from 'react';
import { useNavigate } from 'react-router-dom';
import NotData from '../../assets/notdata.avif';

const Approved = ({ storage }) => {
    
    const approvedAppointments = storage.filter(item => item.status === 'approved');

    const navigate = useNavigate();

    const backButton = () => {
        navigate('/'); 
    };

    return (
       <>
            <h1 className='text-center fw-bold py-5'>Approved Appointments</h1>
             <div>
                    {
                        approvedAppointments.length === 0 ? (
                            <div className='no-data text-center'>
                                <p>
                                    <img src={NotData}  />
                                </p>
                            </div>
                        ) : (
                        <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Patient Name</th>
                                <th>Email</th>
                                <th>Contact</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Gender</th>
                                <th>Doctor Name</th>
                                <th>Symptoms</th>
                            </tr>
                        </thead>
                        <tbody>
                            {approvedAppointments.length > 0 ? (
                                approvedAppointments.map((appointment, index) => (
                                    <tr key={appointment.id}>
                                        <td>{index + 1}</td>
                                        <td>{appointment.pname}</td>
                                        <td>{appointment.email}</td>
                                        <td>{appointment.contact}</td>
                                        <td>{appointment.date}</td>
                                        <td>{appointment.time}</td>
                                        <td>{appointment.gender}</td>
                                        <td>{appointment.dname}</td>
                                        <td>{appointment.symptoms}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8" className="text-center">No Approved Appointments</td>
                                </tr>
                            )}
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
};

export default Approved;
