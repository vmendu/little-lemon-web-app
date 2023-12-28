import React, {useState} from "react";
import { useLocation } from 'react-router-dom';
import { validateEmail } from "../utils";
import './Reservationconfirmation.css';

const Reservationconfirmation = () => {
  const location = useLocation();
  const { selectedDate, selectedTimeSlot, people, occasion } = location.state || {};

  const formattedOccasion = occasion ? occasion.charAt(0).toUpperCase() + occasion.slice(1) : '';

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subscribeToNewsletter, setSubscribedToNewsletter] = useState(false)

  const getIsSubmitValid = () => {
    return(
    firstName.trim() !== "" &&
    lastName.trim() !== "" &&
    phoneNumber.trim() !== "" &&
    validateEmail(email)
    )
  };

  const clearSubmit = (e) => {
    setFirstName("")
    setLastName("")
    setPhoneNumber("")
    setEmail("")
  }

  const createSubmit = (e) => {
    e.preventDefault()
    alert("Reservation Confirmed! We look forward to seeing you and we hope you enjoy your meal!");
  clearSubmit();
}


  return (
    <>
    <div className="confirmation-title">
      <h1> Reservation at Little Lemon: </h1>
    </div>
<div className="confirmation-upper-bar">
  <div className="step">
    <span className="checkmark-icon"><ion-icon name="checkmark-outline"></ion-icon></span>
    <h2 className="find-a-table-text">1. Find a Table</h2>
  </div>
    <h2 className="confirmation-details-text">2. Confirmation Details </h2>
</div>
  <div className='confirmation-underline'></div>

    <div className="confirmation-flow">
    <div className="confirmation-summary">
      <h2>Little Lemon </h2>
      <div className="confirmation-row">
      <span className="confirmation-icon">
      <ion-icon name="calendar-outline"></ion-icon>
      </span>
      <p> {selectedDate instanceof Date ? selectedDate.toDateString() : ''}</p>
      </div>
      <div className="confirmation-row">
      <span className="confirmation-icon">
      <ion-icon name="time-outline"></ion-icon>
      </span>
      <p>{selectedTimeSlot}</p>
      </div>
      <div className="confirmation-row">
      <span className="confirmation-icon">
      <ion-icon name="people-outline"></ion-icon>
      </span>
      <p>{people} people</p>
      </div>
      <div className="confirmation-row">
      <span className="confirmation-icon">
      <ion-icon name="wine-outline"></ion-icon>
      </span>
      <p>{formattedOccasion}</p>
      </div>
      <div className="confirmation-row">
      <span className="confirmation-icon">
      <ion-icon name="location-outline"></ion-icon>
      </span>
      <p>250 Northern Ave Boston, MA, <br/> 0221 United States</p>
      </div>
      </div>

    <div className="confirmation-line"></div>

<div className="confirmation-field">
  <form className="confirmation-details-section" onSubmit={createSubmit}>
    <fieldset className="details-field">
      <div className="text-field">
        <input className="confirmation-text-input"
          id="First Name"
          type="text"
          placeholder="First Name"
          name="First Name"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </div>
    </fieldset>

    <fieldset className="details-field">
      <div className="text-field">
        <input className="confirmation-text-input"
          id="Last Name"
          type="text"
          placeholder="Last Name"
          name="Last Name"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </div>
    </fieldset>

    <fieldset className="details-field">
      <div className="text-field">
        <input className="confirmation-text-input"
          id="Phone Number"
          type="text"
          placeholder="Phone Number"
          name="Phone Number"
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
        />
      </div>
    </fieldset>

    <fieldset className="details-field">
      <div className="text-field">
        <input className="confirmation-text-input"
          id="Email"
          type="text"
          placeholder="Email"
          name="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
    </fieldset>
 
  <form className="confirmation-details-newsletter">
    <fieldset className="newsletter-field">
      <label className="newsletter-text">
        <input 
          className="checkbox-style"
          type="checkbox"
          name="newsletter"
          checked={subscribeToNewsletter}
          onChange={() => setSubscribedToNewsletter(!subscribeToNewsletter)}
        />
         <span className="custom-checkbox-reservation-confirmation"></span>
        Sign up for little lemon newsletter <br/> and receive offers
      </label>
    </fieldset>
  </form>

  <div className="confirm-reservation-button">
 <button className="confirm-reservation" type="submit" onClick={createSubmit}  disabled={!getIsSubmitValid ()} >
             Confirm Reservation
         </button>
</div>

</form>
</div>
</div>
</>
  )
  }


  export default Reservationconfirmation;