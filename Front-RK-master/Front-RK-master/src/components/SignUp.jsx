import React, { useState } from 'react';
import Input from './Input';
import '../css/SignUp.css';
import { registration } from '../actions/register';
import { NavLink } from 'react-router-dom';

function SignUp() {
    const [email, setEmail] = useState("")
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    return (
      <div className='SignUp'>
        <div className='registration'>
          <div className='registration-header'>
            <div className="regIn">
              <label>Already have an account<NavLink className="anyColor" to="/SignIn"> Sign in here</NavLink></label>
              <label htmlFor="email">Email address</label>
              <Input value = {email} setValue = {setEmail} type = 'text' />
              
              <label htmlFor="username">Username (public name others see)</label>
              <Input value = {login} setValue = {setLogin} type = 'text' />
              
              <label htmlFor="password">Password</label>
              <Input value = {password} setValue = {setPassword} type = 'password' />

              <button className='registration-button' onClick={() => registration(email, login, password)}>Sing Up</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default SignUp;