import React, { useState } from 'react';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
   
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        // Handle form submission logic here, such as sending data to backend
    };

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="Register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input value={name} name="name" id="name" placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
                <label htmlFor="email">Email</label>
                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} type="password" onChange={(e) => setPass(e.target.value)} placeholder="**********" id="password" name="password" />
                <button type="submit">Register</button>
            </form>
            <button onClick={() => props.onFormSwitch('login')}>Already have an account? Login here</button>
        </div>
    );
};
