import React from "react";
import "./Card.css";

import CardDesign from "./CardDesign";
const Cards = () => {
  return (
    <>
      <section className="Main-Section" id="Cards">
        <div className="d-flex flex-wrap">
          {/* headding section start*/}
          <div className="col-lg-4 col-md-12  main-heading-section">
            <div className="container">
              <h1 className="my-headding text-dark ">Portfolio</h1>
              {/* <p className="heading-pera text-dark">Covering March & April 2015</p> */}
            </div>
          </div>
          {/* card section  start*/}
          <CardDesign />
        </div>

        
      </section>
    </>
  );
};
export default Cards;
