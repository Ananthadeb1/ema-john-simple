import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {

    const[user] = useAuthState(auth);
    const[email,setEmail]= useState('');
    const [name,setName]= useState('');
    const [address,setAddress]= useState('');
    const [phone,setPhone]= useState('');
    const [error,setError]= useState('');
    // const navigate = useNavigate();

    const handleNameBlur = event =>{
        setName(event.target.value);
    }
    const handleAddressBlur = event =>{
        setAddress(event.target.value);
    }
    const handlePhoneBlur = event =>{
        setPhone(event.target.value);
    }

    const handleCreateUser = event =>{
        event.preventDefault();
        const shipping = {name, email, address, phone};
        console.log(shipping);
    }

    return (
            <div className='form-container'>
                   <form onSubmit={handleCreateUser}>
                   <h2 className='form-title'>Shipping Information</h2>
                <div className="input-group">
                    <label htmlFor="name">Your Name</label>
                    <input onBlur={handleNameBlur} type="text" name='name'  required/>
                </div>
                <div className="input-group">
                    <label htmlFor="email">Your email</label>
                    <input value={user?.email} readOnly type="email" name='email'  required/>
                </div>
                <div className="input-group">
                    <label htmlFor="address">Address</label>
                    <input onBlur={handleAddressBlur} type="text" name='address'  required/>
                </div>
                <div className="input-group">
                    <label htmlFor="phone">Phone</label>
                    <input onBlur={handlePhoneBlur} type="number" name='phone'  required/>
                </div>
                <p style={{color: 'red'}}>{error}</p>
                <input className='from-submit' type="submit" value="Add Shipping" />
                   </form>
            </div>
        );
};

export default Shipment;