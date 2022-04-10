import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    };

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    };

    if (user) {
        navigate('/home');
    }

    const handleUserSignIn = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='login-form'>
            <h1>LOG IN</h1>
            <h3 style={{ color: 'red' }}>{error?.message}</h3>
            <form onSubmit={handleUserSignIn}>
                <div className='input-sec'>
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} type="email" name="email" placeholder='Enter your email' id="" required />
                </div>
                <br />
                <div className='input-sec'>
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" placeholder='Enter your password' name="password" id="" required />
                </div>
                {
                    loading && <p>Loading...</p>
                }
                <br />
                <button className='login-button'>Log In</button>
                <br />
                <small>New to Ema-John? <Link to="/signup">Create a new account</Link></small>
                <p>or</p>
                <button className='google-btn'>Continue with Google</button>
            </form>
        </div>
    );
};

export default Login;