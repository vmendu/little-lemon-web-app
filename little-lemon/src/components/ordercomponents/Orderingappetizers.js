import React from 'react';
import "./Orderingappetizers.css";
import hummustrio from "../images/hummustrio.jpg";
import falafel from "../images/falafel.jpg";
import tzatziki from "../images/tzatziki.jpg";
import caprese from "../images/caprese.jpg";





function Orderingappetizers() {
    return (
        <div className='online-ordering-appetizers'>
            <div className='online-appetizers-title'>
                <h1>Appetizers</h1>
            </div>

            <div className='appetizers-section'>
                <div className='appetizers-scroll-container'>
                <div className='appetizers-card'>
                    <div className='appetizers-image'>
                        <img src={hummustrio} alt='hummus-trio' />
                    </div>
                    <div className='appetizers-info'>
                        <div className='appetizers-description'>
                            <h1>HUMMUS TRIO</h1>
                            <h3>garbanzo hummus, spicy red bell pepper hummus, tzatziki, grilled pita</h3>
                        </div>
                        <div className='appetizers-price'>
                            <h3>$7.99</h3>
                        </div>
                    </div>
                    <div className='online-order-delivery-button-appetizers'>
                        <button className='order-delivery-action-appetizers'>Order Delivery</button>
                        <span className='bicycle-outline-appetizers'><ion-icon name="bicycle-outline"></ion-icon></span>
                    </div>
                </div>

                <div className='appetizers-card'>
                    <div className='appetizers-image'>
                        <img src={falafel} alt='falafel' />
                    </div>
                    <div className='appetizers-info'>
                        <div className='appetizers-description'>
                            <h1>FALAFEL COMBO APPETIZER</h1>
                            <h3>six falafels made from freshly ground garbanzo beans and herbs, served with hummus and tzatziki</h3>
                        </div>
                        <div className='appetizers-price'>
                            <h3>$7.99</h3>
                        </div>
                    </div>
                    <div className='online-order-delivery-button-appetizers'>
                        <button className='order-delivery-action-appetizers'>Order Delivery</button>
                        <span className='bicycle-outline-appetizers'><ion-icon name="bicycle-outline"></ion-icon></span>
                    </div>
                </div>

                <div className='appetizers-card'>
                    <div className='appetizers-image'>
                        <img src={tzatziki} alt='tzatziki' />
                    </div>
                    <div className='appetizers-info'>
                        <div className='appetizers-description'>
                            <h1>TZATZIKI</h1>
                            <h3>grated cucumbers, greek yogurt, fresh dill, olive oil, fresh lemon juice, parsley, mint, fresh chopped garlic</h3>
                        </div>
                        <div className='appetizers-price'>
                            <h3>$7.99</h3>
                        </div>
                    </div>
                    <div className='online-order-delivery-button-appetizers'>
                        <button className='order-delivery-action-appetizers'>Order Delivery</button>
                        <span className='bicycle-outline-appetizers'><ion-icon name="bicycle-outline"></ion-icon></span>
                    </div>
                </div>

                <div className='appetizers-card'>
                    <div className='appetizers-image'>
                        <img src={caprese} alt='caprese' />
                    </div>
                    <div className='appetizers-info'>
                        <div className='appetizers-description'>
                            <h1>CAPRESE</h1>
                            <h3>mozzarella, tomatoes, and basil with a balsamic glaze</h3>
                        </div>
                        <div className='appetizers-price'>
                            <h3>$7.99</h3>
                        </div>
                    </div>
                    <div className='online-order-delivery-button-appetizers'>
                        <button className='order-delivery-action-appetizers'>Order Delivery</button>
                        <span className='bicycle-outline-appetizers'><ion-icon name="bicycle-outline"></ion-icon></span>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}


 export default Orderingappetizers;

