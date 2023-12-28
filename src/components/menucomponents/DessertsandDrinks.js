import React from 'react';
import './DessertsandDrinks.css';


function DessertsandDrinks(){
        return(

            <section className="main-menu-container">
            <div className="dessertsanddrinks">
              <div className="desserts">
                <h3> Desserts </h3>
                <div className='menu-add-on'>
                <h6>  </h6>
                </div>
                <div className='menu-item'>
                <div className='menu-item-text'>
                <h4 className='menu-item-heading'>
                                    <span className='menu-item-name'> Tiramisu </span>
                                    <span className='menu-item-price'>$7.99</span>
                            </h4>
                            <p className='menu-item-description'>
                            lady finger soaked in coffee liqueur & espresso, topped with sweetened mascarpone
                            </p>
             </div>
             </div>
             <div className='menu-item'>
                <div className='menu-item-text'>
                <h4 className='menu-item-heading'>
                                    <span className='menu-item-name'> Baklava Side </span>
                                    <span className='menu-item-price'>$2.99</span>
                            </h4>
                            <p className='menu-item-description'>
                            one piece of phyllo pastry filled with chopped pistachios
                            </p>
             </div>
             </div>
             <div className='menu-item'>
                <div className='menu-item-text'>
                <h4 className='menu-item-heading'>
                                    <span className='menu-item-name'> Baklava with Vanilla Ice Cream </span>
                                    <span className='menu-item-price'>$7.99</span>
                            </h4>
                            <p className='menu-item-description'>
                            two pieces of phyllo pastry filled with chopped pistachios, served with vanilla bean ice cream
                            </p>
             </div>
             </div>
             <div className='menu-item'>
                <div className='menu-item-text'>
                <h4 className='menu-item-heading'>
                                    <span className='menu-item-name'> Banana Bread Pudding </span>
                                    <span className='menu-item-price'>$15.99</span>
                            </h4>
                            <p className='menu-item-description'>
                            warm hawaiian sweet bread with bananas and raisins, served with a scoop of vanilla bean ice cream
                            </p>
             </div>
             </div>
              </div>
              <div className="drinks">
                <h3>Drinks</h3>
                <div className='menu-add-on'>
                <h6></h6>
                </div>
                <div className='menu-item'>
                <div className='menu-item-text'>
                <h4 className='menu-item-heading'>
                                    <span className='menu-item-name'> Fresh Squeezed Lemonade </span>
                                    <span className='menu-item-price'>$2.99</span>
                            </h4>
                            <p className='menu-item-description'>
                            regular or strawberry
                            </p>
             </div>
             </div>
             <div className='menu-item'>
                <div className='menu-item-text'>
                <h4 className='menu-item-heading'>
                                    <span className='menu-item-name'> San Pellegrino </span>
                                    <span className='menu-item-price'>$3.99</span>
                            </h4>
                            <p className='menu-item-description-hidden'>
                            romaine hearts, avocado, cucumber, roma tomatoes with lemon vinaigrette
                            </p>
             </div>
             </div>
             <div className='menu-item'>
                <div className='menu-item-text'>
                <h4 className='menu-item-heading'>
                                    <span className='menu-item-name'> Iced Tea </span>
                                    <span className='menu-item-price'>$1.99</span>
                            </h4>
                            <p className='menu-item-description'>
                            organic ginger peach
                            </p>
             </div>
             </div>
             <div className='menu-item'>
                <div className='menu-item-text'>
                <h4 className='menu-item-heading'>
                                    <span className='menu-item-name'> Fountain Drink of Choice </span>
                                    <span className='menu-item-price'>$1.99</span>
                            </h4>
                            <p className='menu-item-description-hidden'>
                            choice of grilled artisan bread, warm pita, or combo of both
                            </p>
             </div>
             </div>
             </div>
            </div>
          </section>

        )
    }

export default DessertsandDrinks;