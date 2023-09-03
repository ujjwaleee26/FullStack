import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validation from './LoginValidation';
import './Login.css';

function Login() {
  const [values, setValues] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [showContinue, setShowContinue] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value.trim() }));
  };

  const validateForm = () => {
    const inputErrors = validation(values);

    
    const isValidEmail = !inputErrors.email && values.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    const isValidPassword = !inputErrors.password && values.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/);

    if (isValidEmail && isValidPassword) {
      setShowContinue(true);
    } else {
      setShowContinue(false);
    }

    setErrors(inputErrors);

    return isValidEmail && isValidPassword;
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (validateForm()) {
      navigate('/homepage');
    }
  };

  return (
    <div className="login-box">
      <h2>Sign-In</h2>
      <form action='' onSubmit={submitHandler}>
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
          Sign-In
        </button>
        {showContinue && <Link to='/homepage'>Continue to UserDashBoard</Link>}
      </form>
      {!showContinue && (
        <>
          <Link to="/signup">New user? Sign Up </Link>
          <p></p>
          <Link to="/">Home </Link>
        </>
      )}
    </div>
  );
}

export default Login;
