import React from 'react';
import './Homepage.css';
import  usericon from '../Images/usericon.jpg'
import { Link } from 'react-router-dom';
function Homepage() {
  return (
    <div className="dashboard">
      <header className="header">
        <h1>User Dashboard</h1>
        <div className="profile-icon">
          <img src={usericon} alt="Profile Icon" />
        </div>
      </header>
      <main className="main-content">
        <div className="card-container">
          <div className="card">
            <h2>Card 1 </h2>
            <p>This is the content of card 1.</p>
           
          </div>
          <div className="card">
            <h2>Card  2</h2>
            <p>This is the content of card 2.</p>
          </div>
          < Link to='/upcomingtrips' className="card">
            <h2>  Upcomin Trips </h2>
            <p>This is the content of card 3</p>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Homepage;
