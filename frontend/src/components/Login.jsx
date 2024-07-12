import React,{useState} from 'react';

 

export const Login = (props) => {
    const [email,setEmail]=useState('');
    const[pass,setPass]=useState('');
    
    const handleSubmit = (e) => {
        email.preventDefault();
        console.log(email);

    }
    return(
        <div className="auth-form-container">      
        <h2>Login</h2>
          <form className="Login-form" onSubmit={handleSubmit}>
        
            <label htmlfor="email">email</label>
            <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="youremail@gmail.com" id="email" name="email"/>
            <label for="password">password</label>
            <input value={pass} type="password" onChange={(e) => setPass(e.target.value)} placeholder="**********" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        <button onClick={()=>props.onFormSwitch('register')} >Don't have an account?Register here</button></div>

    )
}