import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/orders">Orders</NavLink>
                <NavLink to="/inventory">Inventory</NavLink>
                <NavLink to="/about">About</NavLink>
                {
                    user ? <button onClick={handleSignOut} style={{ border: '0', marginLeft: '15px', padding: '10px', borderRadius: '5px', backgroundColor: '#ff9900', cursor: 'pointer', fontWeight: 'bold' }}>Log Out</button> : <NavLink to="/login">Login</NavLink>
                }
            </div>
        </div >
    );
};

export default Header;