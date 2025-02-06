import React from 'react';
import '../../styles/tours.css';

const Tours = () => {
  // Tour data for Europe: 10 cities with realistic dates
  const europeTours = [
    { date: '21 May 2025', city: 'London', tickets: '02' },
    { date: '28 May 2025', city: 'Paris', tickets: '03' },
    { date: '04 Jun 2025', city: 'Rome', tickets: '04' },
    { date: '11 Jun 2025', city: 'Berlin', tickets: '02' },
    { date: '18 Jun 2025', city: 'Amsterdam', tickets: '03' },
    { date: '25 Jun 2025', city: 'Barcelona', tickets: '02' },
    { date: '02 Jul 2025', city: 'Vienna', tickets: '02' },
    { date: '09 Jul 2025', city: 'Prague', tickets: '03' },
    { date: '16 Jul 2025', city: 'Lisbon', tickets: '02' },
    { date: '23 Jul 2025', city: 'Dublin', tickets: '04' },
  ];

  // Tour data for North America: 10 cities with realistic dates
  const northAmericaTours = [
    { date: '21 May 2025', city: 'New York City', tickets: '02' },
    { date: '28 May 2025', city: 'Los Angeles', tickets: '03' },
    { date: '04 Jun 2025', city: 'Chicago', tickets: '04' },
    { date: '11 Jun 2025', city: 'Toronto', tickets: '02' },
    { date: '18 Jun 2025', city: 'Vancouver', tickets: '03' },
    { date: '25 Jun 2025', city: 'Miami', tickets: '02' },
    { date: '02 Jul 2025', city: 'San Francisco', tickets: '02' },
    { date: '09 Jul 2025', city: 'Boston', tickets: '03' },
    { date: '16 Jul 2025', city: 'Houston', tickets: '02' },
    { date: '23 Jul 2025', city: 'Seattle', tickets: '04' },
  ];

  return (
    <div>
      <h1>Tours</h1>
      <div className="tours-container">
        {/* Europe Tours */}
        <div className="section">
          <h1>Europe</h1>
          <div className="section-container">
            {europeTours.map((tour, index) => (
              <div key={index} className="section-box">
                <div>{tour.date}</div>
                <div>{tour.city}</div>
                <div>{tour.tickets}</div>
                <div>TICKETS</div>
              </div>
            ))}
          </div>
        </div>

        {/* North America Tours */}
        <div className="section">
          <h1>North America</h1>
          <div className="section-container">
            {northAmericaTours.map((tour, index) => (
              <div key={index} className="section-box">
                <div>{tour.date}</div>
                <div>{tour.city}</div>
                <div>{tour.tickets}</div>
                <div>TICKETS</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;
