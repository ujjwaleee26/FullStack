import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import validation from './SignUpValidation'
function SignUp() {
    const[values,setValues]=useState(
        {
            name:'',
            email:'',
            password:''})
  const handleChange=(event)=>{
          setValues(prev=>({...prev,[event.target.name]:event.target.value.trim() }))
  }
  const[errors,setErrors]=useState({})
  const submitHandler=(event)=>{
    event.preventDefault();
    setErrors(validation(values));
  }
  return (
    <div>
      <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Sign-Up</h2>
        <form action='' onSubmit={submitHandler}>
            <div className='mb-3'>   
                <label htmlFor='name'><strong>Name</strong></label>
                <input type="text" placeholder='Enter Name' name='name'
                 onChange={handleChange} className='form-control rounded-0'/>
                 {errors.name && <span className='text-danger'>{errors.name}</span>}
            </div>
            <div className='mb-3'>
                <label htmlFor='email'><strong>Email</strong></label>
                <input type="text" placeholder='Enter Email' name='email'
                 onChange={handleChange} className='form-control rounded-0'/>
                 {errors.email && <span className='text-danger'>{errors.email}</span>}
            </div>
            <div className='mb-3'>
                <label htmlFor='password'><strong>Password</strong></label>
                <input type="password" placeholder='Enter Password' name='password'
                 onChange={handleChange}  className='form-control rounded-0'/>
                 {errors.password && <span className='text-danger'>{errors.password}</span>}
            </div>
            
            <div>
              <p></p>
            <button className='btn btn-success w-100 rounded-0'>Create Account</button>
            <p> You agree  to our terms </p>
            <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Home</Link>

            </div>
           
        </form>
        </div>
    </div>
    </div>
  )
}

export default SignUp
