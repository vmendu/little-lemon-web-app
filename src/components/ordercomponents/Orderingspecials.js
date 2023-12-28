import React from 'react';
import greeksalad from "../images/greeksalad.jpg";
import bruschetta from "../images/bruschetta.jpeg";
import lemontiramisu from "../images/lemontiramisu.jpg";
import "./Orderingspecials.css"



function Orderingspecials() {

    return(
<div className='online-ordering-specials'>
        <div className='online-specials-title'>
                <h1>Specials</h1>
        </div>

        <div className='specials-sections'>
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
                        <div className='online-order-delivery-button-specials'>
                        <button className='order-delivery-action-specials'> Order Delivery </button>
                        <span className='bicycle-outline-specials'><ion-icon name="bicycle-outline"></ion-icon></span>
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
                        <div className='online-order-delivery-button-specials'>
                        <button className='order-delivery-action-specials'> Order Delivery </button>
                        <span className='bicycle-outline-specials'><ion-icon name="bicycle-outline"></ion-icon></span>
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
                        <div className='online-order-delivery-button-specials'>
                        <button className='order-delivery-action-specials'> Order Delivery </button>
                        <span className='bicycle-outline-specials'><ion-icon name="bicycle-outline"></ion-icon></span>
                        </div>
                        </div>

        </div>
        </div>


</div>




    )
 }

 export default Orderingspecials;

