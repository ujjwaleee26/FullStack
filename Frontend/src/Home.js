import React from 'react';
import './Home.css';
import images from './images.png'
import host from './host.webp'
import upcoming from './upcoming.png'
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="home">
      <header className="navbar">
        <h1>Dashboard</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <div className="card-container">
        <div className="card">
          <img src={host} alt="Card 1" />
          <h2>Host a Trip</h2>
          <p><button className='btn btn-success w-10 rounded-0'>Continue</button></p>
        </div>

        <div className="card">
          <img src={images} alt="Card 2" />
          <h2>User</h2>
          <p> <button className='btn btn-success w-10 rounded-0'> View Full Profile</button></p>
        </div>

        <div className="card">
          <img src={upcoming} alt="Card 3" />
          <h2>Upcoming Trips</h2>
          <p><Link to="/upcomingtrip" className='btn btn-success w-10 rounded-0'>View Details</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Home;
