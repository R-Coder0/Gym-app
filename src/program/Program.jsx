import React from 'react'
import './Program.css'
import {FaDumbbell} from 'react-icons/fa'
import {GiWeightLiftingUp} from 'react-icons/gi'
import {GrYoga} from 'react-icons/gr'
import {RiHeartPulseLine} from 'react-icons/ri'

function Program() {
  return (
 <section className="program" id="program">
    <div className="card__container">
        <div className="program__card">
            <FaDumbbell className='program__icon'/>
            <p className="exercise__type">Flex Muscle</p>
            <p className="exercise__description">Creating tention thats temporarily making the muscle fiber smaller or contacted.</p>
        </div>

        <div className="program__card">
       <RiHeartPulseLine className='program__icon'/>
            <p className="exercise__type">Cardio Exercise</p>
            <p className="exercise__description">Exercise your heart rate up with and keeps it up for a prolonged period of time.</p>
        </div>

        <div className="program__card">
      <GrYoga className='yoga  program__icon'/>
            <p className="exercise__type">Basic Yoga</p>
            <p className="exercise__description">Dlaphragmatic this is the most common breathing technique your'll find in yoga.</p>
        </div>

        <div className="program__card">
    <GiWeightLiftingUp className='program__icon'/>
            <p className="exercise__type">Weight Lifting</p>
            <p className="exercise__description">Attempts a maximum weight single lift o a bar bell loaded with weight bars.</p>
        </div>
    </div>
 </section>
  )
}

export default Program
