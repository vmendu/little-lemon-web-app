import Header from '../components/Header';
import Aboutus1 from '../components/images/aboutus1.jpg';
import Resturant from '../components/images/restaurant.jpg';
import Footer from '../components/Footer';
import './About.css';
import { useState } from 'react';

function About() {

const [email,setEmail] = useState("");

const clearForm = () => {
    setEmail("")
};

const handleSubmit = (e) => {
    e.preventDefault();
    alert("Sucess, be sure to check your email to recieve exclusive offers and learn about events and menu updates! ");
    clearForm();

}

return(
        <>
        <Header/>
        <section>
            <div className='page-title'>
                <h1>Philosophy</h1>
            </div>
            <div className="owner-image-about">
                <img src={Aboutus1} alt="About us owner image"></img>
            </div>
            <div className="description">
            <p>Welcome to Little Lemon, a vibrant and inviting casual Mediterranean restaurant that will transport you to the sun-kissed shores of the Mediterranean Sea. Nestled in the heart of Boston, Little Lemon offers a delightful culinary experience that celebrates the rich flavors, fresh ingredients, and time-honored traditions of the Mediterranean region.</p>
            <p>As you step inside Little Lemon, you'll be greeted by a warm and contemporary ambiance, adorned with vibrant hues, rustic elements, and subtle Mediterranean accents. The atmosphere is both elegant and relaxed, perfect for intimate gatherings, family dinners, or simply enjoying a flavorful meal with friends.</p>
            <p>Start your culinary journey with an assortment of appetizers, featuring classic favorites such as creamy hummus, falafel, and tangy tzatziki. Indulge in our perfectly grilled kebabs, tender and juicy, accompanied by fluffy saffron rice and a medley of grilled vegetables. For seafood enthusiasts, we offer a variety of succulent dishes, including atlantic salmon and jumbo shrimp.</p>
            <p>Finish your dining experience at Little Lemon with one of our delectable desserts. From traditional baklava dripping with honey to velvety smooth tiramisu infused with a touch of exotic spices, our desserts will leave you with a sweet and lingering taste of the Mediterranean.</p>
            <p>At Little Lemon, we strive to provide not only a remarkable dining experience but also exceptional service that leaves a lasting impression. Whether you're seeking an unforgettable evening out or a casual lunch gathering, our friendly and attentive staff is dedicated to ensuring your satisfaction.</p>
            <p>Come and experience the captivating flavors of the Mediterranean at Little Lemon, where every dish tells a story, and every bite transports you to a sun-drenched paradise of culinary delight.</p>
            </div>
             <div className="resturant-interior-about">
                <img src={Resturant} alt='Resturant interior image'></img>
             </div>
            

            <div className="exclusive-offers">
                <div className="offers-title">
                    <h2> Get </h2>
                    <h1>Exclusive Offers</h1>
                </div>
                <div className='newsletter-signup'>
                    <fieldset className='newsletter-field-about'>
                        <label className='newsletter-label' htmlFor="email"></label>
                        <input className='newsletter-input' id="email"
                        type="text"
                        placeholder='enter your email'
                        name='Newsletter' value={email}
                        onChange={e =>setEmail(e.target.value)}/>
                    </fieldset>
                    <button className='newsletter-submit' type='submit' onClick={handleSubmit}>
                        <span className='newletter-submit-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></span>
                    </button>
                </div>
            </div>

        </section>
        <Footer/>
        </>
)
}

export default About;