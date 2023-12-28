import React from 'react';
import greeksalad from "../images/greeksalad.jpg";
import mediterraneanbreadbasket from "../images/mediterraneanbreadbasket.jpg";
import greenlentilsoup from "../images/greenlentilsoup.jpg";
import romaineavocadosalad from "../images/romaineavocadosalad.jpg";
import "./Orderingsides.css";



function Orderingsides() {

    return(
<div className='online-ordering-sides'>
        <div className='online-sides-title'>
                <h1>Sides</h1>
        </div>

        <div className='sides-sections'>
                <div className='sides-scroll-container'>
                <div className='sides-card'>
                        <div className='sides-image'>
                        <img src={mediterraneanbreadbasket} alt='mediterranean-bread-basket'/>
                        </div>
                        <div className='sides-info'>
                                <div className='sides-description '>
                                <h1> MEDITERRANEAN BREAD BASKET </h1>
                                <h3> choice of grilled artisan bread, warm pita, or combo of both  </h3>
                                </div>
                                 <div className=' sides-price'>
                                        <h3> $5.99 </h3>
                                </div>
                        </div>
                        <div className='online-order-delivery-button-sides'>
                        <button className='order-delivery-action-sides'> Order Delivery </button>
                        <span className='bicycle-outline-sides'><ion-icon name="bicycle-outline"></ion-icon></span>
                        </div>
                </div>

                <div className='sides-card'>
                        <div className='sides-image'>
                        <img src={greenlentilsoup} alt='green-lentil-soup'/>
                        </div>
                        <div className='sides-info'>
                                <div className='sides-description '>
                                <h1> GREEN LENTIL SOUP </h1>
                                <h3> organic lentils, tomatoes, garlic, carrots, onion, parsley, and mint in a vegetable broth  </h3>
                                </div>
                                 <div className=' sides-price'>
                                        <h3> $4.99 </h3>
                                </div>
                        </div>
                        <div className='online-order-delivery-button-sides'>
                        <button className='order-delivery-action-sides'> Order Delivery </button>
                        <span className='bicycle-outline-sides'><ion-icon name="bicycle-outline"></ion-icon></span>
                        </div>
                </div>

                <div className='sides-card'>
                        <div className='sides-image'>
                        <img src={romaineavocadosalad} alt='romaine-avocado-salad'/>
                        </div>
                        <div className='sides-info'>
                                <div className='sides-description '>
                                <h1> ROMAINE AVOCADO SALAD </h1>
                                <h3> romaine hearts, avocado, cucumber, roma tomatoes with lemon vinaigrette  </h3>
                                </div>
                                 <div className=' sides-price'>
                                        <h3> $6.99 </h3>
                                </div>
                        </div>
                        <div className='online-order-delivery-button-sides'>
                        <button className='order-delivery-action-sides'> Order Delivery </button>
                        <span className='bicycle-outline-sides'><ion-icon name="bicycle-outline"></ion-icon></span>
                        </div>
                </div>

                <div className='sides-card'>
                        <div className='sides-image'>
                        <img src={greeksalad} alt='mediterranean-greek-salad'/>
                        </div>
                        <div className='sides-info'>
                                <div className='sides-description '>
                                <h1> MEDITERRANEAN GREEK SALAD </h1>
                                <h3> mixed greens, onions, roma tomatoes, cucumbers, kalamata olives, feta cheese, balsamic vinaigrette </h3>
                                </div>
                                 <div className='sides-price'>
                                        <h3> $5.99</h3>
                                </div>
                        </div>
                        <div className='online-order-delivery-button-sides'>
                        <button className='order-delivery-action-sides'> Order Delivery </button>
                        <span className='bicycle-outline-sides'><ion-icon name="bicycle-outline"></ion-icon></span>
                        </div>
                        </div>

        </div>
        </div>


</div>




    )
 }

 export default Orderingsides;

