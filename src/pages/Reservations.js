import React from "react";
import './Reservations.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reservationprocess from "../components/reservationcomponents/Reservationprocess";
import Reservationintro from "../components/reservationcomponents/Reservationintro";




function Reservations () {
        return (
          <>
          <Header/>
          <Reservationintro/>
          <Reservationprocess/>
          <Footer/>
          </>
        );
    }
      export default Reservations;