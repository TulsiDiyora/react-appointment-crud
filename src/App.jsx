import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppointmentForm from './Component/AppointmentForm/AppointmentForm';
import Pending from './Component/Pending/Pending';
import Confirmed from './Component/Confirmed/Confirmed';
import Approved from './Component/Approved/Approved';
import EditData from './Component/EditData/EditData';
import View from './Component/View/View';
import getRec from './helper';
import './App.css';
import { Route, Routes } from 'react-router';

function App() {
    const [formInput, setFormInput] = useState({
        id: '',
        pname: '',
        email: '',
        contact: '',
        date: '',
        time: '',
        dname: '',
        address: '',
        symptoms: '',
        status: 'pending' 
    });

    const [storage, setStorage] = useState(getRec());
    const navigate = useNavigate();

    const handleForm = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setFormInput({ ...formInput, [name]: value });
    };

    const handleSave = (saveRec) => {
        setStorage(saveRec);
        navigate('/view'); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formInput.id) {
            const updatedStorage = storage.map((rec) => {
                if (rec.id === formInput.id) {
                    return { ...formInput };
                } else {
                    return rec;
                }
            });
            setStorage(updatedStorage);
        } else {
            formInput.id = Math.floor(Math.random() * 10000);
            setStorage([...storage, formInput]);
        }

        setFormInput({
            id: '',
            pname: '',
            email: '',
            contact: '',
            date: '',
            time: '',
            dname: '',
            address: '',
            symptoms: '',
            status: 'pending'
        });
        navigate('/view');
    };

    const handleEditData = (data) => {
        navigate('/edit', { state: data }); 
    };

    useEffect(() => {
        localStorage.setItem('storageData', JSON.stringify(storage));
    }, [storage]);

    return (
        <>
            <Routes>
                <Route path="/" element={<AppointmentForm handleForm={handleForm} handleSubmit={handleSubmit} formInput={formInput} />} />
                <Route path="/view" element={<View storage={storage} handleEditData={handleEditData} />} />
                <Route path="/pending" element={<Pending storage={storage} />} />
                <Route path="/confirmed" element={<Confirmed storage={storage} />} />
                <Route path="/approved" element={<Approved storage={storage} />} />
                <Route path="/edit" element={<EditData storage={storage} handleSave={handleSave} />} />
                <Route path="/*" element={<h1>404 Page Not Found</h1>} />
            </Routes>
        </>
    );
}

export default App;
