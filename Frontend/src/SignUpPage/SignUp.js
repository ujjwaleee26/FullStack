import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validation from './SignUpValidation'; // Import your SignUpValidation function
import './SignUp.css';

function SignUp() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Get the navigate function from React Router

  const handleChange = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value.trim() }));
  };

  const validateForm = () => {
    const inputErrors = validation(values);

    const isValidName = !inputErrors.name && values.name.length > 0; // You can set your own condition for the name
    const isValidEmail = !inputErrors.email && values.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    const isValidPassword = !inputErrors.password && values.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/);

    setErrors(inputErrors);

    return isValidName && isValidEmail && isValidPassword;
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Perform signup logic here, e.g., send data to the server

      // After successful signup, navigate to the login page
      navigate('/login');
    }
  };

  return (
    <div>
      <div className="login-box">
        <h2>Sign-Up</h2>
        <form action='' onSubmit={submitHandler}>
          <div className="user-box">
            <input type="text" required="" name='name' onChange={handleChange} />
            {errors.name && <span className='text-danger'>{errors.name}</span>}
            <label htmlFor='name'>Name</label>
          </div>
          <div className="user-box">
            <input type="email" required="" name='email' onChange={handleChange} />
            {errors.email && <span className='text-danger'>{errors.email}</span>}
            <label htmlFor='email'>Email</label>
          </div>
          <div className="user-box">
            <input type="password" required="" name='password' onChange={handleChange} />
            {errors.password && <span className='text-danger'>{errors.password}</span>}
            <label htmlFor='password'>Password</label>
          </div>
          <button type="submit" className="sign-in">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sign-Up
          </button>
        </form>
        <Link to='/login'>Already a User? Sign-In</Link>
      </div>
    </div>
  );
}

export default SignUp;
