import React from 'react';
import { Container } from 'react-bootstrap';
import './AppointmentForm.css';
import { useNavigate } from 'react-router-dom';

function AppointmentForm({ formInput, handleForm, handleSubmit }) {

    const navigate = useNavigate();

    const goToPending = () => {
        navigate('/pending'); 
    };

    const goToConfirmed = () => {
        navigate('/confirmed'); 
    };

    const goToApproved = () => {
        navigate('/approved'); 
    };


    return (
        <>

            <Container>
                <h1 className='text-center fw-bold py-4'>Appointment Form</h1>

                <div className='text-center my-2'>
                    <button className='btn btn-secondary' onClick={goToPending}>Pending</button>&nbsp;
                    <button className='btn btn-info' onClick={goToConfirmed}>Confirmed</button>&nbsp;
                    <button className='btn btn-success' onClick={goToApproved}>Approved</button>
                </div>

                <form className="row g-3 mt-4" onSubmit={handleSubmit}>
                    <input type="number" name="id" id="id" value={formInput.id} onChange={handleForm} hidden />
                    <div className="col-6">
                        <label htmlFor="pname" className="form-label">Patient Name</label>
                        <input type="text" className="form-control" id="pname" name='pname' value={formInput.pname} onChange={handleForm} placeholder="Name" required/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" name='email' value={formInput.email} onChange={handleForm} placeholder='Email' required/>
                    </div>
                    <div className="col-6">
                        <label htmlFor="contact" className="form-label">Contact</label>
                        <input type="number" className="form-control" id="contact" name='contact' value={formInput.contact} onChange={handleForm} placeholder="Contact" required/>
                    </div>
                    <div className="col-6">
                        <label htmlFor="date" className="form-label">Date</label>
                        <input type="date" className="form-control" id="date" name='date' value={formInput.date} onChange={handleForm} placeholder="Date" required/>
                    </div>
                    <div className="col-6">
                        <label htmlFor="time" className="form-label">Time</label>
                        <input type="time" className="form-control" id="time" name='time' value={formInput.time} onChange={handleForm} placeholder="Time" required/>
                    </div>
                    <div className="col-6">
                        <label htmlFor="dname" className="form-label">Doctor Name</label>
                        <input type="text" className="form-control" id="dname" name='dname' value={formInput.dname} onChange={handleForm} placeholder="Enter doctor name" required/>
                    </div>
                    <div className="col-6">
                        <label htmlFor="address" className="form-label">Address</label>
                        <textarea id="address" className="form-control" name='address' value={formInput.address} onChange={handleForm} placeholder="1234 Main St" required></textarea>
                    </div>
                    <div className="col-6">
                        <label htmlFor="symptoms" className="form-label">Symptoms</label>
                        <textarea id="symptoms" className="form-control" name='symptoms' value={formInput.symptoms} onChange={handleForm} placeholder="Symptoms" required></textarea>
                    </div>
                    <div className='col-6 d-flex'>
                        <label >Gender: &nbsp;</label>
                        <div>
                            <input type="radio" id="male" name="gender" value="male" onChange={handleForm} required/>
                            &nbsp;&nbsp;
                            <label htmlFor="male">Male</label>
                            <br />
                            <input type="radio" id="female" name="gender" value="female" onChange={handleForm}  required/>
                            &nbsp;&nbsp;
                            <label htmlFor="female">Female</label>
                            <br />
                            <input type="radio" id="other" name="gender" value="other" onChange={handleForm} required/>
                            &nbsp;&nbsp;
                            <label htmlFor="other">Other</label>
                        </div>
                    </div>
                    <div className='col-6 d-flex'>
                        <label className='d-flex'>Status : &nbsp;</label>
                        <div>
                            <input type="radio" id="pending" name="status" value="pending" checked={formInput.status === 'pending'} onChange={handleForm} />
                            &nbsp;&nbsp;
                            <label htmlFor="pending">Pending</label>
                            <br />
                            <input type="radio" id="confirmed" name="status" value="confirmed" checked={formInput.status === 'confirmed'} onChange={handleForm} />
                            &nbsp;&nbsp;
                            <label htmlFor="confirmed">Confirmed</label>
                            <br />
                            <input type="radio" id="approved" name="status" value="approved" checked={formInput.status === 'approved'} onChange={handleForm} />
                            &nbsp;&nbsp;
                            <label htmlFor="approved">Approved</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Add Appointment</button>
                    </div>
                </form>
            </Container>
        </>
    )
}

export default AppointmentForm;
