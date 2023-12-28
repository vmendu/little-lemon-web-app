import React from 'react';
import "../pages/Order.css";
import Header from '../components/Header';
import Resturantchefb from '../components/images/restaurantchefb.jpg'
import Orderingspecials from '../components/ordercomponents/Orderingspecials';
import Orderingappetizers from '../components/ordercomponents/Orderingappetizers';
import Orderingsalads from '../components/ordercomponents/Orderingsalads';
import Orderingentrees from '../components/ordercomponents/Orderingentrees';
import Orderingsides from '../components/ordercomponents/Orderingsides';
import Orderingdesserts from '../components/ordercomponents/Orderingdesserts';
import Orderingdrinks from '../components/ordercomponents/Orderingdrinks';
import Footer from '../components/Footer';


function Order() {

    return(
            <>
            <Header/>
            <div className='online-ordering-header'>
            <img src={Resturantchefb} alt="resturant interior image" className="food-cooking-image" />
            </div>
            <Orderingspecials/>
            <Orderingappetizers/>
            <Orderingsalads/>
            <Orderingentrees/>
            <Orderingsides/>
            <Orderingdesserts/>
            <Orderingdrinks/>
            <Footer/>

            </>

    )
 }

 export default Order;


