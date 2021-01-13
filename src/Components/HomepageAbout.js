import React from 'react';
import {Link} from "react-router-dom";
import '../styles/HomepageAbout.css';

const HomepageAbout = () => {
    return (
        <div className="aboutSection">
           <div className="homeAboutLeft">
               <div className="homeAboutImg">
                   {/* image here */}
               </div>
           </div>
           <div className="homeAboutRight">
               <h1>
                   Hi, We're Bagsuz. It's Nice To Meet You.
               </h1>
               <div className="homeAboutTxt">
                   <p className="philosophyTag">OUR PHILOSOPHY</p>
                   <h3>
                       At Bagsuz we focus on environment, sustainability and customer's happiness.
                       Our goal is to aid to the fight for greener and better world, with it's main focus on giving a clothes and fabrics a second chance, a new life.
                   </h3>
                   <p className="contactTag">
                       <Link to="/contact">contact us</Link>
                   </p>
               </div>
           </div>
        </div>
    )
};

export { HomepageAbout }