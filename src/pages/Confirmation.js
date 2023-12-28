import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Reservationconfirmation from '../components/Reservationconfirmation';

function Confirmation() {
  return (
    <div className="confirmation-page">
        <Header/>
      <Reservationconfirmation/>
      <Footer/>
    </div>
  );
}

export default Confirmation;
