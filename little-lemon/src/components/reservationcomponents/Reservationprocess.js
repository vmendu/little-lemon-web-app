import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Reservationprocess.css';
import moment from "moment";
import lemonlogo from '../images/lemonlogo.png';




function Reservationprocess(){

  const [selectedDate,setSelectedDate] = useState("");
  const [selectedTime,setSelectedTime] = useState("");
  const [people, setPeople] = useState("");
  const [occasion, setOccasion] = useState("");
  const [timeSlots]= useState([ ]);
  const [showTimeSlots, setShowTimeSlots] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
    const navigate = useNavigate();

  const getIsFormValid = () => {
      return (
        selectedDate !== "" &&
        selectedTime !== "" &&
        people !== "" &&
        occasion !== ""
      );
  };

  const resetForm = () => {
    setSelectedDate("");
    setSelectedTime("");
    setPeople("");
    setOccasion("");
    setShowTimeSlots([]);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
  };



  const generateTimeSlots = (selectedTime) => {
    const timeFormat = "h:mm a";
    const startTime = moment(selectedTime, timeFormat);
    const slots = [];

    for (let i = -2; i <= 2; i++) {
      const slotTime = startTime.clone().add(i * 15, "minutes");

      if (slotTime.format("A") === "AM"){
        slotTime.add(12, "hours");
      }
      if (slotTime.isBefore(moment("9:45PM", "h:mm a"))){
        slots.push(slotTime.format(timeFormat));
      }
    }

    return slots;
  };

  const handleTimeSlotGeneration = (e) => {
    e.preventDefault();

    if (selectedTime) {
        const generatedTimeSlots = generateTimeSlots(selectedTime);
        setShowTimeSlots(generatedTimeSlots);

        if (generatedTimeSlots.length > 0) {
            setSelectedTimeSlot(generatedTimeSlots[2]);
        }
    }
  };

  const handleConfirmation = () => {
    navigate('/confirmation', {
      state: {
        selectedDate,
        selectedTimeSlot,
        people,
        occasion,
      },
    });
  };
 

    return (
        <>
        <div className="reservation">
        <h1> Reservation </h1>
 </div>

<section className="reservation-process">
    <div className="find-a-table">
        <h2> Find a table </h2>
        <div className='reservation-underline'></div>
        <div className="clear-button-container">
  <button className="clear-button" type="button" onClick={resetForm} >
    Clear
  </button>
    </div>
    </div>

        <form className="reservation-form" onSubmit={handleSubmit}>
        <fieldset className="dropdown-field">
        <div className="dropdown">
            <label  className="dropdown-name"> Date: </label>
            <div className="dropdown-values">
        <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
        />
        </div>
            <span class="icon"><ion-icon name="calendar-outline"></ion-icon></span>
        </div>
        </fieldset>




        <fieldset className="dropdown-field">
            <div className="dropdown">
                <label  className="dropdown-name">  Time: </label>
                <span class="icon"><ion-icon name="time-outline"></ion-icon></span>
                <select  className="dropdown-values" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
                <option value=""> Time </option>
                <option value="11:00"> 11:00 am </option>
                <option value="11:15"> 11:15 am </option>
                <option value="11:30"> 11:30 am </option>
                <option value="11:45"> 11:45 am </option>
                <option value="12:00"> 12:00 pm </option>
                <option value="12:15"> 12:15 pm </option>
                <option value="12:30"> 12:30 pm </option>
                <option value="12:45"> 12:45 pm </option>
                <option value="1:00"> 1:00 pm </option>
                <option value="1:15"> 1:15 pm </option>
                <option value="1:30"> 1:30 pm </option>
                <option value="1:45"> 1:45 pm </option>
                x<option value="2:00"> 2:00 pm </option>
                <option value="2:15"> 2:15 pm </option>
                <option value="2:30"> 2:30 pm </option>
                <option value="2:45"> 2:45 pm </option>
                <option value="3:00"> 3:00 pm </option>
                <option value="3:15"> 3:15 pm </option>
                <option value="3:30"> 3:30 pm </option>
                <option value="3:45"> 3:45 pm </option>
                <option value="4:00"> 4:00 pm </option>
                <option value="4:15"> 4:15 pm </option>
                <option value="4:30"> 4:30 pm </option>
                <option value="4:45"> 4:45 pm </option>
                <option value="5:00"> 5:00 pm </option>
                <option value="5:15"> 5:15 pm </option>
                <option value="5:30"> 5:30 pm </option>
                <option value="5:45"> 5:45 pm </option>
                <option value="6:00"> 6:00 pm </option>
                <option value="6:15"> 6:15 pm </option>
                <option value="6:30"> 6:30 pm </option>
                <option value="6:45"> 6:45 pm </option>
                <option value="7:00"> 7:00 pm </option>
                <option value="7:15"> 7:15 pm </option>
                <option value="7:30"> 7:30 pm </option>
                <option value="7:45"> 7:45 pm </option>
                <option value="8:00"> 8:00 pm </option>
                <option value="8:15"> 8:15 pm </option>
                <option value="8:30"> 8:30 pm </option>
                <option value="8:45"> 8:45 pm </option>
                <option value="9:00"> 9:00 pm </option>
                <option value="9:15"> 9:15 pm </option>
                <option value="9:30"> 9:30 pm </option>



                {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                ))}
            </select>
            </div>
        </fieldset>


        <fieldset className="dropdown-field">
            <div className="dropdown">
                <label className="dropdown-name"> People: </label>
                <span class="icon"><ion-icon name="people-outline"></ion-icon></span>
                <select  className="dropdown-values" value = {people} onChange={(e) => setPeople(e.target.value)}>
                <option value="people">People</option>
                 <option value="1"> 1 person </option>
                 <option value="2"> 2 people </option>
                 <option value="3"> 3 people </option>
                 <option value="4"> 4 people </option>
                 <option value="5"> 5 people </option>
                 <option value="6"> 6 people </option>
                 <option value="7"> 7 people </option>
                 <option value="8"> 8 people </option>
                 <option value="9"> 9 people </option>
                 <option value="10"> 10 people </option>
                 <option value="11"> 11 people </option>
                 <option value="12"> 12 people </option>
                 <option value="13"> 13 people </option>
                 <option value="14"> 14 people </option>
                 <option value="15"> 15 people </option>
                 <option value="16"> 16 people </option>
                 <option value="17"> 17 people </option>
                 <option value="18"> 18 people </option>
                 <option value="19"> 19 people </option>
                 <option value="20"> 20 people </option>
                 <option value="larger party "> Larger Party </option>
                </select>
            </div>
        </fieldset>


        <fieldset className="dropdown-field">
            <div className="dropdown">
                <label  className="dropdown-name"> Occasion:</label>
                <span class="icon"><ion-icon name="wine-outline"></ion-icon></span>
                <select  className="dropdown-values"  value= {occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option value="occassion">Occasion</option>
                <option value="birthday"> Birthday </option>
                 <option value="date night"> Date Night </option>
                 <option value="anniversary"> Anniversary </option>
                 <option value="business meal"> Bussiness Meal </option>
                 <option value="celebration"> Celebration </option>  
                </select>
            </div>
        </fieldset>

<div className="dropdown-button">
<button className="dropdown-submit" type="submit" onClick={handleTimeSlotGeneration} disabled={!getIsFormValid ()}>
                Find a Table!
            </button>
</div>
</form>

{showTimeSlots && (
  <div className="available-times">
    <h2>Available Times:</h2>
    <ul className="available-times-section">
      {showTimeSlots.map((slot, index) => (
        <button
          key={index}
          className={`available-times-button ${
            slot === selectedTimeSlot ? "selected-time-slot" : ""
          }`}
          onClick={() => setSelectedTimeSlot(slot)}
        >
          {slot}
        </button>
      ))}
    </ul>
  </div>
)}



<div className="bottom-reservation-form">
<div className="little-lemon-info-card">
<div className="resturant-lemon-image">
    <img className="lemon-logo" src= {lemonlogo} alt="lemon-logo"/>
</div>

<div className="little-lemon-info">
    <div className="resturant-title">
        <h1> Little Lemon </h1>
     </div>
     <div className="resturant-info">
        <h3>
            <span className="black-text"> $$</span>
        </h3>
        <span className="separator">
        <ion-icon name="ellipse"></ion-icon>
        </span>
        <h3> Mediterranean </h3>
        <span className="separator">
        <ion-icon name="ellipse"></ion-icon>
        </span>
        <h3> Boston </h3>
    </div>
    <div className="resturant-reviews">
        <span className="rating-icon-info">
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star-outline"></ion-icon>
            </span>
        <h3> 250 reviews </h3>
    </div>
    </div>
</div>


<div className="book-button">
<button className="book-table" type="button" onClick={handleConfirmation}  disabled={!getIsFormValid ()} >
                Book Table
            </button>
</div>
</div>

</section>
</>
    );
};

export default Reservationprocess;