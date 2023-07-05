import React, { useState } from "react";
import img3 from '../assets/img3.png'
import img5 from '../assets/img5.png'
import './Bmi.css'

 function Bmi() {
  const [height, setHeight] = useState('');
  const [mass, setMass] = useState('');
  const [bmi, setBmi] = useState('');

  const calculate = (e) => {
    e.preventDefault();
    const formValid = +height > 0 && +mass > 0;
    if (!formValid) {
      return;
    }
    const bmi = +mass / (+height) ** 2;
    setBmi(bmi);
  };

  return (
    <>
    <section className="bmi" id="bmi">

    <div className="bmi__container">
        <div className="bmi__title">Calculate Your BMI</div>

        <div className="bmi__content">
    <div className="bmi__calculator">
      <form onSubmit={calculate}>
        <div className="bmi__height">
          <label className="bmi__label">height in meters</label>
          <input className="bmi__input" value={height} onChange={(e) => setHeight(e.target.value)} />
        </div>

        <div className="bmi__mass">
          <label className="bmi__label">mass in kg</label>
          <input className="bmi__input" value={mass} onChange={(e) => setMass(e.target.value)} />
        </div>

        <button className="bmi__btn" type="submit">calculate</button>
      </form>
      <p  className="bmi__result">BMI: {bmi}</p>
   
    </div>

    <div className="bmi__img"><img src={img3} alt="" /></div>

    </div>

   <div className="bmi__check">CHECK YOUR BMI HERE</div>
    <div className="bmi__img2"><img src={img5} alt="" /></div>

    </div>
    </section>

</>
  );
}

export default Bmi