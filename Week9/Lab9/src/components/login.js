import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform login logic here
        navigate('/success');
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" /><br />
                <input type="password" placeholder="Password" /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Login;