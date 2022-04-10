// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Signup.css';

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    };

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    };

    if (user) {
        navigate('/home')
    }

    const handleCreateUser = event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError("Your password didn't match. Please try again.");
            return;
        }
        if (password.length < 6) {
            setError("Your password must be in at least 6 characters")
            return;
        }
        createUserWithEmailAndPassword(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
    };

    return (
        <div className='login-form'>
            <h1>Sign Up</h1>
            <h3 style={{ color: 'red' }}>{error}</h3>
            <form onSubmit={handleCreateUser}>
                <div className='input-sec'>
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} type="email" name="email" placeholder='Enter your email' required id="" />
                </div>
                <br />
                <div className='input-sec'>
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" placeholder='Enter your password' required name="password" id="" />
                </div>
                <br />
                <div className='input-sec'>
                    <label htmlFor="password">Confirm Password</label>
                    <input onBlur={handleConfirmPasswordBlur} type="password" placeholder='Enter your password again' name="password" id="" required />
                </div>
                <br />
                <button className='login-button'>Sign Up</button>
                <br />
                <small>Already have an account? <Link to="/login">Log in</Link></small>
                <br />
                <p>or</p>
                <button className='google-btn'>Continue with Google</button>
            </form>
        </div>
    );
};

export default Signup;