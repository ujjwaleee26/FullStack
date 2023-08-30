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

<div className="login-box">
               <h2>Sign-In</h2>
                <form action='' onSubmit={submitHandler}> 
               
                   <div className="user-box">
                        <input type="email"  required=""   name='email' onChange={handleChange}/>
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                        <label htmlFor='email'>Email</label>
                  </div>
                   <div className="user-box">
                        <input type="name"  required=""   name='name' onChange={handleChange}/>
                        {errors.name && <span className='text-danger'>{errors.name}</span>}
                        <label htmlFor='name'>Name</label>
                  </div>
                  <div className="user-box">
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
  <Link to='/login'>Already a User,Sign-Ins</Link>
</div>
  
    


    </div>
  )
}

export default SignUp
