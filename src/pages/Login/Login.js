import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import Validation from './LoginValidation';
import Header from '../../Component/Header/Header';
const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({})
    const handleInput =(event)=>{
         setValues(prev => ({...prev,[event.target.name]:[event.target.value]}))
    }
  const handleSubmit=(event)=>{
     event.preventDefault();
     setErrors(Validation(values));
  }
  return (
    
    <>
<Header/>
 
    <div className='main1'>
      <div className='main-3'>
        <h2>Sign-in</h2>
        <form className='form1' action='' onSubmit={handleSubmit} >
        
             <div className='mb-3'>
                <label htmlFor='email'><strong>Email</strong></label>
                <input type='email' placeholder='Enter email' name='email'
                onChange={handleInput} className='input1'/>
                {errors.email && <span className='text-danger'> {errors.email}</span>}
             </div>
             <div className='mb-2'>
                <label htmlFor='password'><strong>password</strong></label>
                  <input type='password' placeholder='Enter password' name='password'
                      onChange={handleInput} className='input1'/>
                      {errors.password && <span className='text-danger'> {errors.password}</span>}

             </div>
           <button type='submit'  className='btn'>Log in</button> 
            <p className='logp'>you are agree to aour term and policies</p>
            <Link to="/SignUp" className='btn1'>create account</Link>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login
