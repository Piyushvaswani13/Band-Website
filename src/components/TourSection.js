import React from 'react';
import newYorkImage from '../images/newyork.jpg';
import parisImage from '../images/paris.jpg';
import sanfranImage from '../images/sanfran.jpg';

const TourSection = () => (
  <div className="tour-container">
    <div className="tour-section" id="tour">
      <h2>TOUR DATES</h2>
      <p className="subtitle"><i>Remember to book your tickets!</i></p>
      <ul className="tour-dates">
        <li className="padding">September <span className="sold-out">Sold out</span></li>
        <li className="padding">October <span className="sold-out">Sold out</span></li>
        <li className="padding">November <span className="available">3</span></li>
      </ul>
      <br />
      <div className="tour-cities">
        <div className="tour-city">
          <img src={newYorkImage} alt="New York" />
          <div className="city-info">
            <p><b>New York</b></p>
            <p className="date">Fri 27 Nov 2016</p>
            <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
            <button className="buy-tickets" onClick={() => document.getElementById('ticketModal').style.display = 'block'}>Buy Tickets</button>
          </div>
        </div>
        <div className="tour-city">
          <img src={parisImage} alt="Paris" />
          <div className="city-info">
            <p><b>Paris</b></p>
            <p className="date">Sat 28 Nov 2016</p>
            <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
            <button className="buy-tickets" onClick={() => document.getElementById('ticketModal').style.display = 'block'}>Buy Tickets</button>
          </div>
        </div>
        <div className="tour-city">
          <img src={sanfranImage} alt="San Francisco" />
          <div className="city-info">
            <p><b>San Francisco</b></p>
            <p className="date">Sun 29 Nov 2016</p>
            <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
            <button className="buy-tickets" onClick={() => document.getElementById('ticketModal').style.display = 'block'}>Buy Tickets</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TourSection;
