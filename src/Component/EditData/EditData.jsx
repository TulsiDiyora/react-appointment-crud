import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router';

function EditData({ storage, handleSave }) {

    const location = useLocation();
    const navigate = useNavigate();
    const [editData, setEditData] = useState(location.state);

    const handleForm = (e) => {
        const { name, value } = e.target;
        setEditData({ ...editData, [name]: value });
    };

    const handleEditData = (e) => {
        e.preventDefault();

        const updatedStorage = storage.map((rec) => {
            if (rec.id === editData.id) {
                return { ...editData };
            }
            return rec;
        });

        console.log("updatedData :", updatedStorage);

        handleSave(updatedStorage);



    };



    return (
        <>
            <Container>
                <h1 className='text-center fw-bold mb-5'>Edit Data</h1>
                <div className="box">

                    <form className="row g-3 mt-4" onSubmit={handleEditData}>
                        <input type="number" name="id" id="id" value={editData.id} onChange={handleForm} hidden />
                        <div className="col-6">
                            <label htmlFor="pname" className="form-label">Patient Name</label>
                            <input type="text" className="form-control" id="pname" name='pname' value={editData.pname} onChange={handleForm} placeholder="Name" required/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" name='email' value={editData.email} onChange={handleForm} placeholder='Email' required />
                        </div>
                        <div className="col-6">
                            <label htmlFor="contact" className="form-label">Contact</label>
                            <input type="number" className="form-control" id="contact" name='contact' value={editData.contact} onChange={handleForm} placeholder="Contact" required/>
                        </div>
                        <div className="col-6">
                            <label htmlFor="date" className="form-label">Date</label>
                            <input type="date" className="form-control" id="date" name='date' value={editData.date} onChange={handleForm} placeholder="Date" required/>
                        </div>
                        <div className="col-6">
                            <label htmlFor="time" className="form-label">Time</label>
                            <input type="time" className="form-control" id="time" name='time' value={editData.time} onChange={handleForm} placeholder="Time" required/>
                        </div>
                        <div className="col-6">
                            <label htmlFor="dname" className="form-label">Doctor Name</label>
                            <input type="text" className="form-control" id="dname" name='dname' value={editData.dname} onChange={handleForm} placeholder="Enter doctor name" required/>
                        </div>
                        <div className="col-6">
                            <label htmlFor="address" className="form-label">Address</label>
                            <textarea id="address" className="form-control" name='address' value={editData.address} onChange={handleForm} placeholder="1234 Main St" required></textarea>
                        </div>
                        <div className="col-6">
                            <label htmlFor="symptoms" className="form-label">Symptoms</label>
                            <textarea id="symptoms" className="form-control" name='symptoms' value={editData.symptoms} onChange={handleForm} placeholder="Symptoms" required></textarea>
                        </div>
                        <div className='col-6 d-flex'>
                            <label >Gender: &nbsp;</label>
                            <div>
                                <input type="radio" id="male" name="gender" value="male" onChange={handleForm} required/>
                                &nbsp;&nbsp;
                                <label htmlFor="male">Male</label>
                                <br />
                                <input type="radio" id="female" name="gender" value="female" onChange={handleForm} required/>
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
                                <input type="radio" id="pending" name="status" value="pending" checked={editData.status === 'pending'} onChange={handleForm} />
                                &nbsp;&nbsp;
                                <label htmlFor="pending">Pending</label>
                                <br />
                                <input type="radio" id="confirmed" name="status" value="confirmed" checked={editData.status === 'confirmed'} onChange={handleForm} />
                                &nbsp;&nbsp;
                                <label htmlFor="confirmed">Confirmed</label>
                                <br />
                                <input type="radio" id="approved" name="status" value="approved" checked={editData.status === 'approved'} onChange={handleForm} />
                                &nbsp;&nbsp;
                                <label htmlFor="approved">Approved</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Add Appointment</button>
                        </div>
                    </form>
                </div>
            </Container>

        </>
    );
}

export default EditData;



