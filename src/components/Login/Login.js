import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login =() =>{
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');

    const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
    ] = useSignInWithEmailAndPassword(auth);
    const navegate = useNavigate();

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }

    if(user){
        navegate('/shop');
    }

    const handelUserSignIn = event =>{
        event.preventDefault();
        signInWithEmailAndPassword(email,password);
    }
    return(
        <div className='form-container'>
               <form onSubmit={handelUserSignIn}>
               <h2 className='form-title'>login</h2>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input onBlur={handleEmailBlur} type="email" name='email'  required/>
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input onBlur={handlePasswordBlur} type="password" name='password'  required/>
            </div>
            <p style={{color: 'red'}}>{error?.message}</p>
            {
                loading && <p>Loading...</p>
            }
            <input className='from-submit' type="submit" value="Login" />
               </form>
               <p>
                   New to ema-John? <Link className='form-link' to='/signup'>Create an account</Link>
                   </p>
        </div>

    );
};

export default Login;