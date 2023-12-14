import Resturant from '../images/restaurant.jpg';
import './Reservationintro.css';


function Reservationintro() {

    return(
            <>
            <section>
            <div className="reservation-intro">
            <img src={Resturant} alt="resturant interior image" className="interior-image" />
          </div>
          <div className='reservation-details'>
                <h1>Reservation Details</h1>
                <h3> What to know before going: </h3>
                </div>
                <div className='important-info'>
                <h4>Important dining information:</h4>
                <h5>Please call us if you are running later than 15 minutes after your reservation time.</h5>
                <h4>A note from the restaurant: </h4>
                <h5>All members of your party must be present to be seated. Please note if you would like a table inside or outside, all requests may not be able to be granted but we will do our best. </h5>
                </div>
            </section>
            </>

    )
 }

 export default Reservationintro;