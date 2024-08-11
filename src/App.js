import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Slideshow from './components/Slideshow';
import BandSection from './components/BandSection';
import TourSection from './components/TourSection';
import TicketModal from './components/TicketModal';
import ContactSection from './components/ContactSection';
import MapSection from './components/MapSection';
import Footer from './components/Footer';

const App = () => (
<div className="App" style={{ maxWidth: '2000px', marginTop: '20px' }}>
    <Navbar />
    <Slideshow />
    <BandSection />
    <TourSection />
    <TicketModal />
    <ContactSection />
    <MapSection />
    <Footer />
  </div>
);

export default App;
