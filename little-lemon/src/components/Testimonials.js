import React from 'react';
import './Testimonials.css'
import brandon from './images/brandon.png';
import sorya from  './images/sorya.png';
import tyla from './images/tyla.png';
import randell from './images/randell.png';



function Testimonials () {

    return(

      <>
      <div className='testimonials-title'>
        <h1> Testimonials </h1>
      </div>
      <div className='testimonials-container'>
          <div className="testimonial-card">
            <img src={brandon} alt='brandon' className='card-image-brandon' />
            <h2>Brandon</h2>
            <span className="rating-icon">
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star-outline"></ion-icon>
            </span>
            <p>Little Lemon is a delightful little restaurant that offers a wide variety of tasty dishes at an affordable price, with a cozy atmosphere and friendly staff.  </p>
            <div className="read-button-brandon">
              <span className="read-more-button"> Read More </span>
            </div>
          </div>

          <div className="testimonial-card">
            <img src={sorya} alt='sorya' className='card-image-sorya' />
            <h2>Sorya</h2>
            <span className="rating-icon">
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
            </span>
            <p>Little Lemon is a true culinary treasure. This restaurant offers an exceptional dining experience with mouth watering dishes that worth every penny.</p>
            <div type="button" className="read-button-sorya">
              <span className="read-more-button"> Read More </span>
            </div>
          </div>

          <div className="testimonial-card">
            <img src={tyla} alt='tyla' className='card-image-tyla' />
            <h2>Tyla</h2>
            <span className="rating-icon">
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star-half-outline"></ion-icon>
            </span>
            <p>Little Lemon is a gem that offers a dining experience. With an affordable price range, this restaurant delivers on both quality and value. </p>
            <div type="button" className="read-button-tyla">
              <span className="read-more-button"> Read More </span>
            </div>
          </div>

          <div className="testimonial-card">
            <img src={randell} alt='randell' className='card-image-randell' />
            <h2>Randell</h2>
            <span className="rating-icon">
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star-outline"></ion-icon>
            </span>
            <p>Little Lemon is a hidden gem in the heart of the city. The restaurant offers a charming ambiance and a diverse menu that will please any palate. </p>
            <div type="button" className="read-button-randell">
              <span className="read-more-button"> Read More </span>
            </div>
          </div>
</div>

        </>

    )


}

export default Testimonials;