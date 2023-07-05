import React from 'react'
import './Plans.css'
import {FaCrown} from 'react-icons/fa'
import {RiVipDiamondFill} from 'react-icons/ri'
import {CgGym} from 'react-icons/cg'
function Plans() {
  return (
   <section className="plans" id='plans'>\
   <div className="plans__container">
    <div className="plans__title">OUR SPECIAL PLAN</div>
    <div className="plans__content">

        <div className="plans__card">
            <CgGym className='plans__icon'/>
            <p className="plans__name">BASIC PACKAGE</p>
            <p className="plans__price">RS 700/-</p>
            <span className="plans__items">
                <p className='plans__1'>5 Days in A Week</p>
                <p className='basic2'>OI SweatShirt</p>
                <p id='basic3'><s>OI Bottle Of Protien</s></p>
                <p id='basic4'><s>access to Vedios</s></p>
                <p id='basic5' ><s>Muscle Stretching</s></p>
            </span>
        </div>

        <div className="plans__card plans__card-2">
          <FaCrown className='plans__icon plans__icons'/>
            <p className="plans__name plans__name-premium">PREMIUM PACKAGE</p>
            <p className="plans__price plans__price-premium">RS 1000/-</p>
            <span className="plans__items plans__items-premium">
                <p className='plans__1'>5 Days in A Week</p>
                <p className='premium2'>OI SweatShirt</p>
                <p className='premium3'>OI Bottle Of Protien</p>
                <p id='premium4'><s>access to Vedios </s></p>
                <p id='premium5'><s>Muscle Stretching</s></p>
            </span>
        </div>

        <div className="plans__card">
           <RiVipDiamondFill className='plans__icon'/>
            <p className="plans__name">DIMOND PACKAGE</p>
            <p className="plans__price">RS 1500/-</p>
            <span className="plans__items">
                <p className='plans__1'>5 Days in A Week</p>
                <p>OI SweatShirt</p>
                <p>OI Bottle Of Protien</p>
                <p>access to Vedios</p>
                <p>Muscle Stretching</p>
            </span>
        </div>
    </div>
   </div>
   </section>
  )
}

export default Plans
