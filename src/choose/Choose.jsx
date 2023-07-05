import React from 'react'
import "./Choose.css"
import img2 from '../assets/img2.png'

function Choose() {
  return (
  <section className="choose" id="choose">
 <div className="choose__container">
    <div className="choose__img">
        <img src={img2} alt="" />
    </div>
    <div className="choose__content">
        <p className="reason">Best Reason</p>
        <p className="choose__us">WHY CHOOSE US ?</p>
        <p className="choose__description">Choose your favorite class and start now. Remember the only bad workout is the you can't do.</p>


        <div className="choose__data">
        <span className="data__item">
            <p className="choose__number">200+</p>
            <p className="choose__number-description"> Total Member</p>
        </span>

        <span className="data__item">
            <p className="choose__number">60+</p>
            <p className="choose__number-description"> Supplyment Types</p>
        </span>

        <span className="data__item">
            <p className="choose__number">30+</p>
            <p className="choose__number-description"> Programs</p>
        </span>

        <span className="data__item">
            <p className="choose__number">100+</p>
            <p className="choose__number-description"> /Exercises</p>
        </span> 
    </div>
    </div>

  
 </div>


  </section>
  )
}

export default Choose

