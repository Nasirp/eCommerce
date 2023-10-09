import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Validation from './SignUpValidation'
import './signUp.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Header from '../../Component/Header/Header';
const SignUp = () => {
  
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput =(event)=>{
         setValues(prev => ({...prev,[event.target.name]:[event.target.value]}))
    }
  const handleSubmit=(event) => {
     event.preventDefault();
     setErrors(Validation(values));
     if(errors.name === "" && errors.email=== "" && errors.password===""){
        axios.post('http://localhost:8081/signup', values)
        .then(res =>{
             navigate('/Login')
        })
     
      }
  }
  return (
    <>
   <Header/>
   
    <div className='main1'>
    <div className='main-2'>
    <h2>Sign-Up</h2>
      <form className="form" action='' onSubmit={handleSubmit}>
      <div className='mb-3'>
                <label htmlFor='email'><strong>Name</strong></label>
                <input type='text'  placeholder='Enter Name' name='name'
                 className="input1"  onChange={handleInput}
                />
             {errors.name && <span className='text-danger'> {errors.name}</span>}

             </div>
           <div className='mb-3'>
              <label htmlFor='email'><strong>Email</strong></label>
              <input type="email" placeholder='Enter email' name='email' className='input1' 
                   onChange={handleInput}
              />
             {errors.email && <span className='text-danger'> {errors.email}</span>}

           </div>
           <div className='mb-2'>
              <label htmlFor='password'><strong>password</strong></label>
                <input type='password' placeholder='Enter password' className='input1' name='password'
                   onChange={handleInput}
                />
               {errors.password && <span className='text-danger'> {errors.password}</span>}

           </div>
          <button type='submit' className='btn'>SignUp</button>
          <p className='logp'>you are agree to aour term and policies</p>
          <Link to="/Login" className='btn1'>Login</Link>
      </form>
    </div>
  </div>
  </>
  )
}

export default SignUp