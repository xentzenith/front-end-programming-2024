import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
const navigate = useNavigate();

const handleSubmit = (event) => {
    event.preventDefault();
    // Perform registration logic here
    navigate('/success');
};

return (
    <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" /><br />
            <input type="password" placeholder="Password" /><br />
            <button type="submit">Submit</button>
        </form>
    </div>
);
};

export default Register;