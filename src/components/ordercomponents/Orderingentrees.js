import React from 'react';
import chickenkabob from "../images/chickenkabob.jpg";
import salmonkabob from "../images/salmonkabob.jpeg";
import lambkabob from "../images/lambkabob.jpeg";
import beefkabob from "../images/beefkabob.jpeg";
import shrimpkabob from "../images/shrimpkabob.jpeg";
import "./Orderingentrees.css"



function Orderingentrees() {

    return(
<div className='online-ordering-entrees'>
        <div className='online-entrees-title'>
                <h1>Entrees</h1>
        </div>

        <div className='entrees-sections'>
        <div className='entrees-scroll-container'>
                <div className='entrees-card'>
                        <div className='entrees-image'>
                        <img src={chickenkabob} alt='chicken-kabob'/>
                        </div>
                        <div className='entrees-info'>
                                <div className=' entrees-description'>
                                <h1> CHARBROILED CHICKEN SHISH KABOB </h1>
                                <h3> charbroiled fresh tenders with no antibiotics, skewered with grilled vegetables </h3>
                                </div>
                                 <div className='entrees-price'>
                                        <h3> $14.99 </h3>
                                </div>
                        </div>
                        <div className='online-order-delivery-button-entrees'>
                        <button className='order-delivery-action-entrees'> Order Delivery </button>
                        <span className='bicycle-outline-entrees'><ion-icon name="bicycle-outline"></ion-icon></span>
                        </div>
                        </div>

                <div className='entrees-card'>
                        <div className='entrees-image'>
                        <img src={salmonkabob} alt='salmon-kabob'/>
                        </div>
                        <div className='entrees-info'>
                                <div className='entrees-description'>
                                <h1> FRESH ATLANTIC SALMON KABOB</h1>
                                <h3> fresh sustainable atlantic salmon with skewer of grilled vegetables   </h3>
                                </div>
                                 <div className='entrees-price'>
                                 <h3> $17.99</h3>
                                </div>
                        </div>
                        <div className='online-order-delivery-button-entrees'>
                        <button className='order-delivery-action-entrees'> Order Delivery </button>
                        <span className='bicycle-outline-entrees'><ion-icon name="bicycle-outline"></ion-icon></span>
                        </div>
                        </div>

                <div className='entrees-card'>
                        <div className='entrees-image'>
                        <img src={lambkabob} alt='lamb-kabob'/>
                        </div>
                        <div className='entrees-info'>
                                <div className='entrees-description '>
                                <h1> LAMB BARG KABOB</h1>
                                <h3> charbroiled fillet of lamb tender with skewer of grilled vegetables  </h3>
                                </div>
                                 <div className='entrees-price'>
                                 <h3> $15.99</h3>
                                </div>
                        </div>
                        <div className='online-order-delivery-button-entrees'>
                        <button className='order-delivery-action-entrees'> Order Delivery </button>
                        <span className='bicycle-outline-entrees'><ion-icon name="bicycle-outline"></ion-icon></span>
                        </div>
                        </div>

                <div className='entrees-card'>
                        <div className='entrees-image'>
                        <img src={beefkabob} alt='beef-kabob'/>
                        </div>
                        <div className='entrees-info'>
                                <div className='entrees-description '>
                                <h1> BEEF KOOBIDEH KABOB </h1>
                                <h3> charbroiled all natural, hormone free seasoned ground beef skewered with grilled vegetables </h3>
                                </div>
                                 <div className='entrees-price'>
                                 <h3> $15.99</h3>
                                </div>
                        </div>
                        <div className='online-order-delivery-button-entrees'>
                        <button className='order-delivery-action-entrees'> Order Delivery </button>
                        <span className='bicycle-outline-entrees'><ion-icon name="bicycle-outline"></ion-icon></span>
                        </div>
                        </div>

                <div className='entrees-card'>
                        <div className='entrees-image'>
                        <img src={shrimpkabob} alt='shrimp-kabob'/>
                        </div>
                        <div className='entrees-info'>
                                <div className='entrees-description '>
                                <h1> JUMBO SHRIMP KABOB </h1>
                                <h3> five jumbo shrimp skewered with grilled vegetables  </h3>
                                </div>
                                 <div className='entrees-price'>
                                 <h3> $17.99</h3>
                                </div>
                        </div>
                        <div className='online-order-delivery-button-entrees'>
                        <button className='order-delivery-action-entrees'> Order Delivery </button>
                        <span className='bicycle-outline-entrees'><ion-icon name="bicycle-outline"></ion-icon></span>
                        </div>
                        </div>
                </div>
        </div>


</div>




    )
 }

 export default Orderingentrees;

