import './App.css';
import React,{useState} from "react";

import {Register} from './components/Register';
import {Login} from './components/Login';

function App() {
  const[currentForm,setCurrentForm]=useState('login');
  const toggleForm =(formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="App">
     { 
      currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register  />
     }
      </div>
  );
}
export default App;
