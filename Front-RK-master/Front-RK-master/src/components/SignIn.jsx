import React, { useState } from 'react';
import Input from './Input';
import '../css/SignUp.css';
import { NavLink } from 'react-router-dom';
import { logiN } from '../actions/logiN';

function SignIn() {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    return (
      <div className='SignIn'>
        <div className='registration'>
          <div className='registration-header'>
            <div className="regIn">
              <label>Need to create an account?<NavLink className="anyColor" to="/SignUp"> Sign up here</NavLink></label>
              
              <label htmlFor="username">Username</label>
              <Input value = {login} setValue = {setLogin} type = 'text' />
              
              <label htmlFor="password">Password</label>
              <Input value = {password} setValue = {setPassword} type = 'password' />

              <button className='registration-button' onClick={() => logiN(login, password)}>Sing In</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default SignIn;