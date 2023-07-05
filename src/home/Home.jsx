import React from "react";
import "./Home.css";
import img1 from "../assets/img1.png";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home__items">
        <div className="home__title">
          <span className="title__item1">MAKE YOUR</span>
          <span className="title__item2">BODY FIT</span>
          <span className="title__description">
            Here We Can Help You to Make Your Body fit Like Your Ideal Body and
            Live Your Life to The Fullest.
          </span>
          <span>
            {" "}
            <button className="home__btn">
              <a href="#contact" className="contact__btns">
                {" "}
                Contact Us
              </a>
            </button>
          </span>
        </div>
        <div className="home__img">
          <img src={img1} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Home;
