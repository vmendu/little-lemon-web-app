import React from 'react';
import './AppetizersandSalads.css';


function AppetizersandSalads(){
    return(

        <section className="main-menu-container">
        <div className="appetizers-salads">
          <div className="appetizers">
            <h3> Appetizers </h3>
            <div className='menu-add-on'>
            <h6> </h6>
            </div>
            <div className='menu-item'>
            <div className='menu-item-text'>
                <h4 className='menu-item-heading'>
                    <span className='menu-item-name'>Hummus Trio </span>
                    <span className='menu-item-price'>$7.99</span>
                </h4>
                <p className='menu-item-description'>
                    garbanzo hummus, spicy red bell pepper hummus, tzatziki, grilled pita
                </p>
         </div>
         </div>
         <div className='menu-item'>
            <div className='menu-item-text'>
            <h4 className='menu-item-heading'>
                    <span className='menu-item-name'> Falafel Combo Appetizer </span>
                    <span className='menu-item-price'>$7.99</span>
                </h4>
                <p className='menu-item-description'>
                    six falafels made from freshly ground garbanzo beans and herbs, served with hummus and tzatziki
                </p>
         </div>
         </div>
         <div className='menu-item'>
            <div className='menu-item-text'>
            <h4 className='menu-item-heading'>
                    <span className='menu-item-name'> Tzatziki </span>
                    <span className='menu-item-price'>$7.99</span>
                </h4>
                <p className='menu-item-description'>
                    six grated cucumbers, greek yogurt, fresh dill, olive oil, fresh lemon juice, parsley, mint, fresh chopped garlic
                </p>
         </div>
         </div>
         <div className='menu-item'>
            <div className='menu-item-text'>
            <h4 className='menu-item-heading'>
                    <span className='menu-item-name'> Caprese </span>
                    <span className='menu-item-price'>$7.99</span>
                </h4>
                <p className='menu-item-description'>
                    mozzarella, tomatoes, and basil with a balsamic glaze
                </p>
         </div>
         </div>
          </div>
          <div className="salads">
            <h3>Salads</h3>
            <div  className='menu-add-on'>
            <h6>*add protein of choice : chicken $4.99, tofu $3.99, salmon $7.99, jumbo prawns $9.99</h6>
            </div>
            <div className='menu-item'>
            <div className='menu-item-text'>
            <h4 className='menu-item-heading'>
                                <span className='menu-item-name'>Mediterranean Greek Salad </span>
                                <span className='menu-item-price'>$10.99</span>
                        </h4>
                        <p className='menu-item-description'>
                        mixed greens, onions, roma tomatoes,   cucumbers, kalamata olives, feta cheese, balsamic vinaigrette
                        </p>
         </div>
         </div>
         <div className='menu-item'>
            <div className='menu-item-text'>
            <h4 className='menu-item-heading'>
                                <span className='menu-item-name'> Caesar Salad </span>
                                <span className='menu-item-price'>$9.99</span>
                        </h4>
                        <p className='menu-item-description'>
                        romaine lettuce, croutons, reggiano parmesan cheese, caesar dressing
                        </p>
         </div>
         </div>
         <div className='menu-item'>
            <div className='menu-item-text'>
            <h4 className='menu-item-heading'>
                                <span className='menu-item-name'> Romaine Avocado Salad </span>
                                <span className='menu-item-price'>$10.99</span>
                        </h4>
                        <p className='menu-item-description'>
                        romaine hearts, avocado, cucumber, roma tomatoes with lemon vinaigrette
                        </p>
         </div>
         </div>
         <div className='menu-item'>
            <div className='menu-item-text'>
            <h4 className='menu-item-heading'>
                                <span className='menu-item-name'> Strawberry Date Salad</span>
                                <span className='menu-item-price'>$11.99</span>
                        </h4>
                        <p className='menu-item-description'>
                        mixed greens, strawberries, candied walnuts, medjool dates, gorgonzola cheese with pomegranate vinaigrette
                        </p>
         </div>
         </div>
         </div>
        </div>
      </section>






    )
}

export default AppetizersandSalads;


