import './Menu.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppetizersandSalads from '../components/menucomponents/AppetizersandSalads';
import EntreesandSides from '../components/menucomponents/EntreesandSides';
import DessertsandDrinks from '../components/menucomponents/DessertsandDrinks';



function Menu() {

    return(
<>
<Header/>
<div>
      <div className='menu-title'>
    <h1> Little Lemon </h1>
    <div className='underline'></div>
  </div>
      </div>
<AppetizersandSalads/>
<EntreesandSides/>
<DessertsandDrinks/>
<Footer/>
</>

    )
 }

 export default Menu;