import React from 'react';
import  { useEffect, useState } from 'react';
import './App.css';
import bandImage1 from './images/la.jpg';
import bandImage2 from './images/ny.jpg';
import bandImage3 from './images/chicago.jpg';
import bandMemberImage from './images/bandmember.jpg';
import newYorkImage from './images/newyork.jpg';
import parisImage from './images/paris.jpg';
import sanfranImage from './images/sanfran.jpg';
import mapImage from './images/map.jpg';

function App() {

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slides = document.getElementsByClassName('mySlides');
    if (slides.length > 0) {
      slides[currentSlide].style.display = 'block';
    }

    const interval = setInterval(() => {
      slides[currentSlide].style.display = 'none';
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => {
      clearInterval(interval);
      if (slides.length > 0) {
        slides[currentSlide].style.display = 'none';
      }
    };
  }, [currentSlide]);

  return (
    <div className="App">
      {/* Navbar */}
      <div className="nav">
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <div className="navbar">
        
        <a href="/">HOME</a>
        <a href="#band">BAND</a>
        <a href="#tour">TOUR</a>
        <a href="#contact">CONTACT</a>
        <div className="dropdown">
          <button className="dropbtn">MORE <i className="fa fa-caret-down"></i></button>
          <div className="dropdown-content">
          <a href="/" className="dropdown-item">Merchandise</a>
              <a href="/" className="dropdown-item">Extras</a>
              <a href="/" className="dropdown-item">Media</a>
          </div>
        </div>
        <a href="/" className="search-icon"><i className="fa fa-search"></i></a>
      </div>

      {/* The mobile menu */}
      <div className="mobile-menu">
        <a href="#band">BAND</a>
        <a href="#tour">TOUR</a>
        <a href="#contact">CONTACT</a>
        <a href="/">MERCH</a>
      </div>
    </div>

      {/* Page content */}
      <div className="centered-content" style={{ maxWidth: '2000px', marginTop: '20px' }}>

        {/* Automatic Slideshow Images */}
        <div className="slideshow">
          <div className="mySlides">
            <img src={bandImage1} alt="Los Angeles" style={{ width: '100%' }} />
            <div className="slide-text">
              <h3>Los Angeles</h3> <br />
             <p> <b>We had the best time playing at Venice Beach!</b></p> 
            </div>
          </div>
          <div className="mySlides">
            <img src={bandImage2} alt="New York" style={{ width: '100%' }} />
            <div className="slide-text">
              <h3>New York</h3> <br />
              <p><b>The atmosphere in New York is lorem ipsum.</b></p>
            </div>
          </div>
          <div className="mySlides">
            <img src={bandImage3} alt="Chicago" style={{ width: '100%' }} />
            <div className="slide-text">
              <h3>Chicago</h3> <br />
              <p><b>Thank you, Chicago - A night we won't forget.</b></p>
            </div>
          </div>
        </div>

        {/* The Band Section */}
       
        <div className="band-section" id="band">
          <h2>THE BAND</h2>
          <p className="subtitle"><i>We love music</i></p>
          <p className="description">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className="band-members">
            <div className="band-member">
              <p>Name</p>
              <img src={bandMemberImage} alt="Band Member" />
            </div>
            <div className="band-member">
              <p>Name</p>
              <img src={bandMemberImage} alt="Band Member" />
            </div>
            <div className="band-member">
              <p>Name</p>
              <img src={bandMemberImage} alt="Band Member" />
            </div>
          </div>
        </div>
       

        {/* The Tour Section */}
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

        {/* Ticket Modal */}
        <div id="ticketModal" className="modal">
          <div className="modal-content">
            <header className="modal-header">
              <span className="close" onClick={() => document.getElementById('ticketModal').style.display = 'none'}>&times;</span>
              <br></br>
              <h2><i className="fa fa-suitcase"></i> Tickets</h2>
            </header>
            <div className="modal-body">
              <p><label><i className="fa fa-shopping-cart"></i> Tickets, $15 per person</label></p>
              <input type="text" placeholder="How many?" className="input-field" />
              <p><label><i className="fa fa-user"></i> Send To</label></p>
              <input type="text" placeholder="Enter email" className="input-field" />
              <button className="pay-btn">PAY <i className="fa fa-check"></i></button>
              <button className="close-btn" onClick={() => document.getElementById('ticketModal').style.display = 'none'}>Close <i className="fa fa-remove"></i></button>
              <p className="help">Need <a href="/">help?</a></p>
            </div>
          </div>
        </div>

        {/* The Contact Section */}
        <div class="contact-section" id="contact">
        <div class="contact-header">
        <h2>CONTACT</h2>
        <p class="form-subtitle">Fan? Drop a note!</p>
    </div>

    <div class="contact-content">
        <div class="contact-info">
            <p><i class="fa fa-map-marker"></i> Chicago, US</p>
            <p><i class="fa fa-phone"></i> Phone: +00 151515</p>
            <p><i class="fa fa-envelope"></i> Email: mail@mail.com</p>
        </div>
        <div class="contact-form-wrapper">
        <form action="/submit" method="post">
            <div class="form-group">
                <input type="text" id="name" name="name" placeholder="Name" required />
                <input type="email" id="email" name="email" placeholder="Email" required />
            </div>
            <div class="form-group">
                <textarea id="message" name="message" placeholder="Message" required></textarea>
            </div>
            <button type="submit">SEND</button>
        </form>
        </div>
    </div>
</div>


        {/* Image of location/map */}
        <img src={mapImage} alt="Map" className="map-image" />
      </div>

      {/* Footer */}
      <footer className="footer">
        <i className="fa fa-facebook-official"></i>
        <i className="fa fa-instagram"></i>
        <i className="fa fa-snapchat"></i>
        <i className="fa fa-pinterest-p"></i>
        <i className="fa fa-twitter"></i>
        <i className="fa fa-linkedin"></i>
        <p>Powered by <a href="/" target="_blank">w3.css</a></p>
      </footer>
    </div>
  );
}

export default App;
