import React from 'react';
import './UpcomingTrips.css'; // Import your custom CSS file for additional styling

function UpcomingTrips() {
  return (
    <div className="upcoming-trips">
      <div className="trip-card">
        <button className="btn btn-card btn-success w-100 rounded-0">
          View Upcoming Flight Trips
        </button>
        <div className="card-hover-image flight"></div>
      </div>

      <div className="trip-card">
        <button className="btn btn-card btn-success w-100 rounded-0">
          View Upcoming Train Trips
        </button>
        <div className="card-hover-image train"></div>
      </div>

      <div className="trip-card">
        <button className="btn btn-card btn-success w-100 rounded-0">
          View Upcoming Bus Trips
        </button>
        <div className="card-hover-image bus"></div>
      </div>
    </div>
  );
}

export default UpcomingTrips;
