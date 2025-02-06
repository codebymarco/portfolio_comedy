import React from "react";
import "../../styles/tours.css";

const Tours = () => {
  // Europe: 10 cities with realistic dates
  const europeTours = [
    { date: "21 May 2025", city: "London", tickets: "02" },
    { date: "28 May 2025", city: "Paris", tickets: "03" },
    { date: "04 Jun 2025", city: "Rome", tickets: "04" },
    { date: "11 Jun 2025", city: "Berlin", tickets: "02" },
    { date: "18 Jun 2025", city: "Amsterdam", tickets: "03" },
    { date: "25 Jun 2025", city: "Barcelona", tickets: "02" },
    { date: "02 Jul 2025", city: "Vienna", tickets: "02" },
    { date: "09 Jul 2025", city: "Prague", tickets: "03" },
    { date: "16 Jul 2025", city: "Lisbon", tickets: "02" },
    { date: "23 Jul 2025", city: "Dublin", tickets: "04" },
  ];

  // North America: 10 cities with realistic dates
  const northAmericaTours = [
    { date: "21 May 2025", city: "New York City", tickets: "02" },
    { date: "28 May 2025", city: "Los Angeles", tickets: "03" },
    { date: "04 Jun 2025", city: "Chicago", tickets: "04" },
    { date: "11 Jun 2025", city: "Toronto", tickets: "02" },
    { date: "18 Jun 2025", city: "Vancouver", tickets: "03" },
    { date: "25 Jun 2025", city: "Miami", tickets: "02" },
    { date: "02 Jul 2025", city: "San Francisco", tickets: "02" },
    { date: "09 Jul 2025", city: "Boston", tickets: "03" },
    { date: "16 Jul 2025", city: "Houston", tickets: "02" },
    { date: "23 Jul 2025", city: "Seattle", tickets: "04" },
  ];

  // South America: 10 cities with realistic dates
  const southAmericaTours = [
    { date: "21 May 2025", city: "Rio de Janeiro", tickets: "03" },
    { date: "28 May 2025", city: "São Paulo", tickets: "04" },
    { date: "04 Jun 2025", city: "Buenos Aires", tickets: "02" },
    { date: "11 Jun 2025", city: "Santiago", tickets: "03" },
    { date: "18 Jun 2025", city: "Lima", tickets: "02" },
    { date: "25 Jun 2025", city: "Bogotá", tickets: "04" },
    { date: "02 Jul 2025", city: "Quito", tickets: "02" },
    { date: "09 Jul 2025", city: "La Paz", tickets: "03" },
    { date: "16 Jul 2025", city: "Caracas", tickets: "02" },
    { date: "23 Jul 2025", city: "Montevideo", tickets: "02" },
  ];

  // Asia: 10 cities with realistic dates
  const asiaTours = [
    { date: "21 May 2025", city: "Tokyo", tickets: "02" },
    { date: "28 May 2025", city: "Seoul", tickets: "03" },
    { date: "04 Jun 2025", city: "Bangkok", tickets: "03" },
    { date: "11 Jun 2025", city: "Singapore", tickets: "02" },
    { date: "18 Jun 2025", city: "Hong Kong", tickets: "04" },
    { date: "25 Jun 2025", city: "Taipei", tickets: "02" },
    { date: "02 Jul 2025", city: "Shanghai", tickets: "04" },
    { date: "09 Jul 2025", city: "Beijing", tickets: "02" },
    { date: "16 Jul 2025", city: "Mumbai", tickets: "03" },
    { date: "23 Jul 2025", city: "Dubai", tickets: "02" },
  ];

  // Africa: 10 cities with realistic dates
  const africaTours = [
    { date: "21 May 2025", city: "Cairo", tickets: "03" },
    { date: "28 May 2025", city: "Johannesburg", tickets: "04" },
    { date: "04 Jun 2025", city: "Cape Town", tickets: "02" },
    { date: "11 Jun 2025", city: "Nairobi", tickets: "03" },
    { date: "18 Jun 2025", city: "Lagos", tickets: "02" },
    { date: "25 Jun 2025", city: "Casablanca", tickets: "03" },
    { date: "02 Jul 2025", city: "Accra", tickets: "02" },
    { date: "09 Jul 2025", city: "Tunis", tickets: "03" },
    { date: "16 Jul 2025", city: "Addis Ababa", tickets: "02" },
    { date: "23 Jul 2025", city: "Dakar", tickets: "02" },
  ];

  // Australia/Oceania: 10 cities with realistic dates
  const australiaTours = [
    { date: "21 May 2025", city: "Sydney", tickets: "03" },
    { date: "28 May 2025", city: "Melbourne", tickets: "02" },
    { date: "04 Jun 2025", city: "Brisbane", tickets: "02" },
    { date: "11 Jun 2025", city: "Perth", tickets: "03" },
    { date: "18 Jun 2025", city: "Adelaide", tickets: "02" },
    { date: "25 Jun 2025", city: "Hobart", tickets: "04" },
    { date: "02 Jul 2025", city: "Cairns", tickets: "02" },
    { date: "09 Jul 2025", city: "Darwin", tickets: "02" },
    { date: "16 Jul 2025", city: "Auckland", tickets: "03" }, // New Zealand
    { date: "23 Jul 2025", city: "Wellington", tickets: "02" }, // New Zealand
  ];

  return (
    <div>
      <h1>Tours</h1>
      <div className="tours-container">
        {/* Europe */}
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

        {/* North America */}
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

        {/* South America */}
        <div className="section">
          <h1>South America</h1>
          <div className="section-container">
            {southAmericaTours.map((tour, index) => (
              <div key={index} className="section-box">
                <div>{tour.date}</div>
                <div>{tour.city}</div>
                <div>{tour.tickets}</div>
                <div>TICKETS</div>
              </div>
            ))}
          </div>
        </div>

        {/* Asia */}
        <div className="section">
          <h1>Asia</h1>
          <div className="section-container">
            {asiaTours.map((tour, index) => (
              <div key={index} className="section-box">
                <div>{tour.date}</div>
                <div>{tour.city}</div>
                <div>{tour.tickets}</div>
                <div>TICKETS</div>
              </div>
            ))}
          </div>
        </div>

        {/* Africa */}
        <div className="section">
          <h1>Africa</h1>
          <div className="section-container">
            {africaTours.map((tour, index) => (
              <div key={index} className="section-box">
                <div>{tour.date}</div>
                <div>{tour.city}</div>
                <div>{tour.tickets}</div>
                <div>TICKETS</div>
              </div>
            ))}
          </div>
        </div>

        {/* Australia/Oceania */}
        <div className="section">
          <h1>Australia / Oceania</h1>
          <div className="section-container">
            {australiaTours.map((tour, index) => (
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
