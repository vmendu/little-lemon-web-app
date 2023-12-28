import React from 'react';
import fountaindrink  from "../images/fountaindrink.png";
import icedtea from "../images/icedtea.jpg";
import lemonade from "../images/lemonade.jpg";
import sanpellegrino from "../images/sanpellegrino.jpg";
import "./Orderingdrinks.css"



function Orderingdrinks() {

    return(
<div className='online-ordering-drinks'>
        <div className='online-drinks-title'>
                <h1>Drinks</h1>
        </div>

        <div className='drinks-sections'>
                <div className='drinks-scroll-container'>
                <div className='drinks-card'>
                        <div className='drinks-image'>
                        <img src={lemonade} alt='lemonade'/>
                        </div>
                        <div className='drinks-info'>
                                <div className='drinks-description'>
                                <h1>FRESH SQUEEZED LEMONADE </h1>
                                <h3> regular, strawberry, or orange </h3>
                                </div>
                                 <div className='drinks-price'>
                                        <h3> $2.99</h3>
                                </div>
                        </div>
                        <div className='online-order-delivery-button-drinks'>
                        <button className='order-delivery-action-drinks'> Order Delivery </button>
                        <span className='bicycle-outline-drinks'><ion-icon name="bicycle-outline"></ion-icon></span>
                        </div>
                        </div>

                <div className='drinks-card'>
                        <div className='drinks-image'>
                        <img src={sanpellegrino} alt='sanpellegrino'/>
                        </div>
                        <div className='drinks-info'>
                                <div className='drinks-description'>
                                <h1>SAN PELLEGRINO </h1>
                                </div>
                                 <div className='drinks-price'>
                                        <h3> $3.99</h3>
                                </div>
                        </div>
                        <div className='online-order-delivery-button-drinks'>
                        <button className='order-delivery-action-drinks'> Order Delivery </button>
                        <span className='bicycle-outline-drinks'><ion-icon name="bicycle-outline"></ion-icon></span>
                        </div>
                        </div>

                <div className='drinks-card'>
                        <div className='drinks-image'>
                        <img src={icedtea} alt='iced-tea'/>
                        </div>
                        <div className='drinks-info'>
                                <div className='drinks-description'>
                                <h1>ICED TEA </h1>
                                <h3> organic ginger peach </h3>
                                </div>
                                 <div className='drinks-price'>
                                        <h3> $1.99</h3>
                                </div>
                        </div>
                        <div className='online-order-delivery-button-drinks'>
                        <button className='order-delivery-action-drinks'> Order Delivery </button>
                        <span className='bicycle-outline-drinks'><ion-icon name="bicycle-outline"></ion-icon></span>
                        </div>
                        </div>

                <div className='drinks-card'>
                        <div className='drinks-image'>
                        <img src={fountaindrink} alt='fountain-drink'/>
                        </div>
                        <div className='drinks-info'>
                                <div className='drinks-description'>
                                <h1>FOUNTAIN DRINK OF CHOICE </h1>
                                </div>
                                 <div className='drinks-price'>
                                        <h3> $1.99</h3>
                                </div>
                        </div>
                        <div className='online-order-delivery-button-drinks'>
                        <button className='order-delivery-action-drinks'> Order Delivery </button>
                        <span className='bicycle-outline-drinks'><ion-icon name="bicycle-outline"></ion-icon></span>
                        </div>
                        </div>

        </div>
        </div>


</div>




    )
 }

 export default Orderingdrinks;

