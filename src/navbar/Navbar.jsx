import React  from 'react'
import './Navbar.css'
import {useState} from 'react';
import {GiMuscleUp} from 'react-icons/gi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {ImCross} from "react-icons/im"

function Navbar() {

  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  };
 
  return (
  <section className="navbar" id="navbar">
  <div className="nav__title">
    <span className="nav__icons"><GiMuscleUp/></span>
   <span className="nav__name">Ubiff Pro</span>
   </div>

   <div className="nav__options">
    <ul className={isActive ? 'show__nav-links' : 'nav__links'}>
        <li className="nav__items">
           <a href="#"  onClick={handleClick}> Home</a>
        </li>

        <li className="nav__items">
        <a href="#program" onClick={handleClick}> Program</a>
        </li>

        <li className="nav__items">
        <a href="#choose" onClick={handleClick}> Choose Us</a>
        </li>

        <li className="nav__items">
        <a href="#plans"  onClick={handleClick}> Plans</a>
        </li>

        <li className="nav__items">
         <ImCross className='nav__icon3' onClick={handleClick}/>
        </li>

       <button className='nav__btn'> <a href="#contact">Contact Now</a></button>
    </ul>

  
</div>
<GiHamburgerMenu className='nav__icon2'  onClick={handleClick}/>
  

  </section>
  )
}

export default Navbar
