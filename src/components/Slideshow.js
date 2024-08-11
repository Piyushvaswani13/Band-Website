import React, { useEffect, useState } from 'react';
import bandImage1 from '../images/la.jpg';
import bandImage2 from '../images/ny.jpg';
import bandImage3 from '../images/chicago.jpg';

const Slideshow = () => {
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
    <div className="slideshow">
      <div className="mySlides" style={{ display: 'none' }}>
        <img src={bandImage1} alt="Los Angeles" style={{ width: '100%' }} />
        <div className="slide-text">
          <h3>Los Angeles</h3> <br />
          <p><b>We had the best time playing at Venice Beach!</b></p>
        </div>
      </div>
      <div className="mySlides" style={{ display: 'none' }}>
        <img src={bandImage2} alt="New York" style={{ width: '100%' }} />
        <div className="slide-text">
          <h3>New York</h3> <br />
          <p><b>The atmosphere in New York is lorem ipsum.</b></p>
        </div>
      </div>
      <div className="mySlides" style={{ display: 'none' }}>
        <img src={bandImage3} alt="Chicago" style={{ width: '100%' }} />
        <div className="slide-text">
          <h3>Chicago</h3> <br />
          <p><b>Thank you, Chicago - A night we won't forget.</b></p>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
