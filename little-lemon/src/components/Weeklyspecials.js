import React from 'react'
import './Weeklyspecials.css';
import { useNavigate } from 'react-router-dom';
import greeksalad from "../components/images/greeksalad.jpg";
import bruschetta from "../components/images/bruschetta.jpeg";
import lemontiramisu from "../components/images/lemontiramisu.jpg";



function Weeklyspecials() {

  const navigate = useNavigate();


  const handleMenuButton = (e) => {
    e.preventDefault();
    navigate('/menu'); 
  };


  return (
    <>
    <div className="weekly-specials-title">
        <h1> This Weeks Specials </h1>
        <button className="online-menu" onClick={handleMenuButton}> Online Menu </button>
    </div>


    <div className='weekly-specials-sections'>
                <div className='specials-scroll-container'>
                        <div className='specials-card'>
                        <div className='specials-image'>
                        <img src={greeksalad} alt='mediterranean-greek-salad'/>
                        </div>
                        <div className='specials-info'>
                                <div className='specials-description'>
                                <h1> MEDITERRANEAN GREEK SALAD </h1>
                                <h3> mixed greens, onions, roma tomatoes, cucumbers, kalamata olives, feta cheese, balsamic vinaigrette </h3>
                                </div>
                                 <div className='specials-price'>
                                        <h3> $10.99</h3>
                                </div>
                        </div>
                        <div className='online-order-delivery-button-weekly-specials'>
                        <button className='order-delivery-action-weekly-specials'> Order Delivery </button>
                        <span className='bicycle-outline-weekly-specials'><ion-icon name="bicycle-outline"></ion-icon></span>
                        </div>
                        </div>

                <div className='specials-card'>
                        <div className='specials-image'>
                        <img src={bruschetta} alt='bruschetta'/>
                        </div>
                        <div className='specials-info'>
                                <div className='specials-description'>
                                <h1 >BRUSCHETTA</h1>
                                <h3> cherry heirloom tomatoes, garlic, white balsamic, basil, olive oil, grilled sourdough </h3>
                                </div>
                                 <div className='specials-price'>
                                 <h3> $5.99</h3>
                                </div>
                        </div>
                        <div className='online-order-delivery-button-weekly-specials'>
                        <button className='order-delivery-action-weekly-specials'> Order Delivery </button>
                        <span className='bicycle-outline-weekly-specials'><ion-icon name="bicycle-outline"></ion-icon></span>
                        </div>
                        </div>

                <div className='specials-card'>
                        <div className='specials-image'>
                        <img src={lemontiramisu} alt='lemon-tiramisu'/>
                        </div>
                        <div className='specials-info'>
                                <div className='specials-description'>
                                <h1 >LEMON TIRAMISU</h1>
                                <h3> lemon curd, limoncello, mascarpone, heavy cream</h3>
                                </div>
                                 <div className='specials-price'>
                                 <h3> $6.00</h3>
                                </div>
                        </div>
                        <div className='online-order-delivery-button-weekly-specials'>
                        <button className='order-delivery-action-weekly-specials'> Order Delivery </button>
                        <span className='bicycle-outline-weekly-specials'><ion-icon name="bicycle-outline"></ion-icon></span>
                        </div>
                        </div>

        </div>
        </div>





    </>
  )
}

export default Weeklyspecials;