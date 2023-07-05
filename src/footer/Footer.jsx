import React from 'react'
import './Footer.css'
import {GiMuscleUp} from 'react-icons/gi'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {AiOutlineTwitter} from 'react-icons/ai'


function Footer() {
  return (
   <section className="footer" id="footer">
    <div className="footer__container">
        <div className="footer__contect">
            <div className="footer__name"> <GiMuscleUp className='footer__icon'/>
            <p className="footer__name-p">Ubiff Pro</p>
            </div>
            <div className="footer__social">
                <a href="#"><FaFacebookF/></a>
                <a href="#"><FiInstagram/></a>
                <a href="#"><AiOutlineTwitter/></a>
            </div>
        </div>

        <div className="footer__items">
            <div className="footer__card">
                <h4 className="footer__services">SERVICES</h4>
                <p>Flex Muscle</p>
                <p>Cardio Exercise</p>
                <p>Basic Yoga</p>
                <p>Weight Lifting</p>
            </div>

            <div className="footer__card">
                <h4 className="footer__services">PLANS</h4>
                <p>Basic </p>
                <p>Premium</p>
                <p>Diamond</p>
               
            </div>

            <div className="footer__card">
                <h4 className="footer__services">COMPANY</h4>
                <p>About Us</p>
                <p>Careers</p>
                <p>Customers</p>
                <p>Patners</p>
            </div>
        </div>


    </div>

 <div className="footer__copy">© R-Coder0. All rights reserved</div>
   </section>
  )
}

export default Footer
