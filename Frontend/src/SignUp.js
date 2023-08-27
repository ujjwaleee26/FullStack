import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import validation from './SignUpValidation'
import './SignUp.css'
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
      {/* <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
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
    </div> */}

<div class="login-box">
               <h2>Sign-In</h2>
                <form action='' onSubmit={submitHandler}> 
                <div class="user-box">
                        <input type="name"  required=""   name='name' onChange={handleChange}/>
                        {errors.name && <span className='text-danger'>{errors.name}</span>}
                        <label htmlFor='name'>Name</label>
                  </div>
                   <div class="user-box">
                        <input type="email"  required=""   name='email' onChange={handleChange}/>
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                        <label htmlFor='email'>Email</label>
                  </div>
                  <div class="user-box">
                        <input type="password"  required=""   name='password' onChange={handleChange}/>
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                        <label htmlFor='password'>Password</label>
                  </div>
    
    <Link to="/home" href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Sign-In
    </Link>
  </form>
  <Link to='/'>Already a User,Sign-Ins</Link>
</div>
  
    


    </div>
  )
}

export default SignUp
