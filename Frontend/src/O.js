import React, { useState, useEffect } from 'react';
import './O.css'; 
import { Link } from 'react-router-dom';

function O() {
  const [otp, setOtp] = useState(['', '', '', '']); 

  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

   
    if (index < 3 && /^[0-9]$/.test(value)) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
      
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handleSubmit = () => {
    
    const enteredOtp = otp.join(''); 
    
  };

  useEffect(() => {
    
    document.getElementById('otp-0').focus();
  }, []);

  return (
    <div className="login-box">
      <h2>OTP</h2>
      <p> An OTP has been sent to your registered mobile number</p>
      <p></p>
      <div className="otp-container">
        {otp.map((digit, index) => (
          <div className="otp-box" key={index}>
            <input
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              id={`otp-${index}`}
            />
          </div>
        ))}
      </div>
      <Link to='/chatroom'className="submit-button" onClick={handleSubmit}>
        Verify
      </Link>
    </div>
  );
}

export default O;
