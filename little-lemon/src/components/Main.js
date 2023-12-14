import React from 'react';
import './main.css';
import restaurantfood from './images/restaurantfood.jpg'
import { Link } from 'react-router-dom';



function Main() {
  return (
    <>
      <section className="main-container">
        <div className="main-content">
          <div className="main-left">
            <h1> Little Lemon </h1>
            <h4>Boston</h4>
            <p> Welcome to Little Lemon, a vibrant and inviting casual Mediterranean restaurant that will transport you to the sun-kissed shores of the Mediterranean Sea. Nestled in the heart of Boston, Little Lemon offers a delightful culinary experience that celebrates the rich flavors, fresh ingredients, and time-honored traditions of the Mediterranean region.</p>
            <Link to="/reservations">
              <button className="reserve-table-button">Reserve a Table</button>
            </Link>
          </div>
          <div className="main-right">
            <img src={restaurantfood} alt="resturant food" className="intro-image" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Main;
