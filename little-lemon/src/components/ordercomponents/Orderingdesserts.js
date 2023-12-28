import React from 'react';
import tiramisu from "../images/tiramisu.jpg";
import baklavawithicecream from "../images/baklavawithicecream.jpg";
import bananabreadpudding from "../images/bananabreadpudding.jpg";
import baklava from "../images/baklava.jpg";
import "./Orderingdesserts.css"



function Orderingdesserts() {

    return(
<div className='online-ordering-desserts'>
        <div className='online-desserts-title'>
                <h1>Desserts</h1>
        </div>

        <div className='desserts-sections'>
                <div className='desserts-scroll-container'>
                <div className='desserts-card'>
                        <div className='desserts-image'>
                        <img src={tiramisu} alt='tiramisu'/>
                        </div>
                        <div className='desserts-info'>
                                <div className=' desserts-description'>
                                <h1> TIRAMISU </h1>
                                <h3> lady finger soaked in coffee liqueur & espresso, topped with sweetened mascarpone </h3>
                                </div>
                                 <div className='desserts-price'>
                                        <h3> $7.99 </h3>
                                </div>
                        </div>
                        <div className='online-order-delivery-button-desserts'>
                        <button className='order-delivery-action-desserts'> Order Delivery </button>
                        <span className='bicycle-outline-desserts'><ion-icon name="bicycle-outline"></ion-icon></span>
                        </div>
                        </div>

                <div className='desserts-card'>
                        <div className='desserts-image'>
                        <img src={baklavawithicecream} alt='baklava-with-icecream'/>
                        </div>
                        <div className='desserts-info'>
                                <div className=' desserts-description'>
                                <h1> BAKLAVA WITH VANILLA ICE CREAM </h1>
                                <h3> two pieces of phyllo pastry filled with chopped pistachios, served with vanilla bean ice cream  </h3>
                                </div>
                                 <div className='desserts-price'>
                                        <h3> $7.99 </h3>
                                </div>
                        </div>
                        <div className='online-order-delivery-button-desserts'>
                        <button className='order-delivery-action-desserts'> Order Delivery </button>
                        <span className='bicycle-outline-desserts'><ion-icon name="bicycle-outline"></ion-icon></span>
                        </div>
                        </div>

                <div className='desserts-card'>
                        <div className='desserts-image'>
                        <img src={bananabreadpudding} alt='banana-bread-pudding'/>
                        </div>
                        <div className='desserts-info'>
                                <div className=' desserts-description'>
                                <h1> BANANA BREAD PUDDING </h1>
                                <h3> warm hawaiian sweet bread with bananas and raisins, served with a scoop of vanilla bean ice cream </h3>
                                </div>
                                 <div className='desserts-price'>
                                        <h3> $7.99 </h3>
                                </div>
                        </div>
                        <div className='online-order-delivery-button-desserts'>
                        <button className='order-delivery-action-desserts'> Order Delivery </button>
                        <span className='bicycle-outline-desserts'><ion-icon name="bicycle-outline"></ion-icon></span>
                        </div>
                        </div>

                <div className='desserts-card'>
                        <div className='desserts-image'>
                        <img src={baklava} alt='baklava'/>
                        </div>
                        <div className='desserts-info'>
                                <div className=' desserts-description'>
                                <h1> BAKLAVA SIDE </h1>
                                <h3> one piece of phyllo pastry filled with chopped pistachios  </h3>
                                </div>
                                 <div className='desserts-price'>
                                        <h3> $2.99 </h3>
                                </div>
                        </div>
                        <div className='online-order-delivery-button-desserts'>
                        <button className='order-delivery-action-desserts'> Order Delivery </button>
                        <span className='bicycle-outline-desserts'><ion-icon name="bicycle-outline"></ion-icon></span>
                        </div>
                        </div>

        </div>
        </div>


</div>




    )
 }

 export default Orderingdesserts;

