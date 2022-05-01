import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {

    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [confirmPassword,setConfirmPassword]= useState('');
    const [error,setError]= useState('');
    const navigate = useNavigate();

    const [ createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value);
    }

    if(user){
        navigate('/shop');
    }
    const handleCreateUser = event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError('Your two password did not match');
            return;

        }
        if(password.length <6){
            setError('Password must be longer then 6 characters or longer ');
        }

        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='form-container'>
               <form onSubmit={handleCreateUser}>
               <h2 className='form-title'>Sign up</h2>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input onBlur={handleEmailBlur} type="email" name='email'  required/>
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input onBlur={handlePasswordBlur} type="password" name='password'  required/>
            </div>
            <div className="input-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input onBlur={handleConfirmPasswordBlur} type="password" name='confirm-password'  required/>
            </div>
            <p style={{color: 'red'}}>{error}</p>
            <input className='from-submit' type="submit" value="Sign Up" />
               </form>
               <p>
                   Already have an account? <Link className='form-link' to='/login'>Login</Link>
                   </p>
        </div>
    );
};

export default SignUp;