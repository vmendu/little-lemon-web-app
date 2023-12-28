import React from 'react';
import greeksalad from "../images/greeksalad.jpg";
import romaineavocadosalad from "../images/romaineavocadosalad.jpg";
import strawberrydatesalad from "../images/strawberrydatesalad.jpg";
import caesarsalad  from "../images/caesarsalad.jpg";
import "./Orderingsalads.css"



function Orderingsalads() {

    return(
<div className='online-ordering-salads'>
        <div className='online-salads-title'>
                <h1>Salads</h1>
        </div>

        <div className='salads-sections'>
                <div className='salads-scroll-container'>
                <div className='salads-card'>
                        <div className='salads-image'>
                        <img src={greeksalad} alt='mediterranean-greek-salad'/>
                        </div>
                        <div className='salads-info'>
                                <div className=' salads-description '>
                                <h1 >MEDITERRANEAN GREEK SALAD </h1>
                                <h3> mixed greens, onions, roma tomatoes, cucumbers, kalamata olives, feta cheese, balsamic vinaigrette </h3>
                                </div>
                                 <div className='salads-price'>
                                        <h3> $10.99</h3>
                                </div>
                        </div>
                        <div className='online-order-delivery-button-salads'>
                        <button className='order-delivery-action-salads'> Order Delivery </button>
                        <span className='bicycle-outline-salads'><ion-icon name="bicycle-outline"></ion-icon></span>
                        </div>
                        </div>

                <div className='salads-card'>
                        <div className='salads-image'>
                        <img src={romaineavocadosalad} alt='romaine-avocado-salad'/>
                        </div>
                        <div className='salads-info'>
                                <div className='salads-description '>
                                <h1 >ROMAINE AVOCADO SALAD</h1>
                                <h3> romaine hearts, avocado, cucumber, roma tomatoes with lemon vinaigrette </h3>
                                </div>
                                 <div className=' salads-price'>
                                 <h3> $9.99 </h3>
                                </div>
                        </div>
                        <div className='online-order-delivery-button-salads'>
                        <button className='order-delivery-action-salads'> Order Delivery </button>
                        <span className='bicycle-outline-salads'><ion-icon name="bicycle-outline"></ion-icon></span>
                        </div>
                        </div>

                <div className='salads-card'>
                        <div className='salads-image'>
                        <img src={strawberrydatesalad} alt='strawberry-date-salad'/>
                        </div>
                        <div className='salads-info'>
                                <div className='salads-description '>
                                <h1 >STRAWBERRY DATE SALAD</h1>
                                <h3> mixed greens, strawberries, candied walnuts, medjool dates, gorgonzola cheese with pomegranate vinaigrette</h3>
                                </div>
                                 <div className='salads-price'>
                                 <h3> $11.99</h3>
                                </div>
                        </div>
                        <div className='online-order-delivery-button-salads'>
                        <button className='order-delivery-action-salads'> Order Delivery </button>
                        <span className='bicycle-outline-salads'><ion-icon name="bicycle-outline"></ion-icon></span>
                        </div>
                        </div>

                <div className='salads-card'>
                        <div className='salads-image'>
                        <img src={caesarsalad} alt='caesar-salad'/>
                        </div>
                        <div className='salads-info'>
                                <div className='salads-description'>
                                <h1 >CAESAR SALAD</h1>
                                <h3> romaine lettuce, croutons, reggiano parmesan cheese, caesar dressing</h3>
                                </div>
                                 <div className='salads-price'>
                                 <h3> $9.99</h3>
                                </div>
                        </div>
                        <div className='online-order-delivery-button-salads'>
                        <button className='order-delivery-action-salads'> Order Delivery </button>
                        <span className='bicycle-outline-salads'><ion-icon name="bicycle-outline"></ion-icon></span>
                        </div>
                        </div>
        </div>
        </div>


</div>




    )
 }

 export default Orderingsalads;

