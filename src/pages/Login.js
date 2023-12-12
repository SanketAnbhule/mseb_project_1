import React, { useState } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';
import './Login.css'; // Import the CSS file
import { blue } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

export default function Login  () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    //axios.defaults.withCredentials=true;
    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            const { token } = response.data;

            // Save token in localStorage
            localStorage.setItem('token', token);

            console.log('Login successful');
            navigate('/addContact');
        } catch (error) {
            console.error('Error logging in:', error);
            alert("Email or Passward is wrong");
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            <Link to={"/register"}>
            <button style={{marginTop:20}}>Create New Account</button>
            </Link>
        </div>
    );
};


